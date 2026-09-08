import type { HeroProject } from "../types";

const coprzeszlo: HeroProject = {
  id: "coprzeszlo",
  name: "Co Przeszło",
  tagline: "Polskie prawo w prostym języku.",
  year: "KWI 2025",
  role: "Projekt · Kod",
  wall: {
    src: "/img/co-przeszlo.png",
    alt: "Co Przeszło, platforma z polskimi aktami prawnymi",
    objectPosition: "50% 0%",
  },
  accent: "#7a2b24",
  monitor: { kind: "image", src: "/img/co-przeszlo.png" },
  summary:
    "Czytnik polskich aktów prawnych wspierany przez AI. Zamienia gęste ustawy w zrozumiałe streszczenia, śledzi głosowania w Sejmie i pokazuje politykę stojącą za tekstem.",
  tech: ["Next.js", "TypeScript", "Python", "Prisma", "Anthropic API"],
  link: { label: "coprzeszlo.pl", href: "https://coprzeszlo.pl/" },
  hotspots: [
    {
      x: 0.22,
      y: 0.42,
      title: "Streszczenie AI",
      detail:
        "Pipeline w Pythonie pobiera każdy akt, dzieli go przez LangChain i streszcza przez Anthropic API w języku polskiego prawa.",
    },
    {
      x: 0.72,
      y: 0.68,
      title: "Dane z głosowań",
      detail:
        "Wpięte na żywo wyniki głosowań sejmowych, więc widać, kto jak głosował.",
    },
  ],
};

export default coprzeszlo;
