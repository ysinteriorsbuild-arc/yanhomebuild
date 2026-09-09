# yanhomebuild

Landing page for a local interior design + fabrication company, with a HubSpot contact form for the marketing team.

## Placeholders to replace

- **Copy** — hero, services, about, and footer text are placeholder; branding is "Yan Interior Design" to match yaninteriordesign.com.
- **Colors** — swap the palette in `styles.css` (`:root` variables) if you want a different look than the current olive/terracotta theme.
- **Photos** — hero, service, work, and craft images are gradient placeholder blocks; replace with real photography.
- **HubSpot form** — in `index.html`, set `portalId` and `formId` to your real values from HubSpot: Marketing > Forms > your form > Embed code.
- **Contact details** — the address/hours in the contact section and the `hello@yaninteriordesign.com` fallback email are placeholders.

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deploy

This is a static site — deployable as-is to GitHub Pages, Netlify, or Vercel.
