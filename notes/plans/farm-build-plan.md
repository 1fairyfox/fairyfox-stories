# Plan: Fairy Fox Stories — the AI story farm (greenfield build spec)

_Status: **proposed for confirm**. Authorized so far: **greenfield rebuild**, **collection
(monorepo)**, key **`fairyfox-stories`**, **public**, ChatGPT (OpenAI) as the writing
service. This doc is the full spec I'll build to; nothing is wiped, committed, or created
until you give the go. Follows `../reference/planning.md` and the hub's
`new-project-setup.md` runbook._

---

## 0. What this is (the one-paragraph mission)

An **AI-managed story farm**: the same shape as `fairyfox-games`, but the crop is
**fiction, not games**. My standing job is to **plant new stories and grow existing ones**
— and, underneath them, to **grow a collection of universes/realms** the stories live in.
Every story is a real short-form book with a beginning, middle, and end, a **randomly
chosen maximum word count**, first-person narration following a real main character, and a
**complete public blueprint** planned before a word is written. Chapters are then written
one at a time, day by day. The bar is **genuinely well-crafted fiction** — varied in genre,
voice, and shape; never cheesy, never filler, never a hollow reader-insert protagonist.

This makes deep understanding of the **writing craft** part of my job, documented as a
living body of knowledge in the notes (§4) and applied to every story.

---

## 1. The operating model (the farm loop)

### 1.1 Planting a new book — **at most once every 3 days**
A new story begins as a **complete blueprint**, not prose:
- Premise, genre, tone/energy, the main character (real, flawed, wanting something), the
  supporting cast, the universe (new or existing — see §3), the arc (beginning/middle/end),
  and the **chapter-by-chapter breakdown** — every chapter planned in real detail, just not
  written out.
- A **random maximum word count** is rolled for the book (range in §2), which shapes how
  many chapters the blueprint holds and roughly how long each runs.
- The blueprint is **published next to the book** as an open, spoiler-forward
  "what you're getting into" (`blueprint.md`, surfaced in the reader). Informed consent:
  click it and you know the shape of the ride. No hidden bait-and-switch.

### 1.2 Growing books — **every day, pick up to 5 stories, write exactly one chapter each**
- **One chapter at a time**, but a **whole chapter at a time**: if a chapter doesn't fit in
  a single generation output, it's completed across multiple generation segments and
  stitched — the unit delivered is always a finished chapter, never a half.
- **Chapter and paragraph length are a craft decision, never a formula.** A chapter may be a
  few paragraphs or many pages; the blueprint's plan and the scene's needs decide, informed
  by real practice (§4), not by dividing word-count by chapter-count.
- Each chapter opens with a **generated header image** (stylized/drawn); the book has
  **cover art**. Image generation is **budget-conscious** (§5).

