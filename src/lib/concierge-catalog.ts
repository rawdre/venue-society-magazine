import { venues } from "@/data/venues";
import { COMEKETO } from "@/lib/contact";

// What Odette (the concierge) is allowed to know and where she may send people.
// Published at /concierge.json; the Command Center reads it, so the venue list
// here is the single source of truth.

export interface ConciergeSection {
  href: string;
  title: string;
  summary: string;
}

export interface ConciergeVenue {
  href: string;
  name: string;
  town: string;
  state: string;
  month: string;
  issue: string;
  kicker: string;
  capacity: string;
  tags: string[];
  blurb: string;
  website?: string;
}

export interface ConciergeCatalog {
  version: 1;
  magazine: string;
  sections: ConciergeSection[];
  venues: ConciergeVenue[];
  advertising: { halfPage: string; fullPage: string };
  launch: string;
  catering: string;
  contact: { email: string; phone: string };
}

export const SECTIONS: ConciergeSection[] = [
  { href: "/#top", title: "Cover", summary: "The front of the magazine." },
  { href: "/#concept", title: "The Idea", summary: "What Venue Society is: an annual print magazine, one celebrated New England venue per month, handed in person to couples and hosts who are actively planning." },
  { href: "/#venues", title: "The 2026 Calendar", summary: "All twelve featured venues, one per month." },
  { href: "/#feature-your-venue", title: "For Venues", summary: "How a venue gets a 4–5 page editorial feature, a cover month and copies for tours." },
  { href: "/#vendors", title: "For Vendors / Advertise", summary: "Ad rates for planners, DJs, florists and photographers: half page $150 per issue, full page $1,000 per issue." },
  { href: "/#launch", title: "The Launch", summary: "The launch party for the first issue. Every guest is entered to win a complimentary tasting and 50% off a complete wedding (any day but Saturday, up to 50 guests), courtesy of Comeketo Catering." },
  { href: "/#podcast", title: "The Podcast", summary: "The Venue Society Podcast, coming with the first issue." },
  { href: "/#contact", title: "Get in Touch", summary: "Form to request a feature, reserve an ad, or RSVP to the launch." },
];

export function buildCatalog(): ConciergeCatalog {
  return {
    version: 1,
    magazine:
      "Venue Society is an annual print magazine for New England: twelve celebrated venues, one featured each month, placed by hand with real buyers. Instagram @venuesocietymag.",
    sections: SECTIONS,
    venues: venues.map((v) => ({
      href: `/venues/${v.slug}`,
      name: v.name,
      town: v.town,
      state: v.state,
      month: v.month,
      issue: v.issue,
      kicker: v.kicker,
      capacity: v.capacity,
      tags: v.tags,
      blurb: v.blurb,
      website: v.contact?.website,
    })),
    advertising: { halfPage: "$150 per issue", fullPage: "$1,000 per issue" },
    launch: SECTIONS.find((s) => s.href === "/#launch")!.summary,
    catering:
      "Comeketo Catering is the VIP catering partner across every featured venue.",
    contact: { email: COMEKETO.email, phone: COMEKETO.phoneDisplay },
  };
}
