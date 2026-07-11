"use client";

import { useChaosStore } from "../store/chaos";
import { messages } from "../lib/messages";
import { phases } from "../lib/phases";

export default function StatusPanel() {
  const { stability, clicks, reset } = useChaosStore();

  const message =
    clicks === 0
      ? "..."
      : messages[Math.min(clicks - 1, messages.length - 1)];

const phase =
  phases.find((phase) => stability >= phase.min)?.name ?? "Unknown";

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
        {phase}
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