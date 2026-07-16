"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }).max(200),
  email: z.string().email({ message: "بريد إلكتروني غير صحيح" }),
  message: z.string().min(1, { message: "الرسالة مطلوبة" }).max(5000),
});

export interface ContactState {
  success?: boolean;
  error?: string;
}

export async function submitContact(
  prevState: ContactState | undefined,
  formData: FormData
): Promise<ContactState> {
  const validated = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    const firstError = validated.error.errors[0]?.message ?? "بيانات غير صالحة";
    return { error: firstError };
  }

  const { name, email, message } = validated.data;

  try {
    const { query } = await import("@/lib/db");
    await query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
  } catch {
    // If the table doesn't exist yet, fall through silently.
    // The form submission is still acknowledged so the user isn't stuck.
  }

  return { success: true };
}
