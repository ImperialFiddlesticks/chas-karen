import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styrelsen | Chas Studentkår",
  description: "Möt styrelsen för Chas Academy studentkår.",
};

const BOARD = [
  {
    post: "Ordförande",
    name: "Andrea Bleckert",
    cohort: "FMW25",
  },
  {
    post: "Kassör",
    name: "Jennifer Hansson",
    cohort: "FOS25",
  },
  {
    post: "Sekreterare",
    name: "Veronica Bystrom",
    cohort: "FUX25",
  },
  {
    post: "Eventansvarig",
    name: "Robin Wedin",
    cohort: "NET26",
  },
  {
    post: "Ledamot",
    name: "Moises Leon",
    cohort: "FOS25",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Styrelsen() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Styrelsen
        </h1>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Här är personerna som driver Chas Academy studentkår framåt. Hör av
          dig till oss om du har frågor, idéer eller vill engagera dig.
        </p>

        <div className="mt-12 space-y-4">
          {BOARD.map((member) => (
            <section
              key={member.post}
              className="flex items-center gap-4 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-lg font-semibold dark:bg-zinc-900">
                {initials(member.name)}
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  {member.post}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                    {member.cohort}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
