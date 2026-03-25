import React from "react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1F2937",
        padding: "10px 32px",
        background: "#0A0F1E",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <a href="/">
          <img
            src="https://i.postimg.cc/63N4Shgk/Untitled-design-4-removebg-preview.png"
            alt="Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </a>

        <div
          style={{
            color: "#6B7280",
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          © 2026 Mudasra · Helping Coaches Get Clients Online
        </div>
      </div>
    </footer>
  );
}
