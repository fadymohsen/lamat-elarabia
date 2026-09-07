import { redirect } from "next/navigation";

// Fallback: middleware rewrites "/" to /ar, but if somehow reached directly, redirect
export default function RootPage() {
  redirect("/ar");
}
