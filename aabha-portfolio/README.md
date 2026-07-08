# Aabha Tomar — Portfolio

A premium, data-science-themed portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Design concept

Instead of generic glass stat-cards, the site borrows its visual language from the tools Aabha
actually works in: the hero opens like a terminal session (`>>> import aabha as data_scientist`),
the Stats section renders as a live dataframe readout, and Skills reads like a tidy correlation
matrix. Palette is void-black with a purple neon ramp; type pairs Space Grotesk (display),
Inter (body), and JetBrains Mono (every number, tag, and label).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before you deploy

1. **Profile photo** — open `src/components/Hero.jsx` and replace the placeholder monogram block
   with `<img src="/your-photo.jpg" className="w-full h-full object-cover" />` (drop the image in
   `/public` first).
2. **Resume** — put your PDF in `/public/resume.pdf` and update `resumeUrl` in
   `src/data/portfolioData.js`.
3. **Links & content** — everything editable (bio, stats, projects, skills, socials) lives in one
   place: `src/data/portfolioData.js`. Update `email`, `github`, and `linkedin` there.
4. **Project links** — set real `github` / `demo` URLs per project in the same data file.

## Structure

```
src/
  components/     # one component per section, plus shared Reveal/CursorGlow/FloatingBlobs
  data/           # portfolioData.js — all content in one editable file
  index.css       # design tokens, glass utility, gradient text, ripple effect
  App.jsx         # section order
tailwind.config.js  # color ramp, fonts, custom keyframes (blob, caret, gradient-x)
```

## Notes

- Respects `prefers-reduced-motion`.
- Visible keyboard focus states throughout.
- Mobile responsive down to small phones; nav collapses to a slide-down menu.
- No external image dependencies — the profile "photo" and project visuals are lightweight
  CSS/SVG placeholders by design, so the site works before you add any real media.
