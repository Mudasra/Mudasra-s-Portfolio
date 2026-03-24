import React from "react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ProfileCard } from "./ProfileCard";
import { AboutContent } from "./AboutContent";
import ProfilePicture from "./profile-picture.png";

export function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(40px)",
          transition: "all 0.7s ease",
        }}
      >
        <SectionHeader title="Your Dedicated Website Builder" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 80,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <ProfileCard
            imageSrc={ProfilePicture}
            imageAlt="Mudasra"
            badgeValue="100%"
            badgeLabel="Coach-Focused."
          />

          <AboutContent
            primaryText="I'm Mudasra, a web developer who specializes in building websites
              for Career Coaches. I chose this niche because I
              believe great coaches deserve a website that actually reflects how
              good they are, and most don't have that yet."
            secondaryText="I don't just build websites. I build your online sales system, one
              that positions you as the premium choice, pre-qualifies your
              leads, and has potential clients ready to say yes before they even
              contact you."
            ctaLabel="Download CV ↓"
            ctaHref="#"
          />
        </div>
      </div>
    </section>
  );
}