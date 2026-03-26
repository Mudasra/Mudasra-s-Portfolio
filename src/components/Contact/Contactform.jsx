import { useState } from "react";
import React from "react";
import { NameEmailRow } from "./Nameemailrow";
import { SituationTypeRow } from "./Situationtyperow";
import { MessageField } from "./Messagefield";
import { ServerErrorBanner } from "./Servererrorbanner";
import { Button } from "../Button";
import { ContactSuccess } from "./Contactsuccess";

const INITIAL_FORM = { name: "", email: "", situation: "", type: "", message: "" };

const inputStyle = (errors, field) => ({
  width: "100%",
  background: "#111827",
  border: "1.5px solid",
  borderColor: errors[field] ? "#EF4444" : "#1F2937",
  borderRadius: 10,
  padding: "14px 16px",
  color: "#F9FAFB",
  fontSize: 15,
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
});

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
    errors.email = "Valid email required";
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

export function ContactForm({ visible }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const getInputStyle = (field) => inputStyle(errors, field);

  const handleSubmit = async () => {
    const e = validate(form);
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    setServerError(false);

    try {
      const res = await fetch("https://formspree.io/f/mnjgngok", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          situation: form.situation,
          projectType: form.type,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmittedName(form.name);
        setSubmitted(true);
      } else {
        setServerError(true);
      }
    } catch {
      setServerError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => { setSubmitted(false); setForm(INITIAL_FORM); };

  return (
    <div
      style={{
        background: "#111827",
        borderRadius: 24,
        padding: 40,
        border: "1px solid #1F2937",
        opacity: visible ? 1 : 0,
        transition: "all 0.7s ease 0.3s",
      }}
    >
      {submitted ? (
        <ContactSuccess onReset={handleReset} name={submittedName} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <NameEmailRow form={form} errors={errors} inputStyle={getInputStyle} onUpdate={update} />
          <SituationTypeRow form={form} errors={errors} inputStyle={getInputStyle} onUpdate={update} />
          <MessageField form={form} errors={errors} inputStyle={getInputStyle} onUpdate={update} />
          {serverError && <ServerErrorBanner />}
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "15px",
              fontSize: 16,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Sending..." : "Send Message →"}
          </Button>
        </div>
      )}
    </div>
  );
}