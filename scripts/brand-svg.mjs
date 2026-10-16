// Writes standalone SVGs of the official monogram to public/brand/ from the
// same traced path + hand-drawn hairlines used by components/brand/Monogram.tsx.
// Run: node scripts/brand-svg.mjs
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(new URL("../src/components/brand/monogram-path.ts", import.meta.url), "utf8");
const strokes = src.match(/MONOGRAM_STROKES =\s*"([^"]+)"/)[1];
const HAIR = [
  "M806 172 L540 800",
  "M760 240 C 735 218, 700 203, 660 196 C 600 186, 530 192, 485 212 C 430 232, 365 290, 358 380 C 352 450, 380 500, 450 540 C 520 578, 610 610, 670 650 C 720 690, 745 750, 742 820 C 740 880, 715 925, 680 950",
  "M300 568 C 250 610, 222 690, 230 770 C 240 860, 300 930, 400 968 C 470 990, 570 990, 640 970 C 670 960, 690 950, 705 940",
];
const SERIFS = "M88 82 Q 264 76.5 440 82 Q 264 87.5 88 82 Z M686 82 Q 839 76.5 992 82 Q 839 87.5 686 82 Z";
const GOLD = `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9d39c"/><stop offset=".33" stop-color="#b8914f"/><stop offset=".66" stop-color="#8e6d36"/><stop offset="1" stop-color="#c9a45f"/></linearGradient></defs>`;

function monogram(paint, hair = 7, defs = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="70 58 940 948">${defs}` +
    `<g transform="translate(0 1032) scale(0.1 -0.1)" fill="${paint}"><path d="${strokes}"/></g>` +
    `<path d="${SERIFS}" fill="${paint}" stroke="${paint}" stroke-width="${hair / 2}"/>` +
    `<g fill="none" stroke="${paint}" stroke-width="${hair}" stroke-linecap="round">${HAIR.map((d) => `<path d="${d}"/>`).join("")}</g></svg>\n`;
}

const out = new URL("../public/brand/", import.meta.url);
writeFileSync(new URL("vs-monogram-black.svg", out), monogram("#1f1b17"));
writeFileSync(new URL("vs-monogram-ivory.svg", out), monogram("#fbf8f2"));
writeFileSync(new URL("vs-monogram-gold.svg", out), monogram("url(#g)", 7, GOLD));
writeFileSync(new URL("vs-monogram-gold-small.svg", out), monogram("url(#g)", 16, GOLD));
console.log("wrote public/brand/*.svg");
