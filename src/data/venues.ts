// Photo attribution. Creative Commons images (CC BY / CC BY-SA) legally
// require a visible credit; CC0 / public-domain images do not (author kept
// as a courtesy). Omitted entirely when we have no licensed image yet.
export type VenueCredit = {
  author?: string; // omit for CC0 / public domain
  license: string; // e.g. "CC BY-SA 4.0", "CC0"
  licenseUrl: string;
  sourceUrl: string; // Wikimedia Commons file page
};

// Public contact details for the featured venue, from its official site.
export type VenueContact = {
  website?: string; // full https URL
  phone?: string; // as published
  email?: string; // only if publicly listed
};

export type Venue = {
  slug: string;
  name: string;
  town: string;
  state: string;
  address: string;
  month: string;
  issue: string; // e.g. "No. 01"
  kicker: string; // short editorial label
  blurb: string; // 1-2 sentence story stub (used on cards)
  story: string[]; // draft feature paragraphs (real history replaces this)
  capacity: string;
  tags: string[];
  image: string; // /public path — real photography drops in here
  hasImage?: boolean; // true once a real licensed photo exists at `image`
  credit?: VenueCredit; // required when the licence needs attribution
  contact?: VenueContact; // public website / phone / email for the venue
};

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_2 = "https://creativecommons.org/licenses/by/2.0/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";

