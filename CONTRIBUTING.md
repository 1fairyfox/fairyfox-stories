# Contributing to Fairy Fox Stories

Thanks for wanting to add to the shelf. Books here are **first-class works** — the bar is
genuinely well-crafted fiction, not filler. Whether you're fixing a typo, suggesting a book,
or writing one, you're welcome.

## Ways to help

- **Suggest a book** — open a [book idea issue](.github/ISSUE_TEMPLATE/new-story-idea.md): a
  premise, a genre, whose story it is.
- **Report a problem** — a broken link, a rendering glitch, a continuity slip.
- **Write a book** — the big one; see the bar below.

## The bar (every book)

Read the craft body of knowledge first — [`notes/reference/craft/`](notes/reference/craft/).
In short, a book must:

1. **Be planned before it's written.** Ship a complete public `blueprint.md` — premise, form,
   main character, arc, and every planned chapter. No pantsing.
2. **Choose and honour its form** ([`craft/forms.md`](notes/reference/craft/forms.md)) — a
   short story, novelette, novella, or (rarely) a novel is structured differently; write to it.
3. **Follow a real, flawed, first-person main character** with agency — never a hollow
   reader-insert ([`craft/character.md`](notes/reference/craft/character.md)).
4. **Earn its reader** — meaningful stakes, purposeful prose, an ending that lands, its own
   voice ([`craft/what-makes-fiction-good.md`](notes/reference/craft/what-makes-fiction-good.md)).
5. **Mesh cleanly** — tag its universe; list its characters and cities as collection entries so
   the world cross-links.

## Shape of a book

```
_books/<slug>.md              # front-matter: title, slug, form, genre, wordCap,
                              #   chaptersPlanned, universe, characters[], cities[], cover, state
_chapters/<slug>/NN.md        # front-matter: book, order, title; body = the chapter prose
stories/<slug>/blueprint.md   # the public plan (front-matter: book: <slug>, layout: blueprint)
_universes/<slug>.md          # if it needs a new realm (else tag an existing one)
_characters/<slug>.md         # a page per character (universe, books[])
_cities/<slug>.md             # a page per place
```

## Before you open a PR

1. `npm test` — the integrity check must pass (front-matter valid, chapters ≤ planned,
   universe/character/city references resolve, blueprint present).
2. `bundle exec jekyll serve` and **read it in the browser** — the shelf card, the book page,
   a chapter (drop cap, progress, prev/next), and any universe/character/city pages.
3. Open a PR against `dev` (never `main`). Keep commits focused; stage specific files.

Open an issue first if you'd like to talk an idea through. Everything ships MIT.
