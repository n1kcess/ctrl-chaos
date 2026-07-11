import { ChaosEffect } from ".";
import { CONFIG } from "../lib/config";

export const titleGlitch: ChaosEffect = {
  id: "title-glitch",

  unlockAt: CONFIG.EFFECTS.TITLE_GLITCH_AT,

  onUnlock() {
    const originalTitle = document.title;

    document.title = "DON'T CLICK";

    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  },
};