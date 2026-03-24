import React from "react";

export function CardGradientOverlay({ hovered, gradient }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: hovered ? 1 : 0,
        background: `linear-gradient(135deg, ${gradient
          .replace("from-", "")
          .replace("to-", "")
          .split(" ")[0]
          ?.replace(/[a-z-]+\/[0-9]+/, (m) => {
            const parts = m.split("/");
            return parts[0];
          })}, transparent)`,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, rgba(0,212,255,0.06), rgba(118,74,188,0.06))`,
        }}
      />
    </div>
  );
}