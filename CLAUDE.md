# Southeast Jiu-Jitsu Project Notes

This repo is an Astro static site with Polish routes at the root and English routes under `/en/`.

Follow `AGENTS.md` for contribution rules. The important current conventions are:

- Keep route files in `src/pages/` thin.
- Put shared page composition in `src/components/pages/`.
- Put localized content, routes, metadata, and external links in `src/data/site.ts`.
- Put class offering data in `src/data/classes.ts`.
- Run `npm run validate` before shipping.
