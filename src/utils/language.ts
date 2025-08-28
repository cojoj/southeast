/**
 * Language and URL mapping utilities for multilingual navigation
 */

export type Language = 'pl' | 'en';

export type PageRoute = 'home' | 'about' | 'training' | 'schedule';

/**
 * Maps Polish URLs to their English equivalents
 */
const urlMapping: Record<string, string> = {
  // Polish to English
  '/': '/en/',
  '/o-nas/': '/en/about/',
  '/treningi/': '/en/training/',
  '/harmonogram/': '/en/schedule/',
  
  // English to Polish
  '/en/': '/',
  '/en/about/': '/o-nas/',
  '/en/training/': '/treningi/',
  '/en/schedule/': '/harmonogram/',
};

/**
 * Get the equivalent URL in the other language
 * @param currentUrl - Current page URL
 * @param baseUrl - Base URL from Astro environment
 * @returns URL for the same page in the other language
 */
export function getLanguageSwitchUrl(currentUrl: string, baseUrl: string): string {
  // Remove base URL to get the clean path
  const cleanUrl = currentUrl.replace(baseUrl.replace(/\/$/, ''), '');
  
  // Ensure the path starts with '/' and ends with '/'
  const normalizedPath = cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`;
  const pathWithSlash = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
  
  // Find the mapped URL
  const mappedPath = urlMapping[pathWithSlash];
  
  if (mappedPath) {
    return `${baseUrl}${mappedPath.startsWith('/') ? mappedPath.substring(1) : mappedPath}`;
  }
  
  // Fallback: if no mapping found, go to appropriate homepage
  const isEnglishPage = pathWithSlash.startsWith('/en/');
  return isEnglishPage ? baseUrl : `${baseUrl}en/`;
}

/**
 * Detect current language from URL
 * @param currentUrl - Current page URL
 * @returns Current language (pl or en)
 */
export function getCurrentLanguage(currentUrl: string): Language {
  return currentUrl.includes('/en/') ? 'en' : 'pl';
}

/**
 * Get the other language (opposite of current)
 * @param currentLang - Current language
 * @returns The other language
 */
export function getOtherLanguage(currentLang: Language): Language {
  return currentLang === 'pl' ? 'en' : 'pl';
}