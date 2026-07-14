import { titleGlitch } from "./titleGlitch";
import { fakeLoading } from "./fakeLoading";
import { buttonAI } from "./buttonAI";
export interface ChaosEffect {
  id: string;
  unlockAt: number;
  disableAt?: number;

  onUnlock?: () => void;
  update?: () => void;
}

export const effects: ChaosEffect[] = [
  titleGlitch,
  fakeLoading,
  buttonAI,
];