"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#om-oss", label: "Om oss" },
  { href: "/aktiviteter", label: "Aktiviteter" },
  { href: "/styrelsen", label: "Styrelsen" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/90 backdrop-blur dark:border-white/[.1] dark:bg-black/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Chas Academy studentkår"
            width={1051}
            height={958}
            className="h-9 w-auto"
            priority
          />
          Chas Studentkår
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/medlemskap"
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] sm:block dark:hover:bg-[#ccc]"
        >
          Bli medlem
        </Link>

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
              className={`h-0.5 w-full bg-foreground transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-foreground transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/[.08] px-6 py-4 sm:hidden dark:border-white/[.1]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-black/[.04] hover:text-black dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/medlemskap"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-foreground px-5 py-2 text-center text-sm font-medium text-background"
          >
            Bli medlem
          </Link>
        </nav>
      )}
    </header>
  );
}
