import React from "react";
import { useEffect, useRef, useState } from "react";
import { ProjectsHeader } from "./Projectsheader";
import { FilterTabs } from "./Filtertabs";
import { ProjectGrid } from "./Projectgrid";
import { PROJECTS } from "../../constants/Projects";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const categories = [
    // "All",
    // "Landing Page",
    // "Coach Funnel"
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "120px 32px", background: "#0D1220" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ProjectsHeader visible={visible} />
        <FilterTabs
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        />
        <ProjectGrid projects={filtered} visible={visible} />
      </div>
    </section>
  );
}