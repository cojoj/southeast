import type { Localized } from '../types';

type SummerCampIcon = 'CalendarClock' | 'Dumbbell' | 'Sparkles' | 'Utensils' | 'Ticket' | 'Users';

type SummerCampContent = {
  promoChip: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    contactCta: string;
  };
  facts: Array<{
    label: string;
    value: string;
  }>;
  included: {
    heading: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      icon: SummerCampIcon;
    }>;
    attractionsHeading: string;
    attractions: string[];
  };
  schedule: {
    heading: string;
    intro: string;
    turnuses: Array<{
      label: string;
      date: string;
    }>;
    dayHeading: string;
    dayPlan: Array<{
      time: string;
      title: string;
      description: string;
    }>;
    note: string;
  };
  pricing: {
    heading: string;
    intro: string;
    expiredIntro: string;
    earlyDeadline: string;
    earlyLabel: string;
    laterLabel: string;
    currentLabel: string;
    cards: Array<{
      title: string;
      subtitle: string;
      rows: Array<{
        audience: string;
        early: string;
        later: string;
      }>;
    }>;
    siblingDiscount: string;
  };
  trust: {
    heading: string;
    intro: string;
    points: string[];
    contactHeading: string;
    formLanguageNote?: string;
  };
  poster: {
    alt: string;
    caption: string;
  };
};

export const summerCampSignupUrl = 'https://docs.google.com/forms/d/1HK_EqzJaDCVfEeneMyMVFO0jfNhvkLNJNc9N6F4J86k/viewform';

