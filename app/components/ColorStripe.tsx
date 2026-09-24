import { PROGRAM_ICONS, programBg } from "./ProgramIcon";

// Thin stripe with one segment per programme colour.
export default function ColorStripe({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-1.5 ${className ?? ""}`}>
      {PROGRAM_ICONS.map((name) => (
        <span key={name} className={`flex-1 ${programBg(name)}`} />
      ))}
    </div>
  );
}
