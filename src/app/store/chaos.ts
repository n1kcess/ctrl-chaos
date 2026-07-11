import { create } from "zustand";

interface ChaosState {
  stability: number;
  clicks: number;

  click: () => void;
  reset: () => void;
}

export const useChaosStore = create<ChaosState>((set) => ({
  stability: 100,
  clicks: 0,

  click: () =>
    set((state) => ({
      clicks: state.clicks + 1,
      stability: Math.max(0, state.stability - 1),
    })),

  reset: () =>
    set({
      stability: 100,
      clicks: 0,
    }),
}));