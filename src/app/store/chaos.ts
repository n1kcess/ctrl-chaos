import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CONFIG } from "../lib/config";
import { useDialogueStore } from "./dialogue";

interface ChaosState {
  stability: number;
  clicks: number;

  click: () => void;
  reset: () => void;
}

export const useChaosStore = create<ChaosState>()(
  persist(
    (set) => ({
      stability: CONFIG.INITIAL_STABILITY,
      clicks: 0,

      click: () =>
        set((state) => {
          const newClicks = state.clicks + 1;
          useDialogueStore.getState().setRandomMessage(newClicks);
          return {
            clicks: newClicks,
            stability: Math.max(0, state.stability - 1),
          };
        }),

      reset: () => {
        useDialogueStore.getState().reset();
        set({
          stability: CONFIG.INITIAL_STABILITY,
          clicks: 0,
        });
      },
    }),
    {
      name: "chaos-save",
    }
  )
);