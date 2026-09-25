import Image from "next/image";
import Link from "next/link";
import ColorStripe from "./ColorStripe";
import SocialLinks from "./SocialLinks";
import { NAV_LINKS } from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer className="bg-chas-navy text-white">
      <ColorStripe />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Chas Academy studentkår"
            width={1051}
            height={958}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
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

        <SocialLinks />

        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Chas Studentkår
        </p>
      </div>
    </footer>
  );
}
