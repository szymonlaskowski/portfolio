import type { HeroProject } from "../types";

const rynkoradar: HeroProject = {
  id: "rynkoradar",
  name: "RynkoRadar",
  tagline: "Radar cen mieszkań w Polsce.",
  year: "STY 2026",
  role: "Projekt · Kod",
  wall: {
    src: "/img/rynkoradar.png",
    alt: "RynkoRadar, interaktywna mapa cen mieszkań",
    objectPosition: "50% 0%",
  },
  accent: "#0f5d4d",
  monitor: { kind: "image", src: "/img/rynkoradar.png" },
  summary:
    "Interaktywna mapa cieplna cen mieszkań w Polsce. Agreguje ogłoszenia z portali nieruchomości przez automatyczny scraping w Playwright, pokazuje trendy na poziomie dzielnic i pozwala porównać okolice jednym spojrzeniem.",
  tech: [
    "Next.js",
    "TypeScript",
    "MapLibre GL",
    "Postgres",
    "Drizzle",
    "Playwright",
  ],
  link: {
    label: "rynkoradar.pl",
    href: "https://rynkoradar.pl",
  },
  hotspots: [
    {
      x: 0.5,
      y: 0.45,
      title: "Mapa cieplna dzielnic",
      detail:
        "Cena za m² zagregowana po dzielnicach, kolorowana od poniżej 12 tys. do powyżej 22 tys. zł. MapLibre GL rysuje warstwę na własnej ciemnej mapie bazowej.",
    },
    {
      x: 0.25,
      y: 0.65,
      title: "Automatyczny scraping",
      detail:
        "Playwright przechodzi portale ogłoszeniowe według harmonogramu w GitHub Actions. Świeże dane trafiają do Postgresa przez Drizzle, a PostGIS filtruje przestrzennie w SQL.",
    },
  ],
};

export default rynkoradar;
