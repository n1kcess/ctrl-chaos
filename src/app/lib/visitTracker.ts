import { useCharacterMemory } from "../store/characterMemory";

export function checkVisit() {
  const memory = useCharacterMemory.getState();

  const now = Date.now();

  const day = 1000 * 60 * 60 * 24;

  const wasAwayLong =
    now - memory.lastVisit > day;

  if (wasAwayLong) {
    memory.increaseTabReturns();
  }

  memory.setLastVisit();

  return {
    wasAwayLong,
    tabReturns: useCharacterMemory.getState().tabReturns,
  };
}