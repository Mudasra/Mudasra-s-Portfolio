import React from "react";
import { SearchCheck, Palette, LayoutDashboard, Zap } from "lucide-react";
import { ProcessStep } from "./Processstep";

const STEPS = [
  [
    <SearchCheck size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Discovery",
    "We align on your goals, brand, and audience.",
  ],
  [
    <Palette size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Design",
    "Wireframes and design mockups for your approval.",
  ],
  [
    <LayoutDashboard size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Build",
    "We build your site, fast, mobile-ready, and built to convert.",
  ],
  [
    <Zap size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Launch",
    "Deploy, QA, and you're live. Ongoing support follows.",
  ],
];

export function ProcessSection() {
  return (
    <div style={{ textAlign: "center", marginBottom: 80 }}>
      <h3
        style={{
          fontSize: 28,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 48,
        }}
      >
        My Process
      </h3>
      <div
        style={{
          display: "flex",
          gap: 0,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {STEPS.map(([icon, step, desc], i) => (
          <ProcessStep
            key={step}
            icon={icon}
            step={step}
            desc={desc}
            showArrow={i < 3}
          />
        ))}
      </div>
    </div>
  );
}