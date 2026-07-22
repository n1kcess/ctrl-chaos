export type Relationship =
  | "stranger"
  | "recognized"
  | "familiar"
  | "attached";


export function getRelationshipLevel(
  value: number
): Relationship {

  if (value >= 100) return "attached";

  if (value >= 50) return "familiar";

  if (value >= 20) return "recognized";

  return "stranger";
}