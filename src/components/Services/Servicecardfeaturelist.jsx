import React from "react";

export function ServiceCardFeatureList({ features }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {features.map((f) => (
        <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00D4FF",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 13, color: "#9CA3AF" }}>{f}</span>
        </div>
      ))}
    </div>
  );
}