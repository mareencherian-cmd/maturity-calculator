export const questions = [
  // =====================
  // EXPERIMENTATION
  // =====================

  {
    id: "Q1",
    pillar: "Experimentation",
    text: "How frequently do you run experiments?",
    options: [
      { label: "We don’t run experiments", score: 0 },
      { label: "1–2 per quarter", score: 1 },
      { label: "1–2 per month", score: 3 },
      { label: "Weekly experiments", score: 4 },
      { label: "Continuous, always-on experimentation", score: 5 },
    ],
  },

  {
    id: "Q2",
    pillar: "Experimentation",
    text: "How are hypotheses created?",
    options: [
      { label: "No structured hypothesis process", score: 0 },
      { label: "Based on opinions", score: 1 },
      { label: "Some data used", score: 3 },
      { label: "Research-driven hypotheses", score: 4 },
      { label: "Continuous insight-led experimentation roadmap", score: 5 },
    ],
  },

  {
    id: "Q3",
    pillar: "Experimentation",
    text: "Who owns experimentation?",
    options: [
      { label: "No clear ownership", score: 0 },
      { label: "Ad-hoc ownership", score: 1 },
      { label: "Single team owns it", score: 3 },
      { label: "Cross-functional involvement", score: 4 },
      { label: "Organization-wide experimentation culture", score: 5 },
    ],
  },

  {
    id: "Q4",
    pillar: "Experimentation",
    text: "How are experiment learnings documented?",
    options: [
      { label: "Not documented", score: 0 },
      { label: "In scattered files", score: 1 },
      { label: "Stored but rarely revisited", score: 3 },
      { label: "Centralized repository", score: 4 },
      { label: "Actively reused in future decisions", score: 5 },
    ],
  },

  // =====================
  // FEATURE MANAGEMENT
  // =====================

  {
    id: "Q5",
    pillar: "Feature Management",
    text: "How are features released?",
    options: [
      { label: "Big-bang releases", score: 0 },
      { label: "Manual rollouts", score: 1 },
      { label: "Basic staged rollout", score: 3 },
      { label: "Controlled feature flag rollout", score: 4 },
      { label: "Fully progressive delivery with monitoring", score: 5 },
    ],
  },

  {
    id: "Q6",
    pillar: "Feature Management",
    text: "Can you roll back features instantly?",
    options: [
      { label: "No rollback capability", score: 0 },
      { label: "Manual hotfix required", score: 1 },
      { label: "Rollback possible but slow", score: 3 },
      { label: "Feature flag-based rollback", score: 4 },
      { label: "Instant automated rollback systems", score: 5 },
    ],
  },

  // =====================
  // BEHAVIORAL & VOC
  // =====================

  {
    id: "Q7",
    pillar: "Behavioral & VoC",
    text: "How do you collect customer feedback?",
    options: [
      { label: "We don’t collect feedback", score: 0 },
      { label: "Occasional surveys", score: 1 },
      { label: "Regular feedback collection", score: 3 },
      { label: "Multi-channel feedback system", score: 4 },
      { label: "Integrated VoC platform tied to experimentation", score: 5 },
    ],
  },

  {
    id: "Q8",
    pillar: "Behavioral & VoC",
    text: "How do you identify friction points?",
    options: [
      { label: "Reactive only", score: 0 },
      { label: "Manual reviews", score: 1 },
      { label: "Basic funnel analysis", score: 3 },
      { label: "Advanced behavioral segmentation", score: 4 },
      { label: "Predictive friction detection", score: 5 },
    ],
  },

  // =====================
  // PERSONALIZATION & AI
  // =====================

  {
    id: "Q9",
    pillar: "Personalization & AI",
    text: "How advanced is your audience targeting?",
    options: [
      { label: "Broad targeting only", score: 0 },
      { label: "Basic segments", score: 1 },
      { label: "Dynamic segmentation", score: 3 },
      { label: "Behavior-based targeting", score: 4 },
      { label: "Predictive targeting models", score: 5 },
    ],
  },

  {
    id: "Q10",
    pillar: "Personalization & AI",
    text: "Do you use AI in experimentation?",
    options: [
      { label: "No AI usage", score: 0 },
      { label: "Limited automation", score: 1 },
      { label: "AI for traffic allocation", score: 3 },
      { label: "AI-driven optimization", score: 4 },
      { label: "AI embedded in experimentation lifecycle", score: 5 },
    ],
  },
];

