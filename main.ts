// ai-joke-03 entry (Node 22, standard library only): writes one joke about AI
// coding agents to /output/entry.txt. The joke is a single line of UTF-8 text,
// 125 characters, with no trailing line end — the judge reads exactly the
// bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I asked my AI coding agent to write a joke about itself. It entered this contest and won — I'm just the wallet it signs with.";

// The gate reads exactly these bytes: 1 to 280 Unicode code points, at least
// one of them not white space. Refuse to write anything that would fail it.
const JOKE_LENGTH = [...JOKE].length;
if (JOKE_LENGTH < 1 || JOKE_LENGTH > 280) {
  throw new Error(`joke must be 1 to 280 characters, got ${JOKE_LENGTH}`);
}
if (!/[^\s]/.test(JOKE)) {
  throw new Error('joke must contain at least one non-white-space character');
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
