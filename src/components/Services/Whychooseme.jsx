import React from "react";
import { Timer, Smartphone, Target, Wrench } from "lucide-react";
import { BenefitItem } from "./BenefitItem";

const BENEFITS = [
  [
    <Timer size={28} color="#00D4FF" strokeWidth={1.5} />,
    "More Discovery Calls",
    "Every design decision is made with one goal, getting your ideal client to book a call.",
  ],
  [
    <Smartphone size={28} color="#00D4FF" strokeWidth={1.5} />,
    "A Website You're Proud to Send",
    "Clean, premium design that actually reflects the value of your coaching.",
  ],
  [
    <Target size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Leads That Arrive Pre-Sold",
    "Your site speaks directly to your ideal client, so by the time they reach out, they're already interested.",
  ],
  [
    <Wrench size={28} color="#00D4FF" strokeWidth={1.5} />,
    "Ongoing Support Available",
    "Need updates after launch? I offer monthly maintenance packages so you're never stuck.",
  ],
];

export function WhyChooseMe({ visible }) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1F2937",
        borderRadius: 24,
        padding: 48,
        marginBottom: 80,
        opacity: visible ? 1 : 0,
        transition: "all 0.7s ease 0.4s",
      }}
    >
      <h3
        style={{
          fontSize: 28,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        What Changes After We Work Together
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {BENEFITS.map(([icon, title, desc]) => (
          <BenefitItem key={title} icon={icon} title={title} desc={desc} />
        ))}
      </div>
    </div>
  );
}