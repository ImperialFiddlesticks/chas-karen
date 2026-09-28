import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handlingar | Medlemsområde | Chas Studentkår",
  description: "Stadgar, protokoll och årsmöteshandlingar.",
};

export default function Handlingar() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Handlingar
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Stadgar, protokoll och årsmöteshandlingar.
        </p>

        <div className="mt-10 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]">
          <p className="font-medium">Kommer snart</p>
          <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
            Vi samlar ihop kårens dokument här inom kort. Håll utkik här!
          </p>
        </div>
      </div>
    </main>
  );
}
