import React from "react";

export function FilterTab({ label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        padding: "8px 20px",
        borderRadius: 99,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        border: "1.5px solid",
        fontFamily: "'Syne', sans-serif",
        transition: "all 0.2s",
        background: active ? "#00D4FF" : "transparent",
        color: active ? "#0A0F1E" : "#6B7280",
        borderColor: active ? "#00D4FF" : "#1F2937",
      }}
    >
      {label}
    </button>
  );
}