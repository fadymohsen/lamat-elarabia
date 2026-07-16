import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Redirect old Arabic slug URLs to new /ar/* English slug URLs
const LEGACY_REDIRECTS: Record<string, string> = {
  "/الأخبار-و-المقالات": "/ar/news",
  "/التوظيف-و-التدريب": "/ar/training",
  "/تواصل-معنا": "/ar/contact",
};

// Redirect old /en-prefixed URLs and bare slugs
const SIMPLE_REDIRECTS: Record<string, string> = {
  "/news": "/ar/news",
  "/training": "/ar/training",
  "/contact": "/ar/contact",
};

const SESSION_COOKIE = "lamat_admin_session";

async function hasValidSession(request: NextRequest): Promise<boolean> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;
  const encodedKey = new TextEncoder().encode(secret);
  const cookie = request.cookies.get(SESSION_COOKIE)?.value;
  if (!cookie) return false;
  try {
    await jwtVerify(cookie, encodedKey, { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle admin login page first
  if (pathname === "/adminlogin") {
    const authed = await hasValidSession(request);
    if (authed) {
      return NextResponse.redirect(new URL("/admin", request.nextUrl));
    }
    return NextResponse.next();
  }

  // Handle all /admin/* routes
  if (pathname.startsWith("/admin")) {
    const authed = await hasValidSession(request);
    if (!authed) {
      return NextResponse.redirect(new URL("/adminlogin", request.nextUrl));
    }
    return NextResponse.next();
  }

  // Redirect legacy Arabic slug URLs (permanent 301)
  const decoded = decodeURIComponent(pathname).replace(/\/$/, "") || "/";
  const legacyTarget = LEGACY_REDIRECTS[decoded];
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, request.nextUrl), 301);
  }

  // Redirect bare slugs without locale prefix
  const simpleTarget = SIMPLE_REDIRECTS[pathname];
  if (simpleTarget) {
    return NextResponse.redirect(new URL(simpleTarget, request.nextUrl), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|wp-content|wp-includes|favicon.ico|images).*)",
  ],
};
