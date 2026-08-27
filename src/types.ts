export type Locale = 'pl' | 'en';

export type Localized<T> = Record<Locale, T>;

export type PageKey = 'home' | 'about' | 'training' | 'schedule' | 'summerCamp';

export type ClassLevel = 'podstawy' | 'wszystkie' | 'zaawansowani' | 'dzieci' | 'mieszane';

export type GearItem =
  | 'sports-shirt'
  | 'shorts-no-pockets'
  | 'mouthguard'
  | 'gloves-8oz'
  | 'gloves-14oz'
  | 'shin-guards';

export type ClassIcon =
  | 'Baby'
  | 'Brain'
  | 'CalendarClock'
  | 'Clock'
  | 'Dumbbell'
  | 'Footprints'
  | 'Package'
  | 'Shirt'
  | 'Sparkles'
  | 'Users'
  | 'Zap';

export interface ClassItem {
  id: string;
  level: ClassLevel;
  durationMin?: number;
  durationLabel?: string;
  gear: GearItem[];
  icons: {
    type: ClassIcon;
    duration: ClassIcon;
    gear: ClassIcon;
  };
  copy: Localized<{
    name: string;
    teaser: string;
    description: string;
    forWhom: string[];
    gearNote: string;
  }>;
}
