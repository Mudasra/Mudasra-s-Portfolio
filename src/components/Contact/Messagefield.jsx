import React from "react";
import { FormField } from "./FormField";

export function MessageField({ form, errors, inputStyle, onUpdate }) {
  return (
    <FormField label="MESSAGE" error={errors.message}>
      <textarea
        style={{ ...inputStyle("message"), height: 120, resize: "vertical" }}
        value={form.message}
        onChange={onUpdate("message")}
        placeholder="Tell me about your coaching business..."
      />
    </FormField>
  );
}