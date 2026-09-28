// Original flat geometric icons, matching the style of app/components/ProgramIcon.tsx.

export function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="14" className="fill-chas-orange" />
      <circle cx="20" cy="20" r="6" className="fill-white dark:fill-chas-navy" />
      <rect x="28" y="26" width="30" height="8" className="fill-chas-orange" />
      <rect x="44" y="34" width="8" height="10" className="fill-chas-orange" />
      <rect x="54" y="34" width="8" height="14" className="fill-chas-orange" />
    </svg>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect x="10" y="8" width="30" height="52" className="fill-chas-blue" />
      <rect x="40" y="24" width="18" height="36" className="fill-chas-cyan" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={16 + col * 12}
            y={16 + row * 10}
            width="6"
            height="6"
            className="fill-white dark:fill-chas-navy"
          />
        )),
      )}
      {[0, 1, 2].map((row) => (
        <rect
          key={row}
          x={46}
          y={32 + row * 9}
          width="6"
          height="6"
          className="fill-white dark:fill-chas-navy"
        />
      ))}
    </svg>
  );
}
