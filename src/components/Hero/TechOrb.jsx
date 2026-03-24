import React from "react";
import { Atom } from "lucide-react";
import { Badge } from "../Badge";

const stackItems = [
  "React.js",
  "Redux",
  "Tailwind",
  "Vite",
  "JS ES6+",
  "REST API",
  "Git",
  "Framer",
];

export function TechOrb({ mounted }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        opacity: mounted ? 1 : 0,
        transition: "all 1s ease 0.3s",
      }}
    >
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px solid #1F2937",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          animation: "spin 30s linear infinite",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00D4FF20, #764ABC20)",
            border: "1px solid #00D4FF30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "spin 30s linear infinite reverse",
          }}
        >
          <Atom size={48} color="#00D4FF" strokeWidth={1.5} />
        </div>

        {stackItems.slice(0, 6).map((item, i) => {
          const angle = (i / 6) * 2 * Math.PI;
          const r = 130;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={item}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animation: `spin 30s linear infinite reverse`,
              }}
            >
              <Badge>{item}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
