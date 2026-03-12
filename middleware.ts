import { NextRequest, NextResponse } from "next/server";

const SKIP_PREFIXES = [
  "/_next",
  "/api",
  "/sitemap.xml",
  "/robots.txt",
  "/feed.xml",
  "/icon",
  "/apple-icon",
];

const SKIP_EXTENSIONS = /\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, and special files
  if (
    SKIP_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    SKIP_EXTENSIONS.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If path starts with /es/, let it pass through — lang=es is in the URL
  if (pathname.startsWith("/es")) {
    return NextResponse.next();
  }

  // For all other routes, rewrite internally to /en/... (URL stays clean)
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
