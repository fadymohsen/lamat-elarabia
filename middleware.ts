import { NextRequest, NextResponse } from "next/server";

const VALID_LOCALES = new Set(["ar", "en"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  const response = NextResponse.next();

  if (VALID_LOCALES.has(firstSegment)) {
    response.headers.set("x-locale", firstSegment);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|api|adminlogin|admin).*)",
  ],
};
