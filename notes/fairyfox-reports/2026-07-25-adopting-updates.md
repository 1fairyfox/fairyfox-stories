---
date: 2026-07-25
procedure: adopting-updates
node: fairyfox-stories
outcome: completed
hub_version: 1.6.1
hub_commit: 2d614f0
---

# Process Report — adopting-updates, 2026-07-25

> A full, honest account of running a fairyfox system procedure. The point is to
> improve the system — so say what was rough even if the run succeeded. Voice: direct,
> matter-of-fact, no hype. Standard: `hub/standards/process-reports.md`.

## Outcome in one line

Checked the fairyfox system (mirror `0.20.4 → 1.6.1`, anchor from the 07-19 report was
`0.20.2`) and — under the standing `adopt-standards-by-default` authorization plus the owner's
explicit "proceed in as many phases as needed to completion" — adopted the entire
headless-verifiable batch (20 refreshed standards, 5 new standards, the new **adoption-manifest**
mechanism, README cross-links, a CodeQL/SAST workflow, and legal-page fixes), deferring the
browser-/SaaS-/gh-admin-gated pieces to a dated Phase 2 recorded in the manifest.

## What was done

- **Refreshed the hub mirror.** `assets/references/fairyfox.io` fast-forwarded cleanly
  `77e9e2c → 2d614f0`, hub `VERSION 0.20.4 → 1.6.1`. Only the git-ignored mirror was touched;
  no tracked branch, no `reset --hard`.
- **Scoped the span from the last report.** Last-adopted anchor `hub_version: 0.20.2` (07-19
  report). Read the new `hub/standards/CHANGELOG.md` (starts at 0.21.0) across `0.21.0 → 1.6.0`,
  plus the hub `notes/version` entries for `0.20.3/0.20.4` (hub-internal — registry/pulse/sibling
  onboarding, nothing for this node). Confirmed pre-authorization: `adopt-standards-by-default`
  covers all of `hub/standards/` + `hub/templates/`.
- **Glanced at the node tree** (check step): clean, on `dev`, in sync with `origin/dev`, released
  through v0.8.1 — nothing alarming.
- **Diffed every mirrored standard node-vs-hub before copying.** 20 changed (near-all additive);
  4 unchanged (docs-lifecycle/maintenance-sweep/research-capture/working-rhythm); versioning
  identical. The only genuine node divergence in the changed set was **git-workflow's
  release-posture note** — everything else was the node holding the prior hub version.
- **Refreshed 19 standards verbatim** via `Copy-Item` (preserves LF; verified 0 CR bytes):
  adopting-updates, agent-tooling, badges, coins, compliance, dependencies, engineering-quality,
  legal-docs, new-project-setup, notes-system, onboarding-existing-project, planning,
  process-reports, repo-hygiene, self-hosted-assets, supply-chain-hardening, testing,
  cross-project-sync, deployment.
- **Hand-merged git-workflow**: copied hub verbatim, then re-inserted the "Stories adopted this
  mesh default on 2026-07-19" divergence note in its original slot (after the brand-rule section,
  before the new pre-release manifest gate). Confirmed the file now = hub verbatim + that note only.
- **Added 5 new standards.** checklists-are-contracts, mandate-ledger, docker, ci-secrets copied
  verbatim. The `readme.md` standard was mirrored as **`readme-cross-links.md`** to avoid a
  Windows case-collision with the existing `notes/reference/README.md` folder index (recorded
  divergence).
- **Created the adoption manifest** (`notes/reference/adoption-manifest.md`) from the hub template,
  with honest per-standard states — `implemented` only where a `## Verify` is actually met with
  evidence, `copied-only` for refreshed-but-unaudited docs, dated `gap` rows for the deferred
  infra, `N-A` for runbooks and docker. All gaps are Phase-2, due 2026-08-08, **none overdue** —
  so the new pre-release manifest gate does not block this release.
