import type { Metadata } from "next";
import Link from "next/link";
import ProgramIcon, { PASTEL_ICONS } from "@/app/components/ProgramIcon";

export const metadata: Metadata = {
  title: "Medlemsområde | Chas Studentkår",
  description: "Chas Studentkårs medlemsområde.",
};

const CARDS = [
  {
    href: "/medlem/kunskapsbank",
    title: "Kunskapsbank",
    description: "Artiklar, videos, verktyg och kurser samlade på ett ställe.",
  },
  {
    href: "/medlem/chas-talks",
    title: "Chas Talks",
    description: "Inspelade föreläsningar och workshops.",
  },
  {
    href: "/medlem/bostad",
    title: "Studentbostad",
    description: "Så funkar studentbostad via SSCO och SSSB.",
  },
  {
    href: "/medlem/forslag",
    title: "Förslagslåda",
    description: "Tyck till om event, utbildning och kåren — gärna anonymt.",
  },
  /*   {
    href: "/medlem/formaner",
    title: "Förmåner",
    description: "Rabatter och partnererbjudanden.",
  }, */
  /*   {
    href: "/medlem/event",
    title: "Event",
    description: "Kommande medlemsevent.",
  },
  {
    href: "/medlem/handlingar",
    title: "Handlingar",
    description: "Stadgar, protokoll och årsmöteshandlingar.",
  }, */
];

export default function MedlemHome() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Välkommen in i värmen 🩷
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Här samlar vi allt som bara är till för dig som är medlem i Chas
          Studentkår. Kunskapsbank, inspelade föreläsningar, boendetips och mer.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-3 rounded-2xl border border-black/[.08] p-6 transition hover:border-chas-orange dark:border-white/[.1]"
            >
              <ProgramIcon
                name={PASTEL_ICONS[index % PASTEL_ICONS.length]}
                className="w-8 shrink-0"
              />
              <h2 className="font-semibold group-hover:text-chas-orange">
                {card.title}
              </h2>
              <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
