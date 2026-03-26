import React from "react";
import { useEffect, useRef, useState } from "react";
import { ServicesHeader } from "./Servicesheader";
import { ServiceCardGrid } from "./Servicecardgrid";
import { WhyChooseMe } from "./Whychooseme";
import { ProcessSection } from "./Processsection";
import { CTABanner } from "./CTABanner";
import { SERVICES } from "../../constants/Services";

export function Services() {
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
    <section id="services" ref={ref} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ServicesHeader visible={visible} />
        <ServiceCardGrid services={SERVICES} visible={visible} />
        <WhyChooseMe visible={visible} />
        <ProcessSection />
        <CTABanner />
      </div>
    </section>
  );
}