// Integrity check for the Fairy Fox Stories mesh. Prose can't be unit-tested, but its
// STRUCTURE can — this validates front-matter, chapter counts, progress/state, and every
// cross-reference (book↔universe↔character↔city, and universe bridges). Zero dependencies;
// runs under Node's built-in test runner via `npm test` (node --test scripts/).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const FORMS = ['short story', 'novelette', 'novella', 'novel'];
const STATES = ['planned', 'growing', 'complete', 'complete-no-sequel'];

// ── tiny front-matter reader (supports scalars and inline [a, b] arrays) ──────
function frontMatter(file) {
  const text = readFileSync(file, 'utf8');
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 3);
  if (end < 0) return {};
  const out = {};
  for (const line of text.slice(3, end).split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let [, k, v] = m;
    v = v.trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      out[k] = v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else {
      out[k] = v.replace(/^["']|["']$/g, '');
    }
  }
  return out;
}
const dir = (p) => (existsSync(join(ROOT, p)) ? readdirSync(join(ROOT, p)) : []);
const slugsIn = (p) => dir(p).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));

// ── load the collections ──────────────────────────────────────────────────────
const books = slugsIn('_books').map(slug => ({ slug, fm: frontMatter(join(ROOT, '_books', slug + '.md')) }));
const universes = new Set(slugsIn('_universes'));
const characters = new Set(slugsIn('_characters'));
const cities = new Set(slugsIn('_cities'));
const authors = new Set(slugsIn('_authors'));

function chaptersFor(slug) {
  const p = join(ROOT, '_chapters', slug);
  if (!existsSync(p)) return [];
  return readdirSync(p).filter(f => f.endsWith('.md'))
    .map(f => ({ file: f, fm: frontMatter(join(p, f)) }));
}

test('every book has valid, complete front-matter', () => {
  for (const { slug, fm } of books) {
    assert.equal(fm.slug, slug, `_books/${slug}.md: slug must equal "${slug}"`);
    assert.ok(fm.title, `${slug}: title required`);
    assert.ok(FORMS.includes(fm.form), `${slug}: form "${fm.form}" not one of ${FORMS.join(', ')}`);
    assert.ok(Number(fm.chaptersPlanned) >= 1, `${slug}: chaptersPlanned must be >= 1`);
    assert.ok(Number(fm.wordCap) > 0, `${slug}: wordCap must be a positive number`);
    assert.ok(STATES.includes(fm.state), `${slug}: state "${fm.state}" not one of ${STATES.join(', ')}`);
  }
});

test('book universe / author / character / city tags resolve', () => {
  for (const { slug, fm } of books) {
    if (fm.universe) assert.ok(universes.has(fm.universe), `${slug}: universe "${fm.universe}" has no _universes entry`);
    if (fm.author) assert.ok(authors.has(fm.author), `${slug}: author "${fm.author}" has no _authors entry`);
    for (const c of fm.characters || []) assert.ok(characters.has(c), `${slug}: character "${c}" has no _characters entry`);
    for (const c of fm.cities || []) assert.ok(cities.has(c), `${slug}: city "${c}" has no _cities entry`);
  }
});

test('chapters reference a real book, are ordered, and do not exceed the plan', () => {
  const bySlug = new Map(books.map(b => [b.slug, b]));
  for (const { slug, fm } of books) {
    const chs = chaptersFor(slug);
    const planned = Number(fm.chaptersPlanned);
    assert.ok(chs.length <= planned, `${slug}: ${chs.length} chapters written exceeds chaptersPlanned ${planned}`);
    const orders = new Set();
    for (const { file, fm: cfm } of chs) {
      assert.equal(cfm.book, slug, `_chapters/${slug}/${file}: book must be "${slug}"`);
      assert.ok(cfm.title, `_chapters/${slug}/${file}: title required`);
      const n = Number(cfm.order);
      assert.ok(Number.isInteger(n) && n >= 1, `_chapters/${slug}/${file}: order must be a positive integer`);
      assert.ok(!orders.has(n), `${slug}: duplicate chapter order ${n}`);
      orders.add(n);
    }
    // a completed book must have all planned chapters
    if (fm.state === 'complete' || fm.state === 'complete-no-sequel') {
      assert.equal(chs.length, planned, `${slug}: state "${fm.state}" but ${chs.length}/${planned} chapters written`);
    }
    assert.ok(bySlug.has(slug));
  }
});

// The shelf's progress bar, the least-tended-first pick, and the sequel roll all read `state`.
// A book that quietly stays `growing` after its last chapter lands would sit in the grow pool
// forever and never reach the sequel pool — so derive the truth from the chapters on disk and
// assert the manifest agrees. This also enforces the sequel-lock's consuming half: a locked book
// does not get to finish as a plain `complete`, because `complete` is what the weekly roll reads.
test('book state matches chapters written, and sequel-lock is honoured at completion', () => {
  for (const { slug, fm } of books) {
    const written = chaptersFor(slug).length;
    const planned = Number(fm.chaptersPlanned);
    const locked = String(fm.sequelLock) === 'true';

    if (written === 0) {
      assert.equal(fm.state, 'planned', `${slug}: 0/${planned} chapters written but state is "${fm.state}"`);
    } else if (written < planned) {
      assert.equal(fm.state, 'growing', `${slug}: ${written}/${planned} chapters written but state is "${fm.state}"`);
    } else {
      const expected = locked ? 'complete-no-sequel' : 'complete';
      assert.equal(fm.state, expected,
        `${slug}: ${written}/${planned} chapters written and sequelLock ${locked} — state must be "${expected}", found "${fm.state}"`);
    }

    // `complete-no-sequel` is the sequel-lock's marking; it must never appear without the lock.
    if (fm.state === 'complete-no-sequel') {
      assert.ok(locked, `${slug}: state "complete-no-sequel" but sequelLock is not true`);
    }
  }
});

test('every book has a public blueprint', () => {
  for (const { slug } of books) {
    const bp = join(ROOT, 'stories', slug, 'blueprint.md');
    assert.ok(existsSync(bp) && statSync(bp).isFile(), `${slug}: missing stories/${slug}/blueprint.md`);
    assert.equal(frontMatter(bp).book, slug, `${slug}: blueprint front-matter book must be "${slug}"`);
  }
});

test('universe bridges are symmetric', () => {
  for (const u of universes) {
    const fm = frontMatter(join(ROOT, '_universes', u + '.md'));
    for (const other of fm.bridges || []) {
      assert.ok(universes.has(other), `universe ${u}: bridge "${other}" does not exist`);
      const back = frontMatter(join(ROOT, '_universes', other + '.md')).bridges || [];
      assert.ok(back.includes(u), `universe bridge not symmetric: ${u} → ${other} but not back`);
    }
  }
});
