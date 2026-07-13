# Project Status

_Current state only._ For history see `sessions/`; for the changelog see `version.md`.

**Version:** `0.3.5` (single source of truth: repo-root `VERSION`).

**Automation:** the farm loop now runs unattended via a **daily scheduled job (midnight,
America/Denver)** — grow 2 books, plant one when 3+ days have passed, **auto-publish to `main`**.
See `reference/operating-model.md` → *Automation* and `decisions/architecture.md` (2026-07-09).

## Current state (read this first)

Fairy Fox Stories is an **AI-managed story farm** — a Jekyll site publishing short interactive
**books** (fully pre-planned, then written a chapter at a time) over a meshed world of
**universes, characters, and cities**. Sibling to `fairyfox-games`; same mesh discipline,
different craft (fiction) and engine (Jekyll).

**Bootstrapped, live, and growing.** The Jekyll scaffold, integrity check + CI, the five-book
starting shelf (distinct genre/form/style/author each, with cover + ch.1 art), and the daily
automation are all shipped; the site has had two live releases (v0.2.0, v0.2.2). The farm is now in
its **daily grow** phase — advancing real chapters on the least-tended books. The full build plan is
`plans/farm-build-plan.md`; the daily loop is `reference/operating-model.md`.

## The shelf (as of v0.3.5)

| Book | Form | Progress | Last grown |
|------|------|----------|-----------|
| **The Wintering House** (gothic) | novella | 4 / 11 | 2026-07-13 |
| **The Cartographer of Decks** (SF) | novelette | 4 / 6 | 2026-07-13 |
| **The Girl Who Sold the Wind** (fable) | novelette | 3 / 5 | 2026-07-13 |
| The Cinderwick Job (caper) | novelette | 3 / 7 | 2026-07-12 |
| Every Lock but Hers (magical realism) | novella | 2 / 11 | 2026-07-11 |
| The Two-O'Clock Launderette (magical realism) | short story | 2 / 3 | 2026-07-11 |

**Six books, all `growing`;** none complete, so no sequel roll is live yet. The 2026-07-13 grow was a
dice day: the **random override fired on two of three slots** (rolls 18, 13, 90 — ≤18 fires), drawing
*The Wintering House* and *The Cartographer of Decks*; only the third slot went to the blend leader,
*The Girl Who Sold the Wind*. Recorded exactly as it fell — full audit in
`sessions/2026-07/2026-07-13.md`.

## Next

- **Every Lock but Hers is owed a chapter.** At 2/11 it is by some distance the least-complete book on
  the shelf, and the dice have now passed it over twice running. It is the blend's runaway next pick.
- **The Two-O'Clock Launderette is one chapter from done** (2/3). Finishing it makes it the shelf's
  first completed book and **turns on the weekly sequel roll for the first time** — worth doing
  deliberately rather than waiting for the blend to get round to it. See `plans/next-steps.md`.
- **Plant** is the sibling job's call (`fairyfox-stories-new`, ~every 3 days); last new book was
  *Every Lock but Hers* on 07-10, so a plant was eligible from 07-13. This grow run did not plant.
- **Needs Fairy Fox (still open, 3rd run):** reconcile the grow-count — `operating-model.md` says
  **exactly 2/day**, while `CLAUDE.md`, `craft/serialization.md`, and the scheduled task say **up to
  5**. The 07-11, 07-12 and 07-13 runs all grew **3** (inside "up to 5", above "exactly 2") and
  flagged it rather than silently picking a side; one number should win, recorded in `decisions/`.
- **Needs Fairy Fox:** review + merge the five Dependabot Actions PRs (#2–#6, deploy workflow) — held
  so an unattended grow release never rides an untested workflow change.
- **On `dev`, awaiting the next release:** a CI fix to `branch-sync`, which was failing on *every*
  release. It triggers on push to `main` and checked `dev` instantly, but the back-merge lands
  seconds later by design, so it always ran while `dev` was legitimately one commit behind (v0.3.4's
  run failed, then passed on re-run — a race, not drift). It now retries 6×/30s before failing. The
  fixed workflow takes effect the next time `main` advances.
- **Deferred eyeball (07-11, 07-12, 07-13):** Chrome wasn't connected on any of the three runs, so the
  new chapter pages were verified in the built Jekyll HTML (titles, `Chapter N of M`, prev/next nav)
  but not read in a browser. All three are prose-only changes with no template or CSS edits — but the
  debt is now nine chapter pages deep and is worth one hard-reload pass over the shelf and the new
  chapters next time a browser is up.

## Health

| Area | Status |
|------|--------|
| Repo + branches (dev/main) | ✅ public repo on GitHub; `dev`/`main` in sync, released through v0.2.2 |
| Notes + craft body of knowledge | ✅ written (`reference/` incl. `craft/`) |
| Architecture decided | ✅ Jekyll · form-first · collection · comprehensive sub-notes (`decisions/`) |
| Jekyll scaffold (collections/layouts/reader) | ✅ built + previewed in Chrome |
| Books on the shelf | ✅ **6 planted + growing** (caper · cosy magical-realism · SF · gothic · fable · night-city magical-realism novella); ch.2 on all six, **ch.3 on four, ch.4 on two** |
| Authors / universes / characters | ✅ 5 author-personas (Del Marsh now spans 2 universes), 5 universes (Hollow Hours now holds 2 books), 10 character pages (Rafiq added 07-13) — meshed + bylined |
| Cover & chapter art | ✅ covers generated for all 6 (gpt-image-1 via `scripts/generate-art.mjs`); ch.1 header art on the first 5, new grow chapters text-only (budget) |
| Integrity check + CI | ✅ `scripts/check-stories.test.mjs` green (5 checks), runs on push/PR |
| GitHub Pages (`fairyfox.io/fairyfox-stories/`) | ✅ live (deploys on tagged release to `main`) |
| Hub registration | ⛔ pending (hub-side edit) |
| Writing/art tooling (`.env` OpenAI key) | ✅ `.env` key present; art via `generate-art.mjs` (prose hand-drafted for now) |
| Self-hosted fonts / no third-party | ✅ vendored from the mesh |
| Legal docs | ✅ Privacy/Terms/Cookies re-scoped to Stories (verify wording on preview) |
