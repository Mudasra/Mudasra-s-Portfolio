import React from "react";

export function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#FFD700", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}