"use client";

import { useEffect, useRef } from "react";
import { useChaosStore } from "../store/chaos";
import { effects } from "../effects";

export default function ChaosEffects() {
  const { clicks } = useChaosStore();

  const unlocked = useRef(new Set<string>());

  useEffect(() => {
    effects.forEach((effect) => {
      if (
        clicks >= effect.unlockAt &&
        !unlocked.current.has(effect.id)
      ) {
        unlocked.current.add(effect.id);
        effect.onUnlock?.();
      }
    });
  }, [clicks]);

  useEffect(() => {
    const interval = setInterval(() => {
      effects.forEach((effect) => {
        if (unlocked.current.has(effect.id)) {
          effect.update?.();
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (clicks === 0) {
      unlocked.current.clear();
    }
  }, [clicks]);

  return null;
}