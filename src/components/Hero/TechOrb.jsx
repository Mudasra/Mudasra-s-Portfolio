import React from "react";
import { FaReact } from "react-icons/fa6";
import { Badge } from "../Badge";

const stackItems = [
  "React.js",
  "Redux",
  "Tailwind",
  "Vite",
  "JS ES6+",
  "REST API",
];

export function TechOrb({ mounted }) {
  const radius = 120;
  const containerSize = 320;
  const center = containerSize / 2;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease 0.3s",
      }}
    >
      <div style={{ width: containerSize, height: containerSize, position: "relative" }}>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: containerSize,
            height: containerSize,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: radius * 2,
            height: radius * 2,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.15)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            animation: "spin 45s linear infinite",
          }}
        >
          {stackItems.map((item, i) => {
            const angle = (i / stackItems.length) * 2 * Math.PI - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            return (
              <div
                key={item}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  animation: "counterSpin 45s linear infinite",
                }}
              >
                <Badge>{item}</Badge>
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00D4FF20, #764ABC20)",
            border: "1px solid #00D4FF30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px #00D4FF20",
          }}
        >
          <FaReact size={48} color="#00D4FF" />
        </div>

      </div>
    </div>
  );
}