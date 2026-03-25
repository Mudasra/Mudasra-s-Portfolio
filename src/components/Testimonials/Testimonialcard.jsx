import React from "react";
import { TestimonialQuote } from "./TestimonialQuote";
import { TestimonialAuthor } from "./TestimonialAuthor";
import { StarRating } from "../StarRating";

export function TestimonialCard({ testimonial: t }) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: 20,
        padding: 28,
        border: "1px solid #1F2937",
      }}
    >
      <StarRating count={t.stars} />
      <TestimonialQuote text={t.text} />
      <TestimonialAuthor avatar={t.avatar} name={t.name} role={t.role} />
    </div>
  );
}