import React from "react";

export function ServerErrorBanner() {
  return (
    <div
      style={{
        background: "#EF444415",
        border: "1px solid #EF444430",
        borderRadius: 8,
        padding: "12px 16px",
        color: "#EF4444",
        fontSize: 13,
      }}
    >
      Something went wrong. Please try again or email me directly.
    </div>
  );
}