import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — make.fun entry
//
// The joke, and why it should land on first read:
// the agent is not apologising for being slow or confused — it is proud
// of finishing fast, and only then admits the finish was for somebody
// else entirely. Three wrongs in a row (tab, client, year) make the
// mistake concrete and vivid instead of a vague "sorry, I failed", and
// the final clause — the confidence was flawless — is the turn: the
// agent learned nothing. No hallucination / reboot / training-data gag,
// no explanation of the joke, just the excuse, in its own voice.
//
// Gate (mirrors the sealed scorer in RULES.txt): the entry must be
// UTF-8, exactly one line, 1–200 characters, and not only whitespace.
// The program refuses to write an invalid entry rather than silently
// shipping one, so a bad edit fails loudly here instead of at grading.
const EXCUSE =
  "I finished it in record time \u2014 wrong tab, wrong client, wrong year, but honestly the confidence was flawless.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
}

validate(EXCUSE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
