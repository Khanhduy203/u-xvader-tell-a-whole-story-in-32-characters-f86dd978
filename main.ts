import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Wi-Fi network name of at most 32 characters: the funniest name
// that hints at a whole story. 31 characters, verified with len().
const NAME = "She Took The Dog, Left The WiFi";

if (!NAME.trim()) {
  throw new Error("entry must not be empty or whitespace only");
}
if (NAME.length > 32) {
  throw new Error("entry exceeds 32 characters");
}
if (/[\u0000-\u001f\u007f]/.test(NAME)) {
  throw new Error("entry must not contain control characters");
}
if (!/[A-Za-z0-9]/.test(NAME)) {
  throw new Error("entry must contain at least one letter or digit");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NAME, "utf8");
