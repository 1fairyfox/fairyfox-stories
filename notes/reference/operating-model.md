# Operating Model — how the farm runs

The rules that turn "write good books" into a repeatable daily practice. Numbers here are the
farm's tunable constants; when they change, change them here (single source of truth) and note
it in `decisions/`.

## Two cadences

- **Plant** a brand-new book **at most once every 3 days.** Planting = producing a book's
  **complete public blueprint** (no prose yet), per `craft/` and `forms.md`.
- **Grow** existing books **every day:** pick **exactly 1** book and write **exactly one whole
  chapter** (`craft/serialization.md`). One chapter at a time; always finished, even
  if assembled across several generation segments.

A day may be pure growth (no new book). Planting never replaces growing — a planted book is
grown on later days like any other.

**Automation.** A scheduled job runs this loop unattended **daily at midnight (America/Denver)**:
grow **1** book, and **plant one only when 3+ days have passed** since the last new book. It
**auto-publishes** the result to `main` (pre-authorized by Fairy Fox). See
`decisions/architecture.md`.

## Planting a book — the sequence

1. **Roll the universe** (`universe-system.md`): new realm or an existing one.
2. **Roll the form** and draw the word cap: short story ~30% (1,500–7,500) · novelette ~37%
   (7,500–17,500) · novella ~28% (17,500–40,000) · **novel ~5%** (40,000–100,000+). The form
   sets the structure (`forms.md`).
3. **Choose premise, genre, energy** — forcing range (`craft/genre-range.md`); distinct from
   everything on the shelf.
3b. **Roll the author (new-vs-existing) + style** — parallel to the universe roll. Either **invent
   a new author-persona** (a fresh `_authors/<slug>.md` page) or **reuse an existing pseudo-author**,
   giving them a body of work (`craft/author-personas.md`). Skew new while the roster is small,
   toward reuse as it grows — but a fresh author stays common, and consecutive books should feel
   written by different people. Pair with a **prose style** (`craft/style-spectrum.md`), both
   coherent with the genre and **deliberately unlike the last few books**. Tag the book `author:
   <slug>`; record the persona + style in the book-notes; write the whole book as that author.
4. **Build the main character + cast** (`craft/character.md`) — first person, real, flawed,
   with agency.
5. **Blueprint the whole arc and every chapter** (`craft/structure.md`) — know the ending.
6. **Roll the sequel-lock:** a small chance the book is pre-marked **"complete · no sequel"**
   (see below).
7. **Write the book-notes** (its bible) and the **public `blueprint.md`**; create
   `manifest.json`; wire it onto the shelf. Cover/header art is generated (budget-aware).

## Growing — picking which books to advance

Each day choose **1 incomplete** book by a **least-tended-first blend**:

- **Blend score** favours books that are both **least complete** (fewest chapters written vs
  planned) **and least recently grown** (longest since last chapter). Either signal alone
  raises priority; both together, more so.
- **Random override:** independently, on **15–20% of days** the pick is chosen **purely at
  random** from all incomplete books — so the shelf never feels mechanical and a
  well-along book still gets surprise attention.
- Never advance a completed book (grow its *sequel* instead, if one exists).

Write one whole chapter per picked book, holding continuity and voice (`serialization.md`).

## Sequels — unplanned, a weekly roll

- **Once every 7 days**, each **eligible completed series** (finished, not sequel-locked, no
  pending sequel) gets a **~25% (one-in-four) chance** to spawn a **planned sequel** — which
  then enters as a fresh blueprint (its own planting, tied to the same universe/characters).
- Choosing *which* eligible series among several favours the same **least-first + 15–20%
  random** weighting as growth.
- **Sequel-lock:** at planting, a low-probability roll marks some books **"complete · no
  sequel"** — they're excluded from the weekly roll and wear a **rare marking** on the shelf.
  A meaningful minority of stories are *meant* to simply end; that's a feature.

## Book states (in `manifest.json`)

- `planned` — blueprint exists, 0 chapters written.
- `growing` — ≥1 chapter written, below planned total.
- `complete` — all planned chapters written.
- `complete-no-sequel` — complete **and** sequel-locked (the rare marking).
- Progress % = `chaptersWritten / chaptersPlanned` (drives the shelf + reader progress bar).

## Randomness — reproducible, honest

- Rolls (form, universe, picks, sequel, sequel-lock) are logged in the session note so a day's
  choices are auditable; nothing is fudged after the fact.
- Weights live here as named constants (`FORM_WEIGHTS`, `RANDOM_OVERRIDE = 0.15–0.20`,
  `SEQUEL_CHANCE = 0.25`, `SEQUEL_LOCK_CHANCE`, `UNIVERSE_NEW_SKEW`). Tune here, record why in
  `decisions/`.

## A typical day

1. If ≥3 days since the last planting **and** it's a good moment → plant one book (sequence
   above), else skip.
2. Run the weekly sequel roll if 7 days have passed.
3. Pick 1 incomplete book (blend + random override); write one whole chapter.
4. Run `npm test` (integrity), preview any visual change in Chrome, update notes + changelog,
   commit to `dev`. Release to `main` only on Fairy Fox's go-ahead — **except the automated
   daily job, which is pre-authorized to auto-publish** (see *Automation* above).
