# Southeast Jiu-Jitsu

Static Astro site for Southeast Jiu-Jitsu in Krakow. The site is bilingual, with Polish routes at the root and English routes under `/en/`.

## Commands

```sh
npm install
npm run dev
npm run validate
```

Use `npm run check` for Astro diagnostics, `npm run build` for the static bundle, and `npm run preview` to smoke-test the generated site.

## Structure

- `src/pages/` contains only thin locale route wrappers.
- `src/components/pages/` contains shared page templates.
- `src/components/` contains reusable rendering components.
- `src/data/classes.ts` contains the canonical class offering and localized gear labels.
- `src/data/site.ts` contains routes, metadata, navigation, CTA links, and localized page copy.
- `src/types.ts` contains shared contracts.
- `public/` contains static images, videos, fonts, favicons, and meta assets.

Generated output lives in `dist/` and should not be edited.

## Validation

`npm run validate:data` checks the route table, localized page metadata, nav references, class IDs, class copy, gear labels, and required public assets. `npm run validate` runs data validation, Astro Check, and a production build.
