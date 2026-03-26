import { useState } from "react";
import React from "react";
import { CardGradientOverlay } from "./Cardgradientoverlay";
import { CardHeader } from "./Cardheader";
import { CardBody } from "./Cardbody";

export function ProjectCard({ project: p, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111827",
        borderRadius: 20,
        border: "1px solid",
        borderColor: hovered ? "#00D4FF30" : "#1F2937",
        padding: 28,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transform: `translateY(${hovered ? -6 : visible ? 0 : 30}px)`,
        opacity: visible ? 1 : 0,
        boxShadow: hovered
          ? "0 20px 60px #00D4FF10, 0 0 0 1px #00D4FF20"
          : "none",
        transition: `all 0.35s ease ${delay}s, box-shadow 0.2s, border-color 0.2s, transform 0.2s`,
      }}
    >
      <CardGradientOverlay hovered={hovered} gradient={p.gradient} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <CardHeader cat={p.cat} github={p.github} live={p.live} />
        <CardBody title={p.title} desc={p.desc} tags={p.tags} />
      </div>
    </div>
  );
}