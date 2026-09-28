import type { Metadata } from "next";
import SuggestionForm from "../../components/SuggestionForm";

export const metadata: Metadata = {
  title: "Förslagslåda | Medlemsområde | Chas Studentkår",
  description: "Skicka förslag och idéer till kåren.",
};

export default function Forslag() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Förslagslåda 💡
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Har du en idé om event, utbildning eller kåren i stort? Skicka in ditt
          förslag, lämna namn och epost tomma för att vara anonym.
        </p>

        <div className="mt-10">
          <SuggestionForm />
        </div>
      </div>
    </main>
  );
}
