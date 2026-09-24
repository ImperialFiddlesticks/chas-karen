import type { Metadata } from "next";
import JoinSteps from "../components/JoinSteps";
import ProgramIcon, { PASTEL_ICONS } from "../components/ProgramIcon";

export const metadata: Metadata = {
  title: "Info & medlemskap | Chas Studentkår",
  description:
    "Läs om vad Chas Studentkår erbjuder och varför du ska bli medlem.",
};

const BENEFITS = [
  "Unika workshops",
  "Underbara extra föreläsningar",
  "Stöd med att hitta en praktikplats",
  "Företräde och rabatter på fester och event",
  "Tillgång till kunskapsdatabasen",
  "Oändliga möjligheter att bidra och förändra",
];

export default function Medlemskap() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon
            name="net"
            className="w-12 shrink-0"
          />
          Info &amp; medlemskap!
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="flex gap-4 rounded-2xl border border-black/[.08] bg-zinc-50 p-6 lg:col-span-3 dark:border-white/[.1] dark:bg-zinc-900">
            <span
              aria-hidden
              className="text-xl"
            >
              💡
            </span>
            <div className="space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">
              <p className="text-lg font-medium text-zinc-900 sm:text-xl dark:text-white">
                Vill du lära dig något nytt, bli inspirerad av en grym
                föreläsare, knyta kontakter inför framtida jobb eller bara hänga
                med folk som också kan prata om kod i timmar utan att tröttna?{" "}
                <span className="relative isolate inline-block font-bold">
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0.5 -z-10 h-2.5 rounded-sm opacity-60`}
                  />
                  Då har du kommit rätt.
                </span>{" "}
                Våra aktiviteter är öppna för alla.
              </p>
              <p>
                Ibland stänger vi laptopen och då blir det temafester, mingel
                och hackathons där energi flödar och det som lät som en galen
                idé från början tillslut blir något att visa upp. Hos oss händer
                det alltid något, och det är här de bästa minnena från
                studietiden skapas.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/[.08] p-6 lg:col-span-2 dark:border-white/[.1]">
            <h2 className="flex items-center gap-2 font-semibold">
              <ProgramIcon
                name="uxe"
                className="w-5 shrink-0"
              />
              Varför bli medlem?
            </h2>

            <ul className="mt-4 space-y-3">
              {BENEFITS.map((benefit, index) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <ProgramIcon
                    name={PASTEL_ICONS[index % PASTEL_ICONS.length]}
                    className="mt-1 w-4 shrink-0"
                  />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-black/[.08] pt-12 dark:border-white/[.1]">
          <JoinSteps />
        </div>
      </div>
    </main>
  );
}
