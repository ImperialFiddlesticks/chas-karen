"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ColorStripe from "@/app/components/ColorStripe";
import { MEMBER_NAV_LINKS } from "@/lib/member-nav-links";
import LogoutButton from "./LogoutButton";

export default function MemberHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-[#000] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Chas Academy studentkår"
            width={1051}
            height={958}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {MEMBER_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-300 transition-colors hover:text-chas-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LogoutButton
          formClassName="hidden sm:block"
          className="rounded-full bg-chas-orange px-5 py-2 text-sm font-semibold text-chas-navy transition hover:brightness-95"
        />

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-md sm:hidden"
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Meny</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-chas-cyan transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-chas-cyan transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-chas-cyan transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 sm:hidden">
          {MEMBER_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-zinc-300 hover:bg-white/8 hover:text-chas-orange"
            >
              {link.label}
            </a>
          ))}
          <LogoutButton
            formClassName="mt-2"
            className="w-full rounded-full bg-chas-orange px-5 py-2 text-center text-sm font-semibold text-chas-navy"
          />
        </nav>
      )}

      <ColorStripe />
    </header>
  );
}
