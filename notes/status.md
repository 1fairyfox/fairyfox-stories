# Project Status

_Current state only._ For history see `sessions/`; for the changelog see `version.md`.

**Version:** `0.3.7` (single source of truth: repo-root `VERSION`).

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

## The shelf (as of v0.3.7)

| Book | Form | Progress | Last grown |
|------|------|----------|-----------|
| ✅ **The Two-O'Clock Launderette** (magical realism) | short story | **3 / 3 — complete** | 2026-07-14 |
| **The Girl Who Sold the Wind** (fable) | novelette | 4 / 5 | 2026-07-15 |
| **The Cartographer of Decks** (SF) | novelette | 5 / 6 | 2026-07-15 |
| The Wintering House (gothic) | novella | 5 / 11 | 2026-07-15 |
| Every Lock but Hers (magical realism) | novella | 3 / 11 | 2026-07-14 |
| The Cinderwick Job (caper) | novelette | 4 / 7 | 2026-07-14 |

**Six books — one `complete`, five `growing`.** The 07-15 grow was a second clean draw in a row — the
**random override fired on none of the three slots** (rolls 35, 94, 98; ≤18 fires). The blend picked
*The Wintering House* (0.818), *The Girl Who Sold the Wind* (0.700), and *The Cartographer of Decks*
(0.667). Two books are now **one chapter from done** — *Girl* (4/5) and *Cartographer* (5/6). A note on
process this run: I first hand-picked *Every Lock but Hers* and drafted a chapter for it, then caught
that the farm's ½/½ blend ranks it **4th** today (its recency reset when it was grown 07-14) and
*Cartographer* legitimately takes the third slot — so I discarded the draft and wrote *Cartographer*,
keeping the blend honest. Full audit in `sessions/2026-07/2026-07-15.md`.

## Next

- **Two books are one chapter from completion:** *The Girl Who Sold the Wind* (4/5 — next is ch.5 "The
  Homesick Wind," the finale) and *The Cartographer of Decks* (5/6 — next is ch.6 "The Chart She Draws,"
  the finale). Both will rank high on the next blend (very stale after one more day + near-complete
  cutting the incompleteness term). Expect at least one to **finish next run**, which would give the
  shelf its second and possibly third completed books — and, in ~a week, more eligible sequel series.
- **The weekly sequel roll anchor stands at 2026-07-21.** The Launderette (complete, no sequel-lock) is
  the first eligible completed series; the first weekly roll (~25%) is owed by the next run on or after
  07-21. If *Girl* and/or *Cartographer* complete before then, they join the eligible pool for that roll.
- **Every Lock but Hers is first in line next run.** At 3/11 it is the least-complete book on the shelf
  by a wide margin; it ranked 4th today (0.614) only because it was grown 07-14 and its recency term had
  reset. One more day idle and it leads the blend. An eleven-chapter novella that needs steady feeding.
- **Plant** is the sibling job's call (`fairyfox-stories-new`, ~every 3 days); last new book was
  *Every Lock but Hers* on 07-10, so a plant has been eligible since 07-13. This grow run did not
  plant.
- **Needs Fairy Fox (still open, 5th run):** reconcile the grow-count — `operating-model.md` says
  **exactly 2/day**, while `CLAUDE.md`, `craft/serialization.md`, and the scheduled task say **up to
  5**. The 07-11 → 07-15 runs have all grown **3** (inside "up to 5", above "exactly 2") and flagged
  it rather than silently picking a side; one number should win, recorded in `decisions/`.
- **Needs Fairy Fox (new):** **the sequel-lock has never been exercised and currently cannot be.**
  There is no `sequelLock` field in the book front matter, so every completed book is eligible for the
  weekly roll forever, and the "rare marking" in `operating-model.md` is not real yet. It needs a
  field and a roll at planting (the sibling job's business). Worth a `decisions/` line now, before the
  shelf fills with completed books.
- **Needs Fairy Fox:** review + merge the five Dependabot Actions PRs (#2–#6, deploy workflow) — held
  so an unattended grow release never rides an untested workflow change.
- **On `dev`, awaiting the next release:** a CI fix to `branch-sync`, which was failing on *every*
  release. It triggers on push to `main` and checked `dev` instantly, but the back-merge lands
  seconds later by design, so it always ran while `dev` was legitimately one commit behind (v0.3.4's
  run failed, then passed on re-run — a race, not drift). It now retries 6×/30s before failing. The
  fixed workflow takes effect the next time `main` advances.
- **Deferred eyeball (07-11 → 07-15):** Chrome wasn't connected on any of the five runs, so the new
  chapter pages were verified structurally (`npm test`) and against the built Jekyll HTML but not read in
  a browser. All five runs are prose + front-matter changes with no template or CSS edits — but the debt
  is now **fifteen** chapter pages deep and is worth one hard-reload pass over the shelf and the new
  chapters next time a browser is up (typography, drop cap, overflow, progress bar, prev/next nav,
  responsiveness). The `complete` state was headless-verified on 07-14 and renders right.

## Health

| Area | Status |
|------|--------|
| Repo + branches (dev/main) | ✅ public repo on GitHub; `dev`/`main` in sync, released through v0.2.2 |
| Notes + craft body of knowledge | ✅ written (`reference/` incl. `craft/`) |
| Architecture decided | ✅ Jekyll · form-first · collection · comprehensive sub-notes (`decisions/`) |
| Jekyll scaffold (collections/layouts/reader) | ✅ built + previewed in Chrome |
| Books on the shelf | ✅ **6 on the shelf — 1 complete, 5 growing** (caper · cosy magical-realism · SF · gothic · fable · night-city magical-realism novella); *The Two-O'Clock Launderette* **finished 07-14**, the farm's first completed book |
| Authors / universes / characters | ✅ 5 author-personas (Del Marsh now spans 2 universes), 5 universes (Hollow Hours now holds 2 books), 12 character pages (Kit Sorrel + Sully Ilesanmi added 07-14) — meshed + bylined |
| Cover & chapter art | ✅ covers generated for all 6 (gpt-image-1 via `scripts/generate-art.mjs`); ch.1 header art on the first 5, new grow chapters text-only (budget) |
| Integrity check + CI | ✅ `scripts/check-stories.test.mjs` green (5 checks), runs on push/PR |
| GitHub Pages (`fairyfox.io/fairyfox-stories/`) | ✅ live (deploys on tagged release to `main`) |
| Hub registration | ⛔ pending (hub-side edit) |
| Writing/art tooling (`.env` OpenAI key) | ✅ `.env` key present; art via `generate-art.mjs` (prose hand-drafted for now) |
| Self-hosted fonts / no third-party | ✅ vendored from the mesh |
| Legal docs | ✅ Privacy/Terms/Cookies re-scoped to Stories (verify wording on preview) |
