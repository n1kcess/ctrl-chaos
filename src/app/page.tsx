"use client";

import ChaosButton from "./components/ChaosButton";
import ChaosEffects from "./components/ChaosEffects";
import Overlay from "./components/Overlay";
import StatusPanel from "./components/StatusPanel";
import { useChaosStore } from "./store/chaos";

export default function Home() {
  const { overlay } = useChaosStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <Overlay text={overlay} />

      <StatusPanel />

      <ChaosEffects />

      <ChaosButton />
    </main>
  );
}