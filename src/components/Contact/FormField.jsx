import React from "react";

export function FormField({ label, error, children }) {
  return (
    <div>
      <label style={{
        fontSize: 12, color: "#6B7280",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.06em", display: "block", marginBottom: 8,
      }}>
        {label}
      </label>
      {children}
      {error && (
        <div style={{ color: "#EF4444", fontSize: 12, marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
}