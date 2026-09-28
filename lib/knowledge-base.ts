import kunskapsbank from "./kunskapsbank.json";

export type ResourceType = "artikel" | "video" | "verktyg" | "kurs" | "övrigt";

export type Resource = {
  title: string;
  url: string;
  description?: string;
  type: ResourceType;
  // Present on entries extracted from the Notion export; used to filter
  // within a category. Not part of the original spec, so kept optional.
  subcategory?: string;
  source?: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  links: Resource[];
};

type RawResource = {
  title: string;
  url: string;
  type: ResourceType;
  subcategory: string;
  source: string;
};

type RawCategory = {
  id: string;
  title: string;
  description: string;
  links: RawResource[];
};

const raw = kunskapsbank as { categories: RawCategory[] };

export const KNOWLEDGE_BASE: Category[] = raw.categories.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  links: category.links.map((link) => ({
    title: link.title,
    url: link.url,
    type: link.type,
    subcategory: link.subcategory,
    source: link.source,
  })),
}));
