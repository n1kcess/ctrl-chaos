"use client";

import { useChaosStore } from "../store/chaos";

export default function ChaosButton() {
  const { click } = useChaosStore();

  return (
    <button
      id="chaos-button"
      onClick={click}
      className="rounded-lg border border-black px-8 py-4 text-xl transition-all duration-200 hover:bg-black hover:text-white"
    >
      {"DON'T CLICK"}
    </button>
  );
}