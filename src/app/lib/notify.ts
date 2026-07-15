import { useOverlayStore } from "../store/overlay";

export function notify(text: string, duration = 2500) {
  useOverlayStore.getState().show(text, duration);
}