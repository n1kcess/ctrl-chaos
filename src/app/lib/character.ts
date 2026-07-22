import { notify } from "./notify";
import { useCharacterMemory } from "../store/characterMemory";
import { getMood } from "./mood";

type CharacterEvent =
  | "tab_return"
  | "idle"
  | "button_escape";


export const character = {
  say(event: CharacterEvent) {
    const memory = useCharacterMemory.getState();

    const mood = getMood();


    let message = "";


    if (event === "tab_return") {
      if (memory.relationship >= 50) {
        message = "You came back again.";
      } else {
        message = "Welcome back.";
      }

      memory.increaseTabReturns();
      memory.increaseRelationship(2);
    }


    if (event === "idle") {
      if (memory.relationship >= 50) {
        message = "I was waiting.";
      } else {
        message = "Still there?";
      }

      memory.increaseIdleMoments();
      memory.increaseRelationship(1);
    }


    if (event === "button_escape") {
      message = "Nice try.";

      memory.increaseButtonEscapes();
      memory.increaseRelationship(1);
    }


    notify(
      `${message}`
    );
  },
};