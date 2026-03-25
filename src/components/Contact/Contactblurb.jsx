import React from "react";

export function ContactBlurb({ text }) {
  return (
    <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
      {text}
    </p>
  );
}