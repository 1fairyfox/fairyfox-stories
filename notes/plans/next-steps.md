# Next Steps

Ordered, current. Remove as done; history lives in `../sessions/`. The master build spec is
`farm-build-plan.md`; the daily loop is `../reference/operating-model.md`.

1. **Finish the Jekyll scaffold** — `_config.yml`, Gemfile, Pages workflow; collections
   (books, chapters, universes, characters, cities); layouts (default, shelf, book, chapter,
   universe, character, city); includes (head, header, subnav, footer, book-card); `home.css`
   + `reader.css` (drop cap, progress). Remove `.nojekyll`.
2. **Wire the integrity check** — `scripts/check-stories.test.mjs`; confirm `node --test` /
   CI runs it.
3. **Plant book #1** — roll universe/form/genre; create the universe + character + city
   entries, the book entry, the public `blueprint.md` + book-notes, and a hand-drafted
   chapter 1. Verify cross-links render.
4. **Preview in Chrome** (`bundle exec jekyll serve`) — shelf, a book, a chapter (drop cap +
   progress), a universe/character/city page; light/sepia/dark; mobile width.
5. **Commit + push `dev`**; then **ask Fairy Fox before releasing to `main`** (release deploys
   Pages). After release: enable Pages, register with the hub, add the `.env` OpenAI key.
6. **Begin the daily loop** — plant ≤ every 3 days; grow up to 5 chapters/day (blend + 15–20%
   random); weekly sequel roll. Generate real cover/header art once the key is in.

## Bench (ideas, not commitments)

- `scripts/generate-chapter.mjs` / `generate-art.mjs` — the OpenAI tooling (stubbed until the
  key is added).
- A universe/character/city index page as the world grows.
- An Atom feed of new chapters (jekyll-feed).