// The 2026 editorial calendar — one celebrated venue per month.
// Ranked on partnership depth + prestige + visual variety from the
// Comeketo venue-partner data. Copy here is a DRAFT story stub; real
// history + photography replaces it per venue.
export const venues: Venue[] = [
  {
    slug: "mechanics-hall",
    name: "Mechanics Hall",
    town: "Worcester",
    state: "MA",
    address: "321 Main St, Worcester, MA 01608",
    month: "January",
    issue: "No. 01",
    kicker: "The Grand Dame",
    blurb:
      "An 1857 concert hall of soaring columns and gilded light — New England's great room for galas, weddings, and the kind of evening guests never forget.",
    story: [
      "Few rooms in New England announce an occasion the way Mechanics Hall does. Completed in 1857 and counted among the finest pre-Civil War concert halls in the country, its Great Hall rises through two storeys of carved detail, gilded balconies, and towering windows that pour afternoon light across the floor.",
      "For a gala or a wedding, the effect is immediate — guests arrive and simply look up. The acoustics that drew the world's great performers now carry a first dance; the portrait-lined balconies become the best seats in the house. It is a venue that asks for very little decoration and gives back a great deal of grandeur.",
    ],
    capacity: "Up to 500 guests",
    tags: ["Historic", "Gala", "Grand Hall"],
    image: "/venues/mechanics-hall.jpg",
    contact: {
      website: "https://www.mechanicshall.org",
      phone: "(508) 752-5608",
    },
    hasImage: true,
    credit: {
      author: "Kenneth C. Zirkel",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Great_Hall_of_Mechanics_Hall,_Worcester_Massachusetts.jpg",
    },
  },
  {
    slug: "hammond-castle",
    name: "Hammond Castle Museum",
    town: "Gloucester",
    state: "MA",
    address: "80 Hesperus Ave, Gloucester, MA 01930",
    month: "February",
    issue: "No. 02",
    kicker: "By the Sea",
    blurb:
      "A true medieval castle perched over the Atlantic. Stone terraces, ocean air, and ceremonies framed by the open water — unrepeatable, unforgettable.",
    story: [
      "Built in the late 1920s by the inventor John Hays Hammond Jr., Hammond Castle gathers medieval stone, a soaring great hall, and interior courtyards into one of the most singular settings on the New England coast.",
      "Vows are exchanged with the Atlantic as a backdrop; dinner unfolds within stone walls that feel borrowed from another century. For couples who want a day that no photograph quite prepares their guests for, the castle delivers drama without a single rented prop.",
    ],
    capacity: "Up to 180 guests",
    tags: ["Oceanfront", "Castle", "Dramatic"],
    image: "/venues/hammond-castle.jpg",
    contact: {
      website: "https://hammondcastle.org",
      phone: "(978) 283-2080",
    },
    hasImage: true,
    credit: {
      author: "Robert Linsdell",
      license: "CC BY 2.0",
      licenseUrl: CC_BY_2,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hammond_Castle_Museum,_80_Hesperus_Ave,_Gloucester_(493883)_(11683064686).jpg",
    },
  },
  {
    slug: "asa-waters-mansion",
    name: "Asa Waters Mansion",
    town: "Millbury",
    state: "MA",
    address: "123 Elm St, Millbury, MA 01527",
    month: "March",
    issue: "No. 03",
    kicker: "Federal Elegance",
    blurb:
      "An 1826 Federal-style mansion with grand staircases and manicured grounds — a storied house that wears celebration beautifully.",
    story: [
      "Commissioned in 1826 by the armaments manufacturer Asa Waters II, this Federal-style mansion has anchored Millbury for two centuries. A sweeping staircase, period parlors, and handsome grounds give events an intimacy that larger halls can't match.",
      "It is a house that rewards a smaller, more personal guest list — the kind of day where every room feels like it was opened just for you. One of Comeketo's most comfortable partnerships, with celebrations returning season after season.",
    ],
    capacity: "Up to 150 guests",
    tags: ["Historic", "Mansion", "Garden"],
    image: "/venues/asa-waters-mansion.jpg",
    contact: {
      website: "https://asawaters.org",
      phone: "(508) 865-0855",
    },
    hasImage: true,
    credit: {
      author: "Daderot",
      license: "CC0",
      licenseUrl: CC0,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Asa_Waters_Mansion_-_Millbury,_MA_-_DSC04584.JPG",
    },
  },
  {
    slug: "harding-allen-estate",
    name: "Harding Allen Estate",
    town: "Barre",
    state: "MA",
    address: "59 Allen Dr, Barre, MA 01005",
    month: "April",
    issue: "No. 04",
    kicker: "The Estate",
    blurb:
      "Sweeping lawns, a vintage Mercedes at the door, and a ceremony garden made for photographs — one of the most requested estates on our calendar.",
    story: [
      "The Harding Allen Estate is the picture most couples already have in their heads — a stately main house, broad manicured lawns, a ceremony garden, and a vintage Mercedes waiting at the entrance for the photographs everyone remembers.",
      "Room to roam and room to celebrate: the grounds hold a large guest list without ever feeling crowded, and the landscaping does half the styling for you. It remains one of the most-requested estates on our calendar for good reason.",
    ],
    capacity: "Up to 200 guests",
    tags: ["Estate", "Garden Ceremony", "Luxe"],
    image: "/venues/harding-allen-estate.jpg",
    contact: {
      website: "https://www.hardingallenestate.com",
    },
  },
  {
    slug: "commanders-mansion",
    name: "Commanders Mansion",
    town: "Watertown",
    state: "MA",
    address: "440 Talcott Ave, Watertown, MA 02472",
    month: "May",
    issue: "No. 05",
    kicker: "Victorian Splendor",
    blurb:
      "A restored Victorian landmark of carved wood and leaded glass, set on gracious grounds just outside the city — timeless and exacting.",
    story: [
      "A restored Victorian landmark minutes from the city, the Commanders Mansion pairs carved woodwork, leaded glass, and grand fireplaces with gracious lawns for an outdoor ceremony.",
      "It is an exacting house — beautifully maintained and run with real care — which is exactly why it photographs so well and hosts so gracefully. A classic choice for couples who want history close to home.",
    ],
    capacity: "Up to 200 guests",
    tags: ["Historic", "Mansion", "Grounds"],
    image: "/venues/commanders-mansion.jpg",
    contact: {
      website: "https://www.commandersmansion.com",
      phone: "(617) 926-7755",
    },
    hasImage: true,
    credit: {
      author: "Magicpiano",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:WatertownMA_ArsenalCommandersQuarters.jpg",
    },
  },
  {
    slug: "greylock-works",
    name: "Greylock WORKS",
    town: "North Adams",
    state: "MA",
    address: "508 State Rd, North Adams, MA 01247",
    month: "June",
    issue: "No. 06",
    kicker: "Industrial Romance",
    blurb:
      "A reimagined Berkshires mill — raw brick, soaring sawtooth windows, and mountain light. The editorial favorite for couples who want something modern.",
    story: [
      "A 19th-century spinning mill reimagined for a new century, Greylock WORKS is all raw brick, soaring sawtooth windows, and Berkshire light — an industrial cathedral that has become a favorite of the design-minded couple.",
      "The scale is generous enough for a long banquet and a dance floor, and the architecture needs almost nothing to feel finished. Modern, textural, and unmistakably of the Berkshires.",
    ],
    capacity: "Up to 300 guests",
    tags: ["Industrial", "Berkshires", "Modern"],
    image: "/venues/greylock-works.jpg",
    contact: {
      website: "https://greylockworks.com",
      phone: "(413) 200-9890",
    },
    hasImage: true,
    credit: {
      author: "Beyond My Ken",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Greylock_(Cariddi)_Mill_North_Adams_west_building.jpg",
    },
  },
  {
    slug: "christalight-event-hall",
    name: "Christalight Event Hall",
    town: "Bellingham",
    state: "MA",
    address: "799 S Main St, Suite 18, Bellingham, MA 02019",
    month: "July",
    issue: "No. 07",
    kicker: "All Under One Roof",
    blurb:
      "A polished, full-service hall where décor, lighting, and ambiance arrive ready — a seamless canvas for weddings and milestone celebrations.",
    story: [
      "Christalight is the venue for couples who want the beautiful parts without the logistics. A polished, full-service hall, it brings décor, lighting, and ambiance together so the room arrives ready to celebrate.",
      "That ease makes it a dependable stage for weddings, quinceañeras, and milestone parties alike — a seamless canvas where the catering and the moment take center stage.",
    ],
    capacity: "Up to 250 guests",
    tags: ["All-Inclusive", "Modern", "Ballroom"],
    image: "/venues/christalight-event-hall.jpg",
    contact: {
      website: "https://www.christalightevents.com",
      phone: "(844) 495-4448",
    },
  },
  {
    slug: "charles-river-museum",
    name: "Charles River Museum",
    town: "Waltham",
    state: "MA",
    address: "154 Moody St, Waltham, MA 02453",
    month: "August",
    issue: "No. 08",
    kicker: "Industry & Art",
    blurb:
      "The birthplace of American industry, now a cathedral of iron and history on the river — a bold, characterful backdrop for a modern affair.",
    story: [
      "Set in the very mill complex where the American Industrial Revolution took hold, the Charles River Museum frames an event in iron machinery, exposed beams, and tall windows above the water.",
      "It is a bold, characterful room — equal parts museum and modern event space — for couples who want a backdrop with a story of its own. Waltham's Moody Street, with its restaurants and energy, sits just outside the door.",
    ],
    capacity: "Up to 200 guests",
    tags: ["Museum", "Historic", "Riverside"],
    image: "/venues/charles-river-museum.jpg",
    contact: {
      website: "https://www.charlesrivermuseum.org",
      phone: "(781) 893-5410",
    },
    hasImage: true,
    credit: {
      author: "Sdkb",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Charles_River_Museum_of_Industry.jpg",
    },
  },
  {
    slug: "cathedral-of-the-pines",
    name: "Cathedral of the Pines",
    town: "Rindge",
    state: "NH",
    address: "10 Hale Hill Rd, Rindge, NH 03461",
    month: "September",
    issue: "No. 09",
    kicker: "Open to the Sky",
    blurb:
      "An open-air cathedral framed by Mount Monadnock — vows beneath the pines with the mountains as your altar. Pure New England romance.",
    story: [
      "An open-air sanctuary set among tall pines, Cathedral of the Pines offers vows framed by Mount Monadnock — a natural altar of stone with the mountains stretching out beyond.",
      "There is a stillness here that no ballroom can manufacture. For a September ceremony, with the light turning gold and the air going crisp, it is New England romance in its purest form.",
    ],
    capacity: "Up to 300 guests",
    tags: ["Outdoor", "Mountain View", "Ceremony"],
    image: "/venues/cathedral-of-the-pines.jpg",
    contact: {
      website: "https://cathedralofthepines.org",
      phone: "(603) 899-3300",
    },
    hasImage: true,
    credit: {
      author: "DavidBrooks",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Cathedral_of_the_Pines_sanctuary.jpg",
    },
  },
  {
    slug: "five-bridge-inn",
    name: "Five Bridge Inn",
    town: "Rehoboth",
    state: "MA",
    address: "152 Pine St, Rehoboth, MA 02769",
    month: "October",
    issue: "No. 10",
    kicker: "Country House",
    blurb:
      "A gracious country inn with two halls, rolling grounds, and gardens for the ceremony — intimate and grand in the same afternoon.",
    story: [
      "A gracious country estate on rolling grounds, Five Bridge Inn gives a celebration room to breathe — gardens for the ceremony, two halls for the reception, and beautiful scenery in every direction.",
      "It can be intimate and grand in the same afternoon: a quiet garden vow, then a full, warm reception as the October light fades. A classic New England country wedding, done properly.",
    ],
    capacity: "Up to 300 guests",
    tags: ["Inn", "Gardens", "Classic"],
    image: "/venues/five-bridge-inn.jpg",
    contact: {
      website: "https://www.fivebridgeinn.com",
      phone: "(508) 252-3190",
    },
  },
  {
    slug: "the-hacienda-venue",
    name: "The Hacienda Venue",
    town: "Phillipston",
    state: "MA",
    address: "95-115 Blake Corner Rd, Phillipston, MA 01331",
    month: "November",
    issue: "No. 11",
    kicker: "Room to Celebrate",
    blurb:
      "An expansive hacienda with indoor and outdoor space, on-site accommodation, and a warmth that keeps guests dancing — one of our most-loved rooms.",
    story: [
      "Expansive, warm, and built for a party, The Hacienda pairs generous indoor and outdoor space with on-site accommodation so the celebration doesn't have to end at midnight.",
      "It is one of the venues Comeketo returns to most — a room that holds a big guest list, keeps everyone dancing, and makes a weekend of it. Equally at home with a wedding, a networking gala, or a milestone celebration.",
    ],
    capacity: "Up to 200 guests",
    tags: ["Indoor/Outdoor", "Stay-Over", "Versatile"],
    image: "/venues/the-hacienda-venue.jpg",
    contact: {
      website: "https://www.thehaciendavenue.com",
      phone: "(508) 861-9568",
    },
  },
  {
    slug: "monoosnock-country-club",
    name: "Monoosnock Country Club",
    town: "Leominster",
    state: "MA",
    address: "40 Monoosnock Ave, Leominster, MA 01453",
    month: "December",
    issue: "No. 12",
    kicker: "The Classic",
    blurb:
      "Fairway views, a welcoming ballroom, and a team we've celebrated with more than any other — the dependable, beautiful close to the year.",
    story: [
      "Fairway views, a welcoming ballroom, and a team that feels like family — Monoosnock Country Club is the venue Comeketo has celebrated with more than any other, and it shows in how smoothly every event runs.",
      "Dependable without ever feeling ordinary, it is the perfect place to close the year: large windows over the green, a warm room, and the easy confidence of a venue that has done this beautifully, many times.",
    ],
    capacity: "200+ guests",
    tags: ["Country Club", "Ballroom", "Views"],
    image: "/venues/monoosnock-country-club.jpg",
    contact: {
      website: "https://monoosnockcountryclub.com",
      phone: "(978) 537-1872",
    },
  },
];

export function getVenue(slug: string) {
  return venues.find((v) => v.slug === slug);
}

export function venueNeighbors(slug: string) {
  const i = venues.findIndex((v) => v.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = venues[(i - 1 + venues.length) % venues.length];
  const next = venues[(i + 1) % venues.length];
  return { prev, next };
}
