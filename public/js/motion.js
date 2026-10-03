const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
  dimDocumentOnExternalLinks();
}

function dimDocumentOnExternalLinks() {
  for (const link of document.querySelectorAll('a[href^="http"]')) {
    link.addEventListener("click", (event) => {
      const browserHandlesClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (browserHandlesClick) return;
      event.preventDefault();
      const dim = document.body.animate([{ opacity: 1 }, { opacity: 0.4 }], { duration: 200, easing: "ease-out" });
      dim.onfinish = () => open(link.href, "_blank", "noopener");
    });
  }
}
