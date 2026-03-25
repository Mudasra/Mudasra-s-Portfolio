import React from "react";

export function AvailabilityBadge({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 10px #22C55E",
        }}
      />
      <span
        style={{
          color: "#22C55E",
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </span>
    </div>
  );
}