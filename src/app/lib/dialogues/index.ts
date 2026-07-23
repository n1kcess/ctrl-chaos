import { idleDialogue } from "./idle";
import { tabReturnDialogue } from "./tabReturn";
import { buttonEscapeDialogue } from "./buttonEscape";

export const dialogues = {
  idle: idleDialogue,
  tab_return: tabReturnDialogue,
  button_escape: buttonEscapeDialogue,
};

export type DialogueEvent = keyof typeof dialogues;