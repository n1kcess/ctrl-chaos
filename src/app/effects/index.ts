import { titleGlitch } from "./titleGlitch";

export interface ChaosEffect {
  id: string;
  unlockAt: number;

  run: () => void;
}

export const effects = [
  titleGlitch,
];