import React from "react";

export function AvailableBadge() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 24,
      }}
    >
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
          color: "#6B7280",
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.08em",
        }}
      >
        Specializing in websites for coaches
      </span>
    </div>
  );
}
