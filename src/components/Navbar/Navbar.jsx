import React from "react";
import { useEffect, useState } from "react";
import { NavLogo } from "./Navlogo";
import { DesktopNav } from "./Desktopnav";
import { HamburgerButton } from "./Hamburgerbutton";
import { NAV_LINKS } from "../../constants/Values";
import { MobileMenu } from "./Mobilemenu";


export function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1F2937" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLogo
          src="https://i.postimg.cc/63N4Shgk/Untitled-design-4-removebg-preview.png"
          alt="Logo"
        />

        <DesktopNav
          links={NAV_LINKS}
          active={active}
          onNavClick={scrollTo}
          onCtaClick={() => scrollTo("Contact")}
        />

        <HamburgerButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {menuOpen && (
        <MobileMenu links={NAV_LINKS} active={active} onNavClick={scrollTo} />
      )}
    </nav>
  );
}