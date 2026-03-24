import React from "react";

export function SectionHeader({ title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 80 }}>
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          letterSpacing: "-0.03em",
          margin: "12px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}