"use client";

import { useState } from "react";
import { PASTEL_ICONS, programBg } from "./ProgramIcon";

const QR_LINK =
  "https://ticket.vipmonkey.se/product-share/vipmonkey/1703c055-ba47-42b3-9934-64fcde29ca1f";

type Step = {
  emoji: string;
  title: string;
  body: React.ReactNode;
};

const STEPS: Record<"sv" | "en", Step[]> = {
  sv: [
    {
      emoji: "📱",
      title: "Ladda ner Vip Monkey",
      body: "Börja med att ladda ner och installera Vip Monkey-appen på din mobiltelefon.",
    },
    {
      emoji: "👤",
      title: "Skapa en användare",
      body: "Efter installation, skapa en användarprofil och logga in i appen. OBS! Använd din Chas Academy-email.",
    },
    {
      emoji: "➕",
      title: "Gå till kamera",
      body: 'I Vip Monkey-appen, tryck på det lilla plus-tecknet längst upp till vänster i hörnet. Välj alternativet "Scan QR" från menyn.',
    },
    {
      emoji: "🔲",
      title: "Skanna QR-koden",
      body: (
        <>
          Gå till{" "}
          <a
            href={QR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            den här länken
          </a>{" "}
          och skanna QR-koden. Följ instruktionerna för att skaffa ditt
          medlemskap.
        </>
      ),
    },
    {
      emoji: "💸",
      title: "Gör din betalning",
      body: "Du kan betala för ditt medlemskap med antingen Swish eller kort, beroende på vad som passar dig bäst.",
    },
    {
      emoji: "🪪",
      title: "Ditt medlemskort",
      body: 'När din betalning är klar hittar du ditt medlemskort under sektionen "My Products" i appen, under rubriken "Kortsamling".',
    },
  ],
  en: [
    {
      emoji: "📱",
      title: "Download Vip Monkey",
      body: "Begin by downloading and installing the Vip Monkey app on your mobile phone.",
    },
    {
      emoji: "👤",
      title: "Create a user",
      body: "After installation, create a user profile and log in to the app.",
    },
    {
      emoji: "➕",
      title: "Go to camera",
      body: 'In the Vip Monkey app, tap the small plus icon in the upper left corner. Choose the "Scan QR" option from the menu.',
    },
    {
      emoji: "🔲",
      title: "Scan the QR code",
      body: (
        <>
          Visit{" "}
          <a
            href={QR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            this link
          </a>{" "}
          and scan the QR code. Follow the instructions to acquire your
          membership.
        </>
      ),
    },
    {
      emoji: "💸",
      title: "Make your payment",
      body: "You can pay for your membership using either Swish or a credit/debit card, depending on your preference.",
    },
    {
      emoji: "🪪",
      title: "Your membership card",
      body: 'Once your payment is complete, you will find your membership card in the "My Products" section within the app, under the "Kortsamling" heading.',
    },
  ],
};

const INTRO = {
  sv: "Vi är glada över att du är intresserad av att bli medlem! Att gå med i Chas Academy studentkår är enkelt, och här är stegen du behöver följa:",
  en: "We are delighted that you are interested in becoming a member! Joining Chas Academy Student Union is straightforward, and here are the steps you need to follow:",
};

const OUTRO = {
  sv: "Det är så enkelt som så! Om du stöter på några frågor eller behöver hjälp längs vägen, tveka inte att kontakta oss. Vi ser fram emot att välkomna dig som en värdefull medlem i Chas Academy studentkår.",
  en: "It's as simple as that! If you encounter any questions or need assistance along the way, do not hesitate to contact us. We look forward to welcoming you as a valuable member of Chas Academy Student Union.",
};

export default function JoinSteps() {
  const [lang, setLang] = useState<"sv" | "en">("sv");

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          {lang === "sv" ? "Så blir du medlem" : "How to join"}
        </h2>

        <div className="flex rounded-full border border-black/[.08] p-1 text-sm font-medium dark:border-white/[.1]">
          <button
            type="button"
            onClick={() => setLang("sv")}
            className={`rounded-full px-3 py-1 transition-colors ${
              lang === "sv"
                ? "bg-chas-orange text-chas-navy"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
          >
            Svenska
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1 transition-colors ${
              lang === "en"
                ? "bg-chas-orange text-chas-navy"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
          >
            English
          </button>
        </div>
      </div>

      <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
        {INTRO[lang]}
      </p>

      <ol className="mt-6 space-y-4">
        {STEPS[lang].map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-black/[.08] p-4 dark:border-white/[.1]"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-chas-navy ${programBg(PASTEL_ICONS[index % PASTEL_ICONS.length])}`}
            >
              {index + 1}
            </span>
            <div>
              <p className="font-medium">
                {step.emoji} {step.title}
              </p>
              <p className="mt-1 leading-7 text-zinc-700 dark:text-zinc-300">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
        {OUTRO[lang]}
      </p>
    </div>
  );
}
