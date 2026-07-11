"use client";

import { useChaosStore } from "../store/chaos";
import { messages } from "../lib/messages";

export default function StatusPanel() {
  const { stability, clicks } = useChaosStore();

  const message =
    clicks === 0
      ? "..."
      : messages[Math.min(clicks - 1, messages.length - 1)];

  return (
    <div className="mb-8 text-center">
      <h1 className="mb-6 text-6xl font-bold tracking-widest">
        CHAOS
      </h1>

      <p className="mb-2 text-xl">
        System Stability: {stability}%
      </p>

      <p className="mb-6 text-gray-500">
        Clicks: {clicks}
      </p>

      <p className="text-lg italic">
        {message}
      </p>
    </div>
  );
}