import React from "react";

export function NavLink({ label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: 8,
        color: active ? "#00D4FF" : "#9CA3AF",
        fontWeight: active ? 700 : 500,
        fontSize: 14,
        fontFamily: "'Syne', sans-serif",
        transition: "all 0.2s",
        background: active ? "#00D4FF10" : "transparent",
      }}
    >
      {label}
    </button>
  );
}