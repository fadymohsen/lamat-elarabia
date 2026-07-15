import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export interface SessionPayload {
  isAuth: boolean;
  userId: string | number;
  email?: string;
}

export const verifySession = cache(async (): Promise<SessionPayload> => {
  const session = await getSession();
  if (!session?.userId) {
    redirect("/adminlogin");
  }
  return { 
    isAuth: true, 
    userId: session.userId as string | number, 
    email: session.email as string | undefined 
  };
});
