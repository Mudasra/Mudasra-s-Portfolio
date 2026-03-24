import React from "react";

export function NavLogo({ src, alt }) {
  return (
    <a href="/">
      <img
        src={src}
        alt={alt}
        width={100}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />
    </a>
  );
}