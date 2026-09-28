import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MEMBER_COOKIE_NAME, isMember } from "@/lib/member-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/medlem/login") {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(MEMBER_COOKIE_NAME)?.value;
  if (await isMember(cookieValue)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/medlem/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/medlem/:path*"],
};
