import React from "react";
import { SocialLink } from "../SocialLink";

export function SocialLinkList({ links }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}