import { ChaosEffect } from ".";

export const titleGlitch: ChaosEffect = {
  id: "title-glitch",
  unlockAt: 15,

  run() {
    const oldTitle = document.title;

    document.title = "DON'T CLICK";

    setTimeout(() => {
      document.title = oldTitle;
    }, 500);
  },
};