import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SLUG_MAP: Record<string, string> = {
  "/الأخبار-و-المقالات": "/news",
  "/التوظيف-و-التدريب": "/training",
  "/تواصل-معنا": "/contact",
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

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authed = await hasValidSession(request);
  const isLoginRoute = pathname === "/adminlogin";

  if (pathname.startsWith("/admin") || pathname === "/adminlogin") {
    if (!authed && !isLoginRoute) {
      return NextResponse.redirect(new URL("/adminlogin", request.nextUrl));
    }
    if (authed && isLoginRoute) {
      return NextResponse.redirect(new URL("/admin", request.nextUrl));
    }
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  const withPath = { request: { headers: requestHeaders } };

  const decoded = decodeURIComponent(pathname).replace(/\/$/, "") || "/";

  const target = SLUG_MAP[decoded];
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.rewrite(url, withPath);
  }

  return NextResponse.next(withPath);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|wp-content|wp-includes|favicon.ico).*)",
  ],
};
