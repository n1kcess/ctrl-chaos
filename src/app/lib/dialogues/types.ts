export type RelationshipLevel =
  | "stranger"
  | "recognized"
  | "familiar"
  | "attached";

export type DialogueGroup = Record<
  RelationshipLevel,
  string[]
>;