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

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NAME, "utf8");
