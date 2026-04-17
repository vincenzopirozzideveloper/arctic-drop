# GLCR · ARCTIC 01 — Study Project

Internal Sagres study project: an editorial e-commerce landing inspired by a minimalist dusty-blue fashion drop aesthetic. Built with Vite + React + TS + Tailwind + GSAP + Lenis.

## Brand & imagery

**Brand mark used:** GLCR (invented, no affiliation with any existing label).

**All product imagery** was generated with Google Gemini 3.1 Flash Image (Nano Banana 2) from original prompts — no real-brand assets, no scraped fashion photography, no real-person likenesses. Each image is a photorealistic editorial render of a generic technical puffer garment on a dusty-blue studio backdrop. License: generated under the Gemini API, usable per Google's generative-media policy.

## Stack

- Vite 5 + React 18 + TypeScript strict
- Tailwind CSS 3 (dusty-blue theme tokens)
- GSAP 3 + `@gsap/react` + ScrollTrigger
- Lenis smooth scroll synced to GSAP ticker

## Development (Docker stack)

`node:20-alpine` runs `sh -c "npm install && npm run dev"`. Vite on internal port 3000, HMR over HTTPS reverse proxy via NPM (`clientPort: 443`, `allowedHosts: true`).

## Regenerate imagery

`public/img/*.jpg` is committed. To regenerate (requires a Gemini API key at `/root/.gemini-api-key`):

```sh
python3 scripts/generate-images.py
```

The script skips files already on disk over 50 KB, so it is safe to re-run to fill gaps.

## Run (local)

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Static output in `dist/`.
