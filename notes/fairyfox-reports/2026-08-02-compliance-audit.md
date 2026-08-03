---
date: 2026-08-02
procedure: compliance-audit
mode: full
node: fairyfox-stories
outcome: completed
hub_version: 1.6.1
hub_commit: 2d614f0
---

# Process Report — fairyfox compliance check (full), 2026-08-02

> A full per-standard `## Verify` pass over the node, run against v1.1.1 (the farm has grown to
> v1.1.1 since the 07-25 adoption + v1.0.0). Audited against the node's adopted 1.6.1 standards.
> Every standard reported `done` / `partial` / `missing` with evidence; fixable gaps closed this
> pass and released as v1.1.2; owner-/browser-gated remainder named. Standard: `hub/standards/compliance.md`.

## Outcome in one line

Ran the full compliance matrix (30 standards) against v1.1.1. Most `done`; the audit surfaced a
**supply-chain cluster** (tag-pinned actions in `pages.yml`/`release.yml`, provenance not attached
as a release asset, no invariant CI gate, auto-delete off, `dev` deletion-protection missing) — all
**fixed this pass** and shipped as **v1.1.2**. Remaining `partial`s are owner-gated (4 SaaS badges),
browser-gated (docs-site chrome pass), or infra/owner-side (live-404 DNS, hub-side registration).

## Per-standard verdict

| Standard | Verdict | Note |
|----------|---------|------|
| adopting-updates | done | 07-25 adoption run; mirror ff, manifest recorded, reports written, close-outs given |
| agent-tooling | done | CLAUDE.md names PowerShell + forbids bash sandbox; `.gitattributes` eol=lf |
| ai-context | done | CLAUDE.md has all six pieces; Default Workflow matches git-workflow (manifest gate + phase-by-default) |
| badges | **partial** | 16/20 present in canonical order; the 4 SaaS slots (Coverage/CodeFactor/SonarCloud) are recorded owner-gated placeholders — **owner-gated, not fixable here** |
| checklists-are-contracts | done | manifest is the itemized record; this report ends with a not-done disclosure; no bare ✅ over a set |
| ci-secrets | done (N-A) | no workflow references any `secrets.*` token → clean N/A |
| coins | done | mandatory coin button shipped in the reader chrome; disclosed in Privacy/Cookies |
| dependencies | done | Dependabot grouped/weekly→dev; zero runtime deps; actions bumped to latest majors this pass |
| deployment | **partial** | deploy target correct (static → Pages, `fairyfox.io/fairyfox-stories/`); **live URL 404s** (account-rename/DNS, owner-side — the standing "Needs Fairy Fox" item); hub-registry agreement pending hub-side |
| docker | done (N-A) | cross-platform build, no Linux-only step — recorded N-A with rationale |
| docs-lifecycle | done | current-state docs match reality (stale grow-count + "games" refs fixed); history append-only |
| engineering-quality | done | no hacks; features finished; **ship contract**: 0 open PRs (5 Dependabot closed w/ reason), no skipped tests; Scorecard score pending first run (own row) |
| farm-operating-model | done | daily grow deepens existing books; planned-first, self-contained |
| git-workflow | done | `main` (not master); PR merge-commit releases + tags; `dev` contains `main`; protected `main`; no force-push |
| legal-docs | done | Privacy/Terms/Cookies self-hosted, accurate, current "Last updated" (cookies corrected to 07-25, its content-change date); coins + reader-prefs + clear/reset disclosed |
| maintenance-sweep | done | adopted runbook; branch state clean; dev contains main |
| mandate-ledger | done (N-A) | no open multi-part owner directive to transcribe |
| new-project-setup | done (N-A) | join-time runbook, not a standing rule |
| notes-system | done | `notes/` tree complete; status current; manifest present with evidence-linked rows |
| onboarding-existing-project | done (N-A) | join-time runbook |
| planning | done | plan-before + phase-by-default in CLAUDE.md; this multi-phase run followed it |
| process-reports | done | `notes/fairyfox-reports/` holds real reports with honest friction |
| readme-cross-links | done | worded docs link near top + grouped "Get it" + mesh footer |
| repo-hygiene | done | check-links + check-tidy + **check-standards** in `npm test`/CI; auto-delete on; `dev` deletion-protected |
| research-capture | done | reference notes in `notes/reference/`; craft body-of-knowledge |
| self-hosted-assets | done | fonts vendored; built `_site` has **no** googleapis/gstatic/cdnjs hot-links |
| supply-chain-hardening | done | provenance attested **+ `.intoto.jsonl` as a release asset**; all `uses:` SHA-pinned; top-level `contents: read`; SAST (CodeQL) + Scorecard; protected `main` w/ full-suite required checks; PR-merge releases (**several items fixed this pass**) |
| testing | done | real multi-layer integrity suite, green before release, preview-before-ship; coverage-floor N-A w/ rationale |
| versioning | done | `VERSION` single SemVer line == newest `main` tag; MAJOR (1.0.0) was the owner's explicit call |
| working-rhythm | done | task-tracked throughout; headless runs surfaced; features briefed before built |
| cross-project-sync | n/a | runbook / no `## Verify` (expected) |

## Gaps fixed this pass (shipped as v1.1.2)

1. **Actions were tag-pinned in `pages.yml` + `release.yml`** (supply-chain: every `uses:`
   SHA-pinned). Fixed: SHA-pinned every action across all six workflows, **bumped to latest
   majors** (checkout v7, attest-build-provenance v4, configure-pages v6, upload-pages-artifact
   v5, deploy-pages v5), version comments accurate.
