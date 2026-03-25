import { useEffect, useRef, useState } from "react";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import React from "react";

export function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ContactHeader visible={visible} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <ContactInfo visible={visible} />
          <ContactForm visible={visible} />
        </div>
      </div>
    </section>
  );
}