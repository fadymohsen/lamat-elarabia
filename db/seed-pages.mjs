// Seeds the pages + sections tables from the HTML baked into the page
// components. Idempotent: re-running overwrites the stored HTML with the
// file version ONLY when the section row doesn't exist yet (so admin edits
// in the DB are never clobbered). Pass --force to overwrite anyway.
//
// Usage:  DATABASE_URL=... node db/seed-pages.mjs [--force]
import { readFileSync } from "node:fs";
import { Client } from "pg";

const PAGES = [
  { slug: "home", file: "components/legacy/HomePage.tsx", title: "الرئيسية" },
  { slug: "news", file: "components/legacy/NewsPage.tsx", title: "الأخبار و المقالات" },
  { slug: "training", file: "components/legacy/TrainingPage.tsx", title: "التوظيف و التدريب" },
  { slug: "contact", file: "components/legacy/ContactPage.tsx", title: "تواصل معنا" },
];

const force = process.argv.includes("--force");

function extractMainHtml(file) {
  const src = readFileSync(file, "utf8");
  // The main content blob is the __html literal that immediately follows the
  // div#content marker. Inner quotes are backslash-escaped in the literal, so
  // the first bare `" }}` after the opening quote terminates it.
  const contentDiv = src.indexOf('className={locale === "en" ? "site-content en-ltr" : "site-content"}');
  const indexToUse = contentDiv !== -1 ? contentDiv : src.indexOf('className="site-content"');
  if (indexToUse === -1) throw new Error(`no site-content div in ${file}`);
  const marker = '__html: ';
  const start = src.indexOf(marker, contentDiv);
  if (start === -1) throw new Error(`no __html after site-content in ${file}`);
  const litStart = start + marker.length;
  // Literal may open with `"` (original) or with `dbHtml ?? "` (after the
  // DB-fallback refactor); find the first quote either way.
  const quote = src.indexOf('"', litStart);
  const end = src.indexOf('" }}', quote + 1);
  if (end === -1) throw new Error(`no literal terminator in ${file}`);
  const literal = src.slice(quote, end + 1);
  // Trusted local file - evaluate the JS string literal to get raw HTML.
  return eval(literal);
}

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

for (const page of PAGES) {
  const html = extractMainHtml(page.file);
  const { rows } = await client.query(
    `INSERT INTO pages (slug, locale, title)
     VALUES ($1, 'ar', $2)
     ON CONFLICT (slug, locale) DO UPDATE SET title = EXCLUDED.title
     RETURNING id`,
    [page.slug, page.title]
  );
  const pageId = rows[0].id;

  const existing = await client.query(
    "SELECT id FROM sections WHERE page_id = $1 AND type = 'legacy_html'",
    [pageId]
  );

  if (existing.rows.length === 0) {
    await client.query(
      `INSERT INTO sections (page_id, type, sort_order, content)
       VALUES ($1, 'legacy_html', 0, jsonb_build_object('html', $2::text))`,
      [pageId, html]
    );
    console.log(`${page.slug}: seeded (${html.length} chars)`);
  } else if (force) {
    await client.query(
      `UPDATE sections SET content = jsonb_build_object('html', $2::text), updated_at = now()
       WHERE id = $1`,
      [existing.rows[0].id, html]
    );
    console.log(`${page.slug}: overwritten with file version (--force)`);
  } else {
    console.log(`${page.slug}: already seeded, skipped (use --force to overwrite)`);
  }
}

await client.end();
