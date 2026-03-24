import React from "react";
import { Badge } from "../Badge";

export function CardBody({ title, desc, tags }) {
  return (
    <>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#6B7280",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {desc}
      </p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </>
  );
}