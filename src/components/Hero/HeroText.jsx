import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { Button } from "../Button";
import { AvailableBadge } from "../AvailableBadge";

export function HeroText({ mounted }) {
  const typed = useTypewriter([
    "I Build Websites That Get Coaches Clients",
    "Help Coaches Get Found, Trusted & Booked",
    "Turning Coach Websites Into 24/7 Sales Tool",
  ]);

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "none" : "translateY(30px)",
        transition: "all 0.8s ease",
      }}
    >
      <AvailableBadge />
      <h1
        style={{
          fontSize: "clamp(52px, 6vw, 80px)",
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#F9FAFB",
          margin: "0 0 16px",
        }}
      >
        Hi, I'm
        <br />
        <span style={{ color: "#00D4FF", textShadow: "0 0 40px #00D4FF60" }}>
          Mudasra
        </span>
      </h1>
      <div
        style={{
          fontSize: "clamp(18px, 2.5vw, 26px)",
          fontFamily: "'Syne', sans-serif",
          color: "#9CA3AF",
          marginBottom: 32,
          height: 36,
          fontWeight: 600,
        }}
      >
        {typed}
        <span
          style={{ color: "#00D4FF", animation: "blink 1s step-end infinite" }}
        >
          |
        </span>
      </div>
      <p
        style={{
          color: "#6B7280",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 520,
          marginBottom: 40,
        }}
      >
        If you're a Career Coach, your website should be your best
        salesperson, working around the clock, building trust before the first
        call, and turning the right visitors into booked discovery calls. I make
        that happen. No tech headaches. Just a site that works.{" "}
      </p>{" "}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Button
          variant="primary"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Featured Projects →
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
