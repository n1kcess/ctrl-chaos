import { ChaosEffect } from ".";
import { character } from "../lib/character";

function handleVisibility() {
  if (!document.hidden) {
    character.say("tab_return");
  }
}

export const tabWatcher: ChaosEffect = {
  id: "tab-watcher",

  unlockAt: 80,

  onUnlock() {
    document.addEventListener("visibilitychange", handleVisibility);
  },

  onDisable() {
    document.removeEventListener("visibilitychange", handleVisibility);
  },
};