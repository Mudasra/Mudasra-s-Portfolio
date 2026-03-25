// import React from "react";
// import { Button } from "../Button";
// import { Check } from "lucide-react";
// import { CgEnter } from "react-icons/cg";

// export function ContactSuccess({ onReset }) {
//   return (
//     <div style={{ textAlign: "center", padding: "40px 0" }}>
//       <div style={{ fontSize: 100, marginBottom: 20 }}> 
//         <Check />
//       </div>
//       <h3 style={{
//         fontSize: 24, fontWeight: 800,
//         fontFamily: "'Syne', sans-serif",
//         color: "#F9FAFB", marginBottom: 12,
//       }}>
//         Message Sent!
//       </h3>
//       <p style={{ color: "#6B7280", fontSize: 15 }}>
//         I'll get back to you within 24 hours. Looking forward to working together!
//       </p>
//       <Button variant="outline" onClick={onReset} style={{ marginTop: 24 }}>
//         Send Another
//       </Button>
//     </div>
//   );
// }








import React from "react";
import { Button } from "../Button";
import { Check } from "lucide-react";

export function ContactSuccess({ onReset, name }) {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00D4FF20, #764ABC20)",
            border: "2px solid #00D4FF50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 32px #00D4FF25",
          }}
        >
          <Check size={36} color="#00D4FF" strokeWidth={2.5} />
        </div>
      </div>

      <h3
        style={{
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "'Syne', sans-serif",
          color: "#F9FAFB",
          marginBottom: 12,
        }}
      >
        You're in good hands,{" "}
        <span style={{ color: "#00D4FF" }}>
          {name ? name.split(" ")[0] : "there"}
        </span>{" "}
        👋
      </h3>

      <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, maxWidth: 320, margin: "0 auto" }}>
        Your message is on its way. I'll review your situation and get back to
        you <span style={{ color: "#9CA3AF", fontWeight: 600 }}>within 24 hours.</span> Looking forward to working together!
      </p>

      <Button variant="outline" onClick={onReset} style={{ marginTop: 28 }}>
        Send Another
      </Button>
    </div>
  );
}