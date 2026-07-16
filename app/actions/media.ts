"use server";

import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";

export interface ActionState {
  success?: boolean;
  error?: string;
}

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export async function uploadMedia(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  await verifySession();

  const file = formData.get("file");
  const altText = (formData.get("alt_text") as string) || "";

  if (!file || typeof file === "string" || file.size === 0) {
    return { error: "اختر صورة أولاً" };
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return { error: "نوع الملف غير مسموح. الأنواع المسموحة: JPEG, PNG, WebP, GIF, AVIF" };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { error: "حجم الملف يتجاوز الحد الأقصى (10 ميغابايت)" };
  }

  const blob = await put(file.name, file, {
    access: "public",
    addRandomSuffix: true,
  });

  await query(
    "INSERT INTO media (url, pathname, alt_text) VALUES ($1, $2, $3)",
    [blob.url, blob.pathname, altText]
  );

  revalidatePath("/admin/media");
  return { success: true };
}

export async function updateMediaAlt(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  await verifySession();
  const id = Number(formData.get("id"));
  const altText = (formData.get("alt_text") as string) || "";
  if (!Number.isInteger(id)) return { error: "معرف غير صالح" };
  await query("UPDATE media SET alt_text = $1 WHERE id = $2", [altText, id]);
  revalidatePath("/admin/media");
  return { success: true };
}

export async function deleteMedia(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  await verifySession();
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return { error: "معرف غير صالح" };

  const { rows } = await query<{ pathname: string }>(
    "SELECT pathname FROM media WHERE id = $1",
    [id]
  );
  if (rows[0]?.pathname) {
    try {
      await del(rows[0].pathname);
    } catch {
      // Blob may already be deleted; proceed with DB cleanup
    }
  }

  await query("DELETE FROM media WHERE id = $1", [id]);
  revalidatePath("/admin/media");
  return { success: true };
}
