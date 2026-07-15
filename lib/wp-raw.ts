import { readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "wpdata-raw");

export function readWpSection(name: string): string {
  return readFileSync(join(DIR, `${name}.html`), "utf8");
}
