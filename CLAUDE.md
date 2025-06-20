# Southeast Jiu-Jitsu Website - Project Context

## Project Overview
This is a multilingual website for **Southeast Jiu-Jitsu**, a Brazilian Jiu-Jitsu gym located in Kraków, Poland. The site is built using the Astro framework.

## Technology Stack
- **Framework**: Astro v5.10.0
- **Language**: TypeScript (strict configuration)
- **CSS Framework**: Tailwind CSS v4 (via Astro integration)
- **Build Tool**: Astro's built-in build system
- **Deployment**: Static site generation

## Project Structure
```
/
├── public/           # Static assets (favicon.svg)
├── src/
│   └── pages/        # Route-based pages (.astro files)
│       └── index.astro
├── astro.config.mjs  # Astro configuration
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Development Commands
- `npm run dev` - Start development server (localhost:4321)
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Current State
- Basic Astro minimal template setup
- Multilingual pages (Polish/English) with placeholder content
- No internationalization (i18n) routing configured yet
- Tailwind CSS v4 configured and integrated
- No components created yet

## Key Requirements for BJJ Gym Website
- **Multilingual support** (likely Polish/English)
- Content about the gym, classes, instructors
- Contact information and location
- Class schedules
- Pricing information
- Potentially: member portal, class booking

## Development Notes
- Use Astro's file-based routing for pages
- Consider Astro's i18n features for multilingual support
- Components should be placed in `src/components/`
- Static assets (images, documents) go in `public/`
- Follow TypeScript strict mode guidelines
- Astro supports multiple UI frameworks if needed (React, Vue, etc.)

## Testing & Quality
- No test framework configured yet
- No linting/formatting tools configured yet
- Consider adding these for code quality

## Deployment Considerations
- Static site - can be deployed to Netlify, Vercel, GitHub Pages, etc.
- Consider CDN for performance in Poland/Europe