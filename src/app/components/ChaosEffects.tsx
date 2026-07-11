"use client";

import { useEffect } from "react";
import { useChaosStore } from "../store/chaos";
import { effects } from "../effects";

export default function ChaosEffects() {
  const { clicks } = useChaosStore();

  useEffect(() => {
    effects.forEach((effect) => {
      if (clicks === effect.unlockAt) {
        effect.run();
      }
    });
  }, [clicks]);

  return null;
}