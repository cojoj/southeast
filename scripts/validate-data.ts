import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { classes, gearLabels } from '../src/data/classes.ts';
import { nav, pageMeta, routes, site } from '../src/data/site.ts';
import { dayCamps } from '../src/data/dayCamps.ts';
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
assert(routes.dayCamps.en === '/en/day-camps/', 'English day-camps route must remain season-neutral');

for (const item of nav) {
  const itemKey = 'page' in item ? item.page : item.href;
  assertLocalized(item.label, `nav.${itemKey}.label`);

  if ('page' in item) {
    assert(Boolean(routes[item.page]), `nav item references unknown page ${item.page}`);
  } else {
    assert(item.href.startsWith('https://'), `nav external link must be https: ${item.href}`);
  }

  const children = 'children' in item ? item.children : undefined;
  for (const child of children ?? []) {
    assertLocalized(child.href, `nav.${itemKey}.child.href`);
    assertLocalized(child.label, `nav.${itemKey}.child.label`);
  }
}

const scheduleNavIndex = nav.findIndex((item) => 'page' in item && item.page === 'schedule');
const dayCampsNavIndex = nav.findIndex((item) => 'page' in item && item.page === 'dayCamps');
assert(dayCampsNavIndex === scheduleNavIndex + 1, 'Day Camps must appear directly after Schedule in navigation');

assertLocalized(dayCamps, 'dayCamps');

for (const locale of locales) {
  const content = dayCamps[locale];
  assert(Boolean(content.hero.title), `dayCamps.${locale}.hero.title is empty`);
  assert(Boolean(content.hero.status), `dayCamps.${locale}.hero.status is empty`);
  assert(content.facts.length === 4, `dayCamps.${locale}.facts should include exactly four teaser facts`);
  assert(content.preview.items.length === 4, `dayCamps.${locale}.preview.items should include exactly four program signals`);
  assert(Boolean(content.updates.heading), `dayCamps.${locale}.updates.heading is empty`);
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

const boxing = classes.find((item) => item.id === 'boks-podstawy');
const kickboxing = classes.find((item) => item.id === 'kickboxing-podstawy');
const mma = classes.find((item) => item.id === 'mma-podstawy');
const juniorJiuJitsu = classes.find((item) => item.id === 'bjj-junior-10-13');
const kidsKickboxing = classes.find((item) => item.id === 'kickboxing-dzieci-6-13');
const hasGear = (item: (typeof classes)[number] | undefined, gear: GearItem) =>
  (item?.gear as readonly GearItem[] | undefined)?.includes(gear) ?? false;

assert(boxing?.durationMin === 60, 'Boxing fundamentals must last 60 minutes');
assert(hasGear(boxing, 'gloves-14oz'), 'Boxing fundamentals must require 14 oz+ gloves');
assert(hasGear(kickboxing, 'gloves-14oz'), 'Kickboxing fundamentals must require 14 oz+ gloves');
assert(hasGear(mma, 'gloves-8oz'), 'MMA fundamentals must require 8 oz gloves');
assert(!hasGear(mma, 'gloves-14oz'), 'MMA fundamentals must not require 14 oz+ gloves');
assert(juniorJiuJitsu?.durationMin === 55, 'Junior Jiu-Jitsu must last 55 minutes');
assert(kidsKickboxing?.durationMin === 55, 'Kids Kickboxing must last 55 minutes');
assert(hasGear(kidsKickboxing, 'boxing-gloves'), 'Kids Kickboxing must require boxing gloves');
assert(hasGear(kidsKickboxing, 'shin-guards'), 'Kids Kickboxing must require shin guards');
assert(!hasGear(kidsKickboxing, 'gloves-8oz'), 'Kids Kickboxing must not set an 8 oz glove minimum');
assert(!hasGear(kidsKickboxing, 'gloves-14oz'), 'Kids Kickboxing must not set a 14 oz glove minimum');

const publicDir = join(process.cwd(), 'public');
for (const image of [
  site.defaultOgImage,
  '/hero.jpg',
  '/team.jpg',
  '/training.jpg',
  '/training-session.jpg',
  '/flagens.jpg',
  '/day-camps-winter-hero.jpg',
  '/robots.txt',
  '/_redirects',
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
