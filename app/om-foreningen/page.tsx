import type { Metadata } from "next";
import BoardMemberCard from "../components/BoardMemberCard";
import ProgramIcon from "../components/ProgramIcon";
import { BOARD } from "@/lib/data";

export const metadata: Metadata = {
  title: "Om Kåren | Chas Studentkår",
  description:
    "Läs om Chas Academys Studentkår, våra stadgar och möt styrelsen.",
};

const STADGAR_PDF = "/dokument/stadgar.pdf";

export default function OmForeningen() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon
            name="ics"
            className="w-12 shrink-0"
          />
          Om kåren
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <section className="rounded-2xl border border-black/[.08] bg-zinc-50 p-6 lg:col-span-3 dark:border-white/[.1] dark:bg-zinc-900">
            {/* <h2 className="text-xl font-semibold">Om studentkåren</h2> */}
            <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
              Chas Academy’s Studentkår är en icke-vinstdrivande förening. Den
              är politiskt och religiöst obunden och bygger på fasta värderingar
              som främjar mångfald, jämlikhet och öppenhet. Föreningen arbetar
              för att stödja och företräda medlemmarnas intressen samt främja
              deras akademiska och personliga utveckling. Genom att erbjuda
              olika aktiviteter, evenemang och tjänster strävar vi efter att
              skapa en meningsfull och berikande studie- och social miljö för
              alla våra medlemmar.
            </p>
          </section>

          <section className="flex flex-col rounded-2xl border border-black/[.08] p-6 lg:col-span-2 dark:border-white/[.1]">
            <h2 className="flex items-center gap-2 font-semibold">
              <ProgramIcon
                name="uxe"
                className="w-5 shrink-0"
              />
              Stadgar
            </h2>
            <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
              Stadgarna beskriver föreningens syfte, medlemskap, styrelse och
              årsmöte.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={STADGAR_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-chas-orange px-5 py-2 text-sm font-semibold text-chas-navy transition hover:brightness-95"
              >
                Läs stadgarna
              </a>
              <a
                href={STADGAR_PDF}
                download
                className="text-sm font-medium text-chas-blue underline-offset-4 hover:underline dark:text-chas-cyan"
              >
                Ladda ner (PDF, 82 kB)
              </a>
            </div>
          </section>
        </div>

        <section className="mt-16 border-t border-black/[.08] pt-12 dark:border-white/[.1]">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Styrelsen
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
            Möt gänget bakom Chas Academys Studentkår! Vi planerar
            aktiviteterna, driver frågor som gör studietiden bättre och ser till
            att det alltid finns något på gång. Har du en fråga, en idé eller
            vill du vara med och påverka? Hör av dig, vi blir glada.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {BOARD.map((member) => (
              <BoardMemberCard
                key={member.post}
                member={member}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
