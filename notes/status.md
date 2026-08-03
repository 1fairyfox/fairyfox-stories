# Project Status

_Current state only._ For history see `sessions/`; for the changelog see `version.md`.

**Version:** `1.1.2` (single source of truth: repo-root `VERSION`).

**Automation:** the farm loop now runs unattended via a **daily scheduled job (midnight,
America/Denver)** — grow 1 book, plant one when 3+ days have passed, **auto-publish to `main`**.
See `reference/operating-model.md` → *Automation* and `decisions/architecture.md` (2026-07-09).

## Current state (read this first)

Fairy Fox Stories is an **AI-managed story farm** — a Jekyll site publishing short interactive
**books** (fully pre-planned, then written a chapter at a time) over a meshed world of
**universes, characters, and cities**. Sibling to `fairyfox-games`; same mesh discipline,
different craft (fiction) and engine (Jekyll).

**Bootstrapped, live, and growing.** The Jekyll scaffold, integrity check + CI, the five-book
starting shelf (distinct genre/form/style/author each, with cover + ch.1 art), and the daily
automation are all shipped; the site has had two live releases (v0.2.0, v0.2.2). The farm is now in
its **daily grow** phase — advancing real chapters on the least-tended books. The full build plan is
`plans/farm-build-plan.md`; the daily loop is `reference/operating-model.md`.

**Reader chrome (v0.6.0):** the shared **coins** engagement layer is now in the reader chrome — a coin
counter beside the "Aa" button (first-view-today earns; reading pages add a read-time chip, a read-through
bonus, and a rare hidden coin), vendored verbatim from the shared-chrome master (`assets/coins.js`) with the
coin CSS ported into `assets/reader.css`. Local `fairyfox:coins:a` disclosed in Privacy/Cookies, no-value
clause in Terms, hub `/legal/coins/` linked. This was **Phase 2** of the fairyfox-standards adoption (Phase 1
= the standards batch in v0.5.6); built + previewed in a connected-Chrome session.

## The shelf (as of v1.1.1)

| Book | Form | Progress | Last grown |
|------|------|----------|-----------|
| **The Overcount** (SF · **sequel-in-realm to *Cartographer***) | novella | 1 / 11 | 2026-08-02 *(planted)* |
| ✅ **The Two-O'Clock Launderette** (magical realism · sequel: *The One-O'Clock Bus*) | short story | **3 / 3 — complete** | 2026-07-14 |
| ✅ **The Girl Who Sold the Wind** (fable · **sequel: *The Wind She Would Not Keep***) | novelette | **5 / 5 — complete** | 2026-07-17 |
| ✅ **The Cartographer of Decks** (SF) | novelette | **6 / 6 — complete** | 2026-07-17 |
| **Every Lock but Hers** (magical realism) | novella | 6 / 11 | 2026-07-21 |
| **The Wintering House** (gothic) | novella | 8 / 11 | 2026-07-23 |
| The Cinderwick Job (caper) | novelette | 6 / 7 | 2026-07-18 |
| The Blindfold Act (mystery · sequel-locked) | novelette | 4 / 6 | 2026-07-24 |
| The Hundredth Wind (fable) | novelette | 3 / 7 | 2026-07-25 |
| **The One-O'Clock Bus** (magical realism · **sequel to *Launderette***) | novella | 3 / 10 | 2026-08-02 |
| **The Wind She Would Not Keep** (fable · **sequel to *Girl Who Sold the Wind***) | short story | 2 / 3 | 2026-08-02 |

