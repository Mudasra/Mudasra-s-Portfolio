import React from "react";
import { Code2, PenTool, Rocket } from "lucide-react";

export const SERVICES = [
  {
    icon: <Rocket size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "High-Converting Landing Page",
    desc: "A focused, beautifully designed page that turns cold visitors into warm leads. Built around your offer, your story, and your ideal client, so people land and think 'this is exactly what I need.'",
    features: [
      "Clear offer & messaging",
      "Social proof & testimonials",
      "Frictionless booking CTA",
      "Fast-loading on all devices",
    ],
  },
  {
    icon: <PenTool size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "Your Full Coaching Website",
    desc: "Your full online home, a website that positions you as the go-to expert in your niche, builds trust before the first call, and works as a 24/7 sales tool for your coaching business.",
    features: [
      "Your story & methodology",
      "Services & pricing pages",
      "Media kit & speaking page",
      "Newsletter & lead magnet",
    ],
  },
  {
    icon: <Code2 size={28} color="#00D4FF" strokeWidth={1.5} />,
    title: "Client Portal & Booking System",
    desc: "Stop juggling Google Docs and DMs. I build you a clean client portal where your clients book sessions, access resources, and track their progress, all in one place.",
    features: [
      "Online booking & scheduling",
      "Resource & content library",
      "Client intake forms",
      "Saves you hours every week",
    ],
  },
];
