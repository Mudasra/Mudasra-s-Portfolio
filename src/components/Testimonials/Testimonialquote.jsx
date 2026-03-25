import React from "react";

export function TestimonialQuote({ text }) {
  return (
    <p
      style={{
        color: "#9CA3AF",
        fontSize: 15,
        lineHeight: 1.7,
        margin: "16px 0 24px",
        fontStyle: "italic",
      }}
    >
      "{text}"
    </p>
  );
}