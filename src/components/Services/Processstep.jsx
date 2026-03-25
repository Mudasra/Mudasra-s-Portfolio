import React from "react";

export function ProcessStep({ icon, step, desc, showArrow }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      <div style={{ textAlign: "center", padding: "0 24px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00D4FF20, #764ABC20)",
            border: "1px solid #00D4FF30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            margin: "0 auto 12px",
          }}
        >
          {icon}
        </div>
        <div
          style={{
            fontWeight: 700,
            color: "#F9FAFB",
            fontFamily: "'Syne', sans-serif",
            fontSize: 14,
          }}
        >
          {step}
        </div>
        <div
          style={{ fontSize: 12, color: "#6B7280", marginTop: 4, maxWidth: 120 }}
        >
          {desc}
        </div>
      </div>
      {showArrow && (
        <div style={{ color: "#1F2937", fontSize: 24, flexShrink: 0 }}>→</div>
      )}
    </div>
  );
}