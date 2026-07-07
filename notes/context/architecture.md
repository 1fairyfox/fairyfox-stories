# Architecture

A **Jekyll** site (like the fairyfox.io hub), built to static output and served by GitHub
Pages at `fairyfox.io/fairyfox-stories/`. The world meshes as **collections**; prose is
Markdown; local tooling (AI + OpenAI) authors the content files.

## Collections (the meshed world)

| Collection | One file per… | Front-matter links | Renders as |
|-----------|----------------|--------------------|-----------|
| `_books` | a book (its reader home) | `universe`, `characters[]`, `cities[]`, `form`, `wordCap`, `chaptersPlanned`, `state`, `cover` | `/stories/<slug>/` |
| `_chapters` | a chapter | `book`, `order`, `title`, `header_image` | `/stories/<book>/<nn>/` |
| `_universes` | a realm (codex) | `tone`, `tags[]`, `bridges[]` | `/universes/<slug>/` |
| `_characters` | a character (bible) | `universe`, `books[]` | `/characters/<slug>/` |
| `_cities` | a place | `universe`, `books[]` | `/cities/<slug>/` |

**Cross-links generate themselves** in Liquid: a universe page lists books where
`book.universe == page.slug`, its characters and cities; a character page lists the books in
`page.books`; a book lists its chapters (`site.chapters | where: 'book', page.slug | sort: 'order'`)
and links its universe/characters/cities. Add a file → the mesh updates.

## The book's content still travels together

Even though rendering is site-level, a book's **source content** stays grouped and portable:
its `_books/<slug>.md`, `_chapters/<slug>/NN.md`, `blueprint.md`, and book-notes live under a
predictable per-book path. Prose is plain Markdown — liftable and readable without the site.

## Layouts & chrome

`_layouts/`: `default` (mesh chrome), `shelf` (home), `book`, `chapter` (immersive reader with
drop cap + progress + prev/next), `universe`, `character`, `city`. `_includes/` reproduce the
shared fairyfox.io header/subnav/footer and a `book-card`. The vendored mesh theme
(`assets/styles.css`, `fonts/`, `reader.js`, `nav.js`) is reused verbatim; `assets/home.css`
(shelf) and `assets/reader.css` (book page, drop cap) are project-specific. No third-party
requests at read time.

## Content vs. tooling (hard line)

- **Published output is static** (Jekyll-built) and calls **no** API at read time — zero
  third-party requests; self-hosted fonts.
- **Prose & art come from local tooling** (`scripts/`, OpenAI via `.env`, git-ignored), run by
  the farmer (AI), which writes Markdown/manifests/images into the collections. Jekyll only
  renders committed files.

## Integrity, not unit tests

Prose isn't unit-testable; `scripts/check-stories.test.mjs` (Node built-in runner, zero deps)
validates **structure**: required front-matter present and typed; every `_chapters` entry names
a real book; `book.universe`/`characters`/`cities` resolve; universe `bridges[]` symmetric;
chapter counts ≤ `chaptersPlanned`; progress/state consistent; blueprint present. CI runs it on
every push/PR.

## Build & deploy

Local preview: `bundle exec jekyll serve`. Deploy: GitHub Actions builds with
`bundle exec jekyll build` and publishes to Pages on push to `main` (`.github/workflows/pages.yml`).
`baseurl: /fairyfox-stories`; use `relative_url`/`{{ site.baseurl }}` for links. `notes/`,
`assets/references/`, `hub/`, `scripts/`, and tooling are excluded from the build.
