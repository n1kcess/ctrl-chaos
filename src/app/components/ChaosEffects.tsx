"use client";

import { useEffect, useRef } from "react";
import { checkVisit } from "../lib/visitTracker";
import { useChaosStore } from "../store/chaos";
import { effects } from "../effects";
import { useDialogueStore } from "../store/dialogue";
import { getDisplayedStability } from "../lib/stability";
import { useDisplayStore } from "../store/display";

export default function ChaosEffects() {
  const { clicks, stability } = useChaosStore();
  const {
    setFakeStability,
  } = useDisplayStore();

  const unlocked = useRef(new Set<string>());

  useEffect(() => {
    effects.forEach((effect) => {
      const shouldBeActive =
        clicks >= effect.unlockAt &&
        (!effect.disableAt || clicks <= effect.disableAt);

      const isActive = unlocked.current.has(effect.id);

      if (shouldBeActive && !isActive) {
        unlocked.current.add(effect.id);
        effect.onUnlock?.();
      }

      if (!shouldBeActive && isActive) {
        unlocked.current.delete(effect.id);
        effect.onDisable?.();
      }
    });
  }, [clicks]);

  useEffect(() => {
    const result = checkVisit();
    
    if (result.greeting) {
      useDialogueStore.getState().setMessage(result.greeting);
    }
  }, []);

  useEffect(() => {
    const displayed = getDisplayedStability(stability, clicks);

    if (displayed !== stability) {
      setFakeStability(displayed);

      const timer = setTimeout(() => {
        setFakeStability(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stability, clicks, setFakeStability]);

  useEffect(() => {
    let animationFrame: number;

    const loop = () => {
      effects.forEach((effect) => {
        if (unlocked.current.has(effect.id)) {
          effect.update?.();
        }
      });

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return null;
}
