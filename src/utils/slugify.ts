/**
 * Deterministic ASCII slug generator for school routes and identifiers.
 * Converts strings to URL-friendly kebab-case, handling special characters,
 * abbreviations, and regional punctuation cleanly.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/['"]/g, "")
    .replace(/[^\w\s-]/g, "") // remove non-word chars (except spaces and hyphens)
    .replace(/[\s_-]+/g, "-") // collapse whitespace and underscores to single hyphen
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}

/**
 * Normalizes search terms for acronym, synonym, and fuzzy-tolerant matching.
 * Strips periods, hyphens, and whitespace so "K.V.", "KV", "k-v" normalize to "kv".
 */
export function normalizeSearchToken(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[\.\s\-_/\\,()&]/g, "")
    .trim();
}
