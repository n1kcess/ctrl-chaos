import { useChaosStore } from "../store/chaos";

export type Mood =
  | "curious"
  | "watching"
  | "aware"
  | "hostile";

export function getMood(): Mood {
  const clicks = useChaosStore.getState().clicks;

  if (clicks >= 500) return "hostile";
  if (clicks >= 250) return "aware";
  if (clicks >= 100) return "watching";

  return "curious";
}