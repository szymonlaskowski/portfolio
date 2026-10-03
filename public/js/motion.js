startMotion();

function startMotion() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  dimDocumentOnExternalLinks();
}

function dimDocumentOnExternalLinks() {
  for (const link of document.querySelectorAll('a[href^="http"]')) {
    link.addEventListener("click", (event) => {
      const browserHandlesClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (browserHandlesClick) return;
      event.preventDefault();
      gsap.to(document.body, { opacity: 0.4, duration: 0.2, ease: "power1.out", onComplete: () => openInNewTab(link) });
    });
  }
}

function openInNewTab(link) {
  open(link.href, "_blank", "noopener");
  gsap.set(document.body, { clearProps: "opacity" });
}
