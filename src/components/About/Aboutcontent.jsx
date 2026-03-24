import React from "react";
import { Button } from "../Button";

export function AboutContent({ primaryText, secondaryText, ctaLabel, ctaHref }) {
  return (
    <div>
      <p
        style={{
          color: "#9CA3AF",
          fontSize: 17,
          lineHeight: 1.9,
          marginBottom: 32,
        }}
      >
        {primaryText}
      </p>
      <p
        style={{
          color: "#6B7280",
          fontSize: 16,
          lineHeight: 1.9,
          marginBottom: 40,
        }}
      >
        {secondaryText}
      </p>
      <Button variant="primary" href={ctaHref}>
        {ctaLabel}
      </Button>
    </div>
  );
}