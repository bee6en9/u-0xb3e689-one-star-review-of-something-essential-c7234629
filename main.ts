import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of something essential (deadpan, single line).
// Winner of the creative-director pass: the sharpest true grievance of
// sleep is not that it takes eight hours, but that it returns anxiety
// instead of rest. Specificity test: swap "Sleep" for any other
// essential and the joke collapses.
// Entry text: 81 characters, no trailing newline, fully deterministic
// (constant string, no network, no randomness, no dependencies).
const ENTRY =
  "One star. Sleep promised me rest and delivered a dream about being late for work.";

// Gate: UTF-8 text of 1 to 160 characters, not only white space.
const length = [...ENTRY].length;
if (length < 1 || length > 160) {
  throw new Error(`entry length ${length} is outside the 1-160 character gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
