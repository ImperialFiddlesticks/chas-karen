export type HousingResource = {
  title: string;
  href: string;
  description: string;
  icon: "key" | "building";
};

export const HOUSING_RESOURCES: HousingResource[] = [
  {
    title: "Akademisk Kvart",
    href: "https://www.akademiskkvart.se/sv",
    description:
      "En bostadsplattform som matchar dig direkt med privatpersoner i Stockholm som hyr ut hela eller delar av sitt boende.",
    icon: "key",
  },
  {
    title: "SSSB",
    href: "https://www.sssb.se/",
    description:
      "Stiftelsen Stockholms Studentbostäder förvaltar och hyr ut studentlägenheter runt om i Stockholm, nära universitet och stadskärnan.",
    icon: "building",
  },
];
