import { notify } from "./notify";
import { useCharacterStore } from "../store/character";

type EventType =
  | "tab_return"
  | "idle"
  | "button_escape";


const dialogue: Record<EventType, string[]> = {
  tab_return: [
    "Welcome back.",
    "You returned.",
    "I knew you'd come back.",
    "Don't leave again.",
  ],

  idle: [
    "Still there?",
    "I'm waiting.",
    "You stopped.",
  ],

  button_escape: [
    "Too slow.",
    "Nice try.",
    "You'll have to do better.",
  ],
};


export const character = {
  say(event: EventType) {
    const count =
      useCharacterStore.getState().events[event] ?? 0;


    const lines = dialogue[event];

    const message =
      lines[Math.min(count, lines.length - 1)];


    notify(message);

    useCharacterStore
      .getState()
      .increaseEvent(event);
  },
};