export type Locale = 'pl' | 'en';

export interface ClassItem {
  id: string;
  level: 'podstawy' | 'wszystkie' | 'zaawansowani' | 'dzieci' | 'mieszane';
  durationMin: number;
  gear: string[];
  icons: {
    type: string;
    duration: string;
    gear: string;
  };
  copy: Record<Locale, {
    name: string;
    teaser: string;
    description: string;
    forWhom: string[];
    gearNote: string;
  }>;
}

export interface InfoBlock {
  id: string;
  copy: Record<Locale, { 
    title: string; 
    body: string[]; 
    bullets?: string[] 
  }>;
}

export interface ClassesData {
  classes: ClassItem[];
}

export interface InfoData {
  info: InfoBlock[];
}