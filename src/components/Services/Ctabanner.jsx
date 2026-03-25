import React from "react";
import { Button } from "../Button";

export function CTABanner() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #00D4FF15 0%, #764ABC15 100%)",
        border: "1px solid #00D4FF30",
        borderRadius: 24,
        padding: "60px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 0%, #00D4FF10, transparent 60%)",
        }}
      />
      <h3
        style={{
          fontSize: "clamp(24px, 4vw, 40px)",
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 16,
          position: "relative",
        }}
      >
        Your website should be working while you're coaching.
      </h3>
      <p style={{ color: "#9CA3AF", fontSize: 17, marginBottom: 32, position: "relative" }}>
        Let's build a website that makes your ideal client stop scrolling and think{" "}
        <span style={{ color: "#00D4FF" }}>"This is exactly who I've been looking for."</span>
      </p>
      <Button
        variant="primary"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ position: "relative", padding: "14px 36px", fontSize: 16 }}
      >
        Let's Talk →
      </Button>
    </div>
  );
}