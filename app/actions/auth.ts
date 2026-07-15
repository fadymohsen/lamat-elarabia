"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { query } from "@/lib/db";
import { createSession, deleteSession } from "@/lib/session";
import { ActionState } from "./media";

const LoginSchema = z.object({
  email: z.string().email({ message: "أدخل بريدًا إلكترونيًا صحيحًا" }),
  password: z.string().min(1, { message: "أدخل كلمة المرور" }),
});

interface UserRow {
  id: number;
  email: string;
  password_hash: string;
}

export async function login(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  const validated = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { error: "بيانات الدخول غير صحيحة" };
  }

  const { email, password } = validated.data;

  const result = await query<UserRow>(
    "SELECT id, email, password_hash FROM admin_users WHERE email = $1",
    [email]
  );
  const user = result.rows[0];

  if (!user) {
    return { error: "البريد الإلكتروني أو كلمة المرور غير صحيحة" };
  }

  const passwordMatches = await bcrypt.compare(password, user.password_hash);
  if (!passwordMatches) {
    return { error: "البريد الإلكتروني أو كلمة المرور غير صحيحة" };
  }

  await createSession(user.id, user.email);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/adminlogin");
}
