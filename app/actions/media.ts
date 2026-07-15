"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";

export interface ActionState {
  success?: boolean;
  error?: string;
}

export async function uploadMedia(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  await verifySession();

  const file = formData.get("file");
  const altText = (formData.get("alt_text") as string) || "";

  if (!file || typeof file === "string" || file.size === 0) {
    return { error: "اختر صورة أولاً" };
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

export async function updateMediaAlt(id: number, altText: string): Promise<void> {
  await verifySession();
  await query("UPDATE media SET alt_text = $1 WHERE id = $2", [altText, id]);
  revalidatePath("/admin/media");
}

export async function deleteMedia(id: number): Promise<void> {
  await verifySession();
  await query("DELETE FROM media WHERE id = $1", [id]);
  revalidatePath("/admin/media");
}
