import React from "react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { AvailabilityBadge } from "./Availabilitybadge";
import { SocialLinkList } from "./Sociallinklist";
import { ContactBlurb } from "./Contactblurb";

const SOCIAL_LINKS = [
  {
    icon: <CiMail size={25} color="#00D4FF" strokeWidth={1.5} />,
    label: "Email",
    value: "mudasramanzar1@gmail.com",
    href: "mailto:mudasramanzar1@gmail.com",
  },
  {
    icon: <FiLinkedin size={25} color="#00D4FF" strokeWidth={1.5} />,
    label: "LinkedIn",
    value: "/in/mudasra",
    href: "https://linkedin.com/in/mudasra",
  },
  {
    icon: <LuGithub size={25} color="#00D4FF" strokeWidth={1.5} />,
    label: "GitHub",
    value: "github.com/mudasra",
    href: "https://github.com/mudasra",
  },
];

export function ContactInfo({ visible }) {
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.2s" }}>
      <AvailabilityBadge label="Specializing in websites for coaches" />
      <ContactBlurb
        text="Tell me about your coaching business, where you are now, and what you
        want your website to do for you. I'll come back with ideas within 24 hours."
      />
      <SocialLinkList links={SOCIAL_LINKS} />
    </div>
  );
}
