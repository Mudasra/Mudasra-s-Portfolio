import React from "react";

export function MeshBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "60%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, #00D4FF18 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float1 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, #764ABC18 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float2 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
