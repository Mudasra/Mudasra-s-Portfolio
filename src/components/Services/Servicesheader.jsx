import React from "react";

export function ServicesHeader({ visible }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "all 0.7s ease",
        textAlign: "center",
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          letterSpacing: "-0.03em",
          margin: "12px 0 20px",
        }}
      >
        For Business & Career Coaches
      </h2>
      <p
        style={{
          color: "#6B7280",
          fontSize: 18,
          maxWidth: 680,
          margin: "0 auto 64px",
          lineHeight: 1.7,
        }}
      >
        I help Business & Career Coaches build{" "}
        <span style={{ color: "#00D4FF" }}>high-converting landing pages</span>{" "}
        and personal portfolios that attract premium clients.
      </p>
    </div>
  );
}