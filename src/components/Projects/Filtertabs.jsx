import React from "react";
import { FilterTab } from "./FilterTab";

export function FilterTabs({ categories, activeFilter, onFilterChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        marginBottom: 56,
        flexWrap: "wrap",
      }}
    >
      {categories.map((c) => (
        <FilterTab
          key={c}
          label={c}
          active={activeFilter === c}
          onClick={onFilterChange}
        />
      ))}
    </div>
  );
}