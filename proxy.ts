import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Rewrite old Arabic slug URLs to new /ar/* English slug URLs
const LEGACY_REDIRECTS: Record<string, string> = {
  "/الأخبار-و-المقالات": "/ar/blogs",
  "/التوظيف-و-التدريب": "/ar/training",
  "/تواصل-معنا": "/ar/contact",
};

// Rewrite old /en-prefixed URLs and bare slugs
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

  // Rewrite legacy Arabic slug URLs (avoids redirect chains in GSC)
  const decoded = decodeURIComponent(pathname).replace(/\/$/, "") || "/";
  const legacyTarget = LEGACY_REDIRECTS[decoded];
  if (legacyTarget) {
    const url = request.nextUrl.clone();
    url.pathname = legacyTarget;
    return NextResponse.rewrite(url);
  }

  // Rewrite bare slugs without locale prefix
  const simpleTarget = SIMPLE_REDIRECTS[pathname];
  if (simpleTarget) {
    const url = request.nextUrl.clone();
    url.pathname = simpleTarget;
    return NextResponse.rewrite(url);
  }

  // Rewrite root "/" to /ar (no redirect — avoids GSC "page with redirect" warnings)
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/ar";
    return NextResponse.rewrite(url);
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
