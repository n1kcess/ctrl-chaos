import { notify } from "./notify";
import { getMood } from "./mood";
import { useCharacterStore } from "../store/character";

type EventType =
  | "tab_return"
  | "idle"
  | "button_escape";


const dialogue = {
  curious: {
    tab_return: [
      "Welcome back.",
      "You returned.",
    ],

    idle: [
      "Still there?",
      "I'm waiting.",
    ],

    button_escape: [
      "Too slow.",
      "Nice try.",
    ],
  },

  watching: {
    tab_return: [
      "You came back.",
      "I noticed.",
    ],

    idle: [
      "You're quiet.",
      "I can wait.",
    ],

    button_escape: [
      "Almost.",
      "Try again.",
    ],
  },

  aware: {
    tab_return: [
      "You always return.",
      "I knew you'd come back.",
    ],

    idle: [
      "Why did you stop?",
      "I'm still here.",
    ],

    button_escape: [
      "Predictable.",
      "You won't catch me.",
    ],
  },

  hostile: {
    tab_return: [
      "I knew you wouldn't leave.",
      "You can't ignore me forever.",
    ],

    idle: [
      "Don't ignore me.",
      "I'm waiting.",
    ],

    button_escape: [
      "Give up.",
      "You are too slow.",
    ],
  },
};


export const character = {
  say(event: EventType) {
    const mood = getMood();

    const memory = useCharacterStore.getState();

    let count = 0;

    if (event === "tab_return") {
      count = memory.tabReturns;
    }

    if (event === "idle") {
      count = memory.idleMoments;
    }

    if (event === "button_escape") {
      count = memory.buttonEscapes;
    }

    const lines = dialogue[mood][event];

    const message =
      lines[Math.min(count, lines.length - 1)];

    notify(message);

    if (event === "tab_return") {
      memory.increaseTabReturns();
    }

    if (event === "idle") {
      memory.increaseIdleMoments();
    }

    if (event === "button_escape") {
      memory.increaseButtonEscapes();
    }
  },
};