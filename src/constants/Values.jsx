import { LuMessageSquareText } from "react-icons/lu";
import { LuMousePointerClick } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const VALUES = [
  {
    icon: <LuMessageSquareText  size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "Clear Messaging",
    desc: "Your visitors should understand who you help and what you do within seconds.",
    features: [
      "Clear offer & positioning",
      "Speak to your ideal client",
      "Instant clarity",
      "No confusion or guessing",
    ],
  },
  {
    icon: <LuMousePointerClick  size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "Strong Calls to Action",
    desc: "Every page guides visitors toward booking a call or taking the next step.",
    features: [
      "Strategic CTA placement",
      "Frictionless booking flow",
      "Clear next steps",
      "Conversion-focused layout",
    ],
  },
  {
    icon: <IoShieldCheckmarkOutline   size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "Trust & Performance",
    desc: "Clean, fast, and polished design that builds trust instantly.",
    features: [
      "Premium look & feel",
      "Fast loading speed",
      "Mobile optimized",
      "Built for credibility",
    ],
  },
];


export const NAV_LINKS = ["Home", "About", "Projects", "Services", "Contact"];
