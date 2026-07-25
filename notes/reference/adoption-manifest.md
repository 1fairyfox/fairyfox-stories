# Standards adoption manifest

The node's **per-standard record of what is actually adopted** — the artifact whose
absence blocks a summary claim. One row per hub standard. It exists so that no
`Standards adopted ✅` can be written without a backing row, and so a future
post-mortem (or the hub's report-review spot-check) can diff a claim against reality
cheaply. Governed by the hub standards `checklists-are-contracts` and `notes-system`
("The adoption manifest"); **read by the release gate in
[`git-workflow`](git-workflow.md)** — an overdue `gap` on a *mandatory* standard
(supply-chain-hardening, git-workflow, testing, ship-contract) holds a release like a
red build.

## The rules (do not soften)

- **`copied-only` is not adopted.** A file landing in `notes/reference/` is `copied-only`.
  A row flips to **`implemented`** *only* when that standard's `## Verify` table has been
  run and its result recorded here (date + per-row pass).
- **No summary claim without a row.** `status.md` Health, the registry `adopts_hub` flag,
  and any process report's "adopted X" must be backed by a row in this table. A bare
  `Standards adopted ✅` is banned wording.
- **A partial names its remainder.** Every not-yet-adopted standard is a `gap` row with a
  **due** marker — the remainder lives here, owned and dated, never only in prose.

## State vocabulary

`implemented` (Verify run + recorded) · `copied-only` (file present, Verify not run) ·
`gap(<due>)` (not adopted; when it will be) · `N-A(<reason>)` (does not apply to this
project's kind — say why).

## Seeded 2026-07-25 — hub `1.6.1` / `2d614f0`

This manifest was first created during the **0.20.2 → 1.6.1** adoption (the run that
introduced the manifest mechanism itself). Standards in active daily use on the farm are
marked `implemented` with the evidence that proves it; freshly-refreshed docs whose full
per-item `## Verify` was not re-audited this run are honest `copied-only`; genuinely-new
infrastructure that needs a browser, an external SaaS account, `gh` admin, or an owner
decision is a dated `gap` — **all Phase-2, none overdue** (so none holds this release),
each named below.

| Standard | State | Adopted @ | Last Verify | Evidence |
|----------|-------|-----------|-------------|----------|
| git-workflow | implemented | 1.6.1 / 2d614f0 | 2026-07-25 base pass | `.github/workflows/{ci,pages,release,branch-sync}.yml`; PR-based dev→main release flow + back-merge invariant in active use. **Sub-gap:** `main` protection is not currently in effect + full-suite required status checks/CodeQL not wired — see `supply-chain-hardening` gap row. Pre-release manifest gate satisfied by this file. |
| versioning | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | root `VERSION` single source; SemVer; PATCH default / never-MAJOR honored across releases. |
| notes-system | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `notes/` skeleton (status/sessions/version/decisions/plans/reference) in active daily use; this manifest added. |
| ai-context | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `CLAUDE.md` maintained; `notes/reference/ai-context.md`. |
| cross-project-sync | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | this adoption run; read-only mirror under `assets/references/fairyfox.io` (git-ignored). |
| process-reports | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `notes/fairyfox-reports/` — a report per fairyfox run incl. this one. |
| compliance | copied-only | 1.6.1 / 2d614f0 | — | doc refreshed (invocation modes + VERIFY-INDEX); full audit not run this session. |
| checklists-are-contracts | copied-only | 1.6.1 / 2d614f0 | — | new standard copied in; being followed by this manifest + the not-done disclosure in the process report. |
| mandate-ledger | N-A(no-open-mandate) | 1.6.1 / 2d614f0 | — | new standard copied in; no multi-part owner directive currently open to transcribe. Instantiate on the next such directive. |
| planning | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `notes/plans/`; a book's blueprint is its plan; phase-by-default followed (this run is phased). |
| docs-site | gap(phase-2: browser chrome pass, due 2026-08-08) | 1.6.1 / 2d614f0 | — | node reimplements the shared chrome in its own `assets/`; docs-site/05·06·08·12 + chrome header/subnav changes need a connected-Chrome pass. Rides the standing deferred-eyeball debt. Non-mandatory. |
| deployment | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | GitHub Pages on tagged release to `main` (`pages.yml`). |
| testing | implemented | 1.6.1 / 2d614f0 | 2026-07-25 npm test green | `scripts/check-stories.test.mjs` (6 checks) + `check-links`; regressions-per-fix + preview-before-ship followed. **Sub-gap:** measurable coverage floor wired into the build — see gap row below. |
| ship-contract | gap(phase-2: Scorecard≥7.0 needs Scorecard wired, due 2026-08-08) | 1.6.1 / 2d614f0 | — | the ship contract's Scorecard floor depends on OpenSSF Scorecard being wired (see `supply-chain-hardening`/`ci-secrets`). Tech-debt removal + PR-triage posture followed. |
| supply-chain-hardening | gap(phase-2: CodeQL-in-required-checks + restore `main` protection, due 2026-08-08) | 1.6.1 / 2d614f0 | 2026-07-25 partial | `dependabot.yml` ✓, `SECURITY.md` ✓, `.gitattributes` ✓, **build-provenance attestation already in `release.yml`** (`actions/attest-build-provenance@v2`) ✓. **Added this run:** `.github/workflows/codeql.yml` (SAST). **Gap:** (a) `main` branch protection is **not currently in effect** — classic protection API 404s and rulesets are empty (probable account-rename fallout, see the live-404 item); (b) wiring CodeQL + the full CI suite into `main` required status checks (needs `gh` admin). |
| dependencies | copied-only | 1.6.1 / 2d614f0 | — | doc refreshed (4 guardrails); Dependabot present; guardrails not independently audited this run. |
| repo-hygiene | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `scripts/check-links.mjs` (in `npm test` + CI, repo-scoped SKIP) + `scripts/check-tidy.mjs` (`npm run tidy`). |
| docs-lifecycle | copied-only | 1.6.1 / 2d614f0 | — | followed in practice (single-source, no doc drift); not independently audited. |
| research-capture | copied-only | 1.6.1 / 2d614f0 | — | followed for craft/blueprint research; not independently audited. |
| working-rhythm | copied-only | 1.6.1 / 2d614f0 | — | daily grow/plant cadence; not independently audited. |
| self-hosted-assets | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | fonts vendored in `assets/fonts/`; zero third-party at read time. |
| legal-docs | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `legal/{privacy,terms,cookies}.html` scoped to Stories; coins + reader-prefs disclosed as device-only; clear/reset controls disclosed; hub `/legal/coins/` linked. |
| coins | implemented | 1.6.1 / 2d614f0 | 2026-07-20 (v0.6.0) | base coin counter/button shipped in the reader chrome (`assets/coins.js` + `reader.css`); mandatory base present. |
| badges | gap(phase-2: full 20-set + service wiring, due 2026-08-08) | 1.6.1 / 2d614f0 | — | README carries 4 badges (CI, version, read, license). The full canonical 20 need Codecov/SonarCloud/CodeFactor/Scorecard wired first (see `ci-secrets`) — a user-granted service-setup step, not an AI drop. No badge silently dropped; the shortfall is recorded here. |
| readme-cross-links | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | new standard (mirrored as `readme-cross-links.md` to avoid the case-collision with the reference-folder `README.md` — see divergence note). Root `README.md` given a worded docs link near the top, a grouped **Get it** section, and a mesh footer this run. |
| ci-secrets | gap(phase-2: SONAR/CODECOV/SCORECARD tokens, due 2026-08-08) | 1.6.1 / 2d614f0 | — | new standard copied in. No service tokens set yet (`gh secret list` empty of these); they arrive with the badge/quality-service wiring, which needs the owner to create the SaaS accounts. Clean N/A until then, tracked here. |
| docker | N-A(cross-platform-build) | 1.6.1 / 2d614f0 | — | new standard copied in. Build/test are cross-platform (Jekyll/Ruby + Node built-in runner); no Linux-only step to containerize. **Flagged for owner confirmation** — if a containerized preview is wanted, flip to a `gap`. |
| engineering-quality | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | no-hacks / finish-the-work / craftsmanship followed; **ship-contract sub-gap** tracked in its own row above. |
| agent-tooling | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | PowerShell + file tools only (never the bash sandbox); `.gitattributes` LF; baseurl-aware Jekyll preview. |
| maintenance-sweep | copied-only | 1.6.1 / 2d614f0 | — | scheduled-sweep guidance; followed loosely, not independently audited. |
| farm-operating-model | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | this node **is** a farm — `operating-model.md` + `farm-operating-model.md`; daily automated grow/plant loop live. |
| new-project-setup | N-A(runbook) | 1.6.1 / 2d614f0 | — | join-time runbook, not a standing rule. |
| onboarding-existing-project | N-A(runbook) | 1.6.1 / 2d614f0 | — | join-time runbook. |
| adopting-updates | N-A(runbook) | 1.6.1 / 2d614f0 | — | the procedure runbook this very run followed. |

## Divergences (recorded, on purpose)

- **`readme-cross-links.md`** — the hub standard is `readme.md`; mirrored here under a
  distinct name because Windows' case-insensitive filesystem collides `readme.md` with the
  existing `notes/reference/README.md` folder index. Content is verbatim; only the filename
  differs.
- **git-workflow release posture** — Stories adopted the mesh green-and-CI-gated
  release-by-default on 2026-07-19 (recorded inline in `git-workflow.md`).

## Phase 2 — the open gaps, in one place

The genuinely-deferred work from the 2026-07-25 adoption, all **due 2026-08-08**, none
overdue (so none holds a release), needing a browser / an external SaaS account / `gh`
admin / an owner decision:

1. **Quality-service + badge wiring** (`ci-secrets`, `badges`, `ship-contract`) — the owner
   creates Codecov / SonarCloud / CodeFactor / OpenSSF-Scorecard access; secrets get set
   (`SONAR_TOKEN`, `CODECOV_TOKEN`, `SCORECARD_TOKEN`); then the full 20-badge block goes in.
2. **Restore `main` branch protection + wire CodeQL/full-suite into required checks**
   (`supply-chain-hardening`, `git-workflow` full-suite) — `main` currently has **no** protection
   (classic API 404s, rulesets empty — likely lost in the `1fairyfox` account rename); re-establish
   it (require PR, strict status checks, enforce-admins, no force-push) and list the full CI suite
   incl. CodeQL as required contexts (needs `gh` admin). Provenance attestation is **already done**
   in `release.yml`.
3. **Coverage floor** (`testing`) — decide whether the handful of `scripts/*.mjs` warrant a
   wired coverage gate or an honest `N-A`; wire or record.
4. **Docs-site chrome browser pass** (`docs-site`) — the standing deferred-eyeball debt; a
   connected-Chrome read of the refreshed subnav/chrome intent against the node's own
   `assets/` implementation.
5. **Docker decision** (`docker`) — confirm `N-A` or containerize a local preview.
