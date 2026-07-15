// Generates the mirrored (LTR) copies of the per-page Elementor CSS files
// used by the English site: post-XXXX.css -> post-XXXX-en.css.
// Re-run after replacing any of the source files.
//
// Usage:  node db/build-en-css.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { flipCss } from "../lib/flip-css.ts";

const DIR = "public/wp-content/uploads/elementor/css";
const FILES = ["post-3614.css", "post-4940.css", "post-4943.css", "post-4946.css", "post-4949.css"];

for (const f of FILES) {
  const src = readFileSync(`${DIR}/${f}`, "utf8");
  const flipped = flipCss(src);
  const out = f.replace(".css", "-en.css");
  writeFileSync(`${DIR}/${out}`, flipped);
  console.log(`${out}: ${flipped.length} chars`);
}
