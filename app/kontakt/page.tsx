import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import ProgramIcon from "../components/ProgramIcon";

export const metadata: Metadata = {
  title: "Kontakt | Chas Studentkår",
  description: "Kontakta Chas Academy studentkår.",
};

export default function Kontakt() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon name="fjs" className="w-10 shrink-0" />
          Kontakt
        </h1>

        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Har du frågor, idéer eller vill engagera dig? Skicka ett meddelande
          till oss så hör vi av oss.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
