import type { HeroProject } from "../types";

const brutalistInteriors: HeroProject = {
  id: "brutalist-interiors",
  name: "Brutalist Interiors",
  tagline: "Zagłębiona donica, cztery ściany, jedno wejście.",
  year: "2026",
  role: "Koncepcja · Projekt · Kod",
  wall: {
    src: "/img/brutalist-interiors.jpg",
    alt: "Brutalist Interiors, ujęcie rezydencji 04",
    objectPosition: "50% 50%",
  },
  monitor: { kind: "image", src: "/img/brutalist-interiors.jpg" },
  summary:
    "Redakcyjny landing dla fikcyjnego studia brutalistycznych wnętrz. Trzy rezydencje, każda z jednymi drzwiami. Klik w drzwi rodzi z nich wnętrze, a pionowy scroll zamienia się w poziomy ruch.",
  tech: ["Next.js", "GSAP", "Tailwind", "Instrument Serif"],
  link: {
    label: "github.com/SimonLaskowsky/interiors",
    href: "https://github.com/SimonLaskowsky/interiors",
  },
  hotspots: [
    {
      x: 0.47,
      y: 0.5,
      title: "Drzwi",
      detail:
        "Magnetyczny hotspot przyciągany do kursora. Klik uruchamia okrągłe odsłonięcie clip-path, wnętrze wyłania się z futryny.",
    },
    {
      x: 0.2,
      y: 0.4,
      title: "Redakcyjna typografia",
      detail:
        "Instrument Serif w ogromnym stopniu, z mix-blend-mode: difference, żeby zawsze był czytelny na zmiennych zdjęciach.",
    },
  ],
};

export default brutalistInteriors;
