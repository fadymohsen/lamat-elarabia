"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
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

// Simple in-memory rate limiter: max 5 attempts per key per 15 minutes
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_ATTEMPTS;
}

export async function login(prevState: ActionState | undefined, formData: FormData): Promise<ActionState> {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (checkRateLimit(ip)) {
    return { error: "تم تجاوز عدد المحاولات المسموح. حاول مرة أخرى بعد 15 دقيقة." };
  }

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

  // Clear rate limit on success
  attempts.delete(ip);

  await createSession(user.id, user.email);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/adminlogin");
}
