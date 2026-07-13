import { titleGlitch } from "./titleGlitch";
import { fakeLoading } from "./fakeLoading";
export interface ChaosEffect {
  id: string;
  unlockAt: number;

  onUnlock?: () => void;
  update?: () => void;
}

export const effects: ChaosEffect[] = [
  titleGlitch,
  fakeLoading,
];