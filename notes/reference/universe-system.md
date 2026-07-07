# Universe System — realms beneath the books

Beneath the shelf of books grows a set of **universes/realms**. A universe is a *setting
bible* — the world a book (or several) happens in. Growing books also grows universes; the
shelf is a library of books, and the universes are the deeper context behind them.

## The core rules

- **Roll new-vs-existing on planting.** Each new book either **founds a new universe** or
  **joins an existing one.** Default skew: lean **new** while the shelf is small (seed variety),
  lean toward **joining** as universes accumulate (so realms actually deepen). Tunable
  (`UNIVERSE_NEW_SKEW` in `operating-model.md`).
- **A universe is not locked to one time or place.** It can hold books across many eras,
  locations, and casts. The codex fixes what's constant (its rules, texture, forces) and leaves
  the rest free.
- **The book is the focus; the universe is context.** On the shelf, books stand individually —
  **never binned by universe** (`reading-experience.md`). A universe is a quiet tag on a book
  and a codex you can open, not a grouping that swallows the books.

## Crossings — rare on purpose

- **Within a universe (seldom).** Occasionally a character encounters another from the same
  universe — possibly **from a different time period** (a legend met in person, a descendant, a
  recurring figure). Rare, deliberate, and always a *reward* for readers of both — never
  required to follow either book.
- **Between universes (very seldom).** A rare **bridge**: two realms shown to touch — e.g. two
  leads who never meet across their whole books, then collide at the very end, opening a
  possible sequel. Treat as a special event across the whole collection, not a mechanic.

## On disk (flat + tagged — books stay liftable)

```
universes/<universe-slug>/
  codex.md          # the setting bible (see below)
  universe.json     # { name, slug, tone, tags[], bridges[], created }
  README.md         # what it is + which books live here

stories/<book-slug>/
  manifest.json     # includes "universe": "<universe-slug>"  (+ "crosses": [book-slugs])
```

A book is **never physically nested** inside a universe and **never imports** from one — the
codex is authoring reference and canon, not a runtime dependency. A book folder lifts out whole.

## The codex (`codex.md`)

Sized to the realm — a light contemporary universe is a page; an epic one is longer, but always
skimmable and in service of the books:

- **Premise & feel** — what this realm is and the mood it carries.
- **Ground rules** — what's true here (does magic work? is it our world, bent? the limits).
  These are constraints every book in it must honour.
- **Places** — named, evocative locations books can reuse.
- **Figures & forces** — recurring people, powers, factions, presences that can cross books/eras.
- **Motifs & texture** — the sensory signature that makes two books feel like one world.
- **Timeline** — only if it matters; dated beats books can sit around.
- **Canon & latitude** — what must stay true vs. what a new book is free to invent.
- **Seeds** — premises this realm could still grow.

## Integrity (checked in CI)

- Every book's `universe` tag resolves to a real `universes/<slug>/`.
- `crosses[]` entries resolve to real books; not self-referential.
- Universe `bridges[]` are **symmetric** (A↔B).
- Adding a book to a universe never contradicts its codex canon (author-checked; the check
  enforces the references, you enforce the canon).
