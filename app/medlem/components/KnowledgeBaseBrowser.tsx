"use client";

import { useMemo, useState } from "react";
import type { Category, ResourceType } from "@/lib/knowledge-base";

const TYPE_LABELS: Record<ResourceType, string> = {
  artikel: "Artikel",
  video: "Video",
  verktyg: "Verktyg",
  kurs: "Kurs",
  övrigt: "Övrigt",
};

const inputClass =
  "block w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-chas-blue focus:ring-2 focus:ring-chas-blue/30 dark:border-white/20 dark:focus:border-chas-cyan dark:focus:ring-chas-cyan/30";

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function KnowledgeBaseBrowser({
  categories,
}: {
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("alla");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("alla");

  const subcategories = useMemo(() => {
    if (activeCategory === "alla") return [];
    const category = categories.find((c) => c.id === activeCategory);
    if (!category) return [];
    return Array.from(
      new Set(
        category.links
          .map((resource) => resource.subcategory)
          .filter((value): value is string => Boolean(value)),
      ),
    ).sort((a, b) => a.localeCompare(b, "sv"));
  }, [categories, activeCategory]);

  function selectCategory(id: string) {
    setActiveCategory(id);
    setActiveSubcategory("alla");
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories
      .filter(
        (category) =>
          activeCategory === "alla" || category.id === activeCategory,
      )
      .map((category) => ({
        ...category,
        links: category.links.filter((resource) => {
          if (
            activeCategory !== "alla" &&
            activeSubcategory !== "alla" &&
            resource.subcategory !== activeSubcategory
          ) {
            return false;
          }
          if (!normalizedQuery) return true;
          return (
            resource.title.toLowerCase().includes(normalizedQuery) ||
            resource.description?.toLowerCase().includes(normalizedQuery) ||
            domainOf(resource.url).toLowerCase().includes(normalizedQuery)
          );
        }),
      }))
      .filter((category) => category.links.length > 0);
  }, [categories, query, activeCategory, activeSubcategory]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Sök i kunskapsbanken…"
          className={`${inputClass} sm:max-w-sm`}
          aria-label="Sök i kunskapsbanken"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => selectCategory("alla")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === "alla"
                ? "bg-chas-orange text-chas-navy"
                : "border border-black/15 text-zinc-600 dark:border-white/20 dark:text-zinc-300"
            }`}
          >
            Alla
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => selectCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category.id
                  ? "bg-chas-orange text-chas-navy"
                  : "border border-black/15 text-zinc-600 dark:border-white/20 dark:text-zinc-300"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {subcategories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveSubcategory("alla")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              activeSubcategory === "alla"
                ? "bg-chas-navy text-white dark:bg-white dark:text-chas-navy"
                : "border border-black/15 text-zinc-600 dark:border-white/20 dark:text-zinc-300"
            }`}
          >
            Alla underkategorier
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              type="button"
              onClick={() => setActiveSubcategory(subcategory)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeSubcategory === subcategory
                  ? "bg-chas-navy text-white dark:bg-white dark:text-chas-navy"
                  : "border border-black/15 text-zinc-600 dark:border-white/20 dark:text-zinc-300"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 space-y-12">
        {categories.length === 0 && (
          <p className="text-zinc-600 dark:text-zinc-400">
            Kunskapsbanken är tom just nu — innehåll läggs till inom kort.
          </p>
        )}

        {categories.length > 0 && filtered.length === 0 && (
          <p className="text-zinc-600 dark:text-zinc-400">
            Inga träffar. Prova ett annat sökord eller filter.
          </p>
        )}

        {filtered.map((category) => (
          <section key={category.id}>
            <h2 className="text-2xl font-semibold tracking-tight">
              {category.title}
            </h2>
            {category.description && (
              <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
                {category.description}
              </p>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {category.links.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 rounded-xl border border-black/[.08] p-4 transition hover:border-chas-orange dark:border-white/[.1]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{resource.title}</span>
                    <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {TYPE_LABELS[resource.type]}
                    </span>
                  </div>
                  {resource.description && (
                    <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {resource.description}
                    </p>
                  )}
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {domainOf(resource.url)}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
