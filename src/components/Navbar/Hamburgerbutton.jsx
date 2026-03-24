import React from "react";

export function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#F9FAFB",
        fontSize: 24,
      }}
      className="mobile-menu-btn"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}