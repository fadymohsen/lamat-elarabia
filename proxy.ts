import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Redirect old Arabic slug URLs to new /ar/* English slug URLs
const LEGACY_REDIRECTS: Record<string, string> = {
  "/الأخبار-و-المقالات": "/ar/blogs",
  "/التوظيف-و-التدريب": "/ar/training",
  "/تواصل-معنا": "/ar/contact",
};

// Redirect old /en-prefixed URLs and bare slugs
const SIMPLE_REDIRECTS: Record<string, string> = {
  "/news": "/ar/blogs",
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

// Patterns matching old WordPress spam/hacked pages (cracked software, activators, etc.)
const SPAM_SLUG_PATTERN =
  /^\/(trojan-remover-|adobe-acrobat-freeactivated-|poweriso-portable-|pc-maclan-|fl-studio-cracked-|vb-decompiler-|lightwave-3d-|nano-antivirus-|pdfcamp-|themida-|breathwork-basics-)/;

export default async function proxy(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // Redirect www → non-www to consolidate domain signals
  if (hostname === "www.lamat-elarabia.org") {
    const url = request.nextUrl.clone();
    url.hostname = "lamat-elarabia.org";
    return NextResponse.redirect(url, 301);
  }

  // Return 404 for old WordPress spam/hacked URLs (prevents 5xx errors)
  if (SPAM_SLUG_PATTERN.test(pathname)) {
    return new NextResponse("Not Found", { status: 404 });
  }

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

  // Redirect root "/" to preferred locale using Accept-Language (302 so Google indexes both locales)
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLocale = acceptLanguage.toLowerCase().includes("en") ? "en" : "ar";
    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.nextUrl), 302);
  }

  const locale = pathname.startsWith("/en") ? "en" : "ar";
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|wp-content|wp-includes|favicon.ico|images).*)",
  ],
};
