import { create } from "zustand";
import { phases } from "../lib/phases";
import { random } from "../lib/random";

interface DialogueState {
  current: string;
  last: string;

  setRandomMessage: (clicks: number) => void;
  setMessage: (message: string) => void;
  reset: () => void;
}

export const useDialogueStore = create<DialogueState>((set, get) => ({
  current: "A very ordinary button",
  last: "",

  setRandomMessage: (clicks) => {
    const phase =
      phases.find(
        (phase) =>
          clicks >= phase.min &&
          clicks <= phase.max
      ) ?? phases[0];

    let message = random(phase.messages);

    while (
      phase.messages.length > 1 &&
      message === get().last
    ) {
      message = random(phase.messages);
    }

    set({
      current: message,
      last: message,
    });
  },

  setMessage: (message) =>
    set({
      current: message,
      last: message,
    }),

  reset: () =>
    set({
      current: "A very ordinary button",
      last: "",
    }),
}));