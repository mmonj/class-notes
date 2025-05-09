export const NUM_GRADE_ROWS = 7;

export function calculateScore(e1: number, e2: number, e3: number): number {
  const part1 = 24 * Math.max(e1, e2);
  const part2 = 28 * Math.max(e3, e2);
  const weighted = 0.3 * e1 + 0.7 * e2;
  const part3 = 48 * Math.max(e3, weighted);
  return Math.round(((part1 + part2 + part3) / 100) * 100) / 100;
}

export function getDefaultGradeRows() {
  return Array(NUM_GRADE_ROWS)
    .fill(0)
    .map(() => ({ e1: 0, e2: 0, e3: 0 }));
}
