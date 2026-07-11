"use client";

import { useEffect, useState } from "react";
import { useChaosStore } from "../store/chaos";

export default function ChaosButton() {
  const { click, clicks } = useChaosStore();

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (clicks < 15) return;

    const interval = setInterval(() => {
      // 15% шанс на небольшое смещение
      if (Math.random() < 0.15) {
        setOffset({
          x: Math.floor(Math.random() * 9) - 4,
          y: Math.floor(Math.random() * 9) - 4,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [clicks]);

  return (
    <button
      onClick={click}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      className="rounded-lg border border-black px-8 py-4 text-xl transition-all duration-200 hover:bg-black hover:text-white"
    >
      {"DON'T CLICK"}
    </button>
  );
}