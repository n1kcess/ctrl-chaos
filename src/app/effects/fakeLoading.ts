import { ChaosEffect } from ".";
import { notify } from "../lib/notify";
import { sleep } from "../lib/sleep";

export const fakeLoading: ChaosEffect = {
  id: "fake-loading",

  unlockAt: 35,

  async onUnlock() {
    notify("Saving...", 1000);

    await sleep(1000);

    notify("Saved.", 800);
  },
};