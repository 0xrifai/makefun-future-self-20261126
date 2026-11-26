// Texts From Your Future Self — make.fun entry.
//
// One funny text message from the writer's future self, written to the
// absolute output path the sealed grader reads. No network, no clock, no
// randomness: the same run always produces the same file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The message, exactly as it would arrive on the phone. 163 characters:
// a reply-all disaster, reported back from the future like a weather
// update, with a second jab at "per my last email" to close.
const LINE =
  "Future you here. You just hit reply-all to all 4,000 employees. " +
  "Good news: you're famous now. Bad news: it's for that email. " +
  "Also, stop typing 'per my last email.'";

// The entry must be 1-200 characters for the sealed gate, so fail loudly
// here rather than shipping a file the grader would reject.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

writeEntry("/output");
if (OUTPUT_DIR !== "/output") {
  writeEntry(OUTPUT_DIR);
}
