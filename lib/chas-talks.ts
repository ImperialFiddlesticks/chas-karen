export type Talk = {
  title: string;
  youtubeId: string;
  speaker?: string;
  date?: string;
  type: "föreläsning" | "workshop";
  description?: string;
};

// type är satt till "föreläsning" som standard för alla poster nedan —
// ändra till "workshop" där det stämmer bättre.
export const CHAS_TALKS: Talk[] = [
  {
    title: "En framtid som IT-konsult?",
    youtubeId: "5NRoiV0k1_E",
    speaker: "Saga Swahn",
    type: "föreläsning",
  },
  {
    title: "UX-, UI, och grafisk designer",
    youtubeId: "UlprZvSgYRM",
    speaker: "Mickey Cortés Chávez",
    type: "föreläsning",
  },
  {
    title: "Jobbresan, från utbildning till anställning",
    youtubeId: "zbp1wVKJwww",
    speaker: "Sandra Thelander Svensson & Mathias Deljerud Hamlin",
    type: "föreläsning",
  },
  {
    title: "Lördomar från vildmarken",
    youtubeId: "NSP3Qc5rBLo",
    speaker: "Max Persson",
    type: "föreläsning",
  },
  {
    title: "Data, AI & konsultrollen",
    youtubeId: "ZreYGgWx_0M",
    speaker: "Malin Augustsson",
    type: "föreläsning",
  },
  {
    title: "En väg mellan skolbänken och din dröm-LIA",
    youtubeId: "z0p9I3jA5tw",
    speaker: "Fady Nadir Hatta",
    type: "föreläsning",
  },
  {
    title: "Chas Talks 31/1 - Monica Gidlund, VD @Cypoint Infinity",
    youtubeId: "69tgym1FATc",
    type: "föreläsning",
  },
  {
    title: "Chas Talks 31/1 - Victor Axelsson, CTO @Kliently",
    youtubeId: "UbQ4uyGlZ9c",
    type: "föreläsning",
  },
];
