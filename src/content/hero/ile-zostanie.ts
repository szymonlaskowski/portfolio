import type { HeroProject } from "../types";

const ilezostanie: HeroProject = {
  id: "ilezostanie",
  name: "Ile Zostanie",
  tagline: "Ile naprawdę zostaje po podatkach?",
  year: "STY 2026",
  role: "Projekt · Kod",
  wall: {
    src: "/img/ile-zostanie.png",
    alt: "Ile Zostanie, kalkulator wynagrodzeń",
    objectPosition: "50% 30%",
  },
  monitor: { kind: "image", src: "/img/ile-zostanie.png" },
  summary:
    "Kalkulator wynagrodzeń dla pracowników i freelancerów. Modeluje każdy rodzaj umowy i formę opodatkowania, więc kwota na rękę przestaje być zagadką.",
  tech: ["Next.js", "TypeScript", "Tailwind"],
  link: { label: "ilezostanie.com", href: "https://ilezostanie.com" },
  hotspots: [
    {
      x: 0.3,
      y: 0.55,
      title: "Każda umowa policzona",
      detail:
        "UoP, B2B, UoD, UZ, każda z własną logiką podatku, ZUS i składki zdrowotnej.",
    },
    {
      x: 0.78,
      y: 0.4,
      title: "Porównanie obok siebie",
      detail:
        "To samo brutto na dwóch umowach jednocześnie. Decyzja widoczna od razu.",
    },
  ],
};

export default ilezostanie;
