import type { Localized, PageKey } from '../types';

export const site = {
  name: 'Southeast Jiu-Jitsu',
  url: 'https://southeastjj.pl',
  defaultOgImage: '/og-image.jpg',
  metaPixel: {
    id: '1015715761125913',
  },
  address: {
    street: 'ul. Saska 12F/6U',
    postalCity: '30-720 Kraków',
    mapQuery: 'Southeast+Jiu-Jitsu,+ul.+Saska+12F/6U,+Kraków,+Poland',
  },
  contact: {
    phone: '+48 502 680 950',
    phoneHref: 'tel:+48502680950',
    email: 'southeast.jiujitsu@gmail.com',
    emailHref: 'mailto:southeast.jiujitsu@gmail.com',
  },
  wodGuru: {
    registration: 'https://southeastjiujitsu.wod.guru/rejestracja',
    memberships: 'https://southeastjiujitsu.wod.guru/wizytowka',
    shop: 'https://southeastjiujitsu.wod.guru/produkty',
    schedule: 'https://southeastjiujitsu.wod.guru/classes',
    account: 'https://southeastjiujitsu.wod.guru/user/login',
    subdomain: 'southeastjiujitsu',
  },
  social: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/southeast.jiujitsu/',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61570579595150',
    },
  ],
} as const;

export const routes = {
  home: { pl: '/', en: '/en/' },
  summerCamp: { pl: '/polkolonie/', en: '/en/summer-camp/' },
  about: { pl: '/o-nas/', en: '/en/about/' },
  training: { pl: '/treningi/', en: '/en/training/' },
  schedule: { pl: '/harmonogram/', en: '/en/schedule/' },
} satisfies Record<PageKey, Localized<string>>;

export const pageMeta = {
  home: {
    pl: {
      title: 'Southeast Jiu-Jitsu',
      description: 'Southeast Jiu-Jitsu - Brazylijskie Jiu-Jitsu w Krakowie. Treningi dla wszystkich poziomów zaawansowania.',
      bodyClass: 'bg-additional',
    },
    en: {
      title: 'Southeast Jiu-Jitsu',
      description: 'Southeast Jiu-Jitsu - Brazilian Jiu-Jitsu in Krakow, Poland. Training for all skill levels.',
      bodyClass: 'bg-additional',
    },
  },
  summerCamp: {
    pl: {
      title: 'Półkolonie sportowe dla dzieci - Southeast Jiu-Jitsu',
      description: 'Aktywne półkolonie sportowe dla dzieci 5-13 lat w Krakowie. Treningi Jiu-Jitsu, codzienne atrakcje, wyżywienie i opieka 8:00-16:00.',
      bodyClass: 'bg-additional',
      ogImage: '/summer-camp-poster.jpg',
    },
    en: {
      title: 'Summer Day Camp for Kids - Southeast Jiu-Jitsu',
      description: 'Active sports summer day camp for children ages 5-13 in Krakow. Jiu-Jitsu training, daily activities, meals and care from 8:00 to 16:00.',
      bodyClass: 'bg-additional',
      ogImage: '/summer-camp-poster.jpg',
    },
  },
  about: {
    pl: {
      title: 'O nas - Southeast Jiu-Jitsu | Krakow',
      description: 'Poznaj Southeast Jiu-Jitsu w Krakowie - naszych trenerów, innowacyjne metody treningowe i społeczność pasjonatów sportów walki. Treningi dla wszystkich poziomów zaawansowania.',
      bodyClass: 'bg-additional',
      ogImage: '/training-session.jpg',
    },
    en: {
      title: 'About Us - Southeast Jiu-Jitsu | Krakow',
      description: 'Learn about Southeast Jiu-Jitsu in Krakow - our trainers, innovative training methods, and community of martial arts enthusiasts. Training for all skill levels.',
      bodyClass: 'bg-additional',
      ogImage: '/training-session.jpg',
    },
  },
  training: {
    pl: {
      title: 'Treningi - Southeast Jiu-Jitsu',
      description: 'Poznaj naszą pełną ofertę treningów: Jiu-Jitsu, MMA, Kickboxing. Zajęcia dla wszystkich poziomów - od podstaw po zaawansowane. Zapisz się na darmowy trening próbny.',
      bodyClass: 'bg-se',
    },
    en: {
      title: 'Training - Southeast Jiu-Jitsu',
      description: 'Discover our complete training offering: Jiu-Jitsu, MMA, Kickboxing. Classes for all levels - from fundamentals to advanced. Sign up for a free trial.',
      bodyClass: 'bg-se',
    },
  },
  schedule: {
    pl: {
      title: 'Harmonogram - Southeast Jiu-Jitsu',
      description: 'Harmonogram zajęć Southeast Jiu-Jitsu w Krakowie. Sprawdź godziny treningów Jiu-Jitsu, MMA i Kickboxing.',
      bodyClass: 'bg-additional',
    },
    en: {
      title: 'Schedule - Southeast Jiu-Jitsu',
      description: 'Southeast Jiu-Jitsu class schedule in Krakow. Check training times for Jiu-Jitsu, MMA and Kickboxing.',
      bodyClass: 'bg-additional',
    },
  },
} satisfies Record<PageKey, Localized<{
  title: string;
  description: string;
  bodyClass: string;
  ogImage?: string;
}>>;

