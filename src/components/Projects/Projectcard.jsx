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
        {p.image && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 20,
                border: "1px solid #1F2937",
                aspectRatio: "16/9",
                cursor: "pointer",
                position: "relative", // 👈 add this
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  transition: "transform 0.4s ease",
                  transform: hovered ? "scale(1.03)" : "scale(1)",
                }}
              />

              {/* Hover overlay with button */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <span
                  style={{
                    padding: "8px 20px",
                    borderRadius: 99,
                    background: "#00D4FF",
                    color: "#0A0F1E",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  Live Demo ↗
                </span>
              </div>
            </div>
          </a>
        )}

        <CardHeader cat={p.cat} github={p.github} live={p.live} />
        <CardBody title={p.title} desc={p.desc} tags={p.tags} />
      </div>
    </div>
  );
}