- **Applied README cross-links** (readme standard): a grouped **Get it** section (live/releases/
  source) and a **Part of the Fairy Fox mesh** footer; the worded docs link near the top already
  existed. Also fixed a stale grow-count line ("up to five books" → "exactly one least-tended
  book", per the 07-18 resolution).
- **Added `.github/workflows/codeql.yml`** (SAST) adapted from the hub's SHA-pinned workflow —
  `javascript-typescript` over the node's browser JS + `scripts/*.mjs`. Wiring it into `main`
  required status checks is the Phase-2 gh-admin gap.
- **Ported the meaningful CLAUDE.md template changes** (not a clobber): phase-by-default +
  checklists-are-contracts into the planning line; the pre-release manifest gate into release
  step 3; a Docker N-A note in Build/Run.
- **Legal-docs pass**: Privacy already disclosed the reader Reset + coins Clear-my-data controls;
  added the same to the Cookies "Managing local storage" section, and fixed **three stale "games"
  references** in the Stories cookies page (tl;dr, scope line, third-party line).
- **Verified**, before and after: `npm test` green (6 structural + check-links, 53 files);
  `bundle exec jekyll build` clean. `git status` reviewed; `assets/references/` still ignored.
- **Recorded**: this report, the changelog entry, the session log, `VERSION 0.8.1 → 0.9.0`
  (MINOR — a standards-infrastructure milestone), and `status.md`.

## What went well

- **The new `hub/standards/CHANGELOG.md` is exactly the artifact three nodes asked for.** Anchoring
  on `hub_version` and reading the standards CHANGELOG across the span told the whole story of a
  huge (0.20→1.6) jump without a full-tree object diff. New-vs-materially-changed was legible at a
  glance.
- **The mirror fast-forwarded cleanly** despite a hub MAJOR-version rollover; append-only `dev`
  held, so the refresh was a plain ff.
- **`Copy-Item` + a CR-byte check** is a clean, reliable verbatim-adopt for a node that mirrors
  standards — no editor re-encoding, LF preserved, matches `.gitattributes`.
- **The pre-authorization + verification-floor split did real work again.** Standards adopt by
  default; the browser/SaaS pieces fall to a dated Phase-2 manifest gap rather than a false claim.

## What went wrong / friction

- **`readme.md` collides with `README.md` on a case-insensitive filesystem.** A node that mirrors
  hub standards verbatim by filename *cannot* also keep a `README.md` folder index in the same
  directory on Windows/macOS — `Test-Path readme.md` even returns true for the existing `README.md`.
  I diverged to `readme-cross-links.md`. The standard/adopting-updates runbook doesn't warn about
  this; every case-insensitive node that mirrors standards and keeps folder READMEs will hit it.
- **The adoption manifest's mandatory-standard release gate can self-trip on the very run that
  introduces it.** The manifest arrives (0.21.0) alongside new mandatory requirements
  (supply-chain SAST-in-required-checks, testing coverage floor, ship-contract Scorecard) that a
  node usually cannot satisfy in the same headless session — yet the git-workflow gate says an
  overdue mandatory gap holds the release. The only honest way to ship the adoption itself is to
  date those gaps into the near future (not overdue). That works, but it's a subtle interaction the
  runbook should call out: *the run that adopts the manifest dates its own new mandatory gaps
  forward; it does not retroactively block on requirements introduced by the same span.*
- **A big multi-milestone span mixes headless-safe standards with a pile of external-dependency
  work** (Codecov/SonarCloud/CodeFactor/Scorecard accounts + secrets, gh-admin branch-protection
  contexts, a browser chrome pass). "Phase it" is the right call and now *is* the standard
  (planning phase-by-default), but the manifest is where the phase boundary has to be recorded
  honestly — the runbook could point at the manifest as the canonical place a phased adoption
  parks its remainder (it implies this, doesn't quite say it).
- **`badges` full-20 + `ci-secrets` are effectively un-adoptable by an AI alone.** They require the
  owner to create third-party SaaS accounts and set repo secrets. The standard is right that the AI
  must not silently drop badges — but "wire the service" is not an AI-doable step, so the honest
  outcome is a recorded gap that waits on the owner, not an adoption. Worth stating plainly in
  `badges.md`/`ci-secrets.md` that these are owner-gated.

- **Repo-state finding surfaced by the check (not acted on beyond recording):** `main` branch
  protection is **not currently in effect** — the classic protection API 404s and the repo has no
  rulesets. `git-workflow`/`supply-chain-hardening` both assume a protected `main`, and CLAUDE.md /
  status.md assert it is protected, so this is a real drift — most likely fallout from the
  `1fairyfox` account rename (same root as the standing live-404 item). Recorded as a Phase-2 gap;
  restoring protection needs `gh` admin / owner action. (One upside: release.yml **already** attests
  SLSA build provenance via `actions/attest-build-provenance@v2`, so that half of supply-chain is
  done — I initially over-recorded it as a gap and corrected it.)

## Suggestions / feedback

- **`adopting-updates.md` / `notes-system.md`: add a case-collision note** — when a node mirrors
  hub standards verbatim and also keeps directory `README.md` indexes, `readme.md` must be mirrored
  under a distinct name (or the folder index renamed). One sentence saves the next node the
  discovery.
- **`git-workflow.md` (manifest gate) + `adopting-updates.md`: state the "self-introduction"
  carve-out** — the run that first adopts the manifest dates the new mandatory gaps it introduces
  forward and is not blocked by them; the gate bites on *subsequent* runs once those gaps are
  overdue.
- **`badges.md` / `ci-secrets.md`: mark the SaaS-backed slots owner-gated** — the AI records the
  gap and the exact secrets/accounts needed; it can't create the accounts. Make explicit that this
  is a recorded gap awaiting the owner, not an AI failure to adopt.
- **`docker.md`: the N-A path is good** — a Jekyll/Ruby + Node-built-in-runner content site with no
  Linux-only step is a clean N-A; the standard handled that without friction. No change needed,
  noting it worked.

## Environment

Jekyll static site (Ruby 3.3 / Jekyll 4.4), Node built-in test runner, Windows + PowerShell (the
node's non-negotiable tooling: PowerShell + file tools, never the bash sandbox — honored;
`Copy-Item` used for verbatim LF-preserving adoption). This node reimplements the shared chrome in
its own `assets/`, so the docs-site/coins/chrome changes are a re-apply-of-intent (Phase 2), not a
file copy. Branch model on arrival: clean `dev`, in sync with `origin/dev`, released through v0.8.1.
Standing deferred-eyeball debt already present (Chrome unconnected across recent unattended runs);
Phase 2 adds the refreshed docs-site chrome pass to it.

## Phase 2 — the open gaps (all due 2026-08-08, none overdue)

Parked in `notes/reference/adoption-manifest.md`; each needs a browser, an external SaaS account,
`gh` admin, or an owner decision:

1. Quality-service + badge wiring (Codecov/SonarCloud/CodeFactor/Scorecard → secrets → full
   20-badge block) — owner-gated.
2. Restore `main` branch protection (currently absent) + wire CodeQL/full-suite into required
   checks. (Provenance attestation is already in `release.yml` — done.)
3. Coverage-floor decision for `scripts/*.mjs` (wire or honest N-A).
4. Docs-site chrome browser pass (the standing eyeball debt).
5. Docker: confirm N-A or containerize a local preview.

## Phase 2 — second pass, same day (2026-07-25), + the 1.0.0 call

The owner asked to push Phase 2 to completion and cut the milestone as **v1.0.0**. As the system
owner (Fairy Fox), that satisfies the "MAJOR is Fairy Fox's call only" gate — so 1.0.0 is
authorized. Closed everything doable headless / via `gh`; two items remain genuinely owner-gated.

**Closed:**
- **`main` branch protection restored** via `gh api` (the solo config from
  `supply-chain-hardening`: require PR, 0 approvals, strict checks, enforce-admins, no
  force-push/deletions) with **required status checks `test` + `CodeQL`** — the full CI suite.
  The classic protection had been absent (account-rename fallout); this re-establishes it and
  closes both the `git-workflow` full-suite sub-gap and the `supply-chain-hardening` protection gap.
- **OpenSSF Scorecard wired** — added `.github/workflows/scorecard.yml` (SHA-pinned, resolved the
  exact SHAs via `gh api`; `publish_results: true` so the badge + the ship-contract Scorecard
  floor populate after the first `main` run). No secret needed for a public repo.
- **Badges** — expanded the README from 4 to **16 of 20** in canonical order (all GitHub-native +
  Scorecard + Docs + Pages). The 4 SaaS-backed slots (Coverage/CodeFactor/SonarCloud) are in as
  documented, ready-to-uncomment placeholders — they need accounts only the owner can create.
- **Coverage floor → N-A** with rationale: no shipped server/app code to cover (product is
  validated Markdown; the only JS is the data-integrity suite that hard-gates the whole corpus,
  build tooling, an external-API art script, and browser DOM code under CodeQL SAST + browser
  preview). A line-% gate would measure tooling/IO, not product logic.
- **Docker → N-A confirmed** (cross-platform build, no Linux-only step).
- **Provenance** — confirmed already attested in `release.yml`.

**Still owner-gated (recorded, not closed):**
- Codecov / CodeFactor / SonarCloud accounts + `CODECOV_TOKEN`/`SONAR_TOKEN` secrets → uncomment
  the 4 quality badges. AI can't create third-party SaaS accounts.
- Docs-site chrome browser pass — **no Chrome connected this session** (`list_connected_browsers`
  empty), so the standing eyeball debt carries. No new reader-template/CSS/JS shipped this run, so
  nothing visual ships unseen.

**Friction worth noting:** the OpenSSF starter Scorecard workflow pins `actions/upload-artifact`
to **v4**, but `@latest` resolves to **v7** — a node that blindly takes latest would pin an
incompatible major. Resolving the intended v4 SHA via `gh api` was the fix; worth a line in
`supply-chain-hardening` that Scorecard expects upload-artifact v4.

Released as **v1.0.0** through a `release/1.0.0` branch → CI-gated PR to the now-protected `main`
→ hand-tag (release.yml reacts to the tag) → back-merge. `npm test` + `jekyll build` green.
