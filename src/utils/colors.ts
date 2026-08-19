export function getColorByIndex(index: number) {
  const COLORS = ["#22d8ff", "#ff3f79", "#ffd166", "#4ade80", "#f59e0b"];
  return COLORS[index % COLORS.length];
}
