export type Venue = {
  slug: string;
  name: string;
  town: string;
  state: string;
  month: string;
  issue: string; // e.g. "No. 01"
  kicker: string; // short editorial label
  blurb: string; // 1-2 sentence story stub (swap for real history later)
  capacity: string;
  tags: string[];
  image: string; // /public path — AI/real photography drops in here
};

// The 2026 editorial calendar — one celebrated venue per month.
// Ranked on partnership depth + prestige + visual variety from the
// Comeketo venue-partner data. Copy here is a placeholder story stub;
// real history + photography replaces it per venue.
export const venues: Venue[] = [
  {
    slug: "mechanics-hall",
    name: "Mechanics Hall",
    town: "Worcester",
    state: "MA",
    month: "January",
    issue: "No. 01",
    kicker: "The Grand Dame",
    blurb:
      "An 1857 concert hall of soaring columns and gilded light — New England's great room for galas, weddings, and the kind of evening guests never forget.",
    capacity: "Up to 500 guests",
    tags: ["Historic", "Gala", "Grand Hall"],
    image: "/venues/mechanics-hall.jpg",
  },
  {
    slug: "hammond-castle",
    name: "Hammond Castle Museum",
    town: "Gloucester",
    state: "MA",
    month: "February",
    issue: "No. 02",
    kicker: "By the Sea",
    blurb:
      "A true medieval castle perched over the Atlantic. Stone terraces, ocean air, and ceremonies framed by the open water — unrepeatable, unforgettable.",
    capacity: "Up to 180 guests",
    tags: ["Oceanfront", "Castle", "Dramatic"],
    image: "/venues/hammond-castle.jpg",
  },
  {
    slug: "asa-waters-mansion",
    name: "Asa Waters Mansion",
    town: "Millbury",
    state: "MA",
    month: "March",
    issue: "No. 03",
    kicker: "Federal Elegance",
    blurb:
      "An 1826 Federal-style mansion with grand staircases and manicured grounds — a storied house that wears celebration beautifully.",
    capacity: "Up to 150 guests",
    tags: ["Historic", "Mansion", "Garden"],
    image: "/venues/asa-waters-mansion.jpg",
  },
  {
    slug: "harding-allen-estate",
    name: "Harding Allen Estate",
    town: "Barre",
    state: "MA",
    month: "April",
    issue: "No. 04",
    kicker: "The Estate",
    blurb:
      "Sweeping lawns, a vintage Mercedes at the door, and a ceremony garden made for photographs — one of the most requested estates on our calendar.",
    capacity: "Up to 200 guests",
    tags: ["Estate", "Garden Ceremony", "Luxe"],
    image: "/venues/harding-allen-estate.jpg",
  },
  {
    slug: "commanders-mansion",
    name: "Commanders Mansion",
    town: "Watertown",
    state: "MA",
    month: "May",
    issue: "No. 05",
    kicker: "Victorian Splendor",
    blurb:
      "A restored Victorian landmark of carved wood and leaded glass, set on gracious grounds just outside the city — timeless and exacting.",
    capacity: "Up to 200 guests",
    tags: ["Historic", "Mansion", "Grounds"],
    image: "/venues/commanders-mansion.jpg",
  },
  {
    slug: "greylock-works",
    name: "Greylock WORKS",
    town: "North Adams",
    state: "MA",
    month: "June",
    issue: "No. 06",
    kicker: "Industrial Romance",
    blurb:
      "A reimagined Berkshires mill — raw brick, soaring sawtooth windows, and mountain light. The editorial favorite for couples who want something modern.",
    capacity: "Up to 300 guests",
    tags: ["Industrial", "Berkshires", "Modern"],
    image: "/venues/greylock-works.jpg",
  },
  {
    slug: "christalight-event-hall",
    name: "Christalight Event Hall",
    town: "Bellingham",
    state: "MA",
    month: "July",
    issue: "No. 07",
    kicker: "All Under One Roof",
    blurb:
      "A polished, full-service hall where décor, lighting, and ambiance arrive ready — a seamless canvas for weddings and milestone celebrations.",
    capacity: "Up to 250 guests",
    tags: ["All-Inclusive", "Modern", "Ballroom"],
    image: "/venues/christalight-event-hall.jpg",
  },
  {
    slug: "charles-river-museum",
    name: "Charles River Museum",
    town: "Waltham",
    state: "MA",
    month: "August",
    issue: "No. 08",
    kicker: "Industry & Art",
    blurb:
      "The birthplace of American industry, now a cathedral of iron and history on the river — a bold, characterful backdrop for a modern affair.",
    capacity: "Up to 200 guests",
    tags: ["Museum", "Historic", "Riverside"],
    image: "/venues/charles-river-museum.jpg",
  },
  {
    slug: "cathedral-of-the-pines",
    name: "Cathedral of the Pines",
    town: "Rindge",
    state: "NH",
    month: "September",
    issue: "No. 09",
    kicker: "Open to the Sky",
    blurb:
      "An open-air cathedral framed by Mount Monadnock — vows beneath the pines with the mountains as your altar. Pure New England romance.",
    capacity: "Up to 300 guests",
    tags: ["Outdoor", "Mountain View", "Ceremony"],
    image: "/venues/cathedral-of-the-pines.jpg",
  },
  {
    slug: "five-bridge-inn",
    name: "Five Bridge Inn",
    town: "Rehoboth",
    state: "MA",
    month: "October",
    issue: "No. 10",
    kicker: "Country House",
    blurb:
      "A gracious country inn with two halls, rolling grounds, and gardens for the ceremony — intimate and grand in the same afternoon.",
    capacity: "Up to 300 guests",
    tags: ["Inn", "Gardens", "Classic"],
    image: "/venues/five-bridge-inn.jpg",
  },
  {
    slug: "the-hacienda-venue",
    name: "The Hacienda Venue",
    town: "Phillipston",
    state: "MA",
    month: "November",
    issue: "No. 11",
    kicker: "Room to Celebrate",
    blurb:
      "An expansive hacienda with indoor and outdoor space, on-site accommodation, and a warmth that keeps guests dancing — one of our most-loved rooms.",
    capacity: "Up to 200 guests",
    tags: ["Indoor/Outdoor", "Stay-Over", "Versatile"],
    image: "/venues/the-hacienda-venue.jpg",
  },
  {
    slug: "monoosnock-country-club",
    name: "Monoosnock Country Club",
    town: "Leominster",
    state: "MA",
    month: "December",
    issue: "No. 12",
    kicker: "The Classic",
    blurb:
      "Fairway views, a welcoming ballroom, and a team we've celebrated with more than any other — the dependable, beautiful close to the year.",
    capacity: "200+ guests",
    tags: ["Country Club", "Ballroom", "Views"],
    image: "/venues/monoosnock-country-club.jpg",
  },
];
