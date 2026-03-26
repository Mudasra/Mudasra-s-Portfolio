import { useState } from "react";
import React from "react";
import { ServiceCardIcon } from "./Servicecardicon";
import { ServiceCardFeatureList } from "./Servicecardfeaturelist";

export function ServiceCard({ service: s, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111827",
        borderRadius: 20,
        padding: 32,
        border: "1px solid",
        borderColor: hovered ? "#00D4FF30" : "#1F2937",
        transform: `translateY(${hovered ? -4 : visible ? 0 : 20}px)`,
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 16px 48px #00D4FF0A" : "none",
        transition: `all 0.6s ease ${delay}s, transform 0.2s, box-shadow 0.2s, border-color 0.2s`,
      }}
    >
      <ServiceCardIcon icon={s.icon} />
      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 12,
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#6B7280",
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {s.desc}
      </p>
      <ServiceCardFeatureList features={s.features} />
    </div>
  );
}