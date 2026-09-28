"use client";

import { useState } from "react";
import type { Talk } from "@/lib/chas-talks";

const TYPE_LABELS: Record<Talk["type"], string> = {
  föreläsning: "Föreläsning",
  workshop: "Workshop",
};

export default function TalksGrid({ talks }: { talks: Talk[] }) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (talks.length === 0) {
    return (
      <p className="text-zinc-600 dark:text-zinc-400">
        Inga inspelningar upplagda ännu — kommer inom kort.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {talks.map((talk) => (
        <div
          key={talk.youtubeId}
          className="flex flex-col gap-3 rounded-2xl border border-black/[.08] p-4 dark:border-white/[.1]"
        >
          <div className="aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
            {playingId === talk.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${talk.youtubeId}`}
                title={talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlayingId(talk.youtubeId)}
                className="group relative block h-full w-full"
                aria-label={`Spela ${talk.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${talk.youtubeId}/hqdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-chas-orange text-chas-navy">
                    ▶
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold">{talk.title}</h3>
            <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {TYPE_LABELS[talk.type]}
            </span>
          </div>

          {(talk.speaker || talk.date) && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {[talk.speaker, talk.date].filter(Boolean).join(" · ")}
            </p>
          )}

          {talk.description && (
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {talk.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
