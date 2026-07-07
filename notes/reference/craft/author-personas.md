# Author Personas — the shelf as a collaboration of many writers

The goal, in the owner's words: the library should feel like **a collaboration of very different
authors who all love the craft and are passionate** — not one AI writing everything in one
personality. Style (`style-spectrum.md`) is the *technique*; the **author-persona** is the
*personality* behind it. Voice is inherent to a writer — their perspective, values, obsessions,
and preoccupations ([Writer's Digest](https://www.writersdigest.com/write-better-fiction/the-difference-between-voice-and-style-in-writing),
[Well-Storied](https://www.well-storied.com/blog/writing-style-and-voice)). So we give each book
its own implied author, and write as *them*.

## What an author-persona is

For each book, invent (or roll) a distinct **author** and write the whole book as though it's
theirs. A persona is defined by:

- **Preoccupations / obsessions** — the handful of things this author can't stop writing about
  (memory, machines, small towns, faith, revenge, the sea, class, appetite). Theme comes from here.
- **Worldview & temperament** — optimist or pessimist; tender or savage; playful or grave; moral
  certainty or doubt. Colours every scene.
- **Default style** — where they sit on the `style-spectrum` dials (their *chosen* technique).
- **Signature moves** — quirks: a love of lists, of second-person asides, of weather, of one-line
  paragraphs, of footnotes, of a recurring motif. Small tics that make them recognizable.
- **Influences / tradition** — the lineage they'd claim (a noir author, a fabulist, a social
  realist). Guides diction and structure.
- **Blind spots / edges** — what they overdo or avoid; even personas have flaws, which keeps them
  from being generic "good writers."
- **Pen name** — a fictional byline (optional to surface on the site later; see below).

The persona is an **authoring lens**, held for the whole book, recorded in the book-notes and
summarized in the blueprint. Different persona next book = genuinely different book.

## Persona vs. character voice (don't confuse them)

- The **author-persona** is who *wrote* the book (the implied author) — shapes style, theme, tone.
- The **narrator/MC** is the first-person character *inside* it (`voice-and-pov.md`).
- A wry noir author (persona) might write a frightened, earnest narrator (character). The two
  interact: the persona chooses what kind of narrator to inhabit and how to render them.

## A starter roster of persona archetypes (extend freely)

Seeds, not a cage — vary temperament + obsession + style so no two feel alike:

- **The wry street-poet** — noir/hard-boiled; obsessed with cities, class, and nerve; deadpan wit.
- **The tender miniaturist** — clean minimalist; small lives, quiet epiphanies; enormous restraint.
- **The exuberant fabulist** — lyrical/folkloric; myth, wonder, and moral fable; cadenced, warm.
- **The maximalist maximizer** — baroque; systems, obsession, information; dazzling, digressive.
- **The dry ironist** — cool literary; manners, self-deception, comedy of unease; precise, detached.
- **The gothic dreamer** — ornate/gothic; dread, houses, inheritance; atmosphere thick as fog.
- **The breathless adventurer** — propulsive; peril and momentum; plot as a held breath.
- **The documentarian** — plain/epistolary; truth, testimony, the record; found-text and restraint.
- **The comic humanist** — whimsical; foibles, warmth, absurdity; buoyant and kind.

Each new author should feel like a *person* with a life and taste, not a style label.

## Authors are a first-class, meshed collection

Personas aren't just notes — each is a real page in the **`_authors`** collection
(`_authors/<slug>.md`), exactly like universes, characters, and cities. An author page carries the
pen name, a short in-world bio, their `style` and `obsessions`, and **auto-lists every book they've
written**. A book tags its author with `author: <slug>` in its manifest; the reader shows a
**byline** ("by …") linking to the author page, and the shelf card shows it in small. This makes
the "collaboration of many authors" *literal and browseable* — a shelf you can read by author, a
mesh even between pseudo-authors.

## The author roll (parallel to the universe roll)

**On planting, roll new-vs-existing author** — just like the universe roll (`operating-model.md`):

- **New author** (default while the roster is small): invent a fresh persona, write the
  `_authors/<slug>.md` page, and write the book as them. Seeds variety.
- **Existing author** (more likely as the roster grows): reuse one of the pseudo-authors, giving
  them a **body of work** — a second book in their voice, sometimes in the same universe, sometimes
  in a wholly different one (an author, like a real one, can range). Deliberate, not a rut.

Skew: lean **new** early (build the roster), lean toward **reuse** as it fills — but a fresh
author should stay common, and two consecutive books should feel written by two different people.
Record the choice + the persona sheet in `notes/books/<slug>/book-notes.md`; summarize the author
in the public blueprint.

- **Write the whole book as that author.** The persona drives the style setting, the thematic
  obsessions, the narrator choice, and the signature moves — held chapter to chapter.
- **Reuse ties the mesh together.** A returning author across two universes is a quiet thread
  between them — an author-level crossing, distinct from a character or universe crossing.

## Guardrails

- **Every persona loves the craft and is excellent.** Range of personality never means a lazy or
  bad author — each is passionate and held to `what-makes-fiction-good.md`.
- **Persona serves the story, not vice versa.** Don't force a book into a persona that fights it;
  roll again or adjust.
- **No real authors.** Personas are original composites and archetypes — never impersonations of
  real, named writers (draw on *traditions*, not identities).
