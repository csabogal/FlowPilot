# FlowPilot Landing Page

This repository contains the prototype for the **FlowPilot** landing page, an AI-powered workspace designed for modern, remote-first teams. The project was built to evaluate senior-level frontend judgment, visual sensibility, and rapid execution using modern AI-assisted engineering practices.

## 🚀 Live Demo

*(Enter your Vercel or Netlify Live URL here before submitting)*

## 🛠️ Tech Stack & Frameworks

- **Core:** React, Vite, TypeScript
- **Styling:** Tailwind CSS (for extremely fast, maintainable utility-class styling)
- **Icons:** `lucide-react` (clean, minimalist SVG icons)
- **Animations:** `framer-motion` (for fluid, senior-level micro-interactions and scroll reveals)
- **Utilities:** `clsx` and `tailwind-merge` (for dynamic class name handling)

## 🎨 Design Decisions

The visual direction draws heavy inspiration from top-tier tech companies like Apple, Uber, and SpaceX. 

1. **Monochromatic "Dark Mode" Default:** To evoke a premium, highly technological feel (`#050505` background). I added an **animated engineering grid** (40px) and **ambient aura glows** (radial gradients) that breathe slowly to provide depth and "texture" to the dark void.
2. **Typography and Hierarchy:** Massive typography (`Inter` font) combined with `text-balance` for perfect line wrapping. I emphasized bold weights for headlines and high-contrast treatment for primary keywords using brand gradients.
3. **High-Fidelity Visualizations:** Instead of generic icons, I integrated custom high-fidelity dashboard and benefits graphics. This provides a "real product" feel that bridges the gap between a prototype and a production-ready application.
4. **Senior Interaction Details:** 
   - **Infinite Marquee:** Implemented a seamless, CSS-driven infinite loop for social proof logos (pausable on hover), inspired by top-tier SaaS sites like Vercel and Stripe.
   - **Scroll-to-Top:** A smart floating navigation utility that fades in based on scroll depth.
   - **Ambient Motion:** Elements like icons and mockup widgets have "breathing" floating animations to keep the page feeling alive.
   - **Glassmorphism & Micro-interactions:** Used backdrop filters for navigation and added focus-scaling to form inputs, providing tactical feedback to user actions.

## 🤖 AI-Assisted Workflow

This project was built leveraging Advanced Agentic Coding tools, acting as a high-level pair programmer:

1. **Strategic Planning:** Before writing code, I prompted the AI to generate a comprehensive "Implementation Plan" to define the stack and SpaceX-style aesthetic.
2. **Graphic Asset Generation:** Used DALL-E/Imagen integration via the agent to create on-brand, high-fidelity UI mockups, ensuring a cohesive visual identity without external dependency overhead.
3. **Iterative Polish:** I used the agent to rapidly iterate on micro-interactions—like adding the marquee and the scroll-to-top logic—while manually supervising the CSS/Tailwind output to meet Senior standards of performance and clean code.
4. **Automated Verification:** Leveraged the agent to run production builds (`npm run build`) and fix JSX nesting issues in real-time, ensuring zero-latency delivery.

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd FlowPilot
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 📈 What would be improved with more time?

Given a stricter deadline of 3-5 hours, prioritizing impact over deep complexity was necessary. With more time, the following would be added:
- **E2E Testing:** Playwright tests to ensure scroll behaviors and CTAs work perfectly on all devices.
- **Interactive Mockup:** Making the CSS hero mockup actually interactive, with hoverable states.
- **Dark/Light Mode Toggle:** Adding a true system-level preference toggle, though Dark Mode is the optimal aesthetic for this brand.
- **i18n Support:** Setting up `react-i18next` for translation management.
