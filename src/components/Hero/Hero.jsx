import React from "react";
import { useState, useEffect } from "react";
import { MeshBackground } from "./MeshBackground";
import { HeroText } from "./HeroText";
import { TechOrb } from "./TechOrb";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "32px",
      }}
    >
      <MeshBackground />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          zIndex: 1,
          paddingTop: 80,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <HeroText mounted={mounted} />
          <TechOrb mounted={mounted} />
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
