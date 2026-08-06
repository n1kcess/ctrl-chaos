import { create } from "zustand";

interface DisplayState {
  fakeStability: number | null;

  setFakeStability: (value: number | null) => void;
  reset: () => void;
}

export const useDisplayStore = create<DisplayState>((set) => ({
  fakeStability: null,

  setFakeStability: (value) =>
    set({
      fakeStability: value,
    }),
    reset: () =>
        set({
            fakeStability: null,
        })
}));