export const nav = [
  {
    page: 'summerCamp',
    label: { pl: 'PÓŁKOLONIE', en: 'SUMMER CAMP' },
    seasonal: true,
  },
  {
    page: 'about',
    label: { pl: 'O NAS', en: 'ABOUT' },
    children: [
      { href: { pl: '/o-nas/#why-us', en: '/en/about/#why-us' }, label: { pl: 'Dlaczego my', en: 'Why us' } },
      { href: { pl: '/o-nas/#trainers', en: '/en/about/#trainers' }, label: { pl: 'Trenerzy', en: 'Trainers' } },
    ],
  },
  {
    page: 'training',
    label: { pl: 'TRENINGI', en: 'TRAINING' },
    children: [
      { href: { pl: '/treningi/#adult-training', en: '/en/training/#adult-training' }, label: { pl: 'Treningi dla dorosłych', en: 'Adult Training' } },
      { href: { pl: '/treningi/#kids-training', en: '/en/training/#kids-training' }, label: { pl: 'Treningi dla dzieci', en: 'Kids Training' } },
      { href: { pl: '/treningi/#private-training', en: '/en/training/#private-training' }, label: { pl: 'Trening personalny', en: 'Personal Training' } },
      { href: { pl: '/treningi/#cla', en: '/en/training/#cla' }, label: { pl: 'Metody treningowe', en: 'Training Methods' } },
    ],
  },
  {
    page: 'schedule',
    label: { pl: 'HARMONOGRAM', en: 'SCHEDULE' },
  },
] satisfies Array<{
  page: Exclude<PageKey, 'home'>;
  label: Localized<string>;
  children?: Array<{ href: Localized<string>; label: Localized<string> }>;
  seasonal?: boolean;
}>;

export const externalNav = [
  { href: site.wodGuru.memberships, label: { pl: 'KARNETY', en: 'MEMBERSHIPS' } },
  { href: site.wodGuru.shop, label: { pl: 'SKLEP', en: 'SHOP' } },
  { href: site.wodGuru.account, label: { pl: 'MOJE KONTO', en: 'MY ACCOUNT' } },
] satisfies Array<{ href: string; label: Localized<string> }>;

export const homeHero = {
  pl: {
    title: 'Brazylijskie Jiu-Jitsu w Krakowie',
    description: 'Poznaj nasze innowacyjne metody treningowe i trenuj Jiu-Jitsu, MMA i Kickboxing pod okiem trenerów z wieloletnim doświadczeniem!',
    primaryCta: 'Pierwszy darmowy trening',
    secondaryCta: 'Kup karnet',
  },
  en: {
    title: 'Brazilian Jiu-Jitsu in Krakow',
    description: 'Discover our innovative training methods and train Jiu-Jitsu, MMA and Kickboxing under experienced trainers!',
    primaryCta: 'First free training',
    secondaryCta: 'Buy membership',
  },
} satisfies Localized<{ title: string; description: string; primaryCta: string; secondaryCta: string }>;

