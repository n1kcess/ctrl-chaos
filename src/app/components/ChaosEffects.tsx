"use client";

import { useEffect, useRef } from "react";
import { useChaosStore } from "../store/chaos";
import { effects } from "../effects";

export default function ChaosEffects() {
  const { clicks } = useChaosStore();

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