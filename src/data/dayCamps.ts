import type { Localized } from '../types';

type DayCampIcon = 'Dumbbell' | 'ShieldCheck' | 'Sparkles' | 'Users';

type DayCampContent = {
  hero: {
    eyebrow: string;
    status: string;
    title: string;
    lead: string;
  };
  facts: Array<{
    label: string;
    value: string;
  }>;
  preview: {
    heading: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      icon: DayCampIcon;
    }>;
  };
  updates: {
    eyebrow: string;
    heading: string;
    body: string;
    emailCta: string;
    phoneCta: string;
  };
};

export const dayCamps = {
  pl: {
    hero: {
      eyebrow: 'Southeast Jiu-Jitsu | Zima 2027',
      status: 'Szczegóły wkrótce',
      title: 'Zimowe półkolonie nadchodzą',
      lead: 'Przygotowujemy kolejną edycję aktywnych półkolonii dla dzieci w Krakowie. W planie dużo ruchu, Jiu-Jitsu, zabawy i nowych atrakcji. Daty, pełny program i zapisy ogłosimy wkrótce.',
    },
    facts: [
      { label: 'Sezon', value: 'Ferie zimowe 2027' },
      { label: 'Miejsce', value: 'Southeast Jiu-Jitsu, Kraków' },
      { label: 'Program', value: 'Ruch, Jiu-Jitsu i atrakcje' },
      { label: 'Zapisy', value: 'Uruchomimy wkrótce' },
    ],
    preview: {
      heading: 'Co szykujemy?',
      intro: 'Zimowa edycja połączy aktywny wypoczynek z dobrą zabawą. Szczegółowy plan jeszcze dopracowujemy, ale jego najważniejsze założenia już znamy.',
      items: [
        {
          title: 'Aktywne dni',
          description: 'Dużo ruchu, gier i zadań, dzięki którym dzieci spędzą ferie aktywnie.',
          icon: 'Dumbbell',
        },
        {
          title: 'Jiu-Jitsu dla dzieci',
          description: 'Bezpieczna praca na macie dopasowana do wieku i doświadczenia uczestników.',
          icon: 'Users',
        },
        {
          title: 'Nowe atrakcje',
          description: 'Zabawy, wyjścia lub warsztaty, które urozmaicą każdy dzień półkolonii.',
          icon: 'Sparkles',
        },
        {
          title: 'Dobra atmosfera',
          description: 'Wspierające środowisko, w którym liczą się bezpieczeństwo, relacje i radość z ruchu.',
          icon: 'ShieldCheck',
        },
      ],
    },
    updates: {
      eyebrow: 'Bądź na bieżąco',
      heading: 'Chcesz poznać szczegóły jako pierwszy?',
      body: 'Pracujemy nad terminami i pełnym programem zimowej edycji. Napisz lub zadzwoń do nas, jeśli chcesz dowiedzieć się więcej.',
      emailCta: 'Napisz do nas',
      phoneCta: 'Zadzwoń',
    },
  },
  en: {
    hero: {
      eyebrow: 'Southeast Jiu-Jitsu | Winter 2027',
      status: 'Details coming soon',
      title: 'Our winter day camp is coming',
      lead: 'We are preparing the next edition of our active day camp for children in Krakow. Expect plenty of movement, Jiu-Jitsu, play, and new activities. Dates, the full program, and registration details will be announced soon.',
    },
    facts: [
      { label: 'Season', value: 'Winter school holidays 2027' },
      { label: 'Location', value: 'Southeast Jiu-Jitsu, Krakow' },
      { label: 'Program', value: 'Movement, Jiu-Jitsu, and activities' },
      { label: 'Registration', value: 'Opening soon' },
    ],
    preview: {
      heading: 'What are we planning?',
      intro: 'Our winter edition will combine active days with plenty of fun. We are still shaping the detailed schedule, but its most important ingredients are already clear.',
      items: [
        {
          title: 'Active days',
          description: 'Plenty of movement, games, and challenges to keep children active during the school break.',
          icon: 'Dumbbell',
        },
        {
          title: 'Jiu-Jitsu for kids',
          description: 'Safe mat activities adapted to each participant’s age and experience.',
          icon: 'Users',
        },
        {
          title: 'New activities',
          description: 'Games, trips, or workshops that will make every day of the camp feel different.',
          icon: 'Sparkles',
        },
        {
          title: 'A supportive atmosphere',
          description: 'A welcoming environment focused on safety, friendships, and the joy of movement.',
          icon: 'ShieldCheck',
        },
      ],
    },
    updates: {
      eyebrow: 'Stay in the loop',
      heading: 'Want to hear the details first?',
      body: 'We are working on the dates and full program for the winter edition. Email or call us if you would like to learn more.',
      emailCta: 'Email us',
      phoneCta: 'Call us',
    },
  },
} satisfies Localized<DayCampContent>;
