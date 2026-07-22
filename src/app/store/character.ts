import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CharacterStore {
  firstVisit: number;
  lastVisit: number;

  tabReturns: number;
  idleMoments: number;
  buttonEscapes: number;

  secretsFound: number;
  endingsSeen: number;

  updateLastVisit: () => void;

  increaseTabReturns: () => void;
  increaseIdleMoments: () => void;
  increaseButtonEscapes: () => void;

  increaseSecretsFound: () => void;
  increaseEndingsSeen: () => void;
}

const now = Date.now();

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      firstVisit: now,
      lastVisit: now,

      tabReturns: 0,
      idleMoments: 0,
      buttonEscapes: 0,

      secretsFound: 0,
      endingsSeen: 0,

      updateLastVisit: () =>
        set({
          lastVisit: Date.now(),
        }),

      increaseTabReturns: () =>
        set((state) => ({
          tabReturns: state.tabReturns + 1,
        })),

      increaseIdleMoments: () =>
        set((state) => ({
          idleMoments: state.idleMoments + 1,
        })),

      increaseButtonEscapes: () =>
        set((state) => ({
          buttonEscapes: state.buttonEscapes + 1,
        })),

      increaseSecretsFound: () =>
        set((state) => ({
          secretsFound: state.secretsFound + 1,
        })),

      increaseEndingsSeen: () =>
        set((state) => ({
          endingsSeen: state.endingsSeen + 1,
        })),
    }),
    {
      name: "character-memory",
    }
  )
);