import type { ClassItem, GearItem, Locale, Localized } from '../types';

export const gearLabels = {
  pl: {
    'sports-shirt': 'Koszulka sportowa',
    'shorts-no-pockets': 'Spodenki bez kieszeni',
    mouthguard: 'Szczęka',
    'boxing-gloves': 'Rękawice bokserskie',
    'gloves-8oz': 'Rękawice 8oz',
    'gloves-14oz': 'Rękawice min. 14 oz',
    'shin-guards': 'Ochraniacze na piszczele',
  },
  en: {
    'sports-shirt': 'Sports shirt',
    'shorts-no-pockets': 'Shorts without pockets',
    mouthguard: 'Mouthguard',
    'boxing-gloves': 'Boxing gloves',
    'gloves-8oz': '8oz gloves',
    'gloves-14oz': '14 oz+ gloves',
    'shin-guards': 'Shin guards',
  },
} satisfies Record<Locale, Record<GearItem, string>>;

export const classes = [
  {
    id: 'bjj-podstawy',
    level: 'podstawy',
    durationMin: 60,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Sparkles', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu Podstawy',
        teaser: 'Chcesz rozpocząć swoją przygodę z jiu-jitsu? To idealne zajęcia na Twój pierwszy trening!',
        description: 'Na tych zajęciach skupiamy się na podstawowych aspektach jiu-jitsu, a plan treningowy ułożony jest tak, że możesz dołączyć w każdej chwili.',
        forWhom: [
          'Osoby początkujące, które chcą nauczyć się podstaw jiu-jitsu',
          'Bardziej zaawansowani trenujący, którzy chcą poprawić swoje podstawy',
        ],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu Fundamentals',
        teaser: 'Want to start your jiu-jitsu journey? This is the perfect class for your first training session!',
        description: 'In this class we focus on the most basic aspects of jiu-jitsu, with a training plan that makes it easy to join anytime.',
        forWhom: [
          'Complete beginners who want to learn jiu-jitsu from scratch',
          'More experienced practitioners who want to refine their basics',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'bjj-wszystkie',
    level: 'wszystkie',
    durationLabel: '60-75 min',
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Users', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu Wszystkie Poziomy',
        teaser: 'Trening, na którym mieszamy naukę podstaw z zaawansowanymi zagadnieniami.',
        description: 'Zajęcia dla osób z rekomendowanym minimum 6 miesiącami doświadczenia. Łączymy podstawy, zaawansowane koncepcje i zadania treningowe dopasowane do poziomu grupy.',
        forWhom: [
          'Osoby po pierwszych miesiącach treningu, które chcą podnieść swój poziom',
          'Bardziej zaawansowani trenujący',
        ],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu All Levels',
        teaser: 'Training where we blend fundamentals with more advanced concepts.',
        description: 'A class for practitioners with a recommended minimum of 6 months of experience. We combine fundamentals, advanced concepts, and training tasks adapted to the group level.',
        forWhom: [
          'Practitioners past their first months of training who want to raise their level',
          'More advanced practitioners',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'bjj-grupa-zawodnicza',
    level: 'zaawansowani',
    durationMin: 90,
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
    id: 'boks-podstawy',
    level: 'podstawy',
    durationMin: 60,
    gear: ['sports-shirt', 'shorts-no-pockets', 'mouthguard', 'gloves-14oz'],
    icons: { type: 'Footprints', duration: 'Clock', gear: 'Package' },
    copy: {
      pl: {
        name: 'Boks Podstawy',
        teaser: 'Nie masz żadnego doświadczenia z boksem, a chciałbyś zacząć trenować? To idealna grupa na Twój pierwszy trening!',
        description: 'Podstawy boksu: postawa, praca nóg, poruszanie się, podstawowe ciosy, kombinacje oraz obrona. Możesz dołączyć w każdej chwili.',
        forWhom: [
          'Osoby początkujące, które chcą nauczyć się boksu od podstaw',
          'Bardziej zaawansowani trenujący, którzy chcą poprawić swoje podstawy',
        ],
        gearNote: 'Na pierwsze treningi nie potrzebujesz żadnego sprzętu - pożyczymy Ci go na miejscu :)',
      },
      en: {
        name: 'Boxing Fundamentals',
        teaser: 'Have no boxing experience but want to start training? This is the perfect group for your first session!',
        description: 'Boxing fundamentals: stance, footwork, movement, basic punches, combinations, and defense. You can join at any time.',
        forWhom: [
          'Beginners who want to learn boxing from the ground up',
          'More experienced practitioners who want to improve their fundamentals',
        ],
        gearNote: "You don't need any equipment for your first sessions - we'll lend it to you on site :)",
      },
    },
  },
  {
    id: 'kickboxing-podstawy',
    level: 'podstawy',
    durationMin: 60,
    gear: ['sports-shirt', 'shorts-no-pockets', 'mouthguard', 'gloves-14oz', 'shin-guards'],
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
    durationMin: 30,
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
        name: 'Gry i zabawy z elementami sportów walki - dzieci 3-5 lat',
        teaser: 'Zajęcia stworzone specjalnie dla najmłodszych wojowników.',
        description: '40 minut zabawy rozwijającej koordynację, równowagę i pewność siebie. Bezpieczne gry z elementami sportów walki. Można dołączyć do grupy w każdej chwili.',
        forWhom: [
          'Dzieci w wieku 3-5 lat',
          'Idealne jako pierwszy krok do aktywności fizycznej',
        ],
        gearNote: '',
      },
      en: {
        name: 'Games and Play with Martial Arts Elements - Ages 3-5',
        teaser: 'Classes created especially for our youngest warriors.',
        description: '40 minutes of fun developing coordination, balance, and confidence. Safe games with basic martial arts elements. Children can join the group at any time.',
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
        name: 'Jiu-Jitsu dzieci 6-9 lat',
        teaser: 'Treningi zaprojektowane z myślą o młodych wojownikach, którzy chcą uczyć się dyscypliny, szacunku i pewności siebie.',
        description: 'Techniki Jiu-Jitsu dostosowane do wieku, koordynacja, współpraca z partnerem. Bezpieczna i wspierająca atmosfera. Grupa jest odpowiednia zarówno dla dzieci, które dopiero zaczynają, jak i tych, które mają już doświadczenie. Można dołączyć do grupy w każdej chwili.',
        forWhom: ['Dzieci w wieku 6-9 lat'],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu for Kids Ages 6-9',
        teaser: 'Training designed for young warriors who want to learn discipline, respect, and confidence.',
        description: 'Age-appropriate Jiu-Jitsu techniques, coordination, and partner work. A safe and supportive atmosphere. The group is suitable for both children who are just starting and those who already have experience. Children can join the group at any time.',
        forWhom: ['Children aged 6-9'],
        gearNote: '',
      },
    },
  },
  {
    id: 'bjj-junior-10-13',
    level: 'dzieci',
    durationMin: 55,
    gear: ['sports-shirt', 'shorts-no-pockets'],
    icons: { type: 'Users', duration: 'Clock', gear: 'Shirt' },
    copy: {
      pl: {
        name: 'Jiu-Jitsu Junior',
        teaser: 'Treningi stworzone z myślą o młodych zawodnikach, którzy chcą rozwijać swoje umiejętności, sprawność i pewność siebie.',
        description: 'Techniki Jiu-Jitsu dostosowane do wieku, rozwój koordynacji, współpraca z partnerem oraz nauka poprzez ruch i sparingi. Bezpieczna i wspierająca atmosfera. Grupa jest odpowiednia zarówno dla osób, które dopiero zaczynają, jak i tych, które mają już doświadczenie. Można dołączyć do grupy w każdej chwili.',
        forWhom: [
          'Dzieci w wieku 10-13 lat',
          'Początkujący oraz bardziej zaawansowani',
        ],
        gearNote: '',
      },
      en: {
        name: 'Jiu-Jitsu Junior',
        teaser: 'Training designed for young athletes who want to develop their skills, fitness, and confidence.',
        description: 'Age-appropriate Jiu-Jitsu techniques, coordination development, partner work, and learning through movement and sparring. A safe and supportive atmosphere. The group is suitable for both beginners and those who already have experience. Children can join the group at any time.',
        forWhom: [
          'Children aged 10-13',
          'Beginners and more experienced practitioners',
        ],
        gearNote: '',
      },
    },
  },
  {
    id: 'kickboxing-dzieci-6-13',
    level: 'dzieci',
    durationMin: 55,
    gear: ['sports-shirt', 'shorts-no-pockets', 'boxing-gloves', 'shin-guards'],
    icons: { type: 'Zap', duration: 'Clock', gear: 'Package' },
    copy: {
      pl: {
        name: 'Kickboxing dla dzieci',
        teaser: 'Treningi stworzone z myślą o dzieciach, które chcą rozwijać sprawność, koordynację i pewność siebie poprzez kickboxing.',
        description: 'Podstawy kickboxingu dostosowane do wieku, nauka poruszania się, ciosów i kopnięć oraz ćwiczenia z partnerem. Treningi prowadzone są w bezpiecznej i kontrolowanej formie - bez ciosów w głowę i bez sparingów. Zajęcia są odpowiednie zarówno dla dzieci, które dopiero zaczynają, jak i tych, które mają już doświadczenie. Można dołączyć do grupy w każdej chwili.',
        forWhom: [
          'Dzieci w wieku 6-13 lat',
          'Początkujący oraz bardziej zaawansowani',
        ],
        gearNote: 'Na pierwsze treningi nie potrzebujesz żadnego sprzętu - pożyczymy Ci go na miejscu :)',
      },
      en: {
        name: 'Kickboxing for Kids',
        teaser: 'Training designed for children who want to develop fitness, coordination, and confidence through kickboxing.',
        description: 'Age-appropriate kickboxing fundamentals: movement, punches, kicks, and partner exercises. Training is conducted in a safe and controlled format - with no strikes to the head and no sparring. The class is suitable for both children who are just starting and those who already have experience. Children can join the group at any time.',
        forWhom: [
          'Children aged 6-13',
          'Beginners and more experienced participants',
        ],
        gearNote: "You don't need any equipment for your first sessions - we'll lend it to you on site :)",
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
