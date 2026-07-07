# Project Status

_Current state only._ For history see `sessions/`; for the changelog see `version.md`.

**Version:** `0.1.0` (single source of truth: repo-root `VERSION`).

## Current state (read this first)

Fairy Fox Stories is an **AI-managed story farm** — a Jekyll site publishing short interactive
**books** (fully pre-planned, then written a chapter at a time) over a meshed world of
**universes, characters, and cities**. Sibling to `fairyfox-games`; same mesh discipline,
different craft (fiction) and engine (Jekyll).

**Being bootstrapped now (this session), greenfield, per the hub `new-project-setup` runbook.**
A prior unauthorized scaffold was cleared first. Done so far: hub standards + notes adopted; the
**craft body of knowledge** written (`reference/craft/`); operating model, universe system, and
reading-experience specs written; architecture decided (Jekyll, form-first, collection/monorepo,
comprehensive sub-note collections). The full build plan is `plans/farm-build-plan.md`.

## In flight / awaiting

- **Jekyll scaffold** — `_config.yml`, Gemfile, layouts/includes/CSS, collections (books,
  chapters, universes, characters, cities), the shelf, and the immersive reader.
- **Book #1** — planted across the collections with a hand-drafted chapter 1 (the demo of the
  farm; production prose routes through OpenAI once the key is in `.env`).
- **Integrity check** — `scripts/check-stories.test.mjs` wired into CI.
- **Repo** — `git init`, first commit on `dev`, `gh repo create --public`, push `dev`.
  **Stop before `main`** (release deploys Pages) and get Fairy Fox's go-ahead.
- **Owner/hub steps** (can't be done from here): enable GitHub Pages (base `/fairyfox-stories`);
  register in the hub (`hub/registry.yml` + `_data/projects.yml`); add `.env` OpenAI key.

## Next

- Finish the scaffold + book #1, run `npm test` + Chrome preview, push `dev`, then ask before
  releasing to `main`.
- Then begin the daily loop (`reference/operating-model.md`): plant ≤ every 3 days, grow up to 5
  chapters/day, weekly sequel roll.

## Health

| Area | Status |
|------|--------|
| Repo + branches (dev/main) | ✅ public repo on GitHub, `dev` pushed; `main` pending release |
| Notes + craft body of knowledge | ✅ written (`reference/` incl. `craft/`) |
| Architecture decided | ✅ Jekyll · form-first · collection · comprehensive sub-notes (`decisions/`) |
| Jekyll scaffold (collections/layouts/reader) | ✅ built + previewed in Chrome |
| Book #1 (blueprint + chapter 1) | ✅ "The Cinderwick Job" (caper, Gaslight Reach) — ch.1 of 7 |
| Integrity check + CI | ⏳ pending |
| GitHub Pages (`fairyfox.io/fairyfox-stories/`) | ⛔ enable after first release (owner step) |
| Hub registration | ⛔ pending (hub-side edit) |
| Writing/art tooling (`.env` OpenAI key) | ⛔ owner adds the key |
| Self-hosted fonts / no third-party | ✅ vendored from the mesh |
| Legal docs | ✅ Privacy/Terms/Cookies re-scoped to Stories (verify wording on preview) |
