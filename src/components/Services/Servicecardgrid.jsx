import React from "react";
import { ServiceCard } from "./Servicecard";

export function ServiceCardGrid({ services, visible }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 24,
        marginBottom: 80,
      }}
    >
      {services.map((s, i) => (
        <ServiceCard key={s.title} service={s} delay={i * 0.15} visible={visible} />
      ))}
    </div>
  );
}