import type { AboutDesk } from "./types";

export const about: AboutDesk = {
  name: "Szymon Laskowski",
  role: "Front-end engineer · Studio jednej osoby",
  body: [
    "Buduję strony, które traktują ekran jak przestrzeń, a nie dokument. Redakcyjna typografia, przemyślany ruch, umiar tam, gdzie się liczy.",
    "Głównie React, Next.js, TypeScript i GSAP. Swobodnie czuję się też w Vue, Node i projektowaniu w Figmie, gdy projekt tego wymaga.",
    "Mieszkam w Polsce. Aktualnie otwarty na nowe zlecenia.",
  ],
  photo: "/img/photo.jpg",
  items: [
    {
      id: "notebook",
      x: 0.22,
      y: 0.4,
      title: "Notatnik",
      detail:
        "Prowadzony od 2019. W połowie szkice, w połowie wnioski po projektach. Wszystko, co wypuszczam, najpierw przechodzi tędy.",
    },
    {
      id: "coffee",
      x: 0.65,
      y: 0.55,
      title: "Przedpołudniowy rytuał",
      detail:
        "Dobra robota dzieje się między drugą a trzecią kawą. Przed nią spotkania, po niej wdrożenia.",
    },
    {
      id: "card",
      x: 0.42,
      y: 0.72,
      title: "Wizytówka",
      detail:
        "szymonlaskowski.pl · Szymon Laskowski · szymon@szymonlaskowski.pl",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/SimonLaskowsky" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/szymon-laskowski-5b866920a/",
    },
    { label: "E-mail", href: "mailto:szymon@szymonlaskowski.pl" },
  ],
};
