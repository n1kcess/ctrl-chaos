"use client";

import { useOverlayStore } from "../store/overlay";

export default function Overlay() {
  const text = useOverlayStore((state) => state.text);

  if (!text) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <p className="animate-pulse text-3xl font-bold tracking-widest">
        {text}
      </p>
    </div>
  );
}