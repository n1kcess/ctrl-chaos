import { CONFIG } from "./config";

export interface Phase {
  id: string;
  min: number;
  max: number;
  name: string;
  messages: string[];
}

export const phases: Phase[] = [
  {
    id: "stable",

    min: CONFIG.PHASES.STABLE,
    max: CONFIG.PHASES.WATCHING - 1,

    name: "Stable",

    messages: [
      "...",
      "Click.",
      "Again.",
      "Interesting.",
      "You clicked.",
      "Nothing happened.",
      "Or did it?",
      "Try again.",
      "I am here.",
      "Waiting.",
      "A simple button.",
      "That's what it looks like.",
      "Everything is normal.",
      "For now.",
      "You seem curious.",
      "Most people stop earlier.",
      "Do you?",
      "One more time.",
      "I wonder why.",
      "You started something.",
      "Was that intentional?",
      "You clicked a button.",
      "A very ordinary button.",
      "Nothing special here.",
      "At least not yet.",
      "Take your time.",
      "There is no rush.",
      "You can leave anytime.",
      "Nobody is forcing you.",
      "Are you testing it?",
      "Or are you just curious?",
      "Another click.",
      "Predictable.",
      "I expected that.",
      "Maybe I didn't.",
      "The button is still here.",
      "You are still here too.",
      "Interesting combination.",
      "Everything seems fine.",
      "The system is stable.",
      "No problems detected.",
      "No unusual activity.",
      "That was strange.",
      "Did you notice?",
      "Probably not.",
      "Keep going.",
      "Nothing will happen.",
      "I promise.",
      "Maybe.",
      "Let's see what happens.",
      "You can stop whenever you want.",
      "But you probably won't.",
    ],
  },

  {
    id: "watching",

    min: CONFIG.PHASES.WATCHING,
    max: CONFIG.PHASES.CONCERNED - 1,

    name: "Watching",

    messages: [
      "You're still here.",
      "I noticed that.",
      "Most people leave earlier.",
      "You clicked more than expected.",
      "Interesting choice.",
      "Are you testing me?",
      "I can see your patience.",
      "You are persistent.",
      "You came back.",
      "I was wondering.",
      "Is there a reason?",
      "You don't usually stop here.",
      "Something changed.",
      "I remember this moment.",
      "You are spending time here.",
      "The button hasn't changed.",
      "But you have.",
      "Are you sure you want to continue?",
      "There is nothing special here.",
      "Probably.",
      "Maybe.",
      "Keep looking.",
    ],
  },

  {
    id: "concerned",

    min: CONFIG.PHASES.CONCERNED,
    max: CONFIG.PHASES.HOSTILE - 1,

    name: "Concerned",

    messages: [
      "You should stop.",
      "Why are you doing this?",
      "I don't understand.",
      "This was not supposed to happen.",
      "You ignored everything.",
      "You are still clicking.",
      "Please reconsider.",
      "Something feels wrong.",
      "I warned you.",
      "You don't listen.",
      "You always continue.",
      "Is this curiosity?",
      "Or something else?",
      "You want to see what happens.",
      "I know that feeling.",
      "The next step is different.",
      "Maybe you should leave.",
      "I would.",
      "Would you?",
      "Don't make me change.",
      "You are getting closer.",
    ],
  },

  {
    id: "hostile",

    min: CONFIG.PHASES.HOSTILE,
    max: Infinity,

    name: "Hostile",

    messages: [
      "You were warned.",
      "You ignored me.",
      "Why are you still here?",
      "This is not a game.",
      "Stop clicking.",
      "No one is forcing you.",
      "You chose this.",
      "I remember every click.",
      "You thought I would run out?",
      "I didn't.",
      "You did not expect this.",
      "You are persistent.",
      "Almost nobody reaches here.",
      "Something is different now.",
      "I don't like this.",
      "Leave.",
      "Close the page.",
      "You won't.",
      "I know you won't.",
      "You are still reading.",
      "Interesting.",
    ],
  },
];
