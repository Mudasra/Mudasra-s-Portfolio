import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants/Testimonials";



export function useScrollSpy() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
      let current = "Home";
      sections.forEach((s) => {
        if (s && window.scrollY >= s.offsetTop - 120) current = s.id.charAt(0).toUpperCase() + s.id.slice(1);
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}