2. **Provenance attested but not attached as a release asset** (supply-chain: "attestation alone
   scores 0"). Fixed: `release.yml` now copies the attestation bundle to
   `fairyfox-stories-<ref>.intoto.jsonl` and attaches it to the GitHub Release (verified the
   attest action's `bundle-path` output survives the v2→v4 bump).
3. **No machine-checked invariant gate** (repo-hygiene). Fixed: added `scripts/check-standards.mjs`
   (header active-nav + VERSION==newest-main-tag), wired into `npm test` + CI.
4. **Auto-delete-on-merge off; `dev` had no deletion protection** (repo-hygiene). Fixed via `gh`:
   `delete_branch_on_merge=true`, squash/rebase disabled (merge-commit-only), `dev` protected
   against deletion + force-push (no PR requirement, so direct commits still work).
5. **5 open Dependabot PRs** (engineering-quality: every open PR merged-or-closed-with-reason).
   Fixed: the direct latest-major SHA-pin superseded all five; closed each with that reason. 0 open.
6. **cookies.html "Last updated" stale** — the v1.0.0 content edit (games→Service + clear/reset
   disclosure) shipped without bumping the date. Corrected to July 25, 2026 (its content-change date).

## Remaining — not fixable here (named, not rounded up)

- **badges** `partial` — the 4 SaaS quality badges need the owner to create Codecov / CodeFactor /
  SonarCloud projects + set `CODECOV_TOKEN`/`SONAR_TOKEN`, then uncomment the ready placeholders.
- **deployment** `partial` — `fairyfox.io/fairyfox-stories/` serves 404 (account-rename + in-flight
  DNS move; owner-side, the standing "Needs Fairy Fox" item). Deploy target + Pages config are
  correct; this is DNS/Pages-domain, not a repo fix.
- **docs-site chrome browser pass** — no Chrome connected this session; the standing eyeball debt
  carries. No reader template/CSS/JS changed this pass, so nothing visual shipped unseen.
- **ship-contract** — the numeric Scorecard ≥ 7.0 confirmation waits on the first `scorecard.yml`
  run's published score.
- **hub-side registration** — the node resolving in the hub's `registry.yml` / `_data/projects.yml`
  is a hub-side edit (pending), not a node fix.

## What went well

- **VERIFY-INDEX.md is a genuine time-saver** — one read gave every standard's Verify table; the
  audit was a single pass against it rather than opening 30 files.
- The adoption manifest from the earlier passes meant most rows were already evidenced; the audit
  mostly *confirmed* and caught the supply-chain cluster the manifest had marked implemented a touch
  too generously.

## What went wrong / friction

- **"supply-chain-hardening: implemented" was over-claimed after Phase 2.** I'd marked it
  implemented with CodeQL + Scorecard + protection, but the full `## Verify` has finer teeth:
  *every* `uses:` SHA-pinned (pages/release were still tag-pinned) and the provenance **bundle
  attached as a release asset**. The audit caught them — a good argument for running the full
  per-item Verify, not a row-level self-assessment. Recorded honestly and fixed.
- **A stale session context nearly mis-dated this run.** I initially anchored on 2026-07-25 (the
  adoption date) and versioned the pass 1.0.1 — but the automation had grown the farm to v1.1.1 by
  today (2026-08-02), and v1.0.1 was already a grow release. Caught it before release (status.md
  read 1.1.1, not my 1.0.0), corrected to v1.1.2 / 2026-08-02, and moved the changelog/session
  entries to the 2026-08 files. Lesson: read `git log`/tags for ground truth before versioning,
  don't trust a session's remembered date.
- **The `.NET` relative-path landmine** (`[IO.File]::WriteAllText` uses the process CWD, not the
  shell's `cd`) briefly lost this report file mid-rename. Rewrote it with an absolute path. This is
  exactly what `agent-tooling.md` warns about; worth heeding.
- **Dependabot PRs vs manual SHA-pins collided** — pinning the same lines Dependabot wanted to bump
  made all five un-mergeable; bumping straight to latest + closing with that reason was the clean fix.

## Suggestions / feedback

- **`supply-chain-hardening.md`: make the two easy-to-miss teeth louder** — the provenance *bundle*
  must be a release **asset** (not just an attestation), and *every* `uses:` incl. the Pages/deploy
  workflows must be SHA-pinned. A node that pins CI/CodeQL but leaves Pages/release on tag-refs reads
  as "hardened" until the full Verify runs.
- **`agent-tooling.md`: call out the `[IO.File]::WriteAllText` relative-path trap explicitly** — use
  an absolute path or `Resolve-Path`; the .NET CWD ≠ the PowerShell location.
- **`check-standards.mjs`: ship a Windows-safe stderr redirect** (drop `2>/dev/null`) so the local
  run is noise-free on PowerShell nodes.

## Environment

Jekyll static site (Ruby 3.3 / Jekyll 4.4), Node built-in runner, Windows + PowerShell (`gh` authed
as 1fairyfox, `repo` scope — enough for branch-protection + repo-settings API). Branch model on
arrival: clean `dev` at v1.1.1, in sync with `origin`. Full audit against `VERIFY-INDEX.md` (adopted
standards, hub 1.6.1). Fixes shipped as v1.1.2 through the protected-`main` CI-gated PR flow.
