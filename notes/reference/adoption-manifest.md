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
| git-workflow | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `.github/workflows/{ci,pages,release,branch-sync,codeql,scorecard}.yml`; PR-based dev→main release flow + back-merge invariant in active use; **`main` protection restored 2026-07-25** (solo config: PR-required 0-approvals, strict, enforce-admins, no force-push) with **required status checks `test` + `CodeQL` (the full CI suite)**. Pre-release manifest gate satisfied by this file. |
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
| testing | implemented | 1.6.1 / 2d614f0 | 2026-07-25 npm test green | `scripts/check-stories.test.mjs` (6 checks) + `check-links`; regressions-per-fix + preview-before-ship followed. **Coverage floor: N-A** — no shipped server/app code to cover (product is validated Markdown served by Jekyll; the only JS is this data-integrity suite that hard-gates the whole corpus, build tooling, an external-API art script, and browser DOM code verified by CodeQL SAST + browser preview per the node's zero-dep testing posture). A line-% gate would measure tooling/IO, not product logic. |
| ship-contract | gap(phase-2: confirm Scorecard ≥ 7.0 after first run, due 2026-08-08) | 1.6.1 / 2d614f0 | 2026-07-25 partial | **Scorecard now wired** (`scorecard.yml`, publishes results) — the ≥ 7.0 floor becomes measurable after the first run on `main`; expected near the solo ceiling (~8). Tech-debt removal + PR-triage posture followed; no-hacks held. |
| supply-chain-hardening | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `dependabot.yml` ✓, `SECURITY.md` ✓, `.gitattributes` ✓, build-provenance attestation in `release.yml` (`attest-build-provenance@v2`) ✓, **SAST `codeql.yml` ✓ + `scorecard.yml` ✓ (both SHA-pinned, read-only top perms)**, **`main` protection restored with the full CI suite as required checks ✓**. Solo ceiling ~8/10 (Scorecard Code-Review needs an approving human review — noted, not chased). |
| dependencies | copied-only | 1.6.1 / 2d614f0 | — | doc refreshed (4 guardrails); Dependabot present; guardrails not independently audited this run. |
| repo-hygiene | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `scripts/check-links.mjs` (in `npm test` + CI, repo-scoped SKIP) + `scripts/check-tidy.mjs` (`npm run tidy`). |
| docs-lifecycle | copied-only | 1.6.1 / 2d614f0 | — | followed in practice (single-source, no doc drift); not independently audited. |
| research-capture | copied-only | 1.6.1 / 2d614f0 | — | followed for craft/blueprint research; not independently audited. |
| working-rhythm | copied-only | 1.6.1 / 2d614f0 | — | daily grow/plant cadence; not independently audited. |
| self-hosted-assets | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | fonts vendored in `assets/fonts/`; zero third-party at read time. |
| legal-docs | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | `legal/{privacy,terms,cookies}.html` scoped to Stories; coins + reader-prefs disclosed as device-only; clear/reset controls disclosed; hub `/legal/coins/` linked. |
| coins | implemented | 1.6.1 / 2d614f0 | 2026-07-20 (v0.6.0) | base coin counter/button shipped in the reader chrome (`assets/coins.js` + `reader.css`); mandatory base present. |
| badges | gap(phase-2: 4 SaaS slots owner-gated, due 2026-08-08) | 1.6.1 / 2d614f0 | 2026-07-25 | README now carries **16 of 20** in canonical order — all GitHub-native (community/activity/version/CI/issues/PRs/license), **Scorecard** (workflow added), **Docs** (→ fairyfox.io/fairyfox-stories/), **Pages** deploy. **Remaining 4 (Coverage 9 / Code-quality 10 / Quality-gate 11 / Tech-debt 12)** are present as documented, ready-to-uncomment placeholders — they need Codecov/CodeFactor/SonarCloud accounts + secrets, which only the owner can create (`ci-secrets`). No badge silently dropped. |
| readme-cross-links | implemented | 1.6.1 / 2d614f0 | 2026-07-25 | new standard (mirrored as `readme-cross-links.md` to avoid the case-collision with the reference-folder `README.md` — see divergence note). Root `README.md` given a worded docs link near the top, a grouped **Get it** section, and a mesh footer this run. |
| ci-secrets | gap(phase-2: SONAR/CODECOV tokens owner-gated, due 2026-08-08) | 1.6.1 / 2d614f0 | 2026-07-25 | new standard copied in. **Scorecard needs no secret** for a public repo (runs on the default token; badge publishes) — done. `SONAR_TOKEN`/`CODECOV_TOKEN` still unset (`gh secret list`) — they need the owner to create the SonarCloud/Codecov projects first, then set the secrets. Tracked here. |
| docker | N-A(cross-platform-build) | 1.6.1 / 2d614f0 | 2026-07-25 confirmed | build/test are cross-platform (Jekyll/Ruby + Node built-in runner); no Linux-only step to containerize, so a container gains nothing here. Owner can override if a containerized local preview is wanted (then flip to `gap`). |
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

## Phase 2 — progress (updated 2026-07-25, second pass)

**Closed this pass** (headless / via `gh`):

- ✅ **`main` branch protection restored** + the full CI suite (`test`, `CodeQL`) set as
  required status checks (solo config: PR-required 0-approvals, strict, enforce-admins, no
  force-push) — `supply-chain-hardening`, `git-workflow`.
- ✅ **OpenSSF Scorecard wired** (`scorecard.yml`, publishes results) — badge + ship-contract
  floor become measurable after the first `main` run.
- ✅ **Build provenance** — already attested in `release.yml` (confirmed).
- ✅ **Badges** — 16 of 20 in canonical order now in the README (all GitHub-native + Scorecard
  + Docs + Pages).
- ✅ **Coverage floor** — decided **N-A** with rationale (no shipped app code to cover; the
  integrity suite hard-gates the corpus; browser JS under CodeQL + preview).
- ✅ **Docker** — confirmed **N-A** (cross-platform build, no Linux-only step).

**Still owner-gated** (cannot be done without you / a browser), due **2026-08-08**, none
overdue (so none holds the release):

1. **The 4 SaaS quality badges** (`badges` 9–12, `ci-secrets`) — create the **Codecov**,
   **CodeFactor**, and **SonarCloud** projects for `1fairyfox/fairyfox-stories`, set
   `CODECOV_TOKEN` / `SONAR_TOKEN` as repo secrets, then uncomment those four badge lines (the
   README slots are already in place, ready to enable).
2. **Docs-site chrome browser pass** (`docs-site`) — a connected-Chrome read of the refreshed
   subnav/chrome intent against the node's own `assets/`; folds into the standing eyeball debt.
