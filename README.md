# yanhomebuild

Landing page for a local interior design + fabrication company, with a HubSpot contact form for the marketing team.

## Placeholders to replace

- **Copy** — hero, services, about, and footer text are placeholder; branding is "Yan Studio Design and Build" to match yaninteriordesign.com.
- **Colors** — swap the palette in `styles.css` (`:root` variables) if you want a different look than the current olive/terracotta theme.
- **Photos** — hero, service, work, before/after, and craft images are LoremFlickr placeholder photos (thematically tagged, not real project photos); replace the `background-image` URLs in `index.html` with real photography.
- **HubSpot form** — in `index.html`, set `portalId` and `formId` to your real values from HubSpot: Marketing > Forms > your form > Embed code.
- **Contact details** — the address/hours in the contact section and the `hello@yaninteriordesign.com` fallback email are placeholders.

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deploy

Static site, deployable as-is. Currently connected to:

- **Cloudflare Workers** — auto-deploys from `main` via `npx wrangler deploy` (config in `wrangler.toml`, serves this directory as static assets). Bind the custom domain under Workers & Pages > yanhomebuild > Domains.
- **GitHub Pages** — also enabled as a fallback/mirror at `ysinteriorsbuild-arc.github.io/yanhomebuild` (config: `CNAME` file + repo Pages settings).
