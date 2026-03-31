import React from "react";
import { FormField } from "./FormField";

export function SituationTypeRow({ form, inputStyle, onUpdate }) {
  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          .situation-type-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="situation-type-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <FormField label="YOUR SITUATION">
          <select
            style={{ ...inputStyle("situation"), cursor: "pointer" }}
            value={form.situation}
            onChange={onUpdate("situation")}
          >
            <option value="">What's your situation?</option>
            <option>No website yet</option>
            <option>Website isn't converting</option>
            <option>Need a rebrand</option>
            <option>Not sure yet</option>
          </select>
        </FormField>
        <FormField label="PROJECT TYPE">
          <select
            style={{ ...inputStyle("type"), cursor: "pointer" }}
            value={form.type}
            onChange={onUpdate("type")}
          >
            <option value="">Project type</option>
            <option>Landing Page</option>
            <option>Personal Brand</option>
            <option>Client Portal</option>
            <option>Not sure yet</option>
          </select>
        </FormField>
      </div>
    </>
  );
}