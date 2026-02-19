export function calculateScore(answers: Record<string, number>) {
  const rawScore = Object.values(answers).reduce(
    (sum, val) => sum + val,
    0
  );

  const maxPossible = 50; // 10 questions × 5
  const normalized = Math.round((rawScore / maxPossible) * 100);

  return normalized;
}

export function getBand(score: number) {
  if (score <= 24) {
    return {
      title: "Reactive",
      recommendation:
        "Build a structured experimentation roadmap tied to business KPIs.",
    };
  }

  if (score <= 49) {
    return {
      title: "Testing Aware",
      recommendation:
        "Standardize hypothesis creation and connect tests to revenue impact.",
    };
  }

  if (score <= 69) {
    return {
      title: "Structured",
      recommendation:
        "Scale experimentation across teams and integrate feature governance.",
    };
  }

  if (score <= 84) {
    return {
      title: "Scaled",
      recommendation:
        "Leverage automation and advanced personalization to increase velocity.",
    };
  }

  return {
    title: "Decision Intelligence",
    recommendation:
      "Adopt predictive experimentation and AI-driven personalization.",
  };
}

