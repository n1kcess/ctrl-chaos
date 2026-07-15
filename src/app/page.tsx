"use client";

import ChaosButton from "./components/ChaosButton";
import ChaosEffects from "./components/ChaosEffects";
import Overlay from "./components/Overlay";
import StatusPanel from "./components/StatusPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <Overlay />

      <ChaosEffects />

      <StatusPanel />

      <ChaosButton />
    </main>
  );
}