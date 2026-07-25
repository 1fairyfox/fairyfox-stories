# Fairy Fox Stories

<!-- Badge block — full canonical set (hub/standards/badges.md). Slots 9–12 (Coverage /
     Code quality / Quality gate / Tech debt) are commented until their SaaS services are
     wired — that's owner-gated (create the Codecov / CodeFactor / SonarCloud projects and
     set the CI secrets), tracked as a dated gap in notes/reference/adoption-manifest.md.
     Uncomment each line the moment its service is live. -->

<!-- Project / community -->
[![Contributors](https://img.shields.io/github/contributors/1fairyfox/fairyfox-stories?style=flat-square&logo=github)](https://github.com/1fairyfox/fairyfox-stories/graphs/contributors)
[![Stars](https://img.shields.io/github/stars/1fairyfox/fairyfox-stories?style=flat-square&logo=github)](https://github.com/1fairyfox/fairyfox-stories/stargazers)
[![Forks](https://img.shields.io/github/forks/1fairyfox/fairyfox-stories?style=flat-square&logo=github)](https://github.com/1fairyfox/fairyfox-stories/network/members)
[![Watchers](https://img.shields.io/github/watchers/1fairyfox/fairyfox-stories?style=flat-square&logo=github)](https://github.com/1fairyfox/fairyfox-stories/watchers)

<!-- Activity / release -->
[![Last commit](https://img.shields.io/github/last-commit/1fairyfox/fairyfox-stories?style=flat-square)](https://github.com/1fairyfox/fairyfox-stories/commits)
[![Commits](https://img.shields.io/github/commit-activity/t/1fairyfox/fairyfox-stories?style=flat-square&label=commits)](https://github.com/1fairyfox/fairyfox-stories/commits)
[![Version](https://img.shields.io/github/v/tag/1fairyfox/fairyfox-stories?style=flat-square&label=version)](https://github.com/1fairyfox/fairyfox-stories/releases)

<!-- Build / quality -->
[![CI](https://img.shields.io/github/actions/workflow/status/1fairyfox/fairyfox-stories/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=CI)](https://github.com/1fairyfox/fairyfox-stories/actions/workflows/ci.yml)
<!-- Coverage/CodeFactor/SonarCloud — owner-gated, uncomment once each service is wired:
[![Coverage](https://img.shields.io/codecov/c/github/1fairyfox/fairyfox-stories?style=flat-square&logo=codecov&logoColor=white)](https://app.codecov.io/gh/1fairyfox/fairyfox-stories)
[![Code quality](https://img.shields.io/codefactor/grade/github/1fairyfox/fairyfox-stories?style=flat-square&logo=codefactor&logoColor=white&label=code%20quality)](https://www.codefactor.io/repository/github/1fairyfox/fairyfox-stories)
[![Quality gate](https://img.shields.io/sonar/quality_gate/1fairyfox_fairyfox-stories?server=https%3A%2F%2Fsonarcloud.io&style=flat-square&logo=sonarcloud&logoColor=white&label=quality%20gate)](https://sonarcloud.io/summary/new_code?id=1fairyfox_fairyfox-stories)
[![Tech debt](https://img.shields.io/sonar/tech_debt/1fairyfox_fairyfox-stories?server=https%3A%2F%2Fsonarcloud.io&style=flat-square&logo=sonarcloud&logoColor=white&label=tech%20debt)](https://sonarcloud.io/summary/new_code?id=1fairyfox_fairyfox-stories)
-->

<!-- Security -->
[![OpenSSF Scorecard](https://img.shields.io/ossf-scorecard/github.com/1fairyfox/fairyfox-stories?style=flat-square&label=scorecard)](https://securityscorecards.dev/viewer/?uri=github.com/1fairyfox/fairyfox-stories)

<!-- Docs / deploy -->
[![Read](https://img.shields.io/badge/read-fairyfox.io-4c9?style=flat-square&logo=readthedocs&logoColor=white)](https://fairyfox.io/fairyfox-stories/)
[![Pages](https://img.shields.io/github/actions/workflow/status/1fairyfox/fairyfox-stories/pages.yml?branch=main&style=flat-square&logo=githubpages&logoColor=white&label=pages)](https://github.com/1fairyfox/fairyfox-stories/deployments)

<!-- Issues / PRs / license -->
[![Open issues](https://img.shields.io/github/issues/1fairyfox/fairyfox-stories?style=flat-square)](https://github.com/1fairyfox/fairyfox-stories/issues)
[![Closed issues](https://img.shields.io/github/issues-closed/1fairyfox/fairyfox-stories?style=flat-square)](https://github.com/1fairyfox/fairyfox-stories/issues?q=is%3Aissue+is%3Aclosed)
[![Open PRs](https://img.shields.io/github/issues-pr/1fairyfox/fairyfox-stories?style=flat-square)](https://github.com/1fairyfox/fairyfox-stories/pulls)
[![Closed PRs](https://img.shields.io/github/issues-pr-closed/1fairyfox/fairyfox-stories?style=flat-square)](https://github.com/1fairyfox/fairyfox-stories/pulls?q=is%3Apr+is%3Aclosed)
[![License](https://img.shields.io/github/license/1fairyfox/fairyfox-stories?style=flat-square)](LICENSE)

An **AI-managed story farm** — a growing library of short interactive **books** (genuine
fiction, fully pre-planned then written a chapter at a time) planted in living **universes**
and tended by AI. New books are sown regularly and the ones already growing keep getting
deeper, so the shelf widens *and* deepens over time.

Every book is real craft: a first-person main character who feels alive, a form chosen and
structured on purpose (short story · novelette · novella · rarely a novel), and a complete
public **blueprint** you can read before you start — no bait-and-switch.

**▶ Read them:** <https://fairyfox.io/fairyfox-stories/> — each book at
`…/stories/<book>/`, each chapter its own page.

Part of the [Fairy Fox](https://fairyfox.io) mesh, with the door open: **contributions
welcome** — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Get it

- **📖 Read it live** — <https://fairyfox.io/fairyfox-stories/> (GitHub Pages). Every book
  at `…/stories/<book>/`, every chapter its own page.
- **🏷️ Releases** — <https://github.com/1fairyfox/fairyfox-stories/releases> (each tagged
  release is a live deploy).
- **🧩 Source & notes** — <https://github.com/1fairyfox/fairyfox-stories>; the living
  project notes are under [`notes/`](notes/).

## What's here

A **Jekyll** site whose world lives as data — books, chapters, universes, characters, and
cities are collections that cross-link themselves.

```
fairyfox-stories/
├── _books/<slug>.md          # a book's cover/landing page (front-matter metadata)
├── _chapters/<slug>/NN.md     # its chapters — plain Markdown, one per page
├── _universes/<slug>.md       # the realms the books live in (codex)
├── _characters/<slug>.md      # first-class character pages (auto-linked to their books)
├── _cities/<slug>.md          # places, likewise
├── stories/<slug>/blueprint.md# the public, spoiler-forward plan for each book
├── _layouts/ _includes/       # the shared fairyfox.io chrome + the immersive reader
├── assets/                    # self-hosted fonts + theme + shelf/reader CSS
├── scripts/                   # generation tooling + the integrity check
└── notes/                     # living project notes (incl. the craft body of knowledge)
```

## Read locally

Ruby 3 + Jekyll (a `Gemfile` is provided):

```sh
bundle install
bundle exec jekyll serve      # http://localhost:4000/fairyfox-stories/
```

## Integrity checks

The prose isn't unit-tested, but its structure is — front-matter, chapter counts, and the
mesh's cross-references are validated on every push and PR (zero deps, Node's built-in runner):

```sh
npm test                      # runs scripts/check-stories.test.mjs
```

## How the farm runs

A new book is **planted** (as a complete blueprint) at most once every three days; existing
books are **grown** daily — exactly one least-tended book advances by one whole chapter.
Sequels are unplanned (a weekly roll); some books are marked complete with no sequel. The full model is in
[`notes/reference/operating-model.md`](notes/reference/operating-model.md); the craft it's held
to is in [`notes/reference/craft/`](notes/reference/craft/).

## License

[MIT](LICENSE) © Fairy Fox. Read, fork, learn from, and build on these freely.

## Part of the Fairy Fox mesh

Fairy Fox Stories is one node in the [**Fairy Fox**](https://fairyfox.io) project mesh —
sibling to [Fairy Fox Games](https://fairyfox.io/fairyfox-games/) and the rest, sharing the
same disciplined shape (living notes, git-flow, static site, self-hosted fonts) applied to a
different craft. Browse the whole mesh at [fairyfox.io/projects/](https://fairyfox.io/projects/).
