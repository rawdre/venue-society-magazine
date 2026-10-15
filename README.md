# Venue Society — Magazine Website

A glamorous, light-editorial marketing site for **Venue Society**, an annual
print magazine that features one celebrated New England venue every month and is
placed, by hand, with real buyers at events.

Instagram: **[@venuesocietymag](https://instagram.com/venuesocietymag)**

---

## The concept

- **Annual magazine, 12 venues, one featured per month.** Each venue gets a
  4–5 page editorial feature (story, history, photography).
- **Not mass-circulated** — handed to active buyers (couples/hosts) and left out
  at events so guests discover the venue + the vendors who serve it.
- **Revenue:** vendor advertising — **$150 half page / $1,000 full page** per
  issue (planners, DJs, florists, photographers).
- **The Launch:** a party for pipeline venues + vendors, with a raffle — a free
  tasting and 50% off a complete non-Saturday wedding (≤50 guests), courtesy of
  Comeketo Catering (VIP across every featured venue).
- A general-events **podcast** extends the brand (never a Comeketo pitch).

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4**
- **Framer Motion** for scroll reveals
- **Cormorant Garamond** (display) + **Jost** (sans) via `next/font`
- Framework-agnostic enough to port to Render static hosting later if preferred.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx         # fonts + metadata
    page.tsx           # section composition
    globals.css        # theme tokens (ivory / gold / blush) + helpers
  components/
    Nav.tsx            # sticky nav (transparent → ivory on scroll) + mobile drawer
    Hero.tsx-equiv     # see sections/
    Reveal.tsx         # Framer Motion fade-up wrapper
    Logo.tsx           # VS monogram (SVG)
    Plate.tsx          # editorial image placeholder (duotone) — swap for real art
    Button.tsx         # CTA button variants
    sections/
      Hero.tsx
      Concept.tsx
      FeaturedVenues.tsx
      FeatureYourVenue.tsx
      Vendors.tsx       # $150 / $1,000 rate card
      Launch.tsx
      Podcast.tsx
      Footer.tsx        # contact + @venuesocietymag + Comeketo VIP + version
  data/
    venues.ts          # the 12 featured venues (editable)
  lib/
    cn.ts              # class merge
    version.ts         # visible build version (footer)
```

## Editing content

- **Venues:** edit `src/data/venues.ts` (name, town, month, blurb, tags, image).
- **Imagery:** drop real/AI files into `public/venues/<slug>.jpg` and switch the
  `Plate` for a `next/image` when photography is ready.
- **Pricing / Launch / copy:** the relevant `sections/*.tsx` file.

## Status

v0.1.0 — first visual concept. See `PROJECT_STATE.md` for what's done and next.
