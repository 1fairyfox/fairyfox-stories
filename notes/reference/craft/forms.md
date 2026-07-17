# The Forms — roll one, then write to its structure

_Read this before planting any book._ Every book **is** a form: short story, novelette,
novella, or (rarely) a novel. The form is not just a length — it's a **different machine**,
with its own structure, POV budget, subplot tolerance, chaptering, and pacing. You write a
novella very differently from a short story or a novel. Choosing the form first is what lets
the book be planned *correctly*.

The length bands are the field's rough consensus (they overlap; disagreement exists) —
sources: [MasterClass — forms](https://www.masterclass.com/articles/learn-the-differences-between-novelettes-novellas-and-novels),
[MW Editing](https://www.mwediting.com/novel-novella-novelette/),
[Ignited Ink](https://www.ignitedinkwriting.com/ignite-your-ink-blog-for-writers/whats-the-difference-between-a-novel-novella-and-short-story-and-why-should-you-care/2021),
[Wikipedia — Novella](https://en.wikipedia.org/wiki/Novella).

## How the form is chosen

Roll on planting. **Weights:** short story ~30%, novelette ~37%, novella ~28%,
**novel ~5% (rare)**. Then draw a specific max word count from the rolled band. The form is
recorded in the book's `manifest.json` (`form`, `wordCap`) and drives the whole blueprint.

**A rare novel is still fully crafted.** Rarity is about frequency, never about care — a
100k novel gets the same complete blueprint and the same quality bar as everything else.

---

## Short story — 1,500–7,500 words

- **The law: a single effect.** One character, one situation, one decisive turn, one
  resonant impression left behind. Everything not serving that effect is cut.
- **POV & cast:** one POV; a small cast; the protagonist is the only fully developed figure.
- **Subplot:** essentially none. No major twists stacked on twists.
- **Chapters:** usually none, or 1–4 short beats separated by white space.
- **Shape:** open *in motion* (no warm-up), escalate, turn, land. Compression is the style —
  a single image can do the work of a page.
- **Failure mode:** trying to fit a novel's worth of plot into it. If it needs subplots, it's
  the wrong form.

## Novelette — 7,500–17,500 words

- **One clear arc with room to breathe.** More scene, more texture, a fuller middle than a
  short story — but still a single spine.
- **POV & cast:** one POV (rarely two); one or two supporting characters who matter.
- **Subplot:** at most **one**, tight and hooked to the main line.
- **Chapters:** 4–9, each a real scene/beat with its own small arc.
- **Shape:** the short story's discipline with a genuine second act. An evening's read.

## Novella — 17,500–40,000 words

- **One central conflict + one meaningful change.** The novella's power is *concentration*:
  it goes deep on a single thread rather than wide. If the story is "one conflict, one
  transformation," it's a novella ([MW Editing](https://www.mwediting.com/novel-novella-novelette/)).
- **POV & cast:** one, occasionally two POVs; development focuses on the protagonist.
- **Subplot:** few, and each closely tied to the main conflict — never a wandering B-plot.
- **Chapters:** ~9–20; white-space section breaks are common.
- **Pacing is your job:** you can't warm up for 80 pages. Clear hook, steady rising tension,
  an ending that lands — aimed at a near-single-sitting *unitary effect*.
- **Concision is mandatory:** every chapter, scene, and line has a distinct purpose; there's
  no room for pointless subplot or drawn-out explanation.

## Novel — 40,000–100,000+ words *(rare)*

- **Multiple arcs and subplots, interwoven.** The main plot plus B/C-plots that echo or
  complicate the theme; a cast where supporting characters get real arcs of their own.
- **POV & cast:** one to several POVs; a larger, fully realized ensemble.
- **Structure:** act structure (commonly three acts / four parts) with **rising and falling
  action throughout** — midpoint shift, escalating complications, a low point, a converging
  climax, a resolution that pays off the threads.
- **Chapters:** 20–40+, grouped into parts/acts; each chapter both advances a thread and
  pulls to the next.
- **The trap:** length as an excuse for slack. A novel earns its size with genuine
  complexity, not padding — every subplot must matter.

---

## Budget the finale, not just the chapters (learned 2026-07-17)

Two novelettes finished on the same run and taught the same lesson from opposite directions: **the
last chapter is not an average chapter, and the word-pick should say so at planting.**

*The Girl Who Sold the Wind* landed its five chapters at ~10,200 against a ~9,200 pick — the whole
overrun in ch.5, because a **framed** book (a narrator telling this aloud to someone) owes two
endings: the tale's and the telling's. The turn, the payment, and the moral all land — and *then* the
frame still has to close, and the frame-close is where the moral goes sideways and stops being a
lecture. That is not padding; it is the form. *The Cartographer of Decks* came in at ~11,200 against
~11,800 with the same shape of finale and no strain, because the pick had room in it.

The rule, going forward: at planting, **draw the word-pick with the last chapter costed at ~1.5× a
middle chapter** — more if the book is framed, has a coda, or resolves through understanding rather
than event (all three make the ending a scene, not a beat). If the pick can't carry that, the pick is
too tight for the chapter count, not the finale too long.

And when a finished book does run past its pick: it is **inside the band or it isn't.** Inside — keep
the prose, record the delivered length honestly in the blueprint, and leave `wordCap` as the planted
record of the roll (never edit the roll to match the result; the audit trail is worth more than the
tidy number). Outside the band — the *form* was wrong, which is a real finding and belongs in
`decisions/`.

---

## Planting checklist (form fit)

1. Can the premise's engine actually fill the rolled form — or is it a short story wearing a
   novella's coat (or vice-versa)? Re-roll or re-scope until the engine matches the form.
2. Does the blueprint use the form's structure (POV budget, subplot count, chaptering,
   pacing shape) — not a generic template?
3. For novella/novel: is every subplot hooked to the main line and theme?
4. For short story/novelette: have you resisted stacking plot the form can't carry?