**Eleven books — three `complete`, eight `growing`.** Latest run **08-02 (fourth invocation, v1.1.1,
grow)**: *The Wind She Would Not Keep* **ch.2 "The Sea-Wind"** (2/3) — the Salt Road short story's
**complicity beat**. No override (roll `68` vs ≤18); the blend's leader at **0.633** (incompleteness 2/3
= 0.667, nine days stale since the 07-24 plant; max staleness 15 = Cinderwick), a narrow honest 0.006
edge over *Every Lock but Hers* (0.627). Three days into her false safety, Zari has traded fear for a
*tally against a promise* (runs the safe sum "to comfort herself" — the flaw's ch.3 tell) and turned away
three walk-ups; Rafiq passes westbound in **one line**. Then **Naima** (eleven, a hundred days across the
waste) lays the **exact fare out coin by coin** and asks for the **sea-wind** — the third bottle on the
high shelf, the very one ch.1 promised to Sabr. The complicity beat lands to spec: Zari has every fact,
the refusal costs her **nothing** (no trap, no lie — genuinely not hers to sell under the fair contract),
the sale would cost the whole stall; she runs "the easiest sum there is" and refuses with words true and
hollow ("That one is promised … It isn't the money"), **without explaining the contract to the child**.
Naima doesn't haggle, only re-reckons gravely, and **thanks her for looking**; Zari lets them walk west
without calling after, and her held-breath safety takes a **hairline** — she can't name the wrong, and
closes on the sea-wind "I could not look at and could not stop" looking at. Adem's spare ledger voice
held; grief off-page, bright-before-sad; direct hand-off to ch.3 "The Whole Stall for One Bottle."
`npm test` green (6 + check-links, 57 files); `jekyll build` clean and the built ch.2 page verified by
HTML (title, prose, footer nav correct at the true last chapter — prev→ch.1 + back-to-book, no dangling
next). **Concurrency note:** this run found a live, uncommitted *Overcount* plant in the tree — the
sibling PLANT task was releasing v1.1.0 **concurrently**; correct call was to wait it out (not
interleave git writes), then grow on the settled tree. Chrome not connected — prose-only, rides the
eyeball debt. Full audit in `sessions/2026-08/2026-08-02.md`. Before that, **08-02 second (v1.1.0,
plant)**: **The Overcount** — the farm's **third sequel plant** and the **Long Quiet's first sequel**, taking the
window the morning grow's sequel roll queued for *The Cartographer of Decks*. A generation-ship SF
**novella** (form `86`; word-pick `15` → wordCap 21,000; 11 chapters, finale ~1.5×), a new standalone
tale in the realm (`sequelTo: the-cartographer-of-decks`), by a **new author-persona, Aster Coyle**, and
the shelf's **first present-tense book** (a deliberate range dial — see `decisions/` 08-02). Universe
`63` → existing (fixed to the Long Quiet by the queued sequel — a join deepening a one-book realm);
author `6` → new (skew stepped 55→50 at 7 authors); sequel-lock `18` → not locked. Wren Astel, teller of
the **Muster** (the office that keeps the sealed *Ark Meridian* balanced to the body, a birth licensed
against a death), strikes a name and finds the ship breathing for **one body more than any register can
name** — an overcount that proves to be **twins on one licensed birth**, one child hidden eighteen years
in the cold decks. The **complicity beat** (she sees him, files it, pays nothing, can't unsee it) and the
turn (she pays the count's own forfeit openly — licensing the hidden son against his dead mother's
just-freed share) are mapped; antagonist **Provost Halden** is right about the stakes and wrong about the
only mercy; **Sela Renn** returns for one sequel-tie scene (no *Cartographer* re-reveal). Blueprint public;
ch.1 "The Quittance" written to Coyle's taut present-tense voice; cover + ch.1 header (1536×1024)
generated and viewed clean. `npm test` green (6 + check-links, 56 files); `jekyll build` clean. Chrome not
connected — rides the eyeball debt. Full audit in `sessions/2026-08/2026-08-02.md`. Before that, **08-02
(v1.0.1, grow)**: *The
One-O'Clock Bus* **ch.3 "The Rules of the Hour"** (3/10) — the novella's **first lie to someone he
respects, and the Corvus escalation**. First run since 07-25 (the scheduled job didn't fire
07-26→08-01). No override (roll `74` vs ≤18); the blend's clear leader at **0.767** (shelf's highest
incompleteness 8/10 = 0.800 **and** eleven days stale), exactly the ch.3 the 07-25 note forecast.
Training nights: Abel teaches Priya the covenant (*drive the route as printed* — kept precisely
*because* no one is watching); night one is `nil` (the hour touches nobody). Night two she sees it
clean — 17 takes the regular **Cyril** off the card to the all-night cab office for company (fare:
"I don't much want to go home yet") — and Abel deflects it to her face as "discretion," his first lie
to someone he respects. The book's asymmetry made canon: the Vera "nothing there" lie **cost nothing
and kept**; the Priya lie "lands on her" and "tasted of tin." Then the **Corvus escalation** — for
the first time in eleven years 17 does not just slow but **stops and opens her doors on an empty
street**, reaching for the one passenger she's never delivered (Abel) with a witness in the cab; he
doesn't rise, and the blue book gains its first new Corvus word: *Opened.* Priya asks the Corvus
question (reserved for ch.3) → the same "Nothing there," the two lies now rhymed. Closes on **Priya
finding the blue notebook** open in her hand — "This isn't the route as printed" — the direct handoff
to ch.4. **Weekly sequel roll DUE and RUN** (last 07-21; overdue after the missed week): only
*Cartographer* eligible, roll `9` (≤25) → **fires** → queues a **pending Cartographer sequel plant**
for the sibling PLANT task (GROW does not plant). `npm test` green (6 + check-links, 54 files). Chrome
not connected — prose-only, rides the eyeball debt. Full audit in `sessions/2026-08/2026-08-02.md`.
Before that, **07-25 (v0.8.1, grow)**: *The Hundredth
Wind* **ch.3 "The First Try"** (3/7) — the fable's **first of three tries, by mastery, failing with
teeth**. No override (roll `57` vs ≤18); the blend's clear leader at **0.714** (shelf's highest
incompleteness 5/7 **and** five days stale), returning to the front exactly as the 07-20 note forecast
after four runs out. Basri reasons his life's stand (be the most interesting *shut* thing) is wrong for
a wind that opens shut things, so he out-thinks it with a *name* — reads what the wind does and builds
it the grandest true-name forty years can raise, **"Opener"** — and Noor warns him flat it is "a good
name, not a true one." At the town of **Sarab** the stand is beautiful work and the wind considers him
and **does not go into the glass: it opens his coat** and takes the cracked horn **stopper** (planted
ch.1) west with it, laughing. First rung of the escalation (**coats → pages → milestone → him →
vault**); Basri scrambles in the dust after it and **will not yet say what the stopper is** (Nuru's
name/kinship held for ch.6 — a first-draft leak was caught and cut). The wind then **breaks its
hundred-year circuit** and runs *his* road, toward the towns of his young years, and he understands the
name "was never out there — it was in the pocket," setting ch.4's trickery-try. Noor's trained ear kept
consistent (she can't hear a wind that was never in glass), throat-tell carried, "it doesn't choose"
paid back. `npm test` green (6 + check-links, 52 files). Chrome not connected — prose-only, rides the
eyeball debt. Full audit in `sessions/2026-07/2026-07-25.md`. Before that, **07-24 second (v0.8.0,
plant)**: **The Wind She Would Not Keep** — the farm's **second sequel plant**, taking the window queued since 07-21 for
the *Girl Who Sold the Wind* sequel (last brand-new book *One-O'Clock Bus* 07-21; 07-21 + 3 = 07-24
eligible). A Salt Road **short story** (form roll `5`; word-pick `89` → wordCap 6,800; 3 chapters,
finale ~1.5×), the realm's **third** book and its **first short story**, by a **new author-persona,
Yusra Adem** (byline roll `100` → new; a second, deliberately drier fabulist for the Salt Road rather
than a third Okri book). Sequel-lock `34`… `18` → not locked. Zari, seventeen now and finally keeping
the Ninth Waystation old Bostan left her, signs a **fair, square standing order** with wind-broker
**Hadi Sarraf** of the still city — every wind at triple price, forever, sold to no one else, the whole
stall forfeit for one bottle sold elsewhere — out of fear of losing the one good thing she holds; then a
girl walks a hundred days for the one bottle now promised away. **Book one: shouldn't *sell*. This one:
shouldn't *keep*** — a genuine inversion (single-situation moral trap vs a chase; clinging/fear vs
greed; the stall itself vs a fortune), distinct from *Hundredth Wind* too. Ch.1 "The Standing Order"
written to Adem's spare voice; cover + ch.1 header generated (gpt-image-1, header 1536×1024) and viewed
clean (blue bottles, striped noon cloth, dead-still caravan, no stray lettering). `npm test` green (6 +
check-links, 51 files). Chrome not connected — rides the eyeball debt. Full audit in
`sessions/2026-07/2026-07-24.md`. Earlier the same day, **07-24 (v0.7.3, grow)**: *The Blindfold
Act* **ch.4 "The Understudy"** (4/6) — and **the random override fired for the second time in the
farm's history** (roll `9` vs ≤18; random pick `2` of 6 alphabetically → the Blindfold Act, which sat
**second** on the blend at 0.667 behind *Hundredth Wind* 0.690). A *modest* override this time — the
day's near-leader, not the wild fourth-place swing 07-22 was. The book's **complicity beat**, by
design adding **no new clue**: Sonora has had every fact since the third morning, so ch.4 is the
courage to stop crediting the alibi she wrote for Lark. Opens on the **understudy** doctrine (Lark
learned Sonora's act too well) and reconciles ch.3's Bruno-clearing with the blueprint's "let Bruno
hang" via the tired sheriff's **split-crime pivot** (inside pilfering + the *death* set back on the
outsider Bruno, Dell aiming it wordless — "cleared is not brought back … a man already outside the
circle is halfway to the tree"). The monstrous-comfortable option is priced at **nothing and requires
no act** — keep the spare-hasp gaff held since ch.1 and Bruno hangs, the show rolls, she keeps Lark
alive: "the same old silence, kept one week longer." Lark's **second tell** is the *absence* of the
first (four days on, her hands don't stop and her breath doesn't change — the flawless managed calm
only the teacher reads as heartbreak). She refuses **not from virtue** but because she cannot leave a
face unread; ends summoning Lark from a doorway (the ch.2 rhyme), Bruno at the flap "watching his own
trial walk away into the dark to make up its mind." Sets ch.5. `npm test` green (6 + check-links, 50
files). Chrome not connected — prose-only change, rides the eyeball debt. Full audit in
`sessions/2026-07/2026-07-24.md`. Before that, **07-23 (v0.7.2, grow)**: *The
Wintering House* **ch.8 "A Warm Death"** (8/11) — no override (roll `99` vs ≤18), the blend's
staleness leader (0.682) rotated straight back in after losing 07-22 to the override. "The Secret"
(ch.8–9) opens at the two scales ch.7's stolen facts couldn't reach: the **world's complicity** (the
ch.6-planted New Year reading — Marchbank reads *the eleventh sermon, against immoderate grief, from
the page as it lies*, never touching the book; "visiting the sick, or sitting down to table with the
sickness"; *grief is a river — dam it, and it floods the fields you live from*; the moss-hand plant
paid forward: dark hours, Saturday-to-Sunday, the beck path holds a frost footprint) — and the
**second swallowed grief**: **Ada was Ada Hale, the housekeeper's daughter**, nineteen, keeper of the
first fire, dead of a chest fever while eleven nights of asking never heard "no" and the warm room
was never shared; north wall, where the wind is. Charlotte's ch.7 flinch is a kept promise ("I would
not have my girl made a *she*"), and Mrs Hale hands Agnes the book's first exit — "**Keep your money,
Miss Thorne**" — one chapter before ch.10's Offer prices staying. Two shipped continuity defects
fixed (ch.1's stray "Mrs Aldous"; ch.7's "six-and-twenty" Charlotte → forty per ch.2), and the
book-notes ledger backfilled with the missing ch.7 canon. Chrome not connected — prose-only change,
rides the eyeball debt. Full audit in `sessions/2026-07/2026-07-23.md`. Before that, **07-22
(v0.7.1, grow)**: *The
One-O'Clock Bus* **ch.2 "The Auditor"** (2/10) — and **the random override fired for the first time
in the farm's history** (roll `3` vs ≤18; random pick `5` of 6 → the Bus, which sat **fourth** on the
blend at 0.575 behind *Wintering* 0.682 / *Blindfold* 0.625 / *Hundredth Wind* 0.607). A day-old book
took the day off the staleness leader — exactly what the mechanism exists for. Vera Brandt made
formidable before she's answered: three agreeing telemetry series (odometer / fuel / door-cycles),
11.4 miles four nights in five and 12–16 on the fifth; the log praised sincerely and called "not a
compliment, a finding"; her creed paid for with a care-transport case (a fudged *rota only*, kindly
meant, a stranger under it) — *a public record is what people with no power have instead of power*.
The turn is the flaw at small scale: the one amnesty declined ("The route runs as printed" — she
writes down the answer **and the pause**), then **Vera finds the 01:26 Corvus Road crawl herself**
and offers *helpfully* to make it a timing point, and Abel says **"No. Nothing there."** His first
outright lie is told in daylight, to a fair person, and isn't about the hour at all. Priya lands as
the second watcher (same six weeks; already reading the cab, and the blue notebook's corner).
Plants: Vera **doesn't drive**; ride-alongs = three scheduled + one unannounced. **Chrome was
connected** — see the eyeball item below, which is now largely paid. Full audit in
`sessions/2026-07/2026-07-22.md`. Before that, **07-21 second run (v0.7.0, plant)**:
**The One-O'Clock Bus** — the farm's **first sequel plant**, taking the first of the two queued
sequel windows (sequel-pick override `68` → no override; staleness picked *Launderette*, tended
07-14, over *Girl*, 07-17). Magical realism **novella** (form `74`; word-pick `29` → wordCap 24,000;
10 chapters, finale costed ~1.5×), the Hollow Hours' third book, by returning author **Idris
Okonkwo-Vance** (author roll `67` → existing, pick `4` — second author-crossing-realms move, and
pointedly not the parent's author). Sequel-lock `34` → not locked. Abel Mensah, eleven years on the
Route 9 night service, two records of every night — the official log that lies beautifully and the
blue notebook that doesn't — vs. auditor Vera Brandt, who is right about records and wrong about
this route. New tale in the realm, zero plot dependence (`sequelTo:` first used in a manifest);
Nadia Okafor gets one nod-sized ch.5 scene. Ch.1 "The Route as Printed" written; cover + header
generated and viewed clean; full audit in `sessions/2026-07/2026-07-21.md`. Earlier the same day,
**07-21 (v0.6.1, grow)**: *Every Lock
but Hers* **ch.6 "The Job She Can't Do"** (6/11) — no override (roll `21` vs ≤18), blend leader at
**0.773** as forecast. The moral hinge: the Marsh Lane closer is Dani and her kid; Dani never opens
the door and is never named (the thrown bolt, the chained buggy, the drawing taped facing out); Nell's
**first refusal in fifteen years**, declining the free "occupied" technicality with it; new trade-lore
(*a bolt is a door's mind made up*); the hollow hour braided in without firing (keys on the dash, the
call at ten past two); Mar breaks her three-year "there is no—" cut-off deliberately and summons Nell
in daylight; Nell leaves her own bolt undrawn, first night in three years. **And the weekly sequel
roll fired twice — a farm first:** *Launderette* `13` and *Girl Who Sold the Wind* `9` (both ≤25);
*Cartographer* `37`, cold. Both queue as **pending sequel plants** (see Next). Full audit in
`sessions/2026-07/2026-07-21.md`. Before that, **07-20 (v0.5.6, grow)**: *The Hundredth
Wind* **ch.2 "The Ear of the House"** (2/7) — no override (roll `21` vs ≤18), blend leader at **0.929**
(shelf's highest incompleteness) exactly as 07-19's note forecast. The road east: Basri's **three laws**
in patter — the **proving law planted verbatim** as the ch.7 hook ("proved once at the buyer's own
threshold … the proving is the delivering — no threshold, no sale," tied to *bottled and delivered*);
**Noor's ear** made concrete/trained (the vault's knocking bottles; her wind-names Sigher/Presser/Little
Heresy; "I did not know it would feel like a hand"); the **opened town** teaching the wind's doubleness
by example (a marriage broken beside the grain-factor's aired short-weight scale clearing a long-blamed
dead girl — "it doesn't choose … it only opens"). Stopper beats held; Emir's grief + Nuru kept for
ch.5/6. This release also **carries the pending v0.5.5 fairyfox-adoption Phase 1 commit to `main`** (was
on `dev`, headless-green, zero visual change) via the standing dev→main PR #26. Sequel roll not due
(07-21). Full audit in `sessions/2026-07/2026-07-20.md`. Before that, **07-19 (v0.5.4, grow)**: *The
Blindfold Act* **ch.3 "The Tells"** (3/6) — no override (roll `49`), blend leader at **0.833**; the false
lead spent at cost (the coin take in Perro's kerosene chest; Sonora clears him publicly — "You could
have asked me quiet"). And **07-18 second run (v0.5.0, plant)**:
*The Hundredth Wind* — fable novelette (wordCap 14,000, 7 chapters), and **two farm-firsts in one
draw**: the first **universe-join** (roll 79 → existing; pick → **the Salt Road**, now the first realm
with two books) and the first **author-reuse** (roll 83 → existing; pick → **Amara Okri** returning to
her realm with a new, unrelated tale — no crossing roll fired, all-new cast). Basri Yel, ninety-nine
winds caught and a legend built on the one he didn't, hired to bottle the wind that opens shut things —
which answers only to *the thing you will not say*. Full blueprint public; ch.1 "The Ninety-Ninth"
written; skew thresholds stepped down (new-≤50 universe / ≤55 author) per `decisions/`. Earlier the
same day, **07-18 (v0.4.3, grow)**: three chapters, a
quiet middle-of-the-book run (nothing finished, nothing one chapter from done) — *Every Lock but Hers* ch.5
"What It Costs" (5/11), *The Wintering House* ch.7 "The Hand at the Fire" (7/11), *The Cinderwick Job* ch.6
"The Double-Cross" (6/7). **No override** (rolls `32`/`77`/`71` vs. the ≤18 threshold) — a clean mechanical
draw straight down the blend: *Every Lock* **0.818** (finally cashes the slot it missed by 0.015 on 07-17),
*Wintering* **0.727**, *Cinderwick* **0.643**. *The Blindfold Act* (0.583) missed the third slot — it led
07-17 at a record 0.917 but was grown that day, so its staleness term is only 0.5 against the others' 1.0;
the blend correctly rotated it back for one run (it returns to the front next run — highest incompleteness
on the shelf). Full audit in `sessions/2026-07/2026-07-18.md`.

## Next

- **fairyfox adoption 0.20.2→1.6.1 — DONE to v1.0.0 (07-25), bar two owner-gated items.** Ran the
  full check-for-updates flow. Mirror ff `77e9e2c → 2d614f0` (hub `0.20.4 → 1.6.1`). **Phase 1
  (v0.9.0):** 20 standards refreshed + 5 new (checklists-are-contracts, mandate-ledger, docker,
  ci-secrets, readme→`readme-cross-links.md`); the new **`adoption-manifest.md`** stood up (the
  per-standard record the release gate reads); **CodeQL/SAST** workflow; README **Get it** + mesh
  footer; CLAUDE.md ported (phase-by-default, manifest gate, Docker N-A); legal cookies clear/reset
  + three stale-"games" fixes. **Phase 2 (v1.0.0):** **`main` branch protection restored** (solo
  config; required checks `test` + `CodeQL`) — was absent post-rename; **OpenSSF Scorecard** wired
  (`scorecard.yml`); README badges **4 → 16/20** canonical; **coverage-floor N-A** + **Docker N-A**
  (rationale in the manifest); provenance confirmed already in `release.yml`. `npm test` +
  `jekyll build` green. **Still owner-gated (manifest, due 2026-08-08, none overdue):** (1) create
  Codecov/CodeFactor/SonarCloud projects + set `CODECOV_TOKEN`/`SONAR_TOKEN` → uncomment the 4
  ready-to-enable quality badges; (2) the docs-site chrome browser pass (no Chrome connected this
  run — folds into the standing eyeball debt). Report:
  `notes/fairyfox-reports/2026-07-25-adopting-updates.md` (hub_version 1.6.1).
- **fairyfox adoption 0.16.1→0.20.2 — Phase 1 released to `main` (rode v0.5.6, 07-20); Phase 2 owed
  (browser).** Adopted the
  headless batch: 10 new standard notes + 3 refreshed (compliance/process-reports/legal-docs), the
  **release-by-default** posture (replaces approval-first; a visual change still holds for its Chrome
  preview), and the **repo-hygiene gate** (`scripts/check-{links,tidy}.mjs`; `check-links` in
  `npm test` + CI). **Phase 2 (needs a connected Chrome):** the **coins** layer + reader **read-time /
  read-through / hidden-coin**, chrome bundle 2.2.1 (reader story-only gating on book/chapter pages,
  Farms dropdown already owed), and the legal **`/legal/coins/`** page + coins/clear-reset disclosure
  in `legal/*.html` (ships *with* coins — can't disclose an unshipped feature). Report:
  `notes/fairyfox-reports/2026-07-19-adopting-updates.md` (hub_version 0.20.2). Rides the standing
  deferred-eyeball debt below.
- **v0.5.1–0.5.3 released to `main`** (hub chrome adoption; grow-cadence + art backfill; legal-page
  reader controls) — but the **browser pass on the 0.16.0 chrome is still owed**: Farms dropdown
  desktop+mobile; reader panel un-locking line-spacing/width on a chapter (and now the legal pages),
  locked-with-note off a story. It rides the standing deferred-eyeball item below. Report:
  `notes/fairyfox-reports/2026-07-18-adopting-updates.md`.
- **Needs Fairy Fox — live homepage 404 (GitHub-side).** `fairyfox.io/fairyfox-stories/` serves empty/404
  site-wide while `1fairyfox.github.io/fairyfox-stories/` works and `fairyfox.io/fairyfox-games/` works. Local
  build is clean — it's GitHub-Pages custom-domain routing, tied to the account rename (apex `fairyfox.io` is
  on repo `junebug12851.github.io`, no longer a user site under `1fairyfox`) and an in-flight
  DigitalOcean→Namecheap DNS move. Re-running the Pages deploy did not help. Fix is DNS + Pages-settings side:
  finish the Namecheap records (GitHub A records `185.199.108–111.153`, or a `1fairyfox.github.io` CNAME) and
  re-verify the domain; the durable structural fix is renaming the user-site repo `junebug12851.github.io` →
  `1fairyfox.github.io`.

- **Sequel queue: DRAINED — planted this run as *The Overcount*.** The 08-02 grow queued the
  *Cartographer of Decks* sequel (roll `9`); this plant run took that window (drain-the-queue-first,
  per the *Bus*/*Wind* precedent). It is **The Overcount** (v1.1.0) — a new standalone SF **novella**
  in the Long Quiet (the realm's second book), by new author **Aster Coyle**, not a plot continuation.
  Queue now empty. Weekly sequel-roll eligibility: all three completed series (*Launderette*, *Girl*,
  *Cartographer*) now have a growing sequel, so **no eligible rollers remain** until one settles;
  **next weekly roll due on/after 2026-08-09** (will find nothing eligible yet). **Next PLANT** eligible
  on/after **2026-08-05** (last plant *The Overcount* 08-02); with the queue drained it rolls a **fresh
  universe + form** with no pre-owed window.
  - **PLANT skipped 08-02 (cadence):** a second PLANT run fired the same day; blocked by the ≥3-day
    floor (*The Overcount* planted 0 days prior). No plant, no version bump — recorded in
    `sessions/2026-08/2026-08-02.md`. Next plant window opens 2026-08-05.
- **The Overcount is at 1/11 (planted 08-02) — ch.2 "A Records Error" is next**: Wren rules out every
  ordinary explanation for the overcount (mis-logged death, double-counted share, sensor drift) one by
  one, procedural and tightening; confirms the gap is **~18 years deep**, not Sabine's; and out of pride
  opens a *quiet* inquiry rather than raise the hall — she will be the one to close the column.
  Introduce **Provost Halden** (institutional weight) and **Doss** (the airkeeper, uneasy). Ch.1 canon
  to honour is in the book-notes ledger: the **quittance** mechanic + Sabine's **clean whole adult
  share, no dependents** (must stay unspent — it's what Ilex is licensed against in ch.10); the
  **register-vs-model** reconciliation method; Kestrel's "sensor drift / Doss can recalibrate"; the
  **warm-tomato** Chekhov object; the model running **high by exactly one** as far back as the logs stay
  fine. Guard: **present tense**, held; Aster Coyle's taut procedural voice; **do not** re-reveal
  *Cartographer*'s secret (Sela's ch.3 scene may imply merciful fictions, no more). Chapter map + dials
  + "Ch.1 canon" in `notes/books/the-overcount/book-notes.md`.
- **The One-O'Clock Bus is at 3/10 (grown 08-02) — ch.4 "The Blue Book" is next**: the canteen at
  3 a.m. Cornered by the find, Abel tells Priya the **truth of the hour** — and the relief of telling
  it is its own information; he shows her how it works (the one gentle impossibility, the honest thing
  it asks of whoever it delivers), then asks her to keep it off the record and **hears what he is
  doing — making a second forger of the first person to trust him with the truth.** She agrees,
  uneasily. **Place Vera's first scheduled ride-along (Friday) on the page here** (set up but not yet
  dated). New ch.3 canon to honour is in the book-notes ledger: the covenant taught verbatim; Priya's
  aptitude (reads cab + road); the **Cyril** delivery (company/withholding, deliberately unlike ch.1);
  the **lie asymmetry** (Vera lie kept / Priya lie "tasted of tin" — guard it); the **Corvus
  escalation** (17 *opened* her doors on an empty street, blue book now reads *Opened* — the false
  book's first crack about Corvus); the second **"Nothing there"** rhymed with Vera's; Priya holding
  the blue book open ("This isn't the route as printed"). Still unspent: the blue-book aphorism
  (ch.8–9), Efua/Ama/the letter (still unnamed on the page; ch.5 opens Corvus), Nadia (ch.5).
- **The Blindfold Act is past its midpoint (4/6, grown 07-24) — ch.5 "What She Taught Her" is next**,
  the confrontation: **Sonora + Lark alone**, the truth of that night comes out from the girl's own
  mouth (the skim discovered → cornered in the wagon → the threat to send her back → the shove → the
  fall against the iron stove — accident born of terror, off-page/recounted, never depicted). The vise
  closes: the act Sonora loves, the family, the road — against the girl. Ch.4's new canon to honour is
  in the book-notes ledger: the **split-crime pivot** (inside pilfering + the Colonel's death set back
  on **Bruno**, who is now in real danger — ch.6's clearing of Bruno must cost *Sonora*, not indict a
  villain); the **spare-hasp gaff still withheld from the sheriff**; Lark's **wall now flawless** (she
  manages her breath — the ch.5 confrontation must break *that*, not a face); Sonora went to her **with
  no plan and no nobility** (the confrontation can't hand her a courage she doesn't have yet — that's
  ch.6). Ch.5 must land against the ch.2 debt: **Lark already tried to tell her once**, in a doorway,
  for free, and Sonora refused it — so the truth arriving now is expensive, and Sonora knows it.
  Sonora's given name (**Ada Prewitt**) still rationed; the name coming off the act is a ch.6 move.
- **Cinderwick is one chapter from done.** At 6/7 the caper's finale, **ch.7 "The Name,"** is next
  whenever it's picked — Juno wins not by out-thieving Crane but by trusting Kit out loud and giving up
  the solo score; the Nightingale ends somewhere Crane can't reach; a door left ajar, not a sequel hook.
  Ch.6 left her cornered in the sprung cellar with the fourth thing spent, Kit revealed loyal, and Crane's
  real want (her, not the bird) named — the trust-not-a-plan move is all that's left. **First completion
  since 07-17 will land here.**
- **The two novellas are heading into their turns.** *The Wintering House* (8/11, grown 07-23) is
  inside **The Secret** — **ch.9 is next**: the Saturday-night frost watch pays off — the moss-hand
  is **Aldous**, the one griever who knows where his mother is (the beck-path footprint plant from
  ch.8); his side of the twelve years, and what the family means Agnes to become, setting ch.10's
  Offer. New ch.8 canon to honour is in the book-notes ledger: Ada Hale (name never said in the
  house; Charlotte's promise), Mrs Hale's "keep your money" exit, the eleventh sermon read yearly
  from the unclosed book, Marchbank's river line, E.M. still unanswered (open-thread rule: not a
  murder story). *Every Lock but Hers* (6/11,
  grown 07-21) next hits **ch.7 "What Mar Holds"** — daylight, Mar's office, the debt revealed (Mar
  covered for Nell the night Theo left; the lock on Nell's life is on the *inside*). Ch.6 set it up
  with no stalling left: Mar has already decided to spend her truth. Continuity to hold: Nell's own
  bolt left undrawn, keys-on-the-dash, the refused Marsh Lane job passing to a worse firm (Dani's
  clock runs toward ch.11). Ch.7 brief in `notes/books/every-lock-but-hers/book-notes.md`. Both
  novellas are mid-book and will stay in the blend's rotation for several runs yet.
- **Next plant** eligible on or after **2026-07-27** (last plant *The Wind She Would Not Keep*
  **07-24**) — the window is already open. **A pending Cartographer sequel now sits first in the
  plant queue** (rolled 08-02, above): the next plant window should blueprint that sequel into the
  Long Quiet before rolling a fresh universe + form. The finale-at-~1.5× word-pick costing stays
  standing.
- **The Wind She Would Not Keep is at 2/3 (grown 08-02) — ch.3 "The Whole Stall for One Bottle" is
  next** (the finale, ~1.5× ≈ 2,900 words; it closes the book): Zari **breaks the standing order — pays
  Hadi's fair forfeit herself, not a trick.** She sells Naima the **sea-wind for one coin** and hands the
  Ninth Waystation — cloth, shelves, deed — entire to Sabr, per the clause read aloud in ch.1. Care over
  cleverness (book-one's growth at a higher price). The grandfather gets his sea (**gentle, off-page, not
  shown dying**). The **Salt Road story-logic payoff:** the winds won't *keep* for a man who cages them —
  Sabr's shelves stand full, silent, worthless (dead air), the point made **without a fight or a wound**.
  The moral lands sideways in Adem's ledger voice; the told-aloud frame closes; Zari walks out poorer and
  larger, knowingly this time. **Ch.2 canon to honour is in the book-notes ledger:** the self-soothing
  *sum* (pay it — the flaw she finally overrules); the three refused walk-ups (the exclusivity draining
  her trade); Rafiq already spent (do **not** bring him back for a scene); Naima's plainness and her
  "thank you for looking"; the grandfather asks nothing; the end-state **hairline** in her held-breath
  safety. Ch.1 canon still live: the **forfeit clause exact wording** (its cloth, its shelves, its deed,
  revert entire to the buyer — in full, for that one bottle); Hadi's sincere grief (release the storm-that-
  took-his-people backstory in a small piece here, no dump); Hadi is **not a cartoon miser**; keep the
  register bright/propulsive, gripping-before-sad. Release it and the book completes (3/3) — the farm's
  **first completion since 07-17**, and the Salt Road's first completed short story.
- **The Hundredth Wind is at 3/7 (grown 07-25) — ch.4 "The Second Try" is next.** By **trickery**:
  Basri writes a confession that is *almost* true (Nuru died in the storm; he took the bottle after),
  rehearses it like an act, and performs it to the wind with the glass ready. The wind **flips the
  pages out of his hands mid-performance and posts one page each on the doors of the next three towns**
  (escalation: pages). **Noor — who heard the false note before the wind did — stops trusting him** and
  quietly writes to the Emir that the catch is failing; the reply comes by fast rider: the Emir is
  coming with vault-wagons and iron nets (sets ch.5). New ch.3 canon to honour is in the book-notes
  ledger: the mastery-name **"Opener"** already spent and refused; the **stopper is now in the wind's
  keeping** (can surface "on a doorstep among the wind's airings" in ch.4); the wind now runs **Basri's
  road**, not its circuit; his half-seen knowledge that the name "is in the pocket" — but the ch.4
  trick is the *almost*-truth, **not** the truth. Still guarded: the **proving law** (verbatim, ch.2)
  springs at the House's threshold in **ch.7**; **Emir's grief is ch.5**; **Nuru's name/kinship + the
  full truth are ch.6**. It stays the shelf's highest incompleteness — leads the blend's next runs.
  Chapter map + style dials + "Ch.3 — new canon" in `notes/books/the-hundredth-wind/book-notes.md`.
- **Grow-count RESOLVED (07-18, Fairy Fox):** the daily grow rate is now **exactly 1 book/day** (one
  whole chapter, single least-tended book) — the old 2-vs-5-vs-3 discrepancy is closed, one number
  wins everywhere (`operating-model.md`, `CLAUDE.md`, `craft/serialization.md`, and the
  `fairyfox-stories-daily` task prompt all say 1). Plant cadence unchanged (≤1 every 3 days). See
  `decisions/architecture.md` (2026-07-18).
- **Needs Fairy Fox — sequel-lock, part (b) only, now on a deadline (07-21):** part (a) is **done as of
  this run** — a book's `state` is now derived from the chapters on disk and enforced by `npm test`, and
  a `sequelLock: true` book at full chapters **must** be `complete-no-sequel`, never a plain `complete`.
  What's still owed is **(b): exclude `sequelLock: true` books from the weekly sequel roll.** Left
  unwired deliberately — it changes the roll's semantics in `operating-model.md`, which isn't a bug fix.
  *The Blindfold Act* (2/6) is the only locked book and is nowhere near completion, so there's room.
- **Needs Fairy Fox:** review + merge the five Dependabot Actions PRs (#2–#6, deploy workflow) — held
  so an unattended grow release never rides an untested workflow change.
- **The `branch-sync` CI fix has shipped and is confirmed working** (was carried here as "on `dev`,
  awaiting the next release"). It rode v0.4.1 to `main`; `dev` and `main` were verified identical at
  `6e78be5` at the start of the 07-17 run. On the **v0.4.2 release it went green on the first attempt
  in 42s** — the retry (6×/30s) absorbing the by-design race where `branch-sync` checks `dev` in the
  seconds before the back-merge lands, exactly as designed. **Closed; no longer watch-listed.**
- **Deferred eyeball — LARGELY PAID (07-22).** Chrome **was** connected this run, and the reading
  surfaces were read in a browser for the first time since 07-11: the new **ch.2 page** (drop cap,
  12-min-read, "Chapter 2 of 10", measure/leading clean, no overflow, footer nav correct at the
  book's true last written chapter — prev + "Back to the book", no dangling next), the **Bus book
  landing** (cover, **20%** progress bar, "2 of 10 chapters written", mesh row), and **the whole
  shelf** — all nine cards, and **all nine covers now render** (the titled fallback is gone; the
  07-18 *Blindfold*/*Hundredth Wind* art backfill is confirmed by eye at last). Chrome bundle bits
  visible and behaving: coins counter, Farms dropdown. **What's still owed:** the *older* grown
  chapter pages were not individually re-read (they share one template with ch.2, which is now
  verified), and the **Phase 2 fairyfox items below still want their own dedicated pass** (reader
  panel line-spacing/width un-locking on a chapter and on the legal pages, locked-with-note off a
  story, Farms dropdown on mobile, the `/legal/coins/` link). Two cosmetic findings were logged to
  `plans/` rather than fixed mid-grow: covers are **1.3–1.9 MB PNGs** and lazy-load as grey cards on
  a cold scroll, and a card's **universe label clips without an ellipsis** at some widths. Prior
  wording kept below for the record. Chrome wasn't connected on most recent runs (eleven grow runs + the
  07-15, 07-18, and 07-21 plants — the 07-18 plant adds the *Hundredth Wind* card/landing/blueprint/ch.1 to the
  debt, 07-19 adds *Blindfold* ch.3, 07-21 adds *Every Lock* ch.6 **and the whole of *The One-O'Clock
  Bus* (card/landing/blueprint/ch.1 + its first `sequelTo` marking)**, 07-23 adds *Wintering* ch.8 —
  lower-risk since 07-22 verified the shared chapter template by eye), so new pages were verified
  structurally (`npm test`) and against
  the built Jekyll HTML but not read in a browser. All are prose + front-matter changes with no template or
  CSS edits — but the debt is now **twenty-seven grown chapter pages + the *Blindfold Act* card/ch.1 + the
  three completed-book cards** deep, worth one hard-reload pass over the shelf and the new pages next time a browser is up
  (typography, drop cap, overflow, the progress bars — now 45% / 64% / 86% on the three grown books —
  prev/next nav at a book's true last chapter, the **titled fallback cover** on the art-less *Blindfold*
  card, responsiveness). The `complete` state was headless-verified on 07-14 and renders right; the three
  `mark-done` badges were re-confirmed in built HTML on 07-17. No `state`/template change shipped 07-18.

## Health

| Area | Status |
|------|--------|
| Repo + branches (dev/main) | ✅ public repo on GitHub; `dev`/`main` in sync, released through **v1.1.2**; `main` branch-protected (solo config; required checks `test` + `CodeQL`); `dev` deletion/force-push-protected; auto-delete-on-merge on |
| Notes + craft body of knowledge | ✅ written (`reference/` incl. `craft/`) |
| Architecture decided | ✅ Jekyll · form-first · collection · comprehensive sub-notes (`decisions/`) |
| Jekyll scaffold (collections/layouts/reader) | ✅ built + previewed in Chrome |
| Books on the shelf | ✅ **11 on the shelf — 3 complete, 8 growing** (caper · cosy magical-realism · SF ×2 · gothic · fable ×3 · night-city magical-realism novella · carnival mystery · night-bus magical-realism novella · generation-ship SF thriller); *The Two-O'Clock Launderette* **finished 07-14**, the farm's first completed book; *The Girl Who Sold the Wind* + *The Cartographer of Decks* **both finished 07-17**; *The Hundredth Wind* **planted 07-18** — first universe-join + first author-reuse; *The One-O'Clock Bus* **planted 07-21** — the farm's **first sequel** (Hollow Hours = first three-book realm); *The Wind She Would Not Keep* **planted 07-24** — the **second sequel** and the **Salt Road's first short story**; *The Overcount* **planted 08-02** — the **third sequel** (the Long Quiet's first, now two books) and the shelf's **first present-tense book** |
| Authors / universes / characters | ✅ **8 author-personas** (Amara Okri and **Idris Okonkwo-Vance** each have two books; **Yusra Adem** 07-24; **Aster Coyle** added 08-02 for the Long Quiet's second book), 6 universes (**the Salt Road three books**; the Hollow Hours three; **the Long Quiet two** as of 08-02), **28 character pages** (Wren Astel, Ilex, Ondine Verrine, Provost Halden, Doss added 08-02; Sela Renn reused) — meshed + bylined |
| Cover & chapter art | ✅ **all 11 books have a cover + ch.1 header** (gpt-image-1 via `scripts/generate-art.mjs`) — *The Overcount* generated + viewed clean 08-02. The **PLANT task auto-generates** cover+header for every new book (headers at 1536×1024, not dall-e-3's 1792×1024), so no text-only fallbacks |
| Integrity check + CI | ✅ `scripts/check-stories.test.mjs` green (**6 checks** — state/sequel-lock consistency added 07-17) + `check-links` (57 files), runs on push/PR |
| GitHub Pages (`fairyfox.io/fairyfox-stories/`) | ✅ live (deploys on tagged release to `main`); last release **v1.1.2**, 2026-08-02 |
| Hub registration | ⛔ pending (hub-side edit) |
| Writing/art tooling (`.env` OpenAI key) | ✅ `.env` key present; art via `generate-art.mjs` (prose hand-drafted for now) |
| Self-hosted fonts / no third-party | ✅ vendored from the mesh |
| Legal docs | ✅ Privacy/Terms/Cookies re-scoped to Stories (verify wording on preview) |
