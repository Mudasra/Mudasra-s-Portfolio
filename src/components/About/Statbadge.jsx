import React from "react";

export function StatBadge({ value, label }) {
  return (
    <div
      style={{
        position: "absolute",
        top: -16,
        right: -16,
        background: "#0A0F1E",
        border: "1px solid #1F2937",
        borderRadius: 16,
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#00D4FF",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "#6B7280",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </div>
    </div>
  );
}