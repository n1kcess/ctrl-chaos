export function getDisplayedStability(
  realStability: number,
  chaosLevel: number
) {
  const chance = Math.random();

  if (chaosLevel < 30) {
    return realStability;
  }

  if (chance < 0.15) {
    const fakeChange =
      Math.floor(Math.random() * 15) - 7;

    return Math.min(
      100,
      Math.max(0, realStability + fakeChange)
    );
  }

  return realStability;
}