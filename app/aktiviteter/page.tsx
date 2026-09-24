import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgramIcon, {
  type ProgramIconName,
  programBg,
} from "../components/ProgramIcon";

export const metadata: Metadata = {
  title: "Aktiviteter | Chas Studentkår",
  description:
    "Ta del av aktiviteter, workshops och lärorika events som studentkåren arrangerar.",
};

const ACTIVITIES: {
  title: string;
  emoji: string;
  description: string;
  image: string;
  // Programme colour tinting the photo.
  color: ProgramIconName;
  href: string;
}[] = [
  {
    title: "Hackathons",
    emoji: "💻",
    description:
      "Bygg, koda och tävla tillsammans under spännande hackathons med andra studenter.",
    image: "/hackathon.jpg",
    color: "uxe",
    href: "#",
  },
  {
    title: "Fester",
    emoji: "🎉",
    description:
      "Mingla på våra temafester och lär känna resten av studentkåren.",
    image: "/party.jpg",
    color: "fjs",
    href: "#",
  },
  {
    title: "Brädspelskvällar",
    emoji: "🎲",
    description:
      "Koppla av med brädspel och kortspel tillsammans med likasinnade.",
    image: "/boardgame.jpg",
    color: "net",
    href: "#",
  },
  {
    title: "Pluggstugor",
    emoji: "📚",
    description:
      "Plugga tillsammans, ställ frågor och få stöd i en lugn studiemiljö.",
    image: "/studying.jpg",
    color: "iisc",
    href: "#",
  },
];

export default function Aktiviteter() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon
            name="doe"
            className="w-14 shrink-0"
          />
          Aktiviteter
        </h1>

        <div className="mt-10 max-w-3xl space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">
          <p className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            <span className="relative isolate inline-block">
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm opacity-10 ${programBg("doe")}`}
              />
              Hej där!
            </span>{" "}
            👋
          </p>
          <p>
            Som en del av studentkåren kan du ta del av en massa roliga
            aktiviteter, workshops och föreläsningar.
          </p>
          <p>
            Vill du lära dig något nytt, bli inspirerad av en grym föreläsare,
            knyta kontakter inför framtida jobb eller bara hänga med folk som
            också kan prata om kod i timmar utan att tröttna? Då har du kommit
            rätt. Våra aktiviteter är öppna för alla.
          </p>
          <p>
            Ibland stänger vi laptopen och då blir det temafester, mingel och
            hackathons där energi flödar och det som lät som en galen idé från
            början tillslut blir något att visa upp. Hos oss händer det alltid
            något, och det är här de bästa minnena från studietiden skapas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="group overflow-hidden rounded-2xl border border-black/[.08] transition-colors hover:border-black/[.16] dark:border-white/[.1] dark:hover:border-white/[.2]"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-20 ${programBg(activity.color)}`}
                />
              </div>
              <div className="p-5">
                <h2 className="font-semibold">
                  {activity.emoji} {activity.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {activity.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
