import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { about, archive, experiments, heroProjects } from "./content";
import type { Project, Work } from "./content";

const lastCommitDate = execSync("git log -1 --format=%cs").toString().trim();
const lastCommitYear = lastCommitDate.slice(0, 4);

const css = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      cursor: crosshair;
    }

    html {
      background: #fff;
      color: #000;
      font: 16px/1.25 Helvetica, Arial, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .bar {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 12px;
      border-bottom: 1px solid #000;
      font: 11px/1 ui-monospace, Menlo, monospace;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    footer.bar {
      border-bottom: 0;
    }

    footer.bar a {
      text-decoration: underline;
    }

    header {
      min-height: calc(100vh - 32px);
      padding: 10px;
      border-bottom: 1px solid #000;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    h1 {
      font-size: 18vw;
      line-height: .76;
      letter-spacing: -.07em;
      margin-left: -.04em;
    }

    header p {
      white-space: nowrap;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      border-left: 1px solid #000;
    }

    .grid section,
    .grid address {
      grid-column: span 12;
      display: grid;
      grid-template-columns: subgrid;
      font-style: normal;
    }

    .label {
      grid-column: span 12;
      padding: 5px 8px;
      background: #000;
      color: #fff;
      font: 11px/1 ui-monospace, Menlo, monospace;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .cell {
      overflow: hidden;
      padding: 8px;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
    }

    .span-4 {
      grid-column: span 4;
    }

    .span-6 {
      grid-column: span 6;
    }

    .span-12 {
      grid-column: span 12;
    }

    .mono {
      font: 11px/1.25 ui-monospace, Menlo, monospace;
    }

    .meta {
      font: 10px/1.25 ui-monospace, Menlo, monospace;
      text-transform: uppercase;
      opacity: .55;
    }

    .project {
      min-height: 92vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr auto;
      gap: 8px;
    }

    .project .note {
      justify-self: end;
      opacity: 0;
    }

    .project h2 {
      grid-column: 1 / -1;
      align-self: center;
      font-size: 19vw;
      line-height: .78;
      letter-spacing: -.07em;
      margin-left: -.04em;
    }

    .project p {
      max-width: 34ch;
    }

    .project .meta {
      justify-self: end;
      align-self: end;
      text-align: right;
    }

    .work {
      min-height: 26vh;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .work h3 {
      font-size: 4.5vw;
      line-height: .9;
      letter-spacing: -.05em;
    }

    .work p {
      font-size: 14px;
    }

    .work p:first-of-type {
      margin-top: auto;
    }

    .about {
      padding: 12px 8px 64px;
      font-size: 17px;
    }

    .contact {
      padding: 12px 8px 40px;
      font-size: 5vw;
      font-weight: bold;
      letter-spacing: -.05em;
    }

    a.cell:hover,
    a.cell:focus-visible {
      background: #000;
      color: #fff;
    }

    a.cell:hover .meta,
    a.cell:focus-visible .meta,
    a.cell:hover .note,
    a.cell:focus-visible .note {
      opacity: 1;
    }

    @media (max-width: 640px) {
      .project h2 {
        font-size: 18.5vw;
      }

      .work h3 {
        font-size: 12vw;
      }

      .span-4,
      .span-6 {
        grid-column: span 12;
      }

      .contact {
        font-size: 12vw;
      }
    }
  `;

export const styleHash = createHash("sha256").update(css).digest("base64");

export function renderDocument() {
  const draft = renderDocumentWithHtmlSize("0");
  return renderDocumentWithHtmlSize(kilobytes(draft));
}

function kilobytes(text: string) {
  return (Buffer.byteLength(text) / 1024).toFixed(1);
}

function renderDocumentWithHtmlSize(htmlKilobytes: string) {
  return `<!-- Cześć. Tak, to specjalnie. -->
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base target="_blank">
  <title>Szymon Laskowski</title>
  <meta name="description" content="Front-end engineer. Moje projekty mówią za mnie.">
  <meta property="og:title" content="Szymon Laskowski">
  <meta property="og:description" content="Front-end engineer. Moje projekty mówią za mnie.">
  <meta property="og:image" content="https://szymonlaskowski.pl/opengraph-image.png">
  <style>${css}</style>
  <script defer src="/js/gsap.min.js"></script>
  <script defer src="/js/motion.js"></script>
  <script defer src="https://umami.szymonlaskowski.pl/script.js" data-website-id="07b51f4e-e8b4-44ba-b74d-462e0c8b1f72" data-domains="www.szymonlaskowski.pl"></script>
</head>
<body>

<div class="bar">
  <span>Front-end engineer</span>
  <span>${lastCommitYear}</span>
</div>

<header>
  <h1>Szymon<br>Laskowski</h1>
  <p>Moje projekty mówią za mnie.</p>
</header>

<main class="grid">

  <section aria-label="Projekty">
${heroProjects.map(projectCell).join("\n")}
  </section>

  <section>
    <h2 class="label">Prace komercyjne</h2>
${archive.map((work) => workCell(work, "span-4")).join("\n")}
  </section>

  <section>
    <h2 class="label">Eksperymenty</h2>
${experiments.map((work) => workCell(work, "span-6")).join("\n")}
  </section>

  <section>
    <h2 class="label">O mnie</h2>
${about.paragraphs.map((paragraph) => `    <p class="cell span-4 about">${paragraph}</p>`).join("\n")}
  </section>

  <section>
    <h2 class="label">Kontakt</h2>
    <address>
${about.contact.map((link) => `      <a class="cell span-4 contact" href="${link.href}">${link.label}</a>`).join("\n")}
    </address>
  </section>

</main>

<footer class="bar">
  <span>${kilobytes(css)} KB CSS</span>
  <span>${htmlKilobytes} KB HTML</span>
  <span>${lastCommitDate}</span>
  <a href="/zrodlo">Źródło</a>
</footer>

</body>
</html>
`;
}

function projectCell(project: Project, index: number) {
  const number = String(index + 1).padStart(2, "0");
  return `    <a class="cell span-12 project" href="${project.url}">
      <span class="mono">${number}</span>
      <span class="mono note" aria-hidden="true">↗</span>
      <h2>${project.name}</h2>
      <p>${project.summary}</p>
      <p class="meta">${project.stack.join(" · ")} · ${project.year}</p>
    </a>`;
}

function workCell(work: Work, span: "span-4" | "span-6") {
  return `    <a class="cell ${span} work" href="${work.url}">
      <h3>${work.name}</h3>
      <p>${work.summary}</p>
      <p class="meta">${work.stack.join(" · ")}</p>
    </a>`;
}