export const heroContent = {
  about: {
    pl: {
      title: 'O NAS',
      subtitle: 'Miejsce stworzone dla pasjonatów sportów walki - bez względu na wiek, doświadczenie i cel.',
    },
    en: {
      title: 'ABOUT US',
      subtitle: 'A place created for martial arts enthusiasts - regardless of age, experience, and goals.',
    },
  },
  training: {
    pl: {
      title: 'TRENINGI',
      subtitle: 'Znajdź swój styl walki w naszej różnorodnej ofercie zajęć',
    },
    en: {
      title: 'TRAINING',
      subtitle: 'Find your fighting style in our diverse class offerings',
    },
  },
} satisfies Record<'about' | 'training', Localized<{ title: string; subtitle: string }>>;

export const scheduleContent = {
  pl: {
    heading: 'HARMONOGRAM',
    description: 'Sprawdź aktualne godziny zajęć i wybierz trening dla siebie.',
    loading: 'Ładujemy aktualny harmonogram zajęć...',
    fallbackHeading: 'Harmonogram chwilowo się nie załadował',
    fallbackDescription: 'Możesz otworzyć grafik bezpośrednio w WodGuru albo skontaktować się z nami, jeśli chcesz dobrać pierwszy trening.',
    scheduleCta: 'Otwórz grafik w WodGuru',
    membershipCta: 'Sprawdź karnety',
    contactCta: 'Napisz do nas',
  },
  en: {
    heading: 'SCHEDULE',
    description: 'Check current class times and choose the right training session.',
    loading: 'Loading the current class schedule...',
    fallbackHeading: 'The schedule did not load',
    fallbackDescription: 'You can open the timetable directly in WodGuru or contact us if you want help choosing your first session.',
    scheduleCta: 'Open schedule in WodGuru',
    membershipCta: 'Check memberships',
    contactCta: 'Email us',
  },
} satisfies Localized<{
  heading: string;
  description: string;
  loading: string;
  fallbackHeading: string;
  fallbackDescription: string;
  scheduleCta: string;
  membershipCta: string;
  contactCta: string;
}>;

export const marketingOverview = {
  pl: {
    headline: 'Dlaczego Southeast Jiu-Jitsu to najlepszy wybór dla Twojego rozwoju?',
    mainCopy: 'W Southeast Jiu-Jitsu nie tracisz czasu na nudne powtarzanie technik. Od pierwszego treningu wchodzisz w akcję dzięki naszej innowacyjnej metodzie <u>Constraint-Led Approach (CLA)</u>.',
    cta: 'Stań się lepszą wersją siebie',
    points: [
      { title: 'Nauka przez praktykę', description: 'trenujemy przeciwko oporującemu przeciwnikowi, nie na manekinie' },
      { title: 'Indywidualne podejście', description: 'małe grupy, maksymalna uwaga dla każdego uczestnika' },
      { title: 'Systematyczny plan rozwoju', description: 'każdy trening ma swój cel i miejsce w Twoim postępie' },
      { title: 'Szybkie rezultaty', description: 'nasza metoda gwarantuje efektywny rozwój umiejętności i kondycji' },
    ],
  },
  en: {
    headline: 'Why Southeast Jiu-Jitsu is the best choice for your development?',
    mainCopy: "At Southeast Jiu-Jitsu, you don't waste time on boring repetitive drills. From your very first training session, you experience non-stop action thanks to our innovative <u>Constraint-Led Approach (CLA)</u>.",
    cta: 'Start your journey',
    points: [
      { title: 'Learn through practice', description: 'we train against resisting opponents, not static dummies' },
      { title: 'Individual approach', description: 'small groups ensure maximum attention for every participant' },
      { title: 'Systematic development plan', description: 'every training session has its purpose in your progress' },
      { title: 'Rapid results', description: 'our methodology guarantees effective skill and fitness development' },
    ],
  },
} satisfies Localized<{
  headline: string;
  mainCopy: string;
  cta: string;
  points: Array<{ title: string; description: string }>;
}>;

