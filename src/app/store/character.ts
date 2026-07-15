import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CharacterState {
  events: Record<string, number>;

  increaseEvent: (event: string) => void;
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      events: {},

      increaseEvent: (event) =>
        set((state) => ({
          events: {
            ...state.events,
            [event]: (state.events[event] ?? 0) + 1,
          },
        })),
    }),
    {
      name: "character-memory",
    }
  )
);