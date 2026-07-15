import { create } from "zustand";

interface OverlayState {
  text: string | null;

  show: (text: string, duration?: number) => void;
  hide: () => void;
}

let timer: ReturnType<typeof setTimeout> | null = null;

export const useOverlayStore = create<OverlayState>((set) => ({
  text: null,

  show(text, duration = 2500) {
    if (timer) {
      clearTimeout(timer);
    }

    set({ text });

    timer = setTimeout(() => {
      set({ text: null });
      timer = null;
    }, duration);
  },

  hide() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    set({ text: null });
  },
}));