export const aboutIntro = {
  pl: {
    heading: 'Kim jesteśmy?',
    description: 'Southeast Jiu-Jitsu to miejsce stworzone dla wszystkich pasjonatów sportów walki. Specjalizujemy się w No-Gi Jiu-Jitsu, MMA oraz Kickboxingu, oferujemy treningi dostosowane do różnych poziomów zaawansowania - zarówno dla początkujących, jak i bardziej zaawansowanych - każdy znajdzie coś dla siebie!',
    philosophy: 'Naszym priorytetem jest bezpieczne i przyjazne środowisko treningowe, w którym każdy, niezależnie od płci, wieku czy doświadczenia, może rozwijać swoje umiejętności i stać się częścią naszej społeczności.',
  },
  en: {
    heading: 'Who are we?',
    description: 'Southeast Jiu-Jitsu is a place created for all martial arts enthusiasts. We specialize in No-Gi Jiu-Jitsu, MMA, and Kickboxing, offering training adapted to different skill levels - both for beginners and more advanced practitioners - everyone will find something for themselves!',
    philosophy: 'Our priority is a safe and friendly training environment where everyone, regardless of gender, age, or experience, can develop their skills and become part of our community.',
  },
} satisfies Localized<{ heading: string; description: string; philosophy: string }>;

export const features = {
  pl: {
    heading: 'Co wyróżnia Southeast Jiu-Jitsu?',
    items: [
      { title: 'Indywidualne podejście', description: 'Treningi odbywają się w małych grupach, co pozwala nam skupić się na każdym uczestniku. Dzięki temu nasi trenerzy mogą dostosować poziom zajęć do Twoich umiejętności i celów treningowych.', icon: 'user-check' },
      { title: 'Usystematyzowany plan treningowy', description: 'Nasze zajęcia prowadzone są według stworzonego przez naszych trenerów i aktualizowanego na bieżąco planu, który krok po kroku pozwala rozwijać wasze umiejętności w danym sporcie. Każda sesja jest starannie zaplanowana, aby zapewnić optymalny rozwój zarówno dla początkujących, jak i zaawansowanych zawodników.', icon: 'list-checks' },
      { title: 'Innowacyjne metody treningowe', description: 'W Southeast Jiu-Jitsu w treningu nie wykorzystujemy statycznego powtarzania technik na nieoporującym przeciwniku. Stawiamy na naukę poprzez praktykę - w naszych treningach główną rolę odgrywają gry zadaniowe wykonywane na oporującym przeciwniku. Dzięki temu szybciej rozwijasz swoje umiejętności i uczysz się adaptacji do dynamicznych sytuacji występujących w walce.', icon: 'lightbulb' },
      { title: 'Efektywne i intensywne treningi', description: 'Nasze metody gwarantują szybkie postępy oraz poprawę kondycji fizycznej. Każdy trening jest dynamiczny i angażujący, co pozwala rozwijać siłę, wytrzymałość oraz niezbędną koordynację ruchową.', icon: 'activity' },
      { title: 'Treningi dla każdego', description: 'Niezależnie od tego, czy trenujesz rekreacyjnie, czy przygotowujesz się do zawodów, pomożemy Ci osiągnąć Twoje cele. Wspieramy zarówno osoby, które chcą poprawić swoją sprawność, jak i tych, którzy dążą do sukcesów na zawodach.', icon: 'users' },
    ],
  },
  en: {
    heading: 'What makes Southeast Jiu-Jitsu special?',
    items: [
      { title: 'Individual approach', description: 'Training takes place in small groups, allowing us to focus on each participant. This way, our trainers can adapt the level of classes to your skills and training goals.', icon: 'user-check' },
      { title: 'Systematic training plan', description: 'Our classes are conducted according to a plan created by our trainers and continuously updated, which step by step allows you to develop your skills in a given sport. Each session is carefully planned to ensure optimal development for both beginners and advanced athletes.', icon: 'list-checks' },
      { title: 'Innovative training methods', description: "At Southeast Jiu-Jitsu, we don't use static repetition of techniques on non-resisting opponents. We focus on learning through practice - in our training, the main role is played by task-based games performed against resisting opponents. This way, you develop your skills faster and learn to adapt to dynamic situations occurring in combat.", icon: 'lightbulb' },
      { title: 'Effective and intensive training', description: 'Our methods guarantee rapid progress and improvement in physical fitness. Every training session is dynamic and engaging, allowing you to develop strength, endurance, and necessary motor coordination.', icon: 'activity' },
      { title: 'Training for everyone', description: 'Whether you train recreationally or are preparing for competitions, we will help you achieve your goals. We support both people who want to improve their fitness and those who strive for success in competitions.', icon: 'users' },
    ],
  },
} satisfies Localized<{
  heading: string;
  items: Array<{ title: string; description: string; icon: string }>;
}>;

