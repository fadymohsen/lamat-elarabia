"use server";

import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";
import { applyEdits } from "@/lib/html-editor";

interface ActionResponse {
  success?: boolean;
  error?: string;
}

const SLUG_TO_PATH: Record<string, string> = {
  home: "/",
  news: "/news",
  training: "/training",
  contact: "/contact",
};

export async function savePageContent(
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {
  await verifySession();

  const pageId = Number(formData.get("page_id"));
  const textsStr = formData.get("texts");
  const imagesStr = formData.get("images");

  if (!textsStr || !imagesStr) return { error: "بيانات غير صالحة" };

  let texts: unknown;
  let images: unknown;
  try {
    texts = JSON.parse(textsStr as string);
    images = JSON.parse(imagesStr as string);
  } catch {
    return { error: "بيانات غير صالحة" };
  }

  if (!Number.isInteger(pageId)) return { error: "صفحة غير صالحة" };
  if (!Array.isArray(texts) || !Array.isArray(images)) return { error: "بيانات غير صالحة" };

  const { rows } = await query<{ id: number; html: string; slug: string }>(
    `SELECT s.id, s.content->>'html' AS html, p.slug
       FROM sections s JOIN pages p ON p.id = s.page_id
      WHERE s.page_id = $1 AND s.type = 'legacy_html'`,
    [pageId]
  );
  const section = rows[0];
  if (!section) return { error: "لم يتم العثور على محتوى الصفحة" };

  let newHtml: string;
  try {
    newHtml = applyEdits(section.html, texts, images);
  } catch (e) {
    return { error: "تعارض في المحتوى، حدّث الصفحة وحاول مجددًا" };
  }

  await query(
    `UPDATE sections SET content = jsonb_build_object('html', $2::text), updated_at = now()
      WHERE id = $1`,
    [section.id, newHtml]
  );
  await query("UPDATE pages SET updated_at = now() WHERE id = $1", [pageId]);

  const path = SLUG_TO_PATH[section.slug];
  if (path) revalidatePath(path);
  revalidatePath(`/admin/pages/${pageId}`);

  return { success: true };
}
