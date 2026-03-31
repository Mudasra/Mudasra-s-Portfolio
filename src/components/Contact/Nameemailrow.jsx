import React from "react";
import { FormField } from "./FormField";

export function NameEmailRow({ form, errors, inputStyle, onUpdate }) {
  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          .name-email-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="name-email-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <FormField label="NAME" error={errors.name}>
          <input
            style={inputStyle("name")}
            value={form.name}
            onChange={onUpdate("name")}
            placeholder="Your name"
          />
        </FormField>
        <FormField label="EMAIL" error={errors.email}>
          <input
            style={inputStyle("email")}
            value={form.email}
            onChange={onUpdate("email")}
            placeholder="your@email.com"
          />
        </FormField>
      </div>
    </>
  );
}