export const trainers = {
  pl: {
    heading: 'Trenerzy',
    items: [
      {
        name: 'Mateusz Flaga',
        role: 'Założyciel i Główny Trener',
        bio: 'Mateusz to doświadczony trener i aktywny zawodnik Jiu-Jitsu, posiadający czarny pas 1 stopnia. Swoją przygodę ze sportami walki rozpoczął w 2012 roku, a przez dwa lata trenował także MMA. Od ponad 9 lat prowadzi treningi, stale doskonaląc swoje metody nauczania, aby zapewnić swoim podopiecznym jak najszybsze i najskuteczniejsze postępy. Na swoich zajęciach kładzie duży nacisk na zaangażowanie trenujących i indywidualne podejście do każdego. Dba o to, aby atmosfera na treningach sprzyjała zarówno intensywnej pracy, jak i komfortowi uczestników. Mateusz to wielokrotny Mistrz Polski, medalista Mistrzostw Europy oraz zwycięzca wielu prestiżowych turniejów na arenie krajowej i międzynarodowej.',
        image: '/mateusz.png',
        isFounder: true,
      },
      {
        name: 'Maciek Janicki',
        role: 'Trener Kickboxingu i MMA',
        bio: 'Maciek to trener Kickboxingu oraz MMA w Southeast Jiu-Jitsu. Swoją przygodę ze sportami walki rozpoczął w 2018 roku. Przez lata doskonalił swoje umiejętności w boksie, kickboxingu i MMA, a od ponad roku rozwija się również w Jiu-Jitsu. Od 4 lat prowadzi treningi Kickboxingu i MMA, wykorzystując nowoczesne metody treningowe, które pozwalają jego podopiecznym osiągać szybkie postępy. Stawia na przyjazną i bezpieczną atmosferę, dzięki czemu każdy, niezależnie od poziomu zaawansowania, może rozwijać swoje umiejętności w komfortowych warunkach.',
        image: '/maciek_janicki.png',
      },
      {
        name: 'Maciek Bąk',
        role: 'Trener grup dziecięcych',
        bio: 'Maciek to trener grup dziecięcych w Southeast Jiu-Jitsu. Zaczynał przygodę ze sportami walki jako dziecko trenując judo, obecnie aktywny zawodnik i pasjonat Jiu-Jitsu oraz MMA. Od około trzech lat prowadzi treningi dla najmłodszych, dbając o bezpieczeństwo, rozwój techniczny i świetną zabawę. Dzięki doświadczeniu i pozytywnej energii potrafi zarazić dzieci pasją do sportów walki i zachęcić je do dalszego rozwoju na macie.',
        image: '/maciek_bak.png',
      },
      {
        name: 'Wiktoria Kolińska',
        role: 'Trenerka grup dziecięcych',
        bio: 'Wiktoria to purpurowy pas w Jiu-Jitsu z 10 letnim doświadczeniem w sportach walki. Dla Wiktorii BJJ to nie tylko sport, ale także sposób na życie - uczy pewności siebie, cierpliwości i radzenia sobie z wyzwaniami. Swoją przygodę z BJJ zaczynała w młodości, dlatego doskonale rozumie potrzeby najmłodszych. Posiada trzy lata doświadczenia w prowadzeniu zajęć dla dzieci oraz pracy jako trenerka i wychowawczyni na obozach sportowych. Tworzy atmosferę, w której dzieci zyskują pewność siebie, rozwijają swoje umiejętności i czerpią radość z każdego treningu.',
        image: '/wiktoria.png',
      },
    ],
  },
  en: {
    heading: 'Trainers',
    items: [
      {
        name: 'Mateusz Flaga',
        role: 'Founder and Head Trainer',
        bio: 'Mateusz is an experienced trainer and active Jiu-Jitsu competitor, holding a 1st degree black belt. He began his martial arts journey in 2012 and also trained MMA for two years. He has been teaching for over 9 years, constantly improving his teaching methods to provide his students with the fastest and most effective progress. In his classes, he places great emphasis on student engagement and individual approach to everyone. He ensures that the training atmosphere supports both intensive work and participant comfort. Mateusz is a multiple Polish Champion, European Championship medalist, and winner of many prestigious tournaments on the national and international stage.',
        image: '/mateusz.png',
        isFounder: true,
      },
      {
        name: 'Maciek Janicki',
        role: 'Kickboxing and MMA Trainer',
        bio: 'Maciek is a Kickboxing and MMA trainer at Southeast Jiu-Jitsu. He began his martial arts journey in 2018. Over the years, he perfected his skills in boxing, kickboxing, and MMA, and for over a year has also been developing in Jiu-Jitsu. He has been leading Kickboxing and MMA training for 4 years, using modern training methods that allow his students to achieve rapid progress. He focuses on a friendly and safe atmosphere, so everyone, regardless of their skill level, can develop their abilities in comfortable conditions.',
        image: '/maciek_janicki.png',
      },
      {
        name: 'Maciek Bąk',
        role: 'Kids Groups Trainer',
        bio: "Maciek is a children's trainer at Southeast Jiu-Jitsu. He started his martial arts journey as a child training judo, and is currently an active competitor and enthusiast of Jiu-Jitsu and MMA. He has been leading training for the youngest for about three years, taking care of safety, technical development, and great fun. Thanks to his experience and positive energy, he can infect children with a passion for martial arts and encourage them to further develop on the mat.",
        image: '/maciek_bak.png',
      },
      {
        name: 'Wiktoria Kolińska',
        role: 'Kids Groups Trainer',
        bio: 'Wiktoria is a purple belt in Jiu-Jitsu with 10 years of experience in martial arts. For Wiktoria, BJJ is not just a sport, but also a way of life - it teaches self-confidence, patience, and dealing with challenges. She started her BJJ journey in her youth, which is why she perfectly understands the needs of the youngest ones. She has three years of experience leading classes for children and working as a trainer and counselor at sports camps. She creates an atmosphere where children gain confidence, develop their skills, and enjoy every training session.',
        image: '/wiktoria.png',
      },
    ],
  },
} satisfies Localized<{
  heading: string;
  items: Array<{ name: string; role: string; bio: string; image: string; isFounder?: boolean }>;
}>;

