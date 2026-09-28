import kunskapsbank from "./kunskapsbank.json";

export type ResourceType =
  | "artikel"
  | "video"
  | "verktyg"
  | "kurs"
  | "dokumentation"
  | "övning"
  | "övrigt";

export type ResourceLevel = "nybörjare" | "fördjupning";

export type Resource = {
  title: string;
  url: string;
  description?: string;
  type: ResourceType;
  level?: ResourceLevel;
  tags?: string[];
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
  description: string;
  level: ResourceLevel;
  format: ResourceType;
  tags: string[];
  addedAt: string;
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
    description: link.description,
    type: link.format,
    level: link.level,
    tags: link.tags,
  })),
}));
