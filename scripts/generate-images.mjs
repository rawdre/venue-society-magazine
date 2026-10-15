// Generate on-brand editorial imagery for Venue Society (first pass).
// Uses Pollinations (Flux) — free, no API key. Prompts are benign venue
// descriptions. Swap individual images for paid/real photography later.
//
// Run: node scripts/generate-images.mjs
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "venues");

const STYLE =
  ", light and airy fine-art editorial photography, soft ivory blush and antique gold palette, warm natural light, elegant luxurious high-end wedding magazine, photorealistic, highly detailed, no text, no words, no watermark, no logo, no people";

const JOBS = [
  {
    slug: "_hero",
    w: 900,
    h: 1200,
    prompt:
      "A grand historic 1850s New England concert hall interior set for an elegant evening wedding, soaring columns, gilded balconies, crystal chandeliers, ivory drapery and candlelight",
  },
  {
    slug: "mechanics-hall",
    prompt:
      "A grand historic 1857 concert hall interior, soaring columns, gilded balconies, enormous crystal chandeliers, rows set for an elegant gala wedding dinner",
  },
  {
    slug: "hammond-castle",
    prompt:
      "A medieval stone castle terrace overlooking the Atlantic ocean at golden hour, romantic coastal wedding ceremony setup with white florals",
  },
  {
    slug: "asa-waters-mansion",
    prompt:
      "An 1826 Federal-style mansion grand curved staircase and parlor, soft ivory wedding florals, antique chandeliers, refined and historic",
  },
  {
    slug: "harding-allen-estate",
    prompt:
      "A grand country estate with manicured lawns and a vintage cream Mercedes at the entrance, outdoor garden wedding ceremony, string lights at dusk",
  },
  {
    slug: "commanders-mansion",
    prompt:
      "A Victorian mansion interior with carved dark wood, leaded stained-glass windows and a grand fireplace, elegant wedding reception table",
  },
  {
    slug: "greylock-works",
    prompt:
      "A reimagined industrial mill event space with tall sawtooth factory windows, raw brick, minimalist modern wedding tablescape, Berkshire mountains beyond",
  },
  {
    slug: "christalight-event-hall",
    prompt:
      "A polished modern ballroom with draped ceiling, warm amber uplighting, a full-service wedding reception with lush centerpieces",
  },
  {
    slug: "charles-river-museum",
    prompt:
      "A historic industrial museum hall with iron machinery, exposed beams and tall arched windows by a river, chic elegant event setup",
  },
  {
    slug: "cathedral-of-the-pines",
    prompt:
      "An open-air outdoor cathedral among tall pine trees with a stone altar and a distant mountain view, romantic woodland wedding ceremony",
  },
  {
    slug: "five-bridge-inn",
    prompt:
      "A gracious New England country inn with flower gardens and a white reception tent, warm autumn golden-hour light",
  },
  {
    slug: "the-hacienda-venue",
    prompt:
      "A warm Spanish-style hacienda with an indoor-outdoor courtyard, string lights overhead, a festive elegant wedding reception",
  },
  {
    slug: "monoosnock-country-club",
    prompt:
      "A classic country club ballroom with large windows overlooking a green golf fairway at sunset, elegant wedding reception setup",
  },
];

async function grab(job, attempt = 0) {
  const w = job.w ?? 896;
  const h = job.h ?? 1120;
  const seed = 7 + attempt * 101 + job.slug.length;
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    job.prompt + STYLE
  )}?width=${w}&height=${h}&model=flux&nologo=true&seed=${seed}`;
  const file = path.join(outDir, `${job.slug}.jpg`);
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(120000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 12000)
      throw new Error(`too small (${buf.length}B)`);
    await writeFile(file, buf);
    console.log(`OK   ${job.slug.padEnd(26)} ${(buf.length / 1024).toFixed(0)}KB`);
    return true;
  } catch (e) {
    if (attempt < 2) {
      console.log(`retry ${job.slug} (${e.message})`);
      await new Promise((r) => setTimeout(r, 2500));
      return grab(job, attempt + 1);
    }
    console.log(`FAIL ${job.slug.padEnd(26)} ${e.message}`);
    return false;
  }
}

await mkdir(outDir, { recursive: true });
console.log(`Generating ${JOBS.length} images → ${outDir}\n`);
let ok = 0;
for (const job of JOBS) {
  if (await grab(job)) ok++;
}
console.log(`\nDone: ${ok}/${JOBS.length} succeeded.`);