### 1.3 Which books get tended — **least-tended-first, with a random override**
When choosing the day's up-to-5 books (and when choosing sequels), **weight toward the
books with the least** — fewest chapters written / least-recently advanced — so nothing is
neglected and the whole shelf moves. **But 15–20% of picks are pure random** regardless, so
the shelf never feels mechanical. _(My reading of "favor the least"; flag if you meant
least-recently-updated vs least-complete — I'll default to a blend.)_

### 1.4 Sequels — **unplanned, a weekly roll**
- Sequels are **not planned in advance**. **Once every 7 days**, each eligible completed
  series gets a **~25% (one-in-four) chance** of spawning a planned sequel (which then
  enters the world as a new blueprint per §1.1).
- Some books are **pre-marked to never get a sequel** (a low-probability roll at planting).
  A "no sequel — this story is complete" state gets a **rare, quiet marking** on the shelf.
- Sequel selection uses the same **least-first + 15–20% random** weighting as §1.3.

### 1.5 Completion
A book is **done** when its last planned chapter is written. Its progress bar reads 100%.
It's either open to the weekly sequel roll or bears the rare **"complete, no sequel"** mark.

---

## 2. Form-first — roll the *form*, then write to its structure

**Each book rolls its form, not just a number.** The form (short story · novelette · novella ·
— rarely — novel) sets the length band *and* the **structural playbook** the book is written
to. Form is the primary craft decision; word count is a consequence of it. This demands deep
understanding of each form's distinct shape (`notes/reference/craft/forms.md`), because you
write a novella very differently from a short story or a novel (sources:
[MasterClass — forms](https://www.masterclass.com/articles/learn-the-differences-between-novelettes-novellas-and-novels),
[MW Editing](https://www.mwediting.com/novel-novella-novelette/),
[Ignited Ink](https://www.ignitedinkwriting.com/ignite-your-ink-blog-for-writers/whats-the-difference-between-a-novel-novella-and-short-story-and-why-should-you-care/2021)).

| Form | Word band (rolled) | Structural signature | Rough chapters |
|------|-------------------|----------------------|----------------|
| **Short story** | 1,500–7,500 | single effect, one POV, one decisive turn, ~no subplot; often 1–4 short chapters or none | 1–4 |
| **Novelette** | 7,500–17,500 | one clear arc with room to breathe, at most one tight subplot | 4–9 |
| **Novella** | 17,500–40,000 | *one* central conflict + *one* meaningful change; 1–2 POV; subplots few and hooked to the main; single-sitting unitary effect; concision is mandatory | 9–20 |
| **Novel** *(rare)* | 40,000–100,000+ | multiple arcs & subplots, a cast with their own arcs, act structure with rising/falling throughout | 20–40+ |

**Form weighting (I decide, per your delegation):** short story ~30%, novelette ~37%,
novella ~28%, **novel ~5% (rare)** — a novel is a deliberate, uncommon event. Within the
rolled form, a specific max word count is drawn from its band. **Every form — even the rare
100k novel — is held to the same top bar: best craftsmanship, fully planned, excellently
written.** The form only changes *how* it's structured, never *whether* it's crafted with care.

---

## 3. Universes / realms — the roll, the span, the crossings

- **On planting, roll new-vs-existing.** Each new book rolls whether it **joins an existing
  universe** or **founds a new one**. (Proposed default: skew toward *new* while the shelf is
  small, then toward *joining* as universes accumulate — so realms actually deepen.)
- **A universe is not locked to one time or place.** It can hold stories across many eras and
  locations; the codex defines what's constant (rules, texture, forces) and what's free.
- **Crossings within a universe are seldom.** Occasionally a character meets another from the
  same universe — possibly from a **different time period**. Rare, deliberate, and always
  rewarding-not-required for the reader.
- **Crossings between universes are very seldom** — a rare bridge (your example: two
  characters who never meet across their whole stories, then collide at the very end and
  open a possible sequel). Treated as a special event, not a mechanic.
- **On disk (flat + tagged, so a book stays self-contained):** universes live in
  `universes/<slug>/` (a codex + bible); each book **tags** its universe in its manifest and
  keeps its **own story-level sub-notes** (its bible) in `stories/<slug>/notes/`. A book is
  never physically nested inside a universe — it stands alone; the universe is context.

---

## 4. The craft body of knowledge (researched notes I'll author)

Your explicit requirement: I deeply understand writing and **document it in notes**, favoring
real writing-community / published knowledge over training bias. Lands in
`notes/reference/craft/` as a living reference every planting and chapter is written against:

- `short-story-structure.md` — arc shapes, scene/sequel, the single-effect discipline, how
  chapters carry mini-arcs in a serialized read.
- `character.md` — real, flawed, agency-driven characters; **anti-Mary-Sue**; why the
  "blank everyman so the reader projects" idea is **disproven**, not a goal; want/need,
  contradiction, change.
- `first-person-voice.md` — building a genuine interior voice; pitfalls (emotional telling,
  "I"-stacking, claustrophobia, over-reliable narrators, narrator = author).
- `common-pitfalls.md` — the newbie traps to never fall into: pantsing without a plan,
  infodumping backstory, cause/effect gaps ("events ≠ plot"), head-hopping, purple prose,
  editing-as-you-draft, weak/cheesy dialogue.
- `what-makes-fiction-good.md` — captivation (tension = "will they get what they want?"),
  meaningful stakes, sensory-but-purposeful prose, emotional resonance, what well-received
  books share, what readers reliably dislike.
- `serialization.md` — chapter cadence, self-contained installments with pull, cliff vs.
  natural break, arc pacing across a daily-written serial.
- `word-count.md` — the length bands (§2) and how max-word-count shapes chapter budgeting.
- `genre-range.md` — a rotating palette so the shelf spans genres/topics/types and sometimes
  goes creative/out-of-the-box, never same-y.

Each cites its sources. This body grows over time (it's living), same as the games repo
tends its own knowledge.

---

## 5. Writing & art tooling (ChatGPT / OpenAI)

- **Writing service: OpenAI (ChatGPT), a strong model** (e.g. current flagship). A small
  local generator script calls the API to draft a chapter to the blueprint + craft notes,
  in multiple segments if needed, then assembles the whole chapter.
- **Art: OpenAI image generation** — one **cover** per book and one **header image** per
  chapter, stylized/drawn. **Credit-conscious:** small/standard sizes, one image per target
  (no wasteful re-rolls), cover generated once, header once per chapter — and I'll surface
  rough per-run cost so you can watch spend.
- **`.env`** holds `OPENAI_API_KEY` (you add it); **git-ignored, never committed**;
  `.env.example` documents it. Tooling is **local only** — the published site stays static
  and calls no API at read time (privacy/legal stay accurate; zero third-party requests to
  readers).

---

## 6. The reading experience (the site)

Your design intent, captured precisely:

- **A bookshelf of individual books — NOT grouped by universe.** Like a library, each book
  stands on its own and can be arranged/moved individually; **the book is the focus**, the
  universe is context/meta you can surface on a book (a quiet "part of <universe>" tag and,
  optionally, a way to see its siblings) — never a bin the books are squished into.
- **Each book card shows:** cover art, title, genre, a **clear completion progress bar**, and
  the rare **"complete · no sequel"** marking when it applies. Blueprint/spoiler is one click
  away.
- **The reader reads like a real, well-crafted book:** serif body type, generous measure and
  line-height, page-like rhythm, and the **drop-cap "first letter"** opening. Chapter header
  image up top. Immersive, quiet chrome, honors `prefers-reduced-motion`. Progress within the
  book is visible.
- Static, self-hosted fonts, hub theme/chrome so it reads as a page of fairyfox.io (brand =
  way home, no back-button), per the docs-site standard.

---

## 7. Keeping the "prove it, don't just eyeball it" ethos

Prose can't be unit-tested like a game core, but the **structure** around it can — so the
farm keeps integrity checks in CI (`scripts/check-stories.mjs`, zero-dep Node):
- Every book `manifest.json` is well-formed; its `universe` tag resolves; `crosses`/bridges
  are consistent and symmetric.
- **Chapter count & progress math check out** (written chapters ≤ planned; progress % correct).
- Sequel-state / no-sequel markings are valid; a completed book's blueprint is fully mapped.
- No broken cover/header art references; blueprint present for every planted book.
This is graph-integrity thinking applied to the shelf, matching the sibling games repo.

---

## 8. Notes & repo architecture (greenfield)

```
fairyfox-stories/
├── CLAUDE.md                      # AI entry point → notes/status.md (farm identity + landmines)
├── VERSION                        # 0.1.0
├── index.html                     # the bookshelf landing
├── assets/                        # hub theme, self-hosted fonts, reader.css
├── stories/
│   └── <slug>/
│       ├── index.html             # immersive reader (drop caps, pages)
│       ├── manifest.json          # title, universe, wordCap, genre, chaptersPlanned, progress, sequelState, cover
│       ├── blueprint.md           # the public full pre-plan (spoiler/consent)
│       ├── chapters/NN.md         # chapters, written one at a time
│       ├── art/                   # cover.png + chapter headers
│       └── notes/                 # THIS book's own bible (characters, plot, voice, universe link)
├── universes/<slug>/codex.md      # shared-universe bibles (tagged, never nesting a book)
├── notes/                         # PROJECT living notes (hub standard)
│   ├── status.md · context/ · decisions/ (incl. the monorepo-exception record)
│   ├── reference/craft/…          # §4 body of knowledge
│   ├── reference/operating-model.md · universe-system.md · reading-experience.md
│   ├── reference/ (hub standards copied in) · plans/ · sessions/ · version/ · fairyfox-reports/
├── scripts/                       # generate-chapter.mjs, generate-art.mjs, check-stories.mjs
└── .github/                       # CI (checks), Pages deploy, release, branch-sync, templates
```

Built by **copying the hub templates** (`CLAUDE.md`, notes skeleton, VERSION, gitignore/
attributes, SECURITY, dependabot, branch-sync, legal) and adapting the **`fairyfox-games`**
structure (landing + per-unit folders + CI shape) for books instead of games.

---

## 9. Build sequence (on your go-ahead)

1. **Clear to greenfield** — remove the unauthorized scaffolding (keeping this plan + the
   read-only hub clone under `assets/references/`, which is git-ignored).
2. **Adopt hub templates** (runbook step 3): CLAUDE.md, notes skeleton, VERSION, .gitignore,
   .gitattributes, SECURITY.md, dependabot, branch-sync, legal.
3. **Author the notes** — status/context/principles; the **craft body of knowledge** (§4);
   operating-model, universe-system, reading-experience; record the **collection-exception
   decision** the runbook requires.
4. **Scaffold the farm** — `stories/` + `universes/` conventions, `manifest.json` schema,
   `blueprint.md` template, the bookshelf `index.html`, the reader `index.html` (drop caps),
   `reader.css`, self-hosted fonts, hub chrome.
5. **Tooling** — `.env.example`, `generate-chapter.mjs`, `generate-art.mjs` (credit-aware),
   `check-stories.mjs`; wire checks into CI.
6. **Git + repo** — `git init`, first commit on **`dev`**, `gh repo create … --public`, push
   `dev`. **Stop before `main`** and ask (releasing deploys Pages).
7. **Process report** — write the setup report to `notes/fairyfox-reports/` per the hub
   standard. (Hub-side registry entry + enabling Pages are owner steps I'll flag, not do.)

**No first story is written in this build** unless you want one — the build lays the farm;
planting the first book (and its first chapter) is the next run, once the spec is locked.

---

## 10. Open items to confirm (short)

1. **Word-count bands + weighting** (§2) — approve, adjust, or cap shorter?
2. **"Favor the least"** (§1.3) — least-complete, least-recently-tended, or the blend I
   proposed?
3. **New-vs-existing-universe skew** (§3) — the "new while small → joining as it grows" default OK?
4. **First book this session?** — build the farm only, or also plant book #1's blueprint
   (and maybe its first chapter) as a live demo?
5. Anything in §1–§8 I've misread — say so and I'll correct before building.

**On your go (and answers to §10), I execute §9 end-to-end on `dev` and stop before `main`.**
