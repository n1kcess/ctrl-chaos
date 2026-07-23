import { notify } from "./notify";
import { dialogues, DialogueEvent } from "./dialogues";
import { getRelationshipLevel } from "./relationship";
import { useCharacterMemory } from "../store/characterMemory";
import { random } from "./random";

export const character = {
  say(event: DialogueEvent) {
    const memory = useCharacterMemory.getState();

    const relationship = getRelationshipLevel(
      memory.relationship
    );

    const lines = dialogues[event][relationship];

    if (!lines.length) return;

    const message = random(lines);

    notify(message);

    switch (event) {
      case "tab_return":
        memory.increaseTabReturns();
        memory.increaseRelationship(2);
        break;

      case "idle":
        memory.increaseIdleMoments();
        memory.increaseRelationship(1);
        break;

      case "button_escape":
        memory.increaseButtonEscapes();
        memory.increaseRelationship(1);
        break;
    }
  },
};