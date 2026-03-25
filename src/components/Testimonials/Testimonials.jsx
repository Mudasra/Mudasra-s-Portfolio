import React from "react";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialGrid } from "./TestimonialGrid";
import { TESTIMONIALS } from "../../constants/Testimonials";

export function Testimonials() {
  return (
    <div style={{ padding: "80px 32px", background: "#0D1220" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <TestimonialsHeader />
        <TestimonialGrid testimonials={TESTIMONIALS} />
      </div>
    </div>
  );
}