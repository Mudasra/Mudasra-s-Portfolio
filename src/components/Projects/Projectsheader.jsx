import React from "react";

export function ProjectsHeader({ visible }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "all 0.7s ease",
        textAlign: "center",
        marginBottom: 60,
      }}
    >
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
        Featured Projects
      </h2>
    </div>
  );
}