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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="flex items-center gap-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <ProgramIcon name="ics" className="w-12 shrink-0" />
          Styrelsen
        </h1>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          Här är personerna som driver Chas Academy studentkår framåt. Hör av
          dig till oss om du har frågor, idéer eller vill engagera dig.
        </p>

        <div className="mt-12 space-y-4">
          {BOARD.map((member) => (
            <BoardMemberCard key={member.post} member={member} />
          ))}
        </div>
      </div>
    </main>
  );
}
