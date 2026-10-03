export type Work = {
  name: string;
  summary: string;
  stack: string[];
  url: string;
};

export type Project = Work & {
  year: string;
};

export type About = {
  paragraphs: string[];
  contact: { label: string; href: string }[];
};
