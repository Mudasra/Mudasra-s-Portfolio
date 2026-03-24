import React from "react";
import { Button } from "../Button";
import { NavLink } from "./Navlink";

export function DesktopNav({ links, active, onNavClick, onCtaClick }) {
  return (
    <div
      style={{ display: "flex", gap: 4, alignItems: "center" }}
      className="desktop-nav"
    >
      {links.map((l) => (
        <NavLink key={l} label={l} active={active === l} onClick={onNavClick} />
      ))}
      <Button
        variant="primary"
        onClick={onCtaClick}
        style={{ padding: "9px 20px", fontSize: 13, marginLeft: 8 }}
      >
        Start with a Free Chat
      </Button>
    </div>
  );
}