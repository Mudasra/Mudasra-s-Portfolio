import React from "react";

export function SocialLink({ icon, label, value, href }) {
  return (
    <a
      href={href || "#"}
      target={href?.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "14px 18px",
          background: "#111827",
          borderRadius: 12,
          border: "1px solid #1F2937",
          transition: "border-color 0.2s",
        }}
      >
        <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
        <div>
          <div
            style={{
              fontSize: 11,
              color: "#6B7280",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.05em",
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: 14, color: "#9CA3AF" }}>{value}</div>
        </div>
      </div>
    </a>
  );
}
