import React from "react";
import { StatBadge } from "./StatBadge";

export function ProfileCard({ imageSrc, imageAlt, badgeValue, badgeLabel }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: "linear-gradient(135deg, #111827, #0A0F1E)",
          borderRadius: 24,
          border: "1px solid #1F2937",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, #00D4FF15, transparent 60%)",
          }}
        />
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 24,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: -1,
            right: -1,
            height: 4,
            background: "linear-gradient(90deg, #00D4FF, #764ABC)",
            borderRadius: "0 0 24px 24px",
          }}
        />
      </div>
      <StatBadge value={badgeValue} label={badgeLabel} />
    </div>
  );
}