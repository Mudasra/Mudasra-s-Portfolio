import React from "react";
import { TestimonialCard } from "./Testimonialcard";

export function TestimonialGrid({ testimonials }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 24,
      }}
    >
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} testimonial={t} />
      ))}
    </div>
  );
}