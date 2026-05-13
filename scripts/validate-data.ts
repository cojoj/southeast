import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { classes, gearLabels } from '../src/data/classes.ts';
import { nav, pageMeta, routes, site } from '../src/data/site.ts';
import type { GearItem, Locale, PageKey } from '../src/types.ts';

const locales = ['pl', 'en'] satisfies Locale[];
const errors: string[] = [];

function assert(condition: boolean, message: string) {
  if (!condition) errors.push(message);
}

function assertLocalized<T>(value: Record<Locale, T>, label: string) {
  for (const locale of locales) {
    assert(value[locale] !== undefined, `${label} is missing ${locale}`);
  }
}

for (const page of Object.keys(routes) as PageKey[]) {
  assertLocalized(routes[page], `routes.${page}`);
  assertLocalized(pageMeta[page], `pageMeta.${page}`);

  for (const locale of locales) {
    const route = routes[page][locale];
    assert(route.startsWith('/'), `${page}.${locale} route must start with /`);
    assert(route.endsWith('/'), `${page}.${locale} route must end with /`);
  }
}

const allRoutes = Object.values(routes).flatMap((route) => locales.map((locale) => route[locale]));
assert(new Set(allRoutes).size === allRoutes.length, 'Route table contains duplicate paths');

for (const item of nav) {
  assert(Boolean(routes[item.page]), `nav item references unknown page ${item.page}`);
  assertLocalized(item.label, `nav.${item.page}.label`);

  for (const child of item.children ?? []) {
    assertLocalized(child.href, `nav.${item.page}.child.href`);
    assertLocalized(child.label, `nav.${item.page}.child.label`);
  }
}

const classIds = new Set<string>();
for (const item of classes) {
  assert(!classIds.has(item.id), `Duplicate class id ${item.id}`);
  classIds.add(item.id);
  assertLocalized(item.copy, `classes.${item.id}.copy`);

  for (const locale of locales) {
    const copy = item.copy[locale];
    assert(Boolean(copy.name), `classes.${item.id}.${locale}.name is empty`);
    assert(Boolean(copy.description), `classes.${item.id}.${locale}.description is empty`);
  }

  for (const gear of item.gear) {
    for (const locale of locales) {
      assert(Boolean(gearLabels[locale][gear as GearItem]), `Missing ${locale} gear label for ${gear}`);
    }
  }
}

const publicDir = join(process.cwd(), 'public');
for (const image of [
  site.defaultOgImage,
  '/hero.jpg',
  '/team.jpg',
  '/training.jpg',
  '/training-session.jpg',
  '/flagens.jpg',
  '/logos/logo_black.svg',
  '/logos/logo_white_jj.svg',
]) {
  assert(existsSync(join(publicDir, image.slice(1))), `Missing public asset ${image}`);
}

for (const social of site.social) {
  assert(social.href.startsWith('https://'), `Social link ${social.id} must be https`);
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Data validation passed for ${classes.length} classes and ${allRoutes.length} localized routes.`);
