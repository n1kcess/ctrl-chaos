import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CharacterMemory {
  firstVisit: number;
  lastVisit: number;

  relationship: number;

  tabReturns: number;
  idleMoments: number;
  buttonEscapes: number;

  secretsFound: number;
  endingsSeen: number;

  setLastVisit: () => void;

  increaseRelationship: (amount: number) => void;

  increaseTabReturns: () => void;
  increaseIdleMoments: () => void;
  increaseButtonEscapes: () => void;

  increaseSecretsFound: () => void;
  increaseEndingsSeen: () => void;
}

const now = Date.now();

export const useCharacterMemory = create<CharacterMemory>()(
  persist(
    (set) => ({
      firstVisit: now,
      lastVisit: now,

      relationship: 0,

      tabReturns: 0,
      idleMoments: 0,
      buttonEscapes: 0,

      secretsFound: 0,
      endingsSeen: 0,


      setLastVisit: () =>
        set({
          lastVisit: Date.now(),
        }),


      increaseRelationship: (amount) =>
        set((state) => ({
          relationship: Math.min(
            100,
            state.relationship + amount
          ),
        })),


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