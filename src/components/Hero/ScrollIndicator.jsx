import React from "react";

export function ScrollIndicator() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 80,
        opacity: 0.4,
        animation: "bounce 2s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: 24,
          height: 40,
          border: "2px solid #6B7280",
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          paddingTop: 6,
        }}
      >
        <div
          style={{
            width: 4,
            height: 8,
            background: "#6B7280",
            borderRadius: 2,
            animation: "scrollDot 2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
