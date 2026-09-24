"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ColorStripe from "./ColorStripe";

const NAV_LINKS = [
  // Hidden until the section exists.
  // { href: "#om-oss", label: "Om oss" },
  { href: "/aktiviteter", label: "Aktiviteter" },
  { href: "/styrelsen", label: "Styrelsen" },
  { href: "/medlemskap", label: "Medlemskap" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-chas-navy text-white">
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
              className="text-zinc-300 transition-colors hover:text-chas-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/medlemskap"
          className="hidden rounded-full bg-chas-orange px-5 py-2 text-sm font-semibold text-chas-navy transition hover:brightness-95 sm:block"
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
              className={`h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-zinc-300 hover:bg-white/8 hover:text-chas-orange"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/medlemskap"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-chas-orange px-5 py-2 text-center text-sm font-semibold text-chas-navy"
          >
            Bli medlem
          </Link>
        </nav>
      )}

      <ColorStripe />
    </header>
  );
}
