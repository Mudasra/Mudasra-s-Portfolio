# Mudasra : Personal Portfolio

A fully responsive, component-driven portfolio site built with React and Vite. Designed and developed by **Mudasra Manzar** , a web developer specializing in websites for Career Coaches.

**Live Site →** [your-site-url.com](https://your-site-url.com)

---

## Overview

This is my personal portfolio, built from scratch with no UI libraries or component kits. Every layout, animation, interaction, and design decision is custom-written. The goal was to build something that feels premium, loads fast, and converts visitors into leads, without relying on templates.

---

## Features

- **Scroll-based active nav tracking** , navbar highlights update as the user scrolls through sections using a custom `useActiveSection` hook with `IntersectionObserver`
- **Intersection Observer animations** , sections fade and slide in on scroll, triggered by visibility thresholds
- **Filterable project grid** , projects filter by category with instant client-side filtering
- **Fully functional contact form** , validates client-side, submits to Formspree, shows a personalized success state with the submitter's first name
- **Responsive layout** , desktop nav collapses to a hamburger menu on mobile, grid layouts reflow with `auto-fit minmax`
- **Hover micro-interactions** , cards lift, borders glow, and overlays fade on hover throughout
- **Zero external UI dependencies** , no Tailwind, no MUI, no component libraries. Pure React with inline styles

---

## Tech Stack

| Tool | Usage |
|---|---|
| **React 18** | UI and component architecture |
| **Vite** | Dev server and production builds |
| **Lucide React** | Icon library |
| **React Icons** | Supplemental icons |
| **Formspree** | Contact form backend (no server needed) |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Mudasra/Mudasra-s-Portfolio
cd Mudasra-s-Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

---

## Key Implementation Notes

**Component architecture** , every section is broken into small, single-responsibility components. No component does more than one job. This made the codebase easy to iterate.

**Custom scroll hook**, `useActiveSection` listens to scroll events and loops through section IDs in reverse order, matching the first one whose `offsetTop` is within the viewport threshold. No library needed.

**Form validation**, client-side validation runs before the Formspree request. Errors are field-level and clear as the user corrects them. On success, the submitter's first name is captured in a separate state variable before the form resets, so the success screen can greet them personally.

**Hover states** , all card interactions (lift, glow, border color, overlay opacity) are handled with a single `hovered` boolean state and CSS `transition` on the style object. No external animation library used.

---

## Contact

**Email:** mudasramanzar1@gmail.com
**LinkedIn:** [linkedin.com/in/mudasra](https://linkedin.com/in/mudasra)
**GitHub:** [github.com/mudasra](https://github.com/mudasra)