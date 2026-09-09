# yanhomebuild

Landing page for a local interior design + fabrication company, with a HubSpot contact form for the marketing team.

## Placeholders to replace

- **Copy** — hero, services, about, and footer text are placeholder; branding is "Yan Studio Design and Build" to match yaninteriordesign.com.
- **Colors** — swap the palette in `styles.css` (`:root` variables) if you want a different look than the current black/gold/cream theme.
- **Photos** — hero, about, service, work, before/after, and craft images are LoremFlickr placeholder photos tagged toward Southeast Asian / tropical-modern architecture (e.g. `tropicalmodern`, `rattan`, `resort`, `singapore`) — still stock, not real project photos; replace the `background-image` URLs in `index.html` with real photography.
- **Trust/testimonial avatars** — the hero and testimonial "avatars" are plain colored monogram circles (`.avatar-mono` in `styles.css`), not stock photos, by design (kept human portraits to a minimum). Swap for real client photos (with permission) if you want actual faces later.
- **Reviews, stats & testimonials** — the "4.9 (120+ Reviews)" style trust row, the stats band (10+ years, 250+ projects, 98%, 15+ awards), and all 3 testimonial quotes are fabricated placeholders marked `(placeholder)` inline — replace with real figures/quotes before launch, don't publish invented numbers.
- **Top bar & footer contact info** — phone number, street address, and social links (`#` hrefs) in the top bar and footer are placeholders.
- **HubSpot form** — in `index.html`, set `portalId` and `formId` to your real values from HubSpot: Marketing > Forms > your form > Embed code.
- **Contact details** — the address/hours in the contact section and the `hello@yaninteriordesign.com` fallback email are placeholders.

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deploy

Static site, deployable as-is. Currently connected to:

- **Cloudflare Workers** (primary) — auto-deploys from `main` via `npx wrangler deploy` (config in `wrangler.toml`, serves this directory as static assets). Custom domain `yaninteriordesign.com` is bound under Workers & Pages > yanhomebuild > Domains, which handles DNS + SSL automatically.
- **GitHub Pages** (fallback/mirror) — still enabled at `https://ysinteriorsbuild-arc.github.io/yanhomebuild/`, no custom domain attached.
