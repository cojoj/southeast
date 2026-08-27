# Southeast Jiu-Jitsu

Static Astro site for Southeast Jiu-Jitsu in Krakow. The site is bilingual, with Polish routes at the root and English routes under `/en/`.

## Commands

Install [mise](https://mise.jdx.dev/) and run the project through its checked-in toolchain:

```sh
mise trust
mise install
mise run dev
mise run validate
```

`mise.toml` selects the current Node.js LTS and latest pnpm release, while `mise.lock` preserves the exact versions used on macOS ARM64 and Linux x64. Use `mise run check` for Astro diagnostics and `mise run build` for the static bundle. Direct pnpm commands remain available inside the mise environment.

Cloudflare Pages must use `pnpm validate` as its build command, output `dist`, and mirror the resolved versions from `mise.lock` in the `NODE_VERSION` and `PNPM_VERSION` build variables for both preview and production. The toolchain validation fails a build when either value drifts, so an outdated mirror cannot be deployed silently.

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

`pnpm validate:toolchain` checks the active Node.js and pnpm versions and prevents Cloudflare build variables from silently drifting. `pnpm validate:data` checks the route table, localized page metadata, nav references, class IDs, class copy, gear labels, and required public assets. `mise run validate` runs both validations, Astro Check, and a production build.
