import React from "react";

export function BenefitItem({ icon, title, desc }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{icon}</div>
      <div>
        <div
          style={{
            fontWeight: 700,
            color: "#F9FAFB",
            fontFamily: "'Syne', sans-serif",
            marginBottom: 4,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}