"use client";

import { useEffect, useRef } from "react";
import { useChaosStore } from "../store/chaos";
import { effects } from "../effects";

export default function ChaosEffects() {
  const { clicks } = useChaosStore();

  const unlockedEffects = useRef(new Set<string>());

  useEffect(() => {
    effects.forEach((effect) => {
      if (
        clicks >= effect.unlockAt &&
        !unlockedEffects.current.has(effect.id)
      ) {
        unlockedEffects.current.add(effect.id);
        effect.onUnlock?.();
      }
    });
  }, [clicks]);

  useEffect(() => {
    const interval = setInterval(() => {
      effects.forEach((effect) => {
        if (unlockedEffects.current.has(effect.id)) {
          effect.update?.();
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}