import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Redirect the root path (/) to /auth/login
  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", url));
  }

  // Allow all other requests
  return NextResponse.next();
}
