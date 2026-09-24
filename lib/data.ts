import type { ProgramIconName } from "@/app/components/ProgramIcon";

export type BoardMember = {
  post: string;
  name: string;
  cohort: string;
  programme: ProgramIconName;
  photo: string;
  // Optional crop tweaks for photos that aren't tight square portraits.
  photoClass?: string;
};

export const BOARD: BoardMember[] = [
  {
    post: "Ordförande",
    name: "Andrea Bleckert",
    cohort: "FMW25",
    programme: "fmw",
    photo: "/styrelsen/andrea.jpg",
  },
  {
    post: "Kassör",
    name: "Jennifer Hansson",
    cohort: "FOS25",
    programme: "fos",
    photo: "/styrelsen/jennifer.jpg",
    photoClass: "object-[50%_10%]",
  },
  {
    post: "Sekreterare",
    name: "Veronica Bystrom",
    cohort: "FUX25",
    programme: "uxe",
    photo: "/styrelsen/veronica.jpg",
  },
  {
    post: "Eventansvarig",
    name: "Robin Wedin",
    cohort: "NET26",
    programme: "net",
    photo: "/styrelsen/robin.jpg",
  },
  {
    post: "Ledamot",
    name: "Moises Leon",
    cohort: "FOS25",
    programme: "fos",
    photo: "/styrelsen/moises.jpg",
    photoClass: "origin-[53%_38%] scale-[2.2]",
  },
];
