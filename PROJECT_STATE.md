# Venue Society — Project State

_Last updated: 2026-10-15 · v0.4.0_

## What this is

Flagship marketing/brand site for **Venue Society Magazine** (separate brand from
Comeketo, but Comeketo is the catering partner / VIP throughout). Goal of the
business: recruit venues to be featured, sell vendor ad space, and drive the
Launch party. Instagram: @venuesocietymag (official, new).

## Decisions locked (2026-10-15, with Andre)

- **Aesthetic:** light airy editorial — ivory grounds, blush + antique-gold
  accents, Cormorant Garamond display type. "Glamorous, not simple."
- **Imagery:** AI-generated glam placeholders (real venue photography later).
- **Stack:** Next.js (default stack) now. Next-vs-Render **hosting** decision and
  domain reveal deferred until Andre approves the look.
- **The 12 venues:** picked from the venue-partner sheet by tier + # events +
  prestige + visual variety. Andre swapped: **The Kemble → Christalight Event
  Hall**, **Garage B → The Hacienda Venue**.

## The 12 (editorial calendar)

Jan Mechanics Hall · Feb Hammond Castle Museum · Mar Asa Waters Mansion ·
Apr Harding Allen Estate · May Commanders Mansion · Jun Greylock WORKS ·
Jul Christalight Event Hall · Aug Charles River Museum · Sep Cathedral of the
Pines · Oct Five Bridge Inn · Nov The Hacienda Venue · Dec Monoosnock Country Club

Source sheet: Google Sheet "Venue Partners (frequency of jobs there) 04/08"
(id `15Q1U4NXZGpPts_Bh32F3tqCebfNfi-_L2j5lFOMMuqo`).
⚠️ The sheet's **Website Link column is misaligned** (each row shows the next
venue's URL) — verify real URLs independently.

## Done

**v0.1.0** — Full one-page site: Hero, Concept, 12 Featured Venues, For Venues,
Vendor rate card ($150 half / $1,000 full), The Launch (RSVP + raffle), Podcast,
Footer. Sticky nav + mobile drawer, Framer Motion reveals, responsive, version
badge. Pushed to GitHub (private): rawdre/venue-society-magazine.

**v0.2.0** — Per-venue **feature pages** at `/venues/[slug]` (all 12 SSG) with
editorial hero, draft story + history, past-celebration gallery, facts sidebar,
prev/next nav. **Contact / lead form** (`#contact`) with 3 intents (feature /
advertise / RSVP) → `POST /api/contact` (stub). Venue cards link to features.
Nav anchors made root-relative so they work on subpages. Production build clean
(17 routes). Verified rendering (desktop).

**v0.3.0** — **Trilingual EN / PT / ES** (`src/i18n/`): client `LanguageProvider`
(localStorage + browser auto-detect), full `ui.ts` dictionary + per-venue
`venueCopy.ts` (PT/ES translations), `useUI()` / `localizeVenue()` /
`localizeMonth()`. **Flag switcher** (`LanguageSwitcher` + `Flag.tsx` — inline
SVG flags, not emoji, so they render on Windows). **Hamburger now covers mobile
+ tablet** (breakpoint moved `md`→`lg`). Subtle **Comeketo Catering** block in
the footer with André's contact ((978) 381-1212 / tech@comeketocatering.com /
comeketocatering.com). All sections + feature pages localized. Build clean.

**v0.4.0** — Artistic direction: integrated a 21st.dev **WebGL Perlin-noise
shader** at `src/components/ui/perlin-noise-moss.tsx` (added optional
`colors`/`uniforms` props; moss default preserved). **Hero reimagined as a
living magazine cover** — brand-tinted champagne/blush marble wash behind a
masthead (rules, oversized Cormorant title, italic cover line, "No. 01" teaser,
cursor-reactive, slow drift). Goal: feel like an art magazine, not a SaaS page.

**v0.5.0** — Artistic direction rolled site-wide: shared `ShaderField`
(`components/ui/shader-field.tsx`) with the brand marble; shader "moments" in
Hero + Launch + Podcast (kept off text-heavy sections for readability/perf).
Magazine **chapter numerals I–VII** (`Overline`) across every section header.
Mood: soft light champagne (Andre's pick).

## Next (not yet done)

1. **Imagery** — all generators were blocked (free paywalled, ATXP login expired,
   Gemini image billing off). Decision: keep CSS duotone placeholders for now.
   Revisit via enabled-Gemini-billing / ATXP re-auth / real photography.
2. **Real venue stories + histories + past-event photos** (story copy is DRAFT).
3. **Wire the contact form delivery** — `/api/contact` is a stub; connect to email
   (Resend/SMTP), a Google Sheet, or Close CRM.
4. **Hosting decision** (Next.js on Vercel vs static on Render) + connect the
   domain Andre already owns.
5. Logo: refine the VS monogram vs the real brand mark from Instagram.
6. Minor polish: the feature-hero shows two kickers (plate tag + overlay) that can
   overlap the nav — tidy when real hero images land.

## Run

`npm install && npm run dev` → http://localhost:3000
