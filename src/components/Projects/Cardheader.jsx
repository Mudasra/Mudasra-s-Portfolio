import React from "react";
import { Badge } from "../Badge";

export function CardHeader({ cat, github, live }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        marginBottom: 16,
      }}
    >
      <Badge color="#6B7280">{cat}</Badge>
      <div style={{ display: "flex", gap: 8 }}>
        <a
          href={github}
          style={{ color: "#6B7280", textDecoration: "none", fontSize: 18 }}
        >
          ⌥
        </a>
        <a
          href={live}
          style={{ color: "#6B7280", textDecoration: "none", fontSize: 18 }}
        >
          ↗
        </a>
      </div>
    </div>
  );
}