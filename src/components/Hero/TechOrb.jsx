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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: mounted ? 1 : 0,
        transition: "all 1s ease 0.3s",
      }}
    >
      {/* Outer Container */}
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px solid #1F2937",
          position: "relative",
        }}
      >
        {/* Rotating Ring */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            animation: "spin 40s linear infinite",
          }}
        >
          {stackItems.map((item, i) => {
            const angle = (i / stackItems.length) * 360;

            return (
              <div
                key={item}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translate(120px)
                  `,
                }}
              >
                {/* Keep text straight */}
                <div style={{ transform: `rotate(-${angle}deg)` }}>
                  <Badge>{item}</Badge>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center React Icon */}
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
          }}
        >
          <FaReact size={48} color="#00D4FF" />
        </div>
      </div>
    </div>
  );
}