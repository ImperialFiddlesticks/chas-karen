"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

// The authenticated member area has its own header (MemberHeader) instead.
// /medlem/login is unauthenticated, so it keeps the regular site header.
export default function HeaderGate() {
  const pathname = usePathname();
  const isMemberPath =
    pathname === "/medlem" || Boolean(pathname?.startsWith("/medlem/"));
  const isProtectedMemberPage = isMemberPath && pathname !== "/medlem/login";
  if (isProtectedMemberPage) return null;
  return <Header />;
}
