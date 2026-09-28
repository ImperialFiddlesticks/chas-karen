import type { Metadata } from "next";
import { BuildingIcon, KeyIcon } from "../../components/HousingIcons";
import { HOUSING_RESOURCES } from "@/lib/housing";

const ICONS = {
  key: KeyIcon,
  building: BuildingIcon,
};

export const metadata: Metadata = {
  title: "Bostad | Medlemsområde | Chas Studentkår",
  description: "Studentbostad i Stockholm.",
};

export default function Bostad() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Studentbostad 🏠
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Genom ditt medlemskap i Chas Academy får du möjligheten att söka
          studentbostad under din studietid.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {HOUSING_RESOURCES.map((resource) => {
            const Icon = ICONS[resource.icon];
            return (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-black/[.08] p-6 transition hover:border-chas-orange dark:border-white/[.1]"
              >
                <Icon className="w-10 shrink-0" />
                <h2 className="font-semibold group-hover:text-chas-orange">
                  {resource.title}
                </h2>
                <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {resource.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
