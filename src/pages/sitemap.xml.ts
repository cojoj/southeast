import type { APIRoute } from 'astro';
import { routes, site } from '../data/site';
import type { Locale } from '../types';

const locales = ['pl', 'en'] satisfies Locale[];

function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return char;
    }
  });
}

export const GET: APIRoute = () => {
  const pages = Object.values(routes);
  const urls = pages.flatMap((localizedRoutes) =>
    locales.map((locale) => {
      const loc = absoluteUrl(localizedRoutes[locale]);
      const alternates = locales
        .map((alternateLocale) => {
          const href = absoluteUrl(localizedRoutes[alternateLocale]);
          return `<xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(href)}" />`;
        })
        .join('');

      return [
        '<url>',
        `<loc>${escapeXml(loc)}</loc>`,
        alternates,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl(localizedRoutes.pl))}" />`,
        '<changefreq>weekly</changefreq>',
        '</url>',
      ].join('');
    }),
  );

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
