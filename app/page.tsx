"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import { calculateScore, getBand, bands } from "@/lib/score";

export default function Home() {
  const [stage, setStage] = useState<"lead" | "questions" | "result">("lead");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [lead, setLead] = useState({
    email: "",
    role: "",
    companySize: "",
  });

  const question = questions[current];

  function handleAnswer(score: number) {
  setAnswers((prev) => ({
    ...prev,
    [question.id]: score,
  }));

  if (current + 1 < questions.length) {
    setCurrent(current + 1);
  }
}

  const progress =
    stage === "questions"
      ? ((current + 1) / questions.length) * 100
      : stage === "result"
      ? 100
      : 0;

  // =========================
  // LEAD CAPTURE SCREEN
  // =========================

  if (stage === "lead") {
  const isValid =
    lead.email.trim() !== "" &&
    lead.role.trim() !== "" &&
    lead.companySize.trim() !== "";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-black text-center">
          Experimentation Maturity Assessment
        </h1>

        {/* Work Email */}
        <input
          type="email"
          placeholder="Work Email"
          required
          className="w-full border border-gray-300 p-4 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={lead.email}
          onChange={(e) =>
            setLead({ ...lead, email: e.target.value })
          }
        />

        {/* Role Dropdown */}
        <select
          required
          className="w-full border border-gray-300 p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={lead.role}
          onChange={(e) =>
            setLead({ ...lead, role: e.target.value })
          }
        >
          <option value="">Select Role</option>
          <option value="Executive">Executive</option>
          <option value="Product">Product</option>
          <option value="Marketing">Marketing</option>
          <option value="Growth">Growth</option>
          <option value="Engineering">Engineering</option>
          <option value="Data">Data / Analytics</option>
          <option value="Other">Other</option>
        </select>

        {/* Company Size Dropdown */}
        <select
          required
          className="w-full border border-gray-300 p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={lead.companySize}
          onChange={(e) =>
            setLead({ ...lead, companySize: e.target.value })
          }
        >
          <option value="">Select Company Size</option>
          <option value="1-50">1–50</option>
          <option value="51-200">51–200</option>
          <option value="201-1000">201–1000</option>
          <option value="1000+">1000+</option>
        </select>

        <button
          disabled={!isValid}
          onClick={() => setStage("questions")}
          className={`w-full p-4 rounded-lg font-semibold transition ${
            isValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Start Assessment
        </button>
      </div>
    </main>
  );
}

  // =========================
  // RESULT SCREEN
  // =========================

  if (stage === "result") {
    const totalScore = calculateScore(answers);
    const band = getBand(totalScore);

    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl text-center space-y-6">
          <h1 className="text-3xl font-bold text-black">
            Your Experimentation Maturity Score
          </h1>

          <div className="text-5xl font-bold text-blue-600">
            {totalScore}
          </div>

          <div className="text-2xl font-semibold text-black">
            {band.title}
          </div>

          <p className="text-gray-600">
            {band.recommendation}
          </p>
          <div className="mt-8 text-left">
  <h3 className="text-lg font-semibold mb-4 text-center">
    Experimentation Maturity Spectrum
  </h3>

  <div className="space-y-2">
    {bands.map((b) => {
      const isActive =
        totalScore >= b.min && totalScore <= b.max;

      return (
        <div
          key={b.title}
          className={`p-3 rounded-lg text-white ${b.bgColor} ${
            isActive ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex justify-between">
            <span className="font-semibold">
              {b.title}
            </span>
            <span>
              {b.min} – {b.max}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>
        </div>
      </main>
    );
  }

  // =========================
  // QUESTION SCREEN
  // =========================

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl space-y-6">

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-gray-500">
          Question {current + 1} of {questions.length}
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h1 className="text-xl font-semibold text-center text-black">
            {question.text}
          </h1>

         <div className="flex flex-col gap-4">
  {question.options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleAnswer(option.score)}
      className="px-6 py-4 border rounded-lg bg-white text-black hover:bg-gray-100 transition text-left"
    >
      {option.label}
    </button>
  ))}

  {/* Finish button only on last question */}
  {current === questions.length - 1 && (
    <button
      onClick={() => setStage("result")}
      disabled={!answers[question.id]}
      className={`w-full mt-4 p-4 rounded-lg font-semibold transition ${
        answers[question.id]
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      Finish Assessment
    </button>
  )}
</div>
        </div>
      </div>
    </main>
  );
}
