// Builds the English pages: takes each Arabic page's HTML from the DB,
// substitutes every text node and image alt with the translation from
// db/_texts-en.json (same positional order as extractEditable), and upserts
// the result as locale='en'. Image srcs are unchanged.
//
// Usage:  DATABASE_URL=... node db/seed-en.mjs
import { readFileSync } from "node:fs";
import pg from "pg";
import { extractEditable, applyEdits } from "../lib/html-editor.ts";

const TITLES = {
  home: "Lamaat Al-Arabiya Contracting",
  news: "News & Articles",
  training: "Employment & Training",
  contact: "Contact Us",
};

const translations = JSON.parse(readFileSync("db/_texts-en.json", "utf8"));

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

const { rows } = await client.query(
  `SELECT p.slug, s.content->>'html' AS html
     FROM sections s JOIN pages p ON p.id = s.page_id
    WHERE p.locale = 'ar' AND s.type = 'legacy_html'
    ORDER BY p.slug`
);

for (const row of rows) {
  const t = translations[row.slug];
  if (!t) {
    console.log(`${row.slug}: no translations, skipped`);
    continue;
  }
  const { texts, images } = extractEditable(row.html);
  if (texts.length !== t.texts.length || images.length !== t.altTexts.length) {
    throw new Error(
      `${row.slug}: count mismatch (html: ${texts.length}t/${images.length}i, translations: ${t.texts.length}t/${t.altTexts.length}i)`
    );
  }
  const enHtml = applyEdits(
    row.html,
    t.texts,
    images.map((im, i) => ({ src: im.src, alt: t.altTexts[i] }))
  );

  const pageRes = await client.query(
    `INSERT INTO pages (slug, locale, title)
     VALUES ($1, 'en', $2)
     ON CONFLICT (slug, locale) DO UPDATE SET title = EXCLUDED.title, updated_at = now()
     RETURNING id`,
    [row.slug, TITLES[row.slug]]
  );
  const pageId = pageRes.rows[0].id;

  const existing = await client.query(
    "SELECT id FROM sections WHERE page_id = $1 AND type = 'legacy_html'",
    [pageId]
  );
  if (existing.rows.length === 0) {
    await client.query(
      `INSERT INTO sections (page_id, type, sort_order, content)
       VALUES ($1, 'legacy_html', 0, jsonb_build_object('html', $2::text))`,
      [pageId, enHtml]
    );
  } else {
    await client.query(
      `UPDATE sections SET content = jsonb_build_object('html', $2::text), updated_at = now()
       WHERE id = $1`,
      [existing.rows[0].id, enHtml]
    );
  }
  console.log(`${row.slug}: en seeded (${enHtml.length} chars)`);
}

await client.end();
