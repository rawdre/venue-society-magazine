"use client";

import { ShaderBackground } from "./perlin-noise-moss";

// Shared Venue Society marble — champagne · blush · sand · ivory · gold.
// One source of truth so every shader "moment" on the site matches.
export const BRAND_SHADER_COLORS: [number, number, number][] = [
  [0.788, 0.682, 0.494], // gold-soft
  [0.886, 0.773, 0.733], // blush
  [0.925, 0.882, 0.82], // sand
  [0.984, 0.973, 0.949], // ivory
  [0.698, 0.557, 0.329], // gold
];

export const BRAND_SHADER_UNIFORMS = {
  colorCount: 5,
  scale: 1.35,
  intensity: 0.5,
  paramA: 0.62,
  warp: 0.4,
  detail: 3.0,
  contrast: 1.03,
  brightness: 0.06,
  saturation: 0.92,
  grain: 0.05,
  vignette: 0.1,
  seed: 4,
  rotate: 0.5,
  drift: 0.015,
  oklab: 1.0,
  timeScale: 0.42,
  cursorEnabled: true,
  cursorEffect: 1.0, // gentle repel under the pointer
  cursorStrength: 0.32,
  cursorRadius: 0.5,
};

export function ShaderField({
  className,
  uniforms,
}: {
  className?: string;
  uniforms?: Partial<typeof BRAND_SHADER_UNIFORMS>;
}) {
  return (
    <ShaderBackground
      className={className}
      colors={BRAND_SHADER_COLORS}
      uniforms={{ ...BRAND_SHADER_UNIFORMS, ...uniforms }}
    />
  );
}
