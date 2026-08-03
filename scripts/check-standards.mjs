#!/usr/bin/env node
// check-standards.mjs — machine-check the mesh invariants that ARE grep/API-checkable,
// so they stop relying on a human noticing (repo-hygiene / checklists-are-contracts).
// Zero dependencies; runs under bare `node`. Wired into `npm test` + CI.
//
//   node scripts/check-standards.mjs        → exit 1 (+ a list) on any violation
//
// What it catches for this node:
//   C1  The site header marks a PRIMARY-nav item that should never be "active" as active.
//       For Stories the live nav item is "Stories"; a Home/Docs/Updates/About marked active
//       would be a chrome bug.
//   C2  VERSION != the newest git tag on main (versioning: VERSION == newest main tag).
//       Informational off `main` (dev/release branches are legitimately ahead); enforced on `main`.
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

let fail = 0;
const bad = (msg) => { console.error(`VIOLATION  ${msg}`); fail++; };
const read = (p) => (existsSync(p) ? readFileSync(p, "utf8") : null);

// ---- C1: no wrong primary-nav item marked active in the site header --------------------
const HEADER_CANDIDATES = ["_includes/header.html"];
for (const p of HEADER_CANDIDATES) {
  const html = read(p);
  if (!html) continue;
  const activeAnchor = /<a\b[^>]*class="[^"]*\bactive\b[^"]*"[^>]*>\s*([^<]+?)\s*<\/a>/gi;
  for (const m of html.matchAll(activeAnchor)) {
    const label = m[1].trim();
    if (/^(Home|Docs|Updates|About)$/i.test(label))
      bad(`${p}: header marks "${label}" active — Stories' live nav item is "Stories", not a chrome default.`);
  }
}

// ---- C2: VERSION == newest tag on main --------------------------------------------------
const version = (read("VERSION") || "").split("\n").map((l) => l.trim())
  .find((l) => l && !l.startsWith("#"));
if (version) {
  let branch = "";
  try { branch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim(); } catch {}
  let newestTag = "";
  try { newestTag = execSync("git describe --tags --abbrev=0 origin/main 2>/dev/null || git describe --tags --abbrev=0", { encoding: "utf8" }).trim().replace(/^v/, ""); } catch {}
  if (newestTag && version !== newestTag) {
    const msg = `VERSION (${version}) != newest main tag (${newestTag}).`;
    if (branch === "main") bad(msg);                 // enforced on main
    else console.log(`note: ${msg} (ok on ${branch || "a work branch"} — dev/release may be ahead)`);
  }
}

if (fail) { console.error(`\n${fail} standards violation(s).`); process.exit(1); }
console.log("check-standards: OK");
