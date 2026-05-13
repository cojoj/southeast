import { routes, site } from '../data/site';
import type { Locale, PageKey } from '../types';

export function getLanguageSwitchUrl(currentUrl: string): string {
  const pathWithSlash = normalizePath(currentUrl);

  for (const route of Object.values(routes)) {
    if (route.pl === pathWithSlash) return route.en;
    if (route.en === pathWithSlash) return route.pl;
  }

  const isEnglishPage = pathWithSlash.startsWith('/en/');
  return routes.home[isEnglishPage ? 'pl' : 'en'];
}

export function getCurrentLanguage(currentUrl: string): Locale {
  return normalizePath(currentUrl).startsWith('/en/') ? 'en' : 'pl';
}

export function getOtherLanguage(currentLang: Locale): Locale {
  return currentLang === 'pl' ? 'en' : 'pl';
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function routePath(page: PageKey, locale: Locale): string {
  return routes[page][locale];
}

function normalizePath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
}
