import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aktiviteter | Chas Studentkår",
  description:
    "Ta del av aktiviteter, workshops och föreläsningar som studentkåren arrangerar.",
};

const ACTIVITIES = [
  {
    title: "Hackathons",
    emoji: "💻",
    description:
      "Bygg, koda och tävla tillsammans under spännande hackathons med andra studenter.",
    image: "/activity-hackathons.svg",
    href: "#",
  },
  {
    title: "Fester",
    emoji: "🎉",
    description:
      "Mingla på våra temafester och lär känna resten av studentkåren.",
    image: "/activity-fester.svg",
    href: "#",
  },
  {
    title: "Brädspelskvällar",
    emoji: "🎲",
    description:
      "Koppla av med brädspel och kortspel tillsammans med likasinnade.",
    image: "/activity-bradspelskvallar.svg",
    href: "#",
  },
  {
    title: "Pluggstugor",
    emoji: "📚",
    description:
      "Plugga tillsammans, ställ frågor och få stöd i en lugn studiemiljö.",
    image: "/activity-pluggstugor.svg",
    href: "#",
  },
];

export default function Aktiviteter() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Aktiviteter
        </h1>

        <div className="mt-10 max-w-3xl space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            Hej där! Som en del av studentkåren kan du ta del av en massa
            roliga aktiviteter, workshops och föreläsningar.
          </p>
          <p>
            Vi har ett stort utbud av verksamheter som är öppna för dig,
            oavsett om du vill fördjupa dina kunskaper i vårt bibliotek,
            lyssna på inspirerande föreläsningar, nätverka med
            branschexperter eller bara umgås med likasinnade.
          </p>
          <p>
            Vi arrangerar även sociala evenemang där du kan koppla av och ha
            kul. Var med och tävla i IT-spelturneringar, mingla på våra
            temafester eller delta i spännande hackathons. Hos oss finns
            alltid något att göra och möjligheter att skapa minnen för
            livet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="group overflow-hidden rounded-2xl border border-black/[.08] transition-colors hover:border-black/[.16] dark:border-white/[.1] dark:hover:border-white/[.2]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-6xl transition-transform group-hover:scale-110">
                  {activity.emoji}
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-semibold">{activity.title}</h2>
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