export const summerCamp = {
  pl: {
    promoChip: 'Półkolonie dla dzieci 2026: 13-17.07 i 17-21.08',
    hero: {
      eyebrow: 'Southeast Jiu-Jitsu | Lato 2026',
      title: 'Aktywne półkolonie sportowe',
      lead: 'Dla dzieci 5-13 lat: pełne dni ruchu, treningów Jiu-Jitsu i atrakcji w Krakowie, z opieką od 8:00 do 16:00. Dzieci wracają do domu każdego popołudnia.',
      primaryCta: 'Zapisz dziecko',
      contactCta: 'Porozmawiaj z nami',
    },
    facts: [
      { label: 'Wiek', value: '5-13 lat' },
      { label: 'Terminy', value: '13-17.07 i 17-21.08' },
      { label: 'Opieka', value: '8:00-16:00' },
      { label: 'Limit', value: '20 osób / turnus' },
    ],
    included: {
      heading: 'Co jest w cenie?',
      intro: 'Program jest aktywny, ale uporządkowany: dzieci zaczynają dzień w klubie, mają główną atrakcję dnia i wracają na odbiór do Southeast.',
      items: [
        { title: 'Codzienny trening Jiu-Jitsu', description: 'Ruch, gry zadaniowe i bezpieczna praca na macie.', icon: 'Dumbbell' },
        { title: 'Codziennie nowa atrakcja', description: 'Wyjścia lub warsztaty dopasowane do wieku grupy.', icon: 'Sparkles' },
        { title: 'Pełne wyżywienie', description: 'Obiad, woda i przekąska w ciągu dnia.', icon: 'Utensils' },
        { title: 'Wejścia i transport', description: 'Organizacja wejść oraz przejazdów jest po naszej stronie.', icon: 'Ticket' },
        { title: 'Małe grupy', description: 'Limit miejsc pomaga utrzymać dobrą opiekę i spokojną organizację.', icon: 'Users' },
        { title: 'Aktywny program', description: 'Gry, zabawy, zawody i nagrody bez nudy między atrakcjami.', icon: 'CalendarClock' },
      ],
      attractionsHeading: 'W programie m.in.',
      attractions: ['Pixel XL', 'Park trampolin', 'Ścianka wspinaczkowa', 'Robotyka', 'Warsztaty czekolady'],
    },
    schedule: {
      heading: 'Terminy i plan dnia',
      intro: 'Każdy turnus trwa od poniedziałku do piątku. Szczegółowy plan atrakcji opublikujemy kilka dni przed rozpoczęciem turnusu.',
      turnuses: [
        { label: 'Turnus 1', date: '13-17 lipca 2026' },
        { label: 'Turnus 2', date: '17-21 sierpnia 2026' },
      ],
      dayHeading: 'Wstępny zarys dnia',
      dayPlan: [
        { time: '8:00-10:00', title: 'Trening Jiu-Jitsu i zabawy', description: 'Dzień zaczynamy ruchem, a blok kończymy przekąską.' },
        { time: '10:00-15:00', title: 'Atrakcja główna i obiad', description: 'Wyjście lub warsztaty oraz posiłek w środku dnia.' },
        { time: '15:30-16:00', title: 'Powrót do klubu i odbiór', description: 'Gry, spokojniejsze zabawy i odbiór przez rodziców.' },
      ],
      note: 'Opieka jest zapewniona od 8:00 do 16:00.',
    },
    pricing: {
      heading: 'Cennik',
      intro: 'Ceny dotyczą jednego dziecka. Wczesna cena obowiązuje przy rezerwacji do 31 maja 2026.',
      expiredIntro: 'Ceny dotyczą jednego dziecka. Wczesna cena obowiązywała przy rezerwacji do 31 maja 2026.',
      earlyDeadline: '2026-05-31',
      earlyLabel: 'Do 31.05',
      laterLabel: 'Po 31.05',
      currentLabel: 'Cena',
      cards: [
        {
          title: 'Jeden turnus',
          subtitle: '13-17.07 lub 17-21.08',
          rows: [
            { audience: 'Klubowicze', early: '1099 zł', later: '1199 zł' },
            { audience: 'Spoza klubu', early: '1249 zł', later: '1349 zł' },
          ],
        },
        {
          title: 'Dwa turnusy',
          subtitle: '13-17.07 oraz 17-21.08',
          rows: [
            { audience: 'Klubowicze', early: '1899 zł', later: '1999 zł' },
            { audience: 'Spoza klubu', early: '2099 zł', later: '2199 zł' },
          ],
        },
      ],
      siblingDiscount: 'Zniżka dla rodzeństwa: -100 zł / turnus.',
    },
    trust: {
      heading: 'Informacje dla rodziców',
      intro: 'Półkolonie są organizowane przez Southeast Jiu-Jitsu przy ul. Saska 12F/6U w Krakowie.',
      points: [
        'Półkolonie są zgłoszone do kuratorium.',
        'Na miejscu będzie obecnych 2 wychowawców z odpowiednim doświadczeniem i uprawnieniami.',
        'Obowiązuje limit 20 osób na każdy turnus.',
      ],
      contactHeading: 'Masz pytania przed zapisem?',
      formLanguageNote: '',
    },
    poster: {
      alt: 'Plakat aktywnych półkolonii sportowych Southeast Jiu-Jitsu z terminami turnusów',
      caption: 'Plakat kampanii. Pełne informacje i zapisy są dostępne na tej stronie.',
    },
  },
  en: {
    promoChip: 'Kids summer day camp 2026: Jul 13-17 and Aug 17-21',
    hero: {
      eyebrow: 'Southeast Jiu-Jitsu | Summer 2026',
      title: 'Active sports summer day camp',
      lead: 'For children ages 5-13: full days of movement, Jiu-Jitsu training and Krakow activities, with care from 8:00 to 16:00. Children return home every afternoon.',
      primaryCta: 'Sign up',
      contactCta: 'Talk to us',
    },
    facts: [
      { label: 'Age', value: '5-13' },
      { label: 'Dates', value: 'Jul 13-17 and Aug 17-21' },
      { label: 'Care', value: '8:00-16:00' },
      { label: 'Limit', value: '20 children / week' },
    ],
    included: {
      heading: 'What is included?',
      intro: 'The program is active but structured: children start the day at the club, head out for the main activity, and return to Southeast for pickup.',
      items: [
        { title: 'Daily Jiu-Jitsu training', description: 'Movement, task-based games and safe mat work.', icon: 'Dumbbell' },
        { title: 'A new activity every day', description: 'Trips or workshops matched to the age of the group.', icon: 'Sparkles' },
        { title: 'Meals included', description: 'Lunch, water and a snack during the day.', icon: 'Utensils' },
        { title: 'Entry fees and transport', description: 'We organize the activity entries and transfers.', icon: 'Ticket' },
        { title: 'Small groups', description: 'A place limit helps keep care attentive and logistics calm.', icon: 'Users' },
        { title: 'Active program', description: 'Games, play, competitions and prizes between activities.', icon: 'CalendarClock' },
      ],
      attractionsHeading: 'Activities include',
      attractions: ['Pixel XL', 'Trampoline park', 'Climbing wall', 'Robotics', 'Chocolate workshops'],
    },
    schedule: {
      heading: 'Dates and daily plan',
      intro: 'Each turnus runs Monday to Friday. We will publish the detailed activity plan a few days before each turnus starts.',
      turnuses: [
        { label: 'Week 1', date: 'July 13-17, 2026' },
        { label: 'Week 2', date: 'August 17-21, 2026' },
      ],
      dayHeading: 'Draft day outline',
      dayPlan: [
        { time: '8:00-10:00', title: 'Jiu-Jitsu training and games', description: 'The day starts with movement and ends this block with a snack.' },
        { time: '10:00-15:00', title: 'Main activity and lunch', description: 'A trip or workshop plus lunch during the middle of the day.' },
        { time: '15:30-16:00', title: 'Return to the club and pickup', description: 'Games, calmer play and parent pickup at Southeast.' },
      ],
      note: 'Care is provided from 8:00 to 16:00.',
    },
    pricing: {
      heading: 'Pricing',
      intro: 'Prices are per child. Early pricing applies when booking by May 31, 2026.',
      expiredIntro: 'Prices are per child. Early pricing applied when booking by May 31, 2026.',
      earlyDeadline: '2026-05-31',
      earlyLabel: 'By May 31',
      laterLabel: 'After May 31',
      currentLabel: 'Price',
      cards: [
        {
          title: 'One camp week',
          subtitle: 'Jul 13-17 or Aug 17-21',
          rows: [
            { audience: 'Club members', early: '1099 zł', later: '1199 zł' },
            { audience: 'Non-members', early: '1249 zł', later: '1349 zł' },
          ],
        },
        {
          title: 'Two camp weeks',
          subtitle: 'Jul 13-17 and Aug 17-21',
          rows: [
            { audience: 'Club members', early: '1899 zł', later: '1999 zł' },
            { audience: 'Non-members', early: '2099 zł', later: '2199 zł' },
          ],
        },
      ],
      siblingDiscount: 'Sibling discount: -100 zł per camp week.',
    },
    trust: {
      heading: 'Information for parents',
      intro: 'The summer day camp is organized by Southeast Jiu-Jitsu at ul. Saska 12F/6U in Krakow.',
      points: [
        'The day camp has been reported to the local education authority, Kuratorium.',
        'Two qualified counselors with relevant experience will be present on site.',
        'There is a limit of 20 children for each camp week.',
      ],
      contactHeading: 'Questions before signing up?',
      formLanguageNote: 'The signup form is currently in Polish. If you need help in English, call or email us and we will guide you through it.',
    },
    poster: {
      alt: 'Polish Southeast Jiu-Jitsu active sports summer day camp poster with turnus dates',
      caption: 'Campaign poster in Polish. The full English information is written on this page.',
    },
  },
} satisfies Localized<SummerCampContent>;
