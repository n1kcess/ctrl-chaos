import { ChaosEffect } from ".";
import { character } from "../lib/character";

let timer: ReturnType<typeof setTimeout> | null = null;
let idleLevel = 0;

function resetIdleTimer() {
  if (timer) {
    clearTimeout(timer);
  }

  idleLevel = 0;

  timer = setTimeout(() => {
    character.say("idle");
    idleLevel = 1;

    timer = setTimeout(() => {
      character.say("idle");
      idleLevel = 2;
    }, 20000);

  }, 10000);
}

function handleActivity() {
  resetIdleTimer();
}

export const idleWatcher: ChaosEffect = {
  id: "idle-watcher",

  unlockAt: 100,

  onUnlock() {
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keydown", handleActivity);

    resetIdleTimer();
  },

  onDisable() {
    window.removeEventListener("mousemove", handleActivity);
    window.removeEventListener("click", handleActivity);
    window.removeEventListener("keydown", handleActivity);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  },
};