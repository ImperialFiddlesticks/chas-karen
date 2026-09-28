import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Förmåner | Medlemsområde | Chas Studentkår",
  description: "Rabatter och partnererbjudanden för medlemmar.",
};

export default function Formaner() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Förmåner
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Rabatter och partnererbjudanden för dig som är medlem.
        </p>

        <div className="mt-10 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]">
          <p className="font-medium">Kommer snart</p>
          <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
            Vi jobbar på att samla ihop rabatter och erbjudanden från våra
            partners. Håll utkik här!
          </p>
        </div>
      </div>
    </main>
  );
}
