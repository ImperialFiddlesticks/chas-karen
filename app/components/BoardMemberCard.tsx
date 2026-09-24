import Image from "next/image";
import type { BoardMember } from "@/lib/data";
import ProgramIcon from "./ProgramIcon";

export default function BoardMemberCard({
  member,
}: {
  readonly member: BoardMember;
}) {
  return (
    <section className="flex items-center gap-4 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="180px"
          className={`object-cover ${member.photoClass ?? ""}`}
        />
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-chas-blue dark:text-chas-cyan">
          {member.post}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <ProgramIcon name={member.programme} className="w-6 shrink-0" />
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
            {member.cohort}
          </span>
        </div>
      </div>
    </section>
  );
}
