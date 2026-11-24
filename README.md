# property — Layout Showcase

A luxury villa / property landing page — a reusable Capote Design starting
point for gated-community and residential briefs, kept as its own standalone
repo so it's easy to clone instead of digging it out of the larger agency
showcase project.

Scroll architecture: video hero with converging titles, sticky feature
stages, horizontal card slider, grid info, photo slideshow, enquiry CTA,
testimonials, and FAQ. Built with Next.js App Router, Tailwind CSS v4,
[GSAP](https://gsap.com/) / ScrollTrigger and
[Lenis](https://lenis.darkroom.engineering/) smooth scrolling. Display and
body type is Hanken Grotesk via `next/font`.

Live demo: [property.capote.design](https://property.capote.design)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3459](http://localhost:3459) — the homepage *is* the
layout (no separate `/examples/property` route).

## Using this as a starting point for a new project

1. Clone this repo (or use it as a GitHub template).
2. Swap the brand: update copy in `src/showcase/property/content.ts`
   (site name, villa names, FAQs, CTAs) and palette tokens in
   `src/app/globals.css`.
3. Replace photography and the hero video under
   `public/showcase/property/` — filenames are referenced from `content.ts`.
4. Swap the wordmark SVGs in `public/showcase/property/logos/`.

## Licensing note

Photography and the hero film in `public/showcase/property/` are placeholder
stock from the Capote Design showcase catalog — fine for layout demos and
early client drafts; swap for the client's real media before launch. Hanken
Grotesk is loaded via Google Fonts (`next/font/google`).

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · GSAP · Lenis ·
TypeScript.

---

Part of the Capote Design agency's layout collection — see
[showcase.capote.design](https://showcase.capote.design) for the full
catalog.
