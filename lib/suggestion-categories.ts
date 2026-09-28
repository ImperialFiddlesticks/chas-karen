export const CATEGORIES = ["Event", "Utbildning", "Kåren", "Övrigt"] as const;
export type SuggestionCategory = (typeof CATEGORIES)[number];
