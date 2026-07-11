import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CONFIG } from "../lib/config";

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
        set((state) => ({
          clicks: state.clicks + 1,
          stability: Math.max(0, state.stability - 1),
        })),

      reset: () =>
        set({
          stability: CONFIG.INITIAL_STABILITY,
          clicks: 0,
        }),
    }),
    {
      name: "chaos-save",
    }
  )
);