import { ChaosEffect } from ".";
import { useChaosStore } from "../store/chaos";

export const fakeLoading: ChaosEffect = {
  id: "fake-loading",

  unlockAt: 35,

  onUnlock() {
    const { showOverlay, hideOverlay } = useChaosStore.getState();

    showOverlay("Saving...");

    setTimeout(() => {
      showOverlay("Saved.");
    }, 1000);

    setTimeout(() => {
      hideOverlay();
    }, 1800);
  },
};