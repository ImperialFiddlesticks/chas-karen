import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { MEMBER_NAV_LINKS } from "@/lib/member-nav-links";

export default function MedlemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b border-black/[.08] bg-zinc-50 dark:border-white/[.1] dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {MEMBER_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-chas-orange dark:text-zinc-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LogoutButton />
        </div>
      </div>
      {children}
    </>
  );
}
