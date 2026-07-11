import { CONFIG } from "./config";

export const phases = [
  {
    min: CONFIG.PHASES.STABLE,
    name: "Stable",
  },
  {
    min: CONFIG.PHASES.WATCHING,
    name: "Watching",
  },
  {
    min: CONFIG.PHASES.CONCERNED,
    name: "Concerned",
  },
  {
    min: CONFIG.PHASES.HOSTILE,
    name: "Hostile",
  },
  {
    min: 0,
    name: "Corrupted",
  },
];