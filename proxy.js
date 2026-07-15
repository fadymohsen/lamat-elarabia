import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Next.js's file-system router does not reliably match static route
// segments that are literal non-ASCII (e.g. Arabic) folder names such as
// "app/الأخبار-و-المقالات". To keep the site's original Arabic URLs while
// using plain ASCII folder names internally (app/news, app/training,
// app/contact), we rewrite incoming Arabic-slug requests to their ASCII
// counterparts here. The browser URL bar keeps showing the Arabic slug.
const SLUG_MAP = {
  "/الأخبار-و-المقالات": "/news",
  "/التوظيف-و-التدريب": "/training",
  "/تواصل-معنا": "/contact",
};

const SESSION_COOKIE = "lamat_admin_session";
const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

// Optimistic-only check (cookie signature, no DB round trip) per Next.js's
// recommended Proxy auth pattern - real authorization still happens in the
// DAL (lib/dal.js) on every admin page/action.
async function hasValidSession(request) {
  const cookie = request.cookies.get(SESSION_COOKIE)?.value;
  if (!cookie) return false;
  try {
    await jwtVerify(cookie, encodedKey, { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export default async function proxy(request) {
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

  // The shared header (rendered in the root layout) localizes itself and
  // builds the language-switch link from the current path, which server
  // components can't otherwise see - forward it as a request header.
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
