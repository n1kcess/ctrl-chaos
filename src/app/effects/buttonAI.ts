import { ChaosEffect } from ".";
import { CONFIG } from "../lib/config";

let mouseX = 0;
let mouseY = 0;

let positionX = 0;
let positionY = 0;

let velocityX = 0;
let velocityY = 0;

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
}

export const buttonAI: ChaosEffect = {
  id: "button-ai",

  unlockAt: CONFIG.EFFECTS.BUTTON_AI_AT,
  disableAt: 150,

  onUnlock() {
    positionX = 0;
    positionY = 0;

    velocityX = 0;
    velocityY = 0;
  },

  onDisable() {
    positionX = 0;
    positionY = 0;

    velocityX = 0;
    velocityY = 0;

    const button = document.getElementById("chaos-button");

    if (button) {
      button.style.transform = "translate(0px, 0px)";
    }
  },

  update() {
    const button = document.getElementById("chaos-button");

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - mouseX;
    const dy = centerY - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 180) {
      velocityX *= 0.92;
      velocityY *= 0.92;
    } else if (distance > 0) {
      const force = (180 - distance) / 180;

      velocityX += (dx / distance) * force * 2;
      velocityY += (dy / distance) * force * 2;
    }

    positionX += velocityX;
    positionY += velocityY;

    velocityX *= 0.9;
    velocityY *= 0.9;

    positionX = Math.max(-250, Math.min(250, positionX));
    positionY = Math.max(-150, Math.min(150, positionY));

    button.style.transform = `translate(${positionX}px, ${positionY}px)`;
  },
};