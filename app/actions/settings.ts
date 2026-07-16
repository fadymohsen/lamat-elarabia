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

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function saveSettings(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  await verifySession();

  // Validate address_url if provided
  const addressUrl = formData.get("address_url");
  if (addressUrl && typeof addressUrl === "string" && addressUrl.trim() !== "") {
    if (!isValidUrl(addressUrl)) {
      return { error: "رابط خرائط جوجل غير صالح. يجب أن يبدأ بـ https://" };
    }
  }

  // Validate email format
  const email = formData.get("email");
  if (email && typeof email === "string") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: "البريد الإلكتروني غير صالح" };
    }
  }

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
