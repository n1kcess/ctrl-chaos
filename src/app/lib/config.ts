export const CONFIG = {
  INITIAL_STABILITY: 100,

  PHASES: {
    STABLE: 90,
    WATCHING: 70,
    CONCERNED: 40,
    HOSTILE: 15,
  },

  EFFECTS: {
    TITLE_GLITCH_AT: 15,
    BUTTON_SHAKE_AT: 25,
    BUTTON_ESCAPE_AT: 50,
  },
} as const;