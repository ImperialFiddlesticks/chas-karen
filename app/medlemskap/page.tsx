import type { Metadata } from "next";
import JoinSteps from "../components/JoinSteps";

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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Info &amp; medlemskap!
        </h1>

        <div className="mt-10 flex gap-4 rounded-2xl border border-black/[.08] bg-zinc-50 p-6 dark:border-white/[.1] dark:bg-zinc-900">
          <span aria-hidden className="text-xl">
            💡
          </span>
          <div className="space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              Vi har en bred palett av verksamheter som är öppna för dig,
              oavsett om du vill fördjupa dina kunskaper i vårt bibliotek,
              delta i inspirerande föreläsningar, nätverka med
              branschexperter eller bara umgås med likasinnade.
            </p>
            <p>
              Vi anordnar även sociala events där du kan koppla av och ha
              roligt. Var med och tävla i IT-spelturneringar, mingla på våra
              temafester eller delta i spännande hackathons. Hos oss finns
              alltid något att göra och möjligheter att skapa minnen för
              livet.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-3 font-medium dark:bg-zinc-900">
            <span aria-hidden className="text-amber-500">
              ★
            </span>
            Varför bli medlem?
          </div>

          <ul className="mt-4 space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                />
                <span className="text-zinc-700 dark:text-zinc-300">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-black/[.08] pt-12 dark:border-white/[.1]">
          <JoinSteps />
        </div>
      </div>
    </main>
  );
}
