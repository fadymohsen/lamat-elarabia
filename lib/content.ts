import { query } from "@/lib/db";

export async function getPageHtml(slug: string, locale: string = "ar"): Promise<string | undefined> {
  try {
    const { rows } = await query<{ html: string }>(
      `SELECT s.content->>'html' AS html
         FROM sections s
         JOIN pages p ON p.id = s.page_id
        WHERE p.slug = $1 AND p.locale = $2 AND s.type = 'legacy_html'
        ORDER BY s.sort_order
        LIMIT 1`,
      [slug, locale]
    );
    return rows[0]?.html;
  } catch {
    return undefined;
  }
}
