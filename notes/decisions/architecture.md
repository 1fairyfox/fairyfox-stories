# Architecture Decisions

Newest first. Each: the decision, why, and what it rules in/out.

## 2026-07-06 — Content bar: dark but broadly accessible (no explicit)

Books may be dark, tense, sad, and frightening, but the shelf stays **broadly accessible and
is not walled behind a maturity gate**: **no** NSFW/sexual explicitness, gore, gruesome horror,
or obscenity. Benchmark: "dark but not adult-only" (*Carmen Sandiego* — real danger and darkness,
never graphic). **Why:** the owner wants wide reach without sacrificing creativity; restraint is
a craft tool, not a muzzle. Encoded in `CLAUDE.md` (landmines) and `craft/genre-range.md`;
enforced by author judgement + the content note.

## 2026-07-06 — Comprehensive sub-note collections (characters + cities)

Characters and cities/places are **first-class Jekyll collections** from the start (not just
universes), so the world cross-links fully: character pages list their books; city pages tie to
books and characters; universes aggregate all three. **Why:** the owner wants the meshing and
"expanding sub-notes" to be real, browseable, linked pages, not buried text. **Cost:** more
front-matter discipline; the integrity check enforces the links.

## 2026-07-06 — Jekyll, not static HTML

The site is built with **Jekyll** (like the fairyfox.io hub), not served as raw static HTML
(the model `fairyfox-games` currently uses). **Why:** the world is inherently relational
(books ↔ universes ↔ characters ↔ cities) and grows sub-notes over time; Jekyll collections +
Liquid turn that meshing and cross-linking into data instead of hand-maintained HTML, and align
with the hub. Ruby 3.3 / Jekyll 4.4 / Bundler are installed locally, so preview is
`bundle exec jekyll serve`. **Trade-off accepted:** a build step (no `.nojekyll` verbatim
serve), and the "one fully self-contained, liftable folder per unit" purity softens — a book's
*content* stays grouped and portable (Markdown), but rendering is site-level. Deliberate
exception to the mesh's usual per-unit self-containment, made with the owner.

## 2026-07-06 — Form-first books (short story · novelette · novella · rare novel)

Each book **rolls its form**, which sets both length band and structure; word count is a
consequence of form, not the primary knob. **Why:** the forms are genuinely different machines
(POV budget, subplot tolerance, chaptering, pacing); planning to the form is what makes a book
well-built. Novel is **rare (~5%)** but held to the same quality bar. See `reference/craft/forms.md`.

## 2026-07-06 — Collection (monorepo), greenfield, on Jekyll

Set up per the hub `new-project-setup` runbook as a **collection/monorepo** (many books in one
repo) rather than one-app-per-repo — the runbook's allowed deliberate exception, agreed with the
owner (mirrors `fairyfox-games`). Bootstrapped **greenfield** (a prior unauthorized scaffold was
cleared first). Key `fairyfox-stories`, public, MIT.

## 2026-07-06 — First-person, real-character mandate

Every book is **first person**, following a real, flawed, agency-driven main character — never a
hollow reader-insert (that theory is disproven; see `reference/craft/character.md`). A standing
craft constraint, not per-book.

## 2026-07-06 — OpenAI as the writing/art service

Prose and art (cover + chapter headers) come from OpenAI via local tooling keyed in `.env`
(git-ignored); art is generated budget-consciously. The published site calls no API at read
time. Revisit only if a better fit appears.
