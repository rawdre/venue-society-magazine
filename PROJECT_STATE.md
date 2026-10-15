# Venue Society — Project State

_Last updated: 2026-10-15 · v0.1.0_

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

## Done (v0.1.0)

- Full one-page site: Hero, Concept, 12 Featured Venues, For Venues, Vendor rate
  card ($150 half / $1,000 full), The Launch (RSVP + raffle), Podcast, Footer.
- Sticky nav + mobile drawer, Framer Motion reveals, responsive, version badge.
- Verified rendering locally (desktop); no app console errors.

## Next (not yet done)

1. **Generate real AI glam imagery** (hero cover + 12 venue plates) and wire into
   `public/venues/`. Currently elegant CSS duotone placeholders.
2. **Real venue stories + histories + past-event photos** (needs sourcing from
   venues / their sites / Comeketo's past jobs).
3. A simple **contact / lead form** (venue feature request, vendor ad reservation,
   launch RSVP) — currently mailto + anchors.
4. **Hosting decision** (Next.js on Vercel vs static on Render) + connect the
   domain Andre already owns.
5. Logo: refine the VS monogram vs the real brand mark from Instagram.

## Run

`npm install && npm run dev` → http://localhost:3000
