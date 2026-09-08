"use client";

const MAIL_SUBJECT = "Porozmawiajmy o projekcie";
const MAIL_BODY = "Cześć Szymon,\n\nChciałbym porozmawiać o projekcie.\n\n";
const MAILTO =
  "mailto:szymon@szymonlaskowski.pl" +
  `?subject=${encodeURIComponent(MAIL_SUBJECT)}` +
  `&body=${encodeURIComponent(MAIL_BODY)}`;

export default function Exit() {
  return (
    <div
      data-plate="exit"
      className="relative flex-none w-screen md:w-[min(70vw,52rem)] min-h-screen md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div>
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-8">
          Kontakt
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.04em] text-bone"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 700 }}
        >
          Masz coś,
          <br />
          <span className="text-bone/35 font-normal">co warto zrobić?</span>
        </h2>
        <p className="mt-6 max-w-sm text-[0.95rem] text-bone/45 leading-relaxed">
          Biorę kilka projektów rocznie. Jeśli Twój potrzebuje charakteru,
          głębi i umiaru, porozmawiajmy.
        </p>

        {/* Prepared email card */}
        <a
          href={MAILTO}
          className="surface surface-hover group mt-10 flex flex-col gap-3 px-5 py-4 max-w-sm"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/35 group-hover:text-bone/60 transition-colors">
              Do: szymon@szymonlaskowski.pl
            </span>
            <span className="font-mono text-[9px] text-bone/25 group-hover:text-bone/50 transition-colors">
              ↗
            </span>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-brutal text-bone/25">
            Temat: {MAIL_SUBJECT}
          </div>
          <div className="border-t border-bone/8 pt-3 text-[0.82rem] text-bone/35 leading-relaxed group-hover:text-bone/50 transition-colors">
            Cześć Szymon, chciałbym porozmawiać o projekcie...
          </div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-brutal text-bone/22 group-hover:text-bone/45 transition-colors">
            Kliknij, żeby otworzyć w poczcie →
          </div>
        </a>

        <div className="flex flex-wrap gap-3 mt-7">
          <a
            href="https://github.com/SimonLaskowsky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !py-1.5 !px-3.5 !text-[10px] tracking-brutal uppercase font-mono"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/szymon-laskowski-5b866920a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !py-1.5 !px-3.5 !text-[10px] tracking-brutal uppercase font-mono"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-14 left-10 md:left-16 font-mono text-[9px] uppercase tracking-brutal text-bone/15">
        © 2026 szymonlaskowski.pl
      </div>
    </div>
  );
}
