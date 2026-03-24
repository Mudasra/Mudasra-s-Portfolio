import React from "react";
import { ProjectCard } from "./Projectcard";

export function ProjectGrid({ projects, visible }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 24,
      }}
    >
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} delay={i * 0.1} visible={visible} />
      ))}
    </div>
  );
}