"use server";

import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";
import { ActionState } from "./media";

const EDITABLE_KEYS = [
  "whatsapp_number",
  "phone_display",
  "email",
  "address_text",
  "address_url",
];

export async function saveSettings(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  await verifySession();

  for (const key of EDITABLE_KEYS) {
    const value = formData.get(key);
    if (value === null) continue;
    await query(
      `INSERT INTO site_settings (key, value, updated_at)
       VALUES ($1, $2, now())
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
      [key, value as string]
    );
  }

  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/news");
  revalidatePath("/training");
  revalidatePath("/admin/settings");

  return { success: true };
}
