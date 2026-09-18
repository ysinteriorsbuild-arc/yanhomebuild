# Yan Studio Design & Build — Website

Rebuilt on [Astro](https://astro.build) with a "refined dark luxury" design: deep navy
background, gold used sparingly as a metallic-gradient accent (not a fill), an animated
ambient gradient, sharp edges, type-scale-driven hierarchy. Component-based, ready to
wire up to a headless CMS later for self-service content editing.

## Structure

```
src/
  layouts/Layout.astro     # <head>, fonts, page shell
  components/              # Header, Hero, Services, Work, About, Craft,
                            # Stats, Testimonials, Contact, Footer
  scripts/main.ts          # mobile nav, filters, before/after slider,
                            # testimonial carousel, stat count-up, scroll reveal
  styles/global.css        # design tokens (colors, type, spacing) + base styles
  pages/index.astro        # composes all sections
public/assets/             # logo files (logo-mark.png, logo-flat.png, favicon.png)
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Placeholders to replace

- **Copy** — hero, services, about, and footer text are placeholder.
- **Photos** — hero, about, service, work, before/after, and craft images are real Pexels
  stock photos (free commercial-use license) of Southeast Asian / tropical-modern
  buildings, interiors, and materials — good quality, but not your actual project
  photos. Replace the image URLs in the relevant `src/components/*.astro` files with
  real photography when available.
- **Testimonial avatars** — plain initial-letter squares by design (kept human stock
  portraits to a minimum). Swap for real client photos (with permission) later.
- **Reviews, stats & testimonials** — the stats band (10+ years, 250+ projects, 98%,
  15+ awards) and all 3 testimonial quotes are fabricated placeholders marked
  `(placeholder)` inline — replace with real figures/quotes before launch.
- **Prices** — service pricing is in MYR (RM 500 / Custom quote / RM 2,200), placeholder
  amounts — adjust to your real rates in `src/components/Services.astro`.
- **Top bar & footer contact info** — city and phone are real (Kuala Lumpur, Malaysia;
  +60 19-390 4786) but there's no street address yet, and social links (`#` hrefs) are
  still placeholders.
- **HubSpot form** — in `src/components/Contact.astro`, set `portalId` and `formId` to
  your real values from HubSpot: Marketing > Forms > your form > Embed code.
- **Project & testimonial locations** — city/state tags on the Projects and Client
  Stories sections are placeholder Malaysian cities, not real project sites.

## Deploy

Not yet reconnected to hosting after the rebuild — `wrangler.toml` was removed along
with the old static site. Once ready to go live again:

1. `npm run build` to produce `dist/`.
2. Add a `wrangler.toml` with `[assets] directory = "./dist"` pointing Cloudflare
   Workers at the build output (previously it pointed at the repo root for the old
   static site).
3. Redeploy via `npx wrangler deploy`, same Cloudflare Workers project as before
   (`yanhomebuild`, domain `yaninteriordesign.com`).

## Planned: CMS-managed entries

Next phase is wiring this up to a headless CMS (Sanity.io) so projects, services, and
testimonials can be added/edited from a web admin panel instead of editing code.
