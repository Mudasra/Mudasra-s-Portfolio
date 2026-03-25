import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./Services/Servicecard";
import { VALUES } from "../constants/Values";

export function ValueSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <h2
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: 800,
            fontFamily: "'Syne', sans-serif",
            color: "#F9FAFB",
            marginBottom: 64,
          }}
        >
          Websites That would Convert and Build Trust
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {VALUES.map((v, i) => (
            <ServiceCard
              key={v.title}
              service={v}
              delay={i * 0.15}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}