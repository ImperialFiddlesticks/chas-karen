import type { Metadata } from "next";
import TalksGrid from "../../components/TalksGrid";
import { CHAS_TALKS } from "@/lib/chas-talks";

export const metadata: Metadata = {
  title: "Chas Talks | Medlemsområde | Chas Studentkår",
  description: "Inspelade föreläsningar och workshops.",
};

export default function ChasTalks() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Chas Talks 🚀
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Som medlem i kåren får du tillgång till tidigare inspelade
          föreläsningar och workshops som kan inspirera dig på din väg till
          framgång inom Tech branschen.
        </p>

        <div className="mt-10">
          <TalksGrid talks={CHAS_TALKS} />
        </div>
      </div>
    </main>
  );
}
