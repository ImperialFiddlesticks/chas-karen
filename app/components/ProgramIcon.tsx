// Programme icons, traced from public/chasbackground.jpg.
const ICONS = {
  iisc: {
    viewBox: "0 0 155 152",
    fill: "fill-chas-green",
    bg: "bg-chas-green",
    shape: (
      <>
        <rect x="0" y="0" width="59" height="58" />
        <rect x="46" y="46" width="59" height="59" />
        <rect x="96" y="93" width="59" height="59" />
      </>
    ),
  },
  doe: {
    viewBox: "0 0 198 148",
    fill: "fill-chas-cyan",
    bg: "bg-chas-cyan",
    shape: (
      <polygon points="0,37 49,0 99,37 148,0 198,37 198,110 148,148 99,110 49,148 0,110" />
    ),
  },
  fos: {
    viewBox: "0 0 160 171",
    fill: "fill-chas-olive",
    bg: "bg-chas-olive",
    shape: (
      <>
        <rect x="62" y="0" width="98" height="100" />
        <rect x="0" y="70" width="98" height="101" />
      </>
    ),
  },
  uxe: {
    viewBox: "0 0 142 148",
    fill: "fill-chas-blue",
    bg: "bg-chas-blue",
    shape: (
      <polygon points="56,0 85,0 100,24 128,24 142,49 128,74 142,99 128,124 100,124 85,148 56,148 42,124 14,124 0,99 14,74 0,49 14,24 42,24" />
    ),
  },
  ics: {
    viewBox: "0 0 159 171",
    fill: "fill-chas-purple",
    bg: "bg-chas-purple",
    shape: (
      <polygon points="119,0 154,21 159,62 137,86 157,108 152,151 116,171 78,155 67,123 32,131 0,105 0,67 32,41 70,48 81,16" />
    ),
  },
  fmw: {
    viewBox: "0 0 158 173",
    fill: "fill-chas-salmon",
    bg: "bg-chas-salmon",
    shape: (
      <polygon points="43,0 115,0 125,20 115,42 147,42 158,65 147,87 158,109 147,131 115,131 125,151 115,173 43,173 32,151 43,131 11,131 0,109 11,87 0,65 11,42 43,42 32,20" />
    ),
  },
  fjs: {
    viewBox: "0 0 125 142",
    fill: "fill-chas-pink",
    bg: "bg-chas-pink",
    shape: (
      <>
        <polygon points="8,0 117,0 125,17 117,35 8,35 0,17" />
        <polygon points="23,53 99,53 107,70 99,87 23,87 15,70" />
        <polygon points="8,107 117,107 125,124 117,142 8,142 0,124" />
      </>
    ),
  },
  net: {
    viewBox: "0 0 148 128",
    fill: "fill-chas-orange",
    bg: "bg-chas-orange",
    shape: (
      <>
        <rect x="67" y="0" width="81" height="34" />
        <rect x="29" y="47" width="119" height="34" />
        <rect x="0" y="94" width="148" height="34" />
      </>
    ),
  },
};

export type ProgramIconName = keyof typeof ICONS;

export const PROGRAM_ICONS = Object.keys(ICONS) as ProgramIconName[];

// Icons whose colour is light enough to sit behind navy text. Blue is left
// out since navy on blue is too low-contrast for small text.
export const PASTEL_ICONS: ProgramIconName[] = [
  "iisc",
  "doe",
  "net",
  "ics",
  "fjs",
  "fos",
  "fmw",
];

export function programBg(name: ProgramIconName) {
  return ICONS[name].bg;
}

export default function ProgramIcon({
  name,
  className,
}: {
  name: ProgramIconName;
  className?: string;
}) {
  const icon = ICONS[name];
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden="true"
      className={`${icon.fill} ${className ?? ""}`}
    >
      {icon.shape}
    </svg>
  );
}
