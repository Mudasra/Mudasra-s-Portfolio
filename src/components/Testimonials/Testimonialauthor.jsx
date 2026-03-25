import React from "react";

export function TestimonialAuthor({ avatar, name, role }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00D4FF, #764ABC)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
          color: "#0A0F1E",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {avatar}
      </div>
      <div>
        <div
          style={{
            fontWeight: 700,
            color: "#F9FAFB",
            fontSize: 14,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 12, color: "#6B7280" }}>{role}</div>
      </div>
    </div>
  );
}