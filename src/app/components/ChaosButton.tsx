"use client";

import { useChaosStore } from "../store/chaos";

export default function ChaosButton() {
  const { click } = useChaosStore();

  return (
    <button
      onClick={click}
      className="rounded-lg border border-black px-8 py-4 text-xl transition hover:bg-black hover:text-white"
    >
      {"DON'T CLICK"}
    </button>
  );
}