// ===============================
// SCORE CALCULATION
// ===============================

export function calculateScore(answers: Record<string, number>) {
  const rawScore = Object.values(answers).reduce(
    (sum, val) => sum + val,
    0
  );

  const maxPossible = 50; // 10 questions × 5
  const normalized = Math.round((rawScore / maxPossible) * 100);

  return normalized;
}

// ===============================
// BAND TYPE
// ===============================

export type Band = {
  title: string;
  min: number;
  max: number;
  textColor: string;   // For titles
  bgColor: string;     // For spectrum bar
  recommendation: string;
};

// ===============================
// BAND DEFINITIONS
// ===============================

export const bands: Band[] = [
  {
    title: "Reactive",
    min: 0,
    max: 24,
    textColor: "text-red-600",
    bgColor: "bg-red-500",
    recommendation:
      "Build a structured experimentation roadmap tied to business KPIs.",
  },
  {
    title: "Testing Aware",
    min: 25,
    max: 49,
    textColor: "text-orange-600",
    bgColor: "bg-orange-500",
    recommendation:
      "Standardize hypothesis creation and connect tests to revenue impact.",
  },
  {
    title: "Structured",
    min: 50,
    max: 69,
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-400",
    recommendation:
      "Scale experimentation across teams and integrate feature governance.",
  },
  {
    title: "Scaled",
    min: 70,
    max: 84,
    textColor: "text-green-500",
    bgColor: "bg-green-400",
    recommendation:
      "Leverage automation and advanced personalization to increase velocity.",
  },
  {
    title: "Decision Intelligence",
    min: 85,
    max: 100,
    textColor: "text-green-800",
    bgColor: "bg-green-700",
    recommendation:
      "Adopt predictive experimentation and AI-driven personalization.",
  },
];

// ===============================
// GET BAND FROM SCORE
// ===============================

export function getBand(score: number): Band {
  const found = bands.find(
    (band) => score >= band.min && score <= band.max
  );

  // Fallback safety, prevents runtime crash
  return (
    found || bands[bands.length - 1]
  );
}

