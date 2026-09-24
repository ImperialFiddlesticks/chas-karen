import type { Metadata } from "next";
import BoardMemberCard from "../components/BoardMemberCard";
import ProgramIcon from "../components/ProgramIcon";
import { BOARD } from "@/lib/data";

export const metadata: Metadata = {
  title: "Styrelsen | Chas Studentkår",
  description: "Möt styrelsen för Chas Academy studentkår.",
};

export default function Styrelsen() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon
            name="ics"
            className="w-12 shrink-0"
          />
          Styrelsen
        </h1>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Möt gänget bakom Chas Academys Studentkår! Vi planerar aktiviteterna,
          driver frågor som gör studietiden bättre och ser till att det alltid
          finns något på gång. Har du en fråga, en idé eller vill du vara med
          och påverka? Hör av dig, vi blir glada.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {BOARD.map((member) => (
            <BoardMemberCard
              key={member.post}
              member={member}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
