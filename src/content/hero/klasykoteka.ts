import type { HeroProject } from "../types";

const klasykoteka: HeroProject = {
  id: "klasykoteka",
  name: "Klasykoteka",
  tagline: "Marketplace klasycznych aut.",
  year: "2026",
  role: "Projekt · Kod",
  wall: {
    src: "/img/klasykoteka.png",
    alt: "Klasykoteka, marketplace klasycznych aut",
    objectPosition: "50% 0%",
  },
  accent: "#2f4a34",
  monitor: { kind: "image", src: "/img/klasykoteka.png" },
  summary:
    "Marketplace klasycznych aut, youngtimerów i oldtimerów, pomyślany jak podróż w czasie, a nie kolejny generyczny portal motoryzacyjny. Ogłoszenia, zapisane wyszukiwania i alerty mailowe na Postgresie, z notami redakcyjnymi generowanymi przez AI dla każdego modelu.",
  tech: ["Next.js 16", "TypeScript", "Postgres", "Drizzle", "Better Auth"],
  link: {
    label: "klasykoteka.pl",
    href: "https://www.klasykoteka.pl/",
  },
  hotspots: [
    {
      x: 0.72,
      y: 0.45,
      title: "Noty redakcyjne",
      detail:
        "Każdy model dostaje krótką notę redakcyjną wygenerowaną przez Anthropic API, więc ogłoszenie czyta się jak wpis w katalogu, a nie zrzut specyfikacji.",
    },
    {
      x: 0.3,
      y: 0.6,
      title: "Alerty o nowych ogłoszeniach",
      detail:
        "Zapisz wyszukiwanie, a Resend wyśle maila, gdy tylko pojawi się pasujące auto.",
    },
  ],
};

export default klasykoteka;
