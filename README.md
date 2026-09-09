# Interior Design Project

Landing page for a local interior design + fabrication company, with a HubSpot contact form for the marketing team.

## Placeholders to replace

- **Business name / branding** — currently "Studio Fabrica" throughout `index.html`; swap colors in `styles.css` (`:root` variables).
- **Copy** — hero, services, about, and footer text are placeholder.
- **Work section** — gallery thumbnails are empty placeholder blocks; replace with real project photos.
- **HubSpot form** — in `index.html`, set `portalId` and `formId` to your real values from HubSpot: Marketing > Forms > your form > Embed code.
- **Fallback email** — the `<noscript>` contact fallback uses `hello@example.com`; update to a real address.

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deploy

This is a static site — deployable as-is to GitHub Pages, Netlify, or Vercel.
