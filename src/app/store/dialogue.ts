import { create } from "zustand";
import { persist } from "zustand/middleware";
import { phases } from "../lib/phases";
import { random } from "../lib/random";

const initialPhase = phases[0];
const initialMessage = random(initialPhase.messages);

interface DialogueState {
  current: string;
  last: string;

  setRandomMessage: (clicks: number) => void;
  setMessage: (message: string) => void;
  reset: () => void;
}

export const useDialogueStore = create<DialogueState>()(
  persist(
    (set, get) => ({
      current: initialMessage,
      last: initialMessage,

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
          current: initialMessage,
          last: initialMessage,
        }),
    }),
    {
      name: "dialogue-save",
    }
  )
);