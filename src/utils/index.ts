export const NUM_GRADE_ROWS = 4;

export const GRADE_THRESHOLDS = [
  { grade: "A+", minScore: 100 },
  { grade: "A", minScore: 90 },
  { grade: "A-", minScore: 85 },
  { grade: "B+", minScore: 80 },
  { grade: "B", minScore: 66 },
  { grade: "B-", minScore: 60 },
  { grade: "C+", minScore: 54 },
  { grade: "C", minScore: 40 },
] as const;

export function getAggregatedScore(e1: number, e2: number, e3: number): number {
  const part1 = 24 * Math.max(e1, e2);
  const part2 = 28 * Math.max(e3, e2);
  const weighted = 0.3 * e1 + 0.7 * e2;
  const part3 = 48 * Math.max(e3, weighted);

  return Math.round(((part1 + part2 + part3) / 100) * 100) / 100;
}

export function getLetterGrade(score: number): string {
  for (const entry of GRADE_THRESHOLDS) {
    if (score >= entry.minScore) {
      return entry.grade;
    }
  }
  return "F";
}

export function getDefaultGradeRows() {
  return Array(NUM_GRADE_ROWS)
    .fill(0)
    .map(() => ({ e1: 0, e2: 0, e3: 0 }));
}
