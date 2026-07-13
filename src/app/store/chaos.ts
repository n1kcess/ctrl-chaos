import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CONFIG } from "../lib/config";

interface ChaosState {
  stability: number;
  clicks: number;

  overlay: string | null;

  click: () => void;
  reset: () => void;

  showOverlay: (text: string) => void;
  hideOverlay: () => void;
}

export const useChaosStore = create<ChaosState>()(
  persist(
    (set) => ({
      stability: CONFIG.INITIAL_STABILITY,
      clicks: 0,

      overlay: null,

      click: () =>
        set((state) => ({
          clicks: state.clicks + 1,
          stability: Math.max(0, state.stability - 1),
        })),

      reset: () =>
        set({
          stability: CONFIG.INITIAL_STABILITY,
          clicks: 0,
          overlay: null,
        }),

      showOverlay: (text) =>
        set({
          overlay: text,
        }),

      hideOverlay: () =>
        set({
          overlay: null,
        }),
    }),
    {
      name: "chaos-save",
    }
  )
);