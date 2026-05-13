import type { ClassItem, GearItem, Locale, Localized } from '../types';

export const gearLabels = {
  pl: {
    'sports-shirt': 'Koszulka sportowa',
    'shorts-no-pockets': 'Spodenki bez kieszeni',
    mouthguard: 'Szczęka',
    'gloves-8oz': 'Rękawice 8oz',
    'gloves-10oz': 'Rękawice min. 10oz',
    'shin-guards': 'Ochraniacze na piszczele',
  },
  en: {
    'sports-shirt': 'Sports shirt',
    'shorts-no-pockets': 'Shorts without pockets',
    mouthguard: 'Mouthguard',
    'gloves-8oz': '8oz gloves',
    'gloves-10oz': '10oz+ gloves',
    'shin-guards': 'Shin guards',
  },
} satisfies Record<Locale, Record<GearItem, string>>;

export const classes = [
  {
    id: 'bjj-podstawy',
    level: 'wszystkie',
    durationMin: 75,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Users', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu wszystkie poziomy',
        teaser: 'Trening dla osób początkujących i bardziej zaawansowanych, który pozwala rozwijać jiu-jitsu w swoim tempie.',
        description: 'Fundamenty walki w parterze, kontrola, poddania i zadania dostosowane do poziomu grupy. Możesz dołączyć w każdej chwili - bez doświadczenia.',
        forWhom: [
          'Osoby początkujące, które chcą rozpocząć treningi jiu-jitsu',
          'Bardziej zaawansowani trenujący, którzy chcą rozwijać swoje umiejętności',
        ],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu All Levels',
        teaser: 'Training for beginners and more experienced practitioners, built so everyone can develop their jiu-jitsu at their own pace.',
        description: 'Ground fighting fundamentals, control, submissions, and tasks adapted to the group level. Join anytime - no experience required.',
        forWhom: [
          'Beginners who want to start training jiu-jitsu',
          'More experienced practitioners who want to keep developing their skills',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'bjj-grupa-zawodnicza',
    level: 'zaawansowani',
    durationMin: 120,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Brain', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu grupa zawodnicza',
        teaser: 'Trening o wyższej intensywności, na którym skupiamy się na przygotowaniu do zawodów.',
        description: 'Wyższy poziom treningu: zaawansowane techniki, strategia, przygotowanie do zawodów.',
        forWhom: [
          'Grupa tylko na zaproszenie!',
          'Osoby przygotowujące się do startów w zawodach',
        ],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu Competition Team',
        teaser: 'Higher-intensity training focused on competition preparation.',
        description: 'A higher training level: advanced techniques, strategy, and competition preparation.',
        forWhom: [
          'Invitation-only group!',
          'Athletes preparing to compete in tournaments',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'mma-podstawy',
    level: 'podstawy',
    durationMin: 60,
    gear: ['sports-shirt', 'shorts-no-pockets', 'mouthguard', 'gloves-8oz', 'shin-guards'],
    icons: { type: 'Dumbbell', duration: 'Clock', gear: 'Package' },
    copy: {
      pl: {
        name: 'MMA Podstawy',
        teaser: 'Nie masz żadnego doświadczenia z MMA i chcesz zacząć trenować? To idealna grupa na Twój pierwszy trening!',
        description: 'Podstawy MMA: walka w stójce, zapasy, parter. Możesz dołączyć w każdej chwili.',
        forWhom: [
          'Osoby początkujące, które chcą nauczyć się podstaw MMA',
          'Bardziej zaawansowani trenujący, którzy chcą poprawić swoje podstawy',
        ],
        gearNote: 'Na pierwsze treningi nie potrzebujesz żadnego sprzętu - pożyczymy Ci go na miejscu :)',
      },
      en: {
        name: 'MMA Fundamentals',
        teaser: 'Have no MMA experience and want to start training? This is the perfect group for your first session!',
        description: 'MMA fundamentals: striking, wrestling, ground fighting. Well-rounded introduction to all combat ranges. Join anytime.',
        forWhom: [
          'Complete beginners who want to learn the basics of mixed martial arts',
          'More experienced athletes from other disciplines who want to develop well-rounded MMA skills',
        ],
        gearNote: "You don't need any equipment for your first sessions - we'll lend it to you on site :)",
      },
    },
  },
  {
    id: 'kickboxing-podstawy',
    level: 'podstawy',
    durationMin: 60,
    gear: ['sports-shirt', 'shorts-no-pockets', 'mouthguard', 'gloves-10oz', 'shin-guards'],
    icons: { type: 'Zap', duration: 'Clock', gear: 'Package' },
    copy: {
      pl: {
        name: 'Kickboxing Podstawy',
        teaser: 'Nie masz żadnego doświadczenia z kickboxingiem a chciałbyś zacząć trenować? To idealna grupa na Twój pierwszy trening!',
        description: 'Podstawy kickboxingu: postawa, praca nóg, podstawowe ciosy i kopnięcia. Możesz dołączyć w każdej chwili.',
        forWhom: [
          'Osoby początkujące, które chcą nauczyć się podstaw kickboxingu',
          'Bardziej zaawansowani trenujący, którzy chcą poprawić swoje podstawy',
        ],
        gearNote: 'Na pierwsze treningi nie potrzebujesz żadnego sprzętu - pożyczymy Ci go na miejscu :)',
      },
      en: {
        name: 'Kickboxing Fundamentals',
        teaser: 'Have no kickboxing experience but would like to start training? This is the perfect group for your first session!',
        description: 'Fundamental kickboxing: stance, footwork, punches, kicks, and defense. Technique over power. Join anytime.',
        forWhom: [
          'Complete beginners who want to learn kickboxing from the ground up',
          'More experienced practitioners who want to refine their fundamental techniques and improve their striking basics',
        ],
        gearNote: "You don't need any equipment for your first sessions - we'll lend it to you on site :)",
      },
    },
  },
  {
    id: 'wolna-mata',
    level: 'mieszane',
    durationMin: 120,
    gear: [],
    icons: { type: 'CalendarClock', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Wolna mata',
        teaser: 'Trening nie jest zorganizowany - możesz przyjść w dowolnym momencie, złapać partnera do treningu, trenować technikę, robić sparingi - na tych zajęciach masz pełną dowolność.',
        description: 'Indywidualna praca nad technikami, sparingi, trening według własnych potrzeb. Trener zawsze dostępny.',
        forWhom: ['Odpowiedni dla wszystkich poziomów'],
        gearNote: '',
      },
      en: {
        name: 'Open Mat',
        teaser: 'The training is not structured - you can come at any time, find a training partner, work on technique, do sparring - you have complete freedom in these sessions.',
        description: 'Self-directed training: drill techniques, sparring, conditioning. Coach always present for guidance and safety.',
        forWhom: [
          'Suitable for all levels - from beginners wanting extra practice time to advanced athletes preparing for competition',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'gry-i-zabawy-3-5',
    level: 'dzieci',
    durationMin: 40,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Baby', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Gry i zabawy z elementami sportów walki',
        teaser: 'Zajęcia stworzone specjalnie dla najmłodszych wojowników.',
        description: '40 minut zabawy rozwijającej koordynację, równowagę i pewność siebie. Bezpieczne gry z elementami sportów walki.',
        forWhom: [
          'Dzieci w wieku 3-5 lat',
          'Idealne jako pierwszy krok do aktywności fizycznej',
        ],
        gearNote: '',
      },
      en: {
        name: 'Games and Play with Martial Arts Elements',
        teaser: 'Classes created especially for our youngest warriors.',
        description: '40 minutes of fun developing coordination, balance, and confidence. Safe games with basic martial arts elements.',
        forWhom: [
          'Children aged 3-5 years who are ready for their first martial arts experience',
          'Perfect as an introduction to structured physical activity and martial arts',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'bjj-dzieci-6-12',
    level: 'dzieci',
    durationMin: 55,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Baby', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu dla dzieci',
        teaser: 'Treningi zaprojektowane z myślą o młodych wojownikach, którzy chcą uczyć się dyscypliny, szacunku i pewności siebie.',
        description: 'Techniki Jiu-Jitsu dostosowane do wieku, koordynacja, współpraca z partnerem. Bezpieczna i wspierająca atmosfera.',
        forWhom: ['Dzieci w wieku 6-12 lat'],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu for Kids',
        teaser: 'Training designed for young warriors who want to learn discipline, respect, and confidence.',
        description: 'Age-appropriate Jiu-Jitsu techniques, partner cooperation, discipline and respect. Safe and supportive environment.',
        forWhom: [
          'Children aged 6-12 years who are ready to learn structured martial arts techniques and discipline',
        ],
        gearNote: '',
      },
    },
  },
] satisfies ClassItem[];

export const classSectionLabels = {
  pl: {
    adults: 'Treningi dla dorosłych',
    kids: 'Treningi dla dzieci',
  },
  en: {
    adults: 'Adult Training',
    kids: 'Kids Training',
  },
} satisfies Localized<{ adults: string; kids: string }>;