export const privateTraining = {
  pl: {
    title: 'Treningi Personalne',
    description: 'Chcesz szybciej robić postępy, skupić się na konkretnych technikach lub dopasować trening do swojego grafiku?',
    details: 'Nasi trenerzy prowadzą indywidualne zajęcia oraz treningi w kameralnych grupach - idealne, jeśli cenisz sobie personalne podejście.',
    cta: 'Zainteresowany? Napisz do nas:',
  },
  en: {
    title: 'Personal Training',
    description: 'Want to progress faster, focus on specific techniques or adapt training to your schedule?',
    details: 'Our trainers conduct individual sessions and small group training - perfect if you value a personal approach.',
    cta: 'Interested? Write to us:',
  },
} satisfies Localized<{ title: string; description: string; details: string; cta: string }>;

export const claSection = {
  pl: {
    title: 'Metoda treningowa',
    sections: [
      { question: 'Czym jest Constraints-Led Approach?', answer: 'Nowoczesne podejście do treningu, które wykorzystuje walki zadaniowe z odpowiednio dobranymi ograniczeniami do nauki umiejętności. Trenujący zamiast powtarzania "idealnej techniki" w izolacji, uczy się w środowisku najbardziej zbliżonym do walki.' },
      { question: 'Co to w praktyce oznacza dla Ciebie?', bullets: ['Szybsze przyswajanie umiejętności, bo zamiast suchego powtarzania technik, od razu uczysz się dostosowywać do zmieniających się warunków w walce', 'Więcej zabawy i zaangażowania na treningu, bo uczysz się poprzez zadania i wyzwania', 'Większą pewność siebie, bo trening odzwierciedla realne środowisko walki'] },
      { question: 'Co daje CLA w sportach walki?', bullets: ['Trening w realnych warunkach walki z oporującym przeciwnikiem', 'Nauka szybkiego reagowania i rozwiązywania problemów w dynamicznie zmieniającym się środowisku walki', 'Przestrzeń do tworzenia własnego stylu walki opartego na doświadczeniach', 'Promuje kreatywność i indywidualność', 'Lepszą i szybszą adaptację do zmieniających się warunków walki i stylów przeciwników'] },
      { question: 'Na czym polega?', answer: 'Trening opiera się na walkach zadaniowych z odpowiednio dobranymi ograniczeniami - zmiana przestrzeni, zasad czy tempa - by nauczyć Cię adaptacji do dynamicznego środowiska walki.' },
    ],
  },
  en: {
    title: 'Training Method',
    sections: [
      { question: 'What is Constraints-Led Approach?', answer: 'A modern training approach that uses task-based sparring with carefully selected constraints to develop skills. Instead of drilling "perfect technique" in isolation, you learn in an environment that most closely resembles real combat.' },
      { question: 'What does this mean for you in practice?', bullets: ['Faster skill acquisition, because instead of dry technique repetition, you immediately learn to adapt to changing combat conditions', 'More fun and engagement in training, because you learn through tasks and challenges', 'Greater confidence, because training reflects the real combat environment'] },
      { question: 'What does CLA bring to combat sports?', bullets: ['Training in real combat conditions with a resisting opponent', 'Learning quick reactions and problem-solving in a dynamically changing combat environment', 'Space to create your own fighting style based on experience', 'Promotes creativity and individuality', 'Better and faster adaptation to changing combat conditions and opponent styles'] },
      { question: 'What does it involve?', answer: 'Training is based on task-based sparring with carefully selected constraints - changing space, rules, or pace - to teach you adaptation to the dynamic combat environment.' },
    ],
  },
} satisfies Localized<{
  title: string;
  sections: Array<{ question: string; answer?: string; bullets?: string[] }>;
}>;

