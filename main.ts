import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Winner (D16, 24/25 from 26 drafts): the injury is half-believable, the
// twist lands in the last four words, and it reads like a real text to a boss.
// Chosen over runner-up D22 (back went out putting on socks, 23/25): D22's
// "I am 34" is a second beat that dilutes the punch, while D16's single
// image — losing a fight to the snooze button — lands in one breath.
const ENTRY =
  "I pulled a muscle reaching for the snooze button. The snooze button won.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
