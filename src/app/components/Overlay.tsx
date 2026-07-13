"use client";

interface OverlayProps {
  text: string | null;
}

export default function Overlay({ text }: OverlayProps) {
  if (!text) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <p className="text-3xl font-bold tracking-widest animate-pulse">
        {text}
      </p>
    </div>
  );
}