export const community = {
  default: {
    pl: {
      heading: 'Dołącz do Southeast Jiu-Jitsu',
      description: 'Oferujemy zajęcia dla dzieci i dorosłych przez 6 dni w tygodniu o różnych porach dnia, aby każdy mógł znaleźć czas na trening.',
      primary: 'Pierwszy darmowy trening',
      secondary: 'Sprawdź harmonogram',
    },
    en: {
      heading: 'Join Southeast Jiu-Jitsu',
      description: 'We offer classes for children and adults 6 days a week at different times of the day, so everyone can find time to train.',
      primary: 'First free training',
      secondary: 'Check schedule',
    },
  },
  training: {
    pl: {
      heading: 'Dołącz do nas!',
      description: 'Poznaj nasze innowacyjne metody treningowe i trenuj Jiu-Jitsu, MMA i Kickboxing pod okiem trenerów z wieloletnim doświadczeniem!',
      primary: 'Pierwszy darmowy trening',
      secondary: 'Kup karnet',
    },
    en: {
      heading: 'Join us!',
      description: 'Discover our innovative training methods and train Jiu-Jitsu, MMA and Kickboxing under experienced coaches!',
      primary: 'First free training',
      secondary: 'Buy membership',
    },
  },
} satisfies Record<'default' | 'training', Localized<{
  heading: string;
  description: string;
  primary: string;
  secondary: string;
}>>;

export const footerLabels = {
  pl: { contact: 'Kontakt', follow: 'Śledź nas' },
  en: { contact: 'Contact', follow: 'Follow Us' },
} satisfies Localized<{ contact: string; follow: string }>;

export const classLevelLabels = {
  pl: {
    podstawy: 'Podstawy',
    wszystkie: 'Wszystkie poziomy',
    zaawansowani: 'Zaawansowani',
    dzieci: 'Dzieci',
    mieszane: 'Mieszane poziomy',
  },
  en: {
    podstawy: 'Basics',
    wszystkie: 'All levels',
    zaawansowani: 'Advanced',
    dzieci: 'Kids',
    mieszane: 'Mixed levels',
  },
} as const;
