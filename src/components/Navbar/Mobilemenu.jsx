import React from "react";

export function MobileMenu({ links, active, onNavClick }) {
  return (
    <div
      style={{
        padding: "16px 32px 24px",
        background: "rgba(10,15,30,0.98)",
        borderTop: "1px solid #1F2937",
      }}
    >
      {links.map((l) => (
        <button
          key={l}
          onClick={() => onNavClick(l)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "12px 0",
            color: active === l ? "#00D4FF" : "#9CA3AF",
            fontWeight: 600,
            fontSize: 16,
            fontFamily: "'Syne', sans-serif",
            borderBottom: "1px solid #1F293720",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}