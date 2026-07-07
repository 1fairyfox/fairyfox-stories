# Reading Experience — the shelf and the reader

Two surfaces: the **shelf** (landing) and the **book reader**. Both wear the shared fairyfox.io
chrome and the mesh's self-hosted fonts, and both must feel like *books*, not a web app.

## The shelf (landing `index.html`)

- **A library of individual books — NOT grouped by universe.** Like real shelves, each book
  stands on its own and can be arranged/reordered individually (newest activity first by
  default). **The book is the focus.** A universe is *quiet context* on a book, never a bin the
  books are squished into.
- **Each book card shows:** cover art, title, genre/form tag, and a **clear completion progress
  bar** (chapters written / planned). A completed book reads 100%; a **sequel-locked** book
  wears the rare **"complete · no sequel"** marking.
- **Universe as context, optional:** a small "part of <universe>" line on a card, and (later) a
  way to see a realm's other books — surfaced *from* the book, never as the primary grouping.
- **Blueprint one click away:** the open, spoiler-forward plan + a content note — informed
  consent before opening a book.
- Progressive + static: with JS off the cards still show; JS orders them and fills progress.

## The reader (per book `stories/<slug>/index.html`)

Reads like a **well-crafted book**, quietly:

- **Typographic, page-like body.** Serif body face (Fraunces from the mesh fonts), comfortable
  measure (~46rem), generous line-height, real paragraph rhythm. The already-shared **reader
  ("Aa") menu** (theme: light/sepia/dark, text size, line-height, width, accent) applies —
  it's built for reading and carries across fairyfox.io.
- **The drop cap.** Each chapter opens with a raised/large initial letter ("the first-letter
  thing") — a book-like flourish, done tastefully.
- **Chapter header image** at the top of each chapter (generated; graceful without it).
- **In-book progress** — a slim progress indicator (chapter n of planned, and position within)
  so the reader always knows where they are.
- **Chapter navigation** — previous/next, a chapter list; resume where you left off
  (`localStorage`, per book — reading position + prefs only, no accounts).
- **Immersive & calm.** Minimal chrome while reading; motion honours
  `prefers-reduced-motion`; the words carry it.
- **Blueprint access** — a clear link to the book's open blueprint/spoiler and content note.

## Persistence (local only — keep legal accurate)

`localStorage` holds **reading position/progress per book** and the shared **reader prefs** —
on the device only, no accounts, no cookies, no tracking, self-hosted fonts. Any change to
this updates `legal/*.html` in the same change (`CLAUDE.md`).

## Build notes

- Reuse the mesh shared assets already vendored in `assets/` (`styles.css`, `reader.js`,
  `nav.js`, `fonts/`). Add a stories-specific `home.css` (shelf) and `reader.css` (book page +
  drop cap), and small page scripts. No third-party requests at read time.
- **Preview every visual change in Chrome before release** (`CLAUDE.md` workflow) — read a real
  book page, check the drop cap, measure, progress bar, dark/sepia/light, and mobile width.
