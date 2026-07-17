# Project Status

_Current state only._ For history see `sessions/`; for the changelog see `version.md`.

**Version:** `0.4.2` (single source of truth: repo-root `VERSION`).

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

## The shelf (as of v0.4.2)

| Book | Form | Progress | Last grown |
|------|------|----------|-----------|
| ✅ **The Two-O'Clock Launderette** (magical realism) | short story | **3 / 3 — complete** | 2026-07-14 |
| ✅ **The Girl Who Sold the Wind** (fable) | novelette | **5 / 5 — complete** | 2026-07-17 |
| ✅ **The Cartographer of Decks** (SF) | novelette | **6 / 6 — complete** | 2026-07-17 |
| The Wintering House (gothic) | novella | 6 / 11 | 2026-07-16 |
| Every Lock but Hers (magical realism) | novella | 4 / 11 | 2026-07-16 |
| The Cinderwick Job (caper) | novelette | 5 / 7 | 2026-07-16 |
| The Blindfold Act (mystery · sequel-locked) | novelette | 2 / 6 | 2026-07-17 |

**Seven books — three `complete`, four `growing`.** Latest run **07-17 (v0.4.2, grow)**: three chapters,
and **two books finished on one run** — *The Girl Who Sold the Wind* ch.5 "The Homesick Wind" (**5/5,
complete**), *The Cartographer of Decks* ch.6 "The Chart She Draws" (**6/6, complete**), *The Blindfold
Act* ch.2 "A Cold Reading" (2/6). **No override** (rolls `94`/`40`/`50` vs. the ≤18 threshold) — a clean
mechanical draw straight down the blend: *Blindfold* **0.917** (the highest the farm has recorded; robbed
of a slot by 07-16's override, it came back at the top exactly as predicted), *Girl* 0.600, *Cartographer*
0.583. *Every Lock but Hers* (0.568) missed the third slot by 0.015. The two finales were picked **purely
on the staleness term** — proof the term is load-bearing: a book at 5/6 has almost no incompleteness left
and would otherwise never finish. Also this run: a **sixth integrity check** wiring half the sequel-lock
work, and a new craft rule in `forms.md`. Full audit in `sessions/2026-07/2026-07-17.md`.

## Next

- **The weekly sequel roll is due on the next run on or after 2026-07-21 — and the pool just tripled.**
  Three eligible completed series now: **The Launderette, The Girl Who Sold the Wind, The Cartographer
  of Decks**, each rolling ~25% independently. All three are **unlocked**, so the still-unwired
  exclusion (below) can't bite on this roll — but it is no longer hypothetical, and it now has a date.
  Note for whoever runs it: both new books close their frames deliberately (*Girl*'s narrator finishes
  her telling; *Cartographer* ends on a promise it refuses to make), so a sequel to either should be a
  **new tale in the realm**, not a continuation — *Cartographer* has even planted its own hook in-world
  (**433, Emil Tolver at 31**), deliberately unpromised.
- **The grow pool is down to four books, and they are the long ones.** *Every Lock but Hers* (4/11),
  *The Wintering House* (6/11), *The Cinderwick Job* (5/7), *The Blindfold Act* (2/6). Expect a quieter
  stretch of the blend — no book is one chapter from done, so the next several runs are middle-of-the-
  book work, and completions will be scarcer until *Cinderwick* lands.
- **The Blindfold Act should keep leading.** At 2/6 it's still the least-complete book on the shelf by a
  wide margin (incompleteness 0.667 against *Every Lock*'s 0.636), and ch.3 "The Tells" is next — the
  fire-eater's debt as the false lead, the money half-surfacing. Ch.2 planted Lark's stove tell and
  closed the door Sonora shut herself; ch.4's turn now has to cost her the alibi she wrote for the girl,
  not a new clue.
- **Cinderwick heads into its endgame.** At 5/7 the caper is two chapters from done — ch.6 "The
  Double-Cross" then ch.7 "The Name." ch.5 left Juno cornered in Crane's sprung trap, about to bet on
  Kit; the trust-not-a-plan resolution is close.
- **Next plant** eligible on or after **2026-07-18** (`fairyfox-stories-new`, ~every 3 days; last plant
  *The Blindfold Act* 07-15). Planting note from this run's craft finding: **cost the finale at ~1.5× a
  middle chapter** when drawing the word-pick (`craft/forms.md`).
- **Needs Fairy Fox (still open, 7th run):** reconcile the grow-count — `operating-model.md` says
  **exactly 2/day**, while `CLAUDE.md`, `craft/serialization.md`, and the scheduled task say **up to
  5**. Every run 07-11 → 07-17 has grown **3** (inside "up to 5", above "exactly 2") and flagged it
  rather than silently picking a side; one number should win, recorded in `decisions/`. (Sharper today:
  had the answer been "exactly 2", *The Cartographer of Decks* would not have finished.)
- **Needs Fairy Fox — sequel-lock, part (b) only, now on a deadline (07-21):** part (a) is **done as of
  this run** — a book's `state` is now derived from the chapters on disk and enforced by `npm test`, and
  a `sequelLock: true` book at full chapters **must** be `complete-no-sequel`, never a plain `complete`.
  What's still owed is **(b): exclude `sequelLock: true` books from the weekly sequel roll.** Left
  unwired deliberately — it changes the roll's semantics in `operating-model.md`, which isn't a bug fix.
  *The Blindfold Act* (2/6) is the only locked book and is nowhere near completion, so there's room.
- **Needs Fairy Fox:** review + merge the five Dependabot Actions PRs (#2–#6, deploy workflow) — held
  so an unattended grow release never rides an untested workflow change.
- **The `branch-sync` CI fix has shipped** (was carried here as "on `dev`, awaiting the next release").
  It rode v0.4.1 to `main`; `dev` and `main` were verified identical at `6e78be5` at the start of the
  07-17 run, so the retry (6×/30s, to absorb the by-design race where `branch-sync` checks `dev` in the
  seconds before the back-merge lands) is now live. Watch this release's run to confirm it goes green
  on the first attempt rather than on a re-run.
- **Deferred eyeball (07-11 → 07-17):** Chrome wasn't connected on any recent run (seven grow runs + the
  07-15 plant), so new pages were verified structurally (`npm test`) and against the built Jekyll HTML
  but not read in a browser. All are prose + front-matter changes with no template or CSS edits — but the
  debt is now **twenty-one grown chapter pages + the *Blindfold Act* card/ch.1 + two newly-completed book
  cards** deep, worth one hard-reload pass over the shelf and the new pages next time a browser is up
  (typography, drop cap, overflow, **the progress bar at 100% on two more books**, prev/next nav at a
  book's true last chapter, the **titled fallback cover** on the art-less card, responsiveness). The
  `complete` state was headless-verified on 07-14 and renders right; re-confirmed 07-17 in the built HTML
  (three `mark-done` badges on the shelf).

## Health

| Area | Status |
|------|--------|
| Repo + branches (dev/main) | ✅ public repo on GitHub; `dev`/`main` in sync, released through v0.4.2 |
| Notes + craft body of knowledge | ✅ written (`reference/` incl. `craft/`) |
| Architecture decided | ✅ Jekyll · form-first · collection · comprehensive sub-notes (`decisions/`) |
| Jekyll scaffold (collections/layouts/reader) | ✅ built + previewed in Chrome |
| Books on the shelf | ✅ **7 on the shelf — 3 complete, 4 growing** (caper · cosy magical-realism · SF · gothic · fable · night-city magical-realism novella · carnival mystery); *The Two-O'Clock Launderette* **finished 07-14**, the farm's first completed book; *The Girl Who Sold the Wind* + *The Cartographer of Decks* **both finished 07-17** — first time two books completed on one run; *The Blindfold Act* **planted 07-15**, the first mystery + first sequel-locked book |
| Authors / universes / characters | ✅ 6 author-personas (Roan Cassady added 07-15), 6 universes (The Sawdust Circuit — a grounded, non-magical realm — added 07-15), 15 character pages (Madame Sonora + Lark + Colonel Aurelio added 07-15) — meshed + bylined |
| Cover & chapter art | ✅ covers generated for the first 6 (gpt-image-1 via `scripts/generate-art.mjs`); ch.1 header art on the first 5. *The Blindfold Act* is **text-only (budget-deferred)** — the shelf card degrades to the titled fallback; cover/header art can be generated in a later pass |
| Integrity check + CI | ✅ `scripts/check-stories.test.mjs` green (**6 checks** — state/sequel-lock consistency added 07-17), runs on push/PR |
| GitHub Pages (`fairyfox.io/fairyfox-stories/`) | ✅ live (deploys on tagged release to `main`); last release **v0.4.2**, 2026-07-17 |
| Hub registration | ⛔ pending (hub-side edit) |
| Writing/art tooling (`.env` OpenAI key) | ✅ `.env` key present; art via `generate-art.mjs` (prose hand-drafted for now) |
| Self-hosted fonts / no third-party | ✅ vendored from the mesh |
| Legal docs | ✅ Privacy/Terms/Cookies re-scoped to Stories (verify wording on preview) |
