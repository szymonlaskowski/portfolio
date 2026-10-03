export type Work = {
  name: string;
  summary: string;
  stack: string[];
  url: string;
};

export type Project = Work & {
  year: string;
};

export const projects: Project[] = [
  {
    name: "RynkoRadar",
    summary: "Ceny mieszkań w Polsce na mapie.",
    stack: ["Next.js", "TypeScript", "MapLibre GL", "Postgres", "Drizzle", "Playwright"],
    year: "2026",
    url: "https://rynkoradar.pl",
  },
  {
    name: "Co Przeszło",
    summary: "Ustawy po ludzku. I kto jak głosował.",
    stack: ["Next.js", "TypeScript", "Python", "Prisma", "Anthropic API"],
    year: "2025",
    url: "https://coprzeszlo.pl/",
  },
  {
    name: "Klasykoteka",
    summary: "Ogłoszenia klasycznych aut.",
    stack: ["Next.js 16", "TypeScript", "Postgres", "Drizzle", "Better Auth"],
    year: "2026",
    url: "https://www.klasykoteka.pl/",
  },
];

export const commercialWork: Work[] = [
  {
    name: "Discidius",
    summary: "Dashboardy do monitoringu sieci.",
    stack: ["Next.js"],
    url: "https://discidius.com/",
  },
  {
    name: "Bielsko-Biała",
    summary: "Portal miasta.",
    stack: ["Drupal"],
    url: "https://bielsko-biala.pl/",
  },
  {
    name: "Mateusz Socha",
    summary: "Strona komika. Bilety i nagrania.",
    stack: ["WordPress"],
    url: "https://mateuszsocha.com/",
  },
];

export const experiments: Work[] = [
  {
    name: "JustTodo",
    summary: "Lista zadań w pasku menu macOS.",
    stack: ["Swift", "React", "TypeScript"],
    url: "https://github.com/szymonlaskowski/justtodo",
  },
  {
    name: "Kalkulator JDG",
    summary: "Ile zapłacisz ZUS i PIT w 2026.",
    stack: ["Next.js", "React", "TypeScript"],
    url: "https://jdg-calculator.vercel.app",
  },
  {
    name: "Teammate Bot",
    summary: "Bot na Teamsie, który zna firmę.",
    stack: ["Node", "Claude API", "Supabase"],
    url: "https://github.com/szymonlaskowski/teammate-bot",
  },
  {
    name: "Otomoto Notifier",
    summary: "SMS, gdy na Otomoto pojawi się dobra oferta.",
    stack: ["Python"],
    url: "https://github.com/szymonlaskowski/otomoto-notifier",
  },
];

export const aboutParagraphs = [
  "Robię front-end.",
  "Najczęściej React, Next.js i TypeScript.",
  "Po godzinach piszę narzędzia dla siebie.",
];

export const contactLinks = [
  { label: "Mail", href: "mailto:szymon@szymonlaskowski.pl" },
  { label: "GitHub", href: "https://github.com/szymonlaskowski" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/szymon-laskowski-5b866920a/" },
];
