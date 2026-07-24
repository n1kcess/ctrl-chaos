"use client";

import { useMemo } from "react";
import { useChaosStore } from "../store/chaos";
import { phases } from "../lib/phases";
import { random } from "../lib/random";

export default function StatusPanel() {
  const { stability, clicks, reset } = useChaosStore();

  const phase =
    phases.find(
      (phase) =>
        clicks >= phase.min &&
        clicks <= phase.max
    ) ?? phases[0];

  const message = useMemo(() => {
    return random(phase.messages);
  }, [clicks, phase.id]);

  return (
    <div className="mb-8 text-center">
      <h1 className="mb-6 text-6xl font-bold tracking-widest">
        CHAOS
      </h1>

      <p className="mb-2 text-xl">
        System Stability: {stability}%
      </p>

      <p className="text-gray-500">
        Clicks: {clicks}
      </p>

      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
        {phase.name}
      </p>

      <p className="mt-4 text-lg italic">
        {message}
      </p>

      {process.env.NODE_ENV === "development" && (
        <button
          onClick={reset}
          className="mt-8 text-sm text-gray-400 transition hover:text-black"
        >
          Reset Progress
        </button>
      )}
    </div>
  );
}