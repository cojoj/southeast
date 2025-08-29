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
 * @returns URL for the same page in the other language
 */
export function getLanguageSwitchUrl(currentUrl: string): string {
  // Ensure the path starts with '/' and ends with '/'
  const normalizedPath = currentUrl.startsWith('/') ? currentUrl : `/${currentUrl}`;
  const pathWithSlash = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
  
  // Find the mapped URL
  const mappedPath = urlMapping[pathWithSlash];
  
  if (mappedPath) {
    return mappedPath;
  }
  
  // Fallback: if no mapping found, go to appropriate homepage
  const isEnglishPage = pathWithSlash.startsWith('/en/');
  return isEnglishPage ? '/' : '/en/';
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