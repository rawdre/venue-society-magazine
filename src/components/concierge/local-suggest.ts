import { venues } from "@/data/venues";
import { SECTIONS } from "@/lib/concierge-catalog";
import type { Locale } from "@/i18n/config";
import { localizeVenue } from "@/i18n/venueCopy";

export interface ConciergeLink {
  href: string;
  label: string;
}

// When the concierge can't reach the Command Center she still knows the way:
// a small keyword search over the venue list and the site's sections.
const SECTION_WORDS: [RegExp, string][] = [
  [/advert|\bads?\b|rate|price|pric|cost|anún|anunc|preç|precio|tarifa|publici/i, "/#vendors"],
  [/launch|party|raffle|lança|festa|sorteio|lanzam|fiesta|rifa/i, "/#launch"],
  [/feature|my venue|get featured|destaq|destac|meu local|mi lugar/i, "/#feature-your-venue"],
  [/podcast/i, "/#podcast"],
  [/contact|email|phone|call|contato|telefone|contacto|llamar/i, "/#contact"],
  [/all venues|calendar|every venue|calend|todos/i, "/#venues"],
];

const fold = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function guestsAsked(q: string): number | null {
  const m = q.match(/(\d{2,4})\s*(guests|people|pessoas|convidados|personas|invitados)?/i);
  return m ? Number(m[1]) : null;
}

const capacityOf = (text: string) => Number(text.match(/\d+/)?.[0] ?? 0);

export function localSuggest(question: string, locale: Locale): ConciergeLink | null {
  const q = fold(question);
  const words = q.split(/[^a-z0-9]+/).filter((w) => w.length > 3);

  let best: { score: number; link: ConciergeLink } | null = null;
  for (const base of venues) {
    const v = localizeVenue(base, locale);
    const hay = fold([v.name, v.town, v.kicker, v.blurb, ...v.tags].join(" "));
    let score = words.filter((w) => hay.includes(w)).length;
    if (q.includes(fold(v.name))) score += 5;
    if (score > 0 && (!best || score > best.score)) {
      best = { score, link: { href: `/venues/${v.slug}`, label: v.name } };
    }
  }
  if (best && best.score >= 2) return best.link;

  for (const [pattern, href] of SECTION_WORDS) {
    if (pattern.test(question)) {
      return { href, label: SECTIONS.find((s) => s.href === href)?.title ?? "Venue Society" };
    }
  }

  const guests = guestsAsked(question);
  if (guests) {
    const fits = venues
      .filter((v) => capacityOf(v.capacity) >= guests)
      .sort((a, b) => capacityOf(a.capacity) - capacityOf(b.capacity))[0];
    if (fits) return { href: `/venues/${fits.slug}`, label: fits.name };
  }
  return best?.link ?? null;
}
