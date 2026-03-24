import React from "react";

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  style = {},
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 28px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.04em",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    fontFamily: "'Syne', sans-serif",
    border: "none",
  };
  const variants = {
    primary: {
      background: "#00D4FF",
      color: "#0A0F1E",
      boxShadow: "0 0 24px #00D4FF40",
    },
    outline: {
      background: "transparent",
      color: "#00D4FF",
      border: "1.5px solid #00D4FF40",
    },
    ghost: {
      background: "#ffffff08",
      color: "#F9FAFB",
      border: "1.5px solid #ffffff10",
    },
  };
  const merged = { ...base, ...variants[variant], ...style };
  if (href)
    return (
      <a href={href} style={merged}>
        {children}
      </a>
    );
  return (
    <button style={merged} onClick={onClick}>
      {children}
    </button>
  );
}
