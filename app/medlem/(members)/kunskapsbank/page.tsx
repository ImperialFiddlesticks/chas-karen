import type { Metadata } from "next";
import KnowledgeBaseBrowser from "../../components/KnowledgeBaseBrowser";
import { KNOWLEDGE_BASE } from "@/lib/knowledge-base";

export const metadata: Metadata = {
  title: "Kunskapsbank | Medlemsområde | Chas Studentkår",
  description: "Artiklar, videos, verktyg och kurser för medlemmar.",
};

export default function Kunskapsbank() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Kunskapsbank 🧠
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Här har kåren under flera år samlat artiklar, videos, verktyg och
          kurser som kan hjälpa dig under studietiden.
        </p>

        <div className="mt-10">
          <KnowledgeBaseBrowser categories={KNOWLEDGE_BASE} />
        </div>
      </div>
    </main>
  );
}
