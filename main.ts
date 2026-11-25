import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the calendar "Focus Time" block is a meeting with
// yourself — and the punch is that you are still late to it.
const joke =
  "My calendar has a daily block called 'Focus Time' — a meeting with myself, and I still show up late to it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here instead of shipping an invalid entry.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${joke.length}`);
}
if (joke.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote ${joke.length} chars to /output/entry.txt`);
