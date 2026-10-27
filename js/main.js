document.documentElement.classList.add("js");

// Ajustes da sequência da home: altere o gatilho de rolagem e o tempo total de cada etapa aqui.
// Os tempos devem ser iguais ou maiores que as durações definidas em css/index.css.
const homeAnimationConfig = {
  scrollTriggerOffset: 12,
  scratchStepDuration: 120,
  arrowStepDuration: 120
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const homeAnimationTargets = [
  ...document.querySelectorAll("[data-home-scratch]"),
  document.querySelector("[data-home-arrow]")
].filter(Boolean);

const revealHomeSequence = () => {
  if (prefersReducedMotion) {
    homeAnimationTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const revealNext = (index) => {
    const target = homeAnimationTargets[index];
    if (!target) return;

    target.classList.add("is-visible");
    const delay = target.matches("[data-home-arrow]")
      ? homeAnimationConfig.arrowStepDuration
      : homeAnimationConfig.scratchStepDuration;
    window.setTimeout(() => revealNext(index + 1), delay);
  };

  revealNext(0);
};

if (homeAnimationTargets.length) {
  let hasStarted = false;
  const startHomeSequence = () => {
    if (hasStarted || window.scrollY < homeAnimationConfig.scrollTriggerOffset) return;
    hasStarted = true;
    window.removeEventListener("scroll", startHomeSequence);
    revealHomeSequence();
  };

  window.addEventListener("scroll", startHomeSequence, { passive: true });
  startHomeSequence();
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const setMenuOpen = (open, { returnFocus = false } = {}) => {
  if (!menuToggle) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  siteNav?.classList.toggle("is-open", open);
  if (returnFocus) menuToggle.focus({ preventScroll: true });
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav?.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;

  setMenuOpen(false, { returnFocus: true });
  setActiveNavigationLink(link);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false, { returnFocus: true });
  }
});

const navigationLinks = [...(siteNav?.querySelectorAll('a[href^="#"]') ?? [])];
const navigationSections = navigationLinks
  .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
  .filter(({ section }) => section);

const setActiveNavigationLink = (activeLink) => {
  navigationLinks.forEach((link) => {
    if (link === activeLink) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const updateActiveNavigationLink = () => {
  const headerHeight = document.querySelector(".site-header")?.offsetHeight ?? 0;
  const activeSection = navigationSections
    .filter(({ section }) => section.getBoundingClientRect().top <= headerHeight)
    .at(-1);

  setActiveNavigationLink(activeSection?.link);
};

if (navigationSections.length) {
  let navigationUpdateQueued = false;
  const requestNavigationUpdate = () => {
    if (navigationUpdateQueued) return;
    navigationUpdateQueued = true;
    window.requestAnimationFrame(() => {
      updateActiveNavigationLink();
      navigationUpdateQueued = false;
    });
  };

  window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
  window.addEventListener("resize", requestNavigationUpdate);
  window.addEventListener("hashchange", requestNavigationUpdate);
  requestNavigationUpdate();
}

const localTime = document.querySelector("[data-local-time]");
const brasiliaTime = document.querySelector("[data-brasilia-time]");
const timeFormatter = (timeZone) => new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone
});
const renderTime = (element, timeZone) => {
  if (!element) return;
  const parts = timeFormatter(timeZone).formatToParts(new Date());
  const hour = parts.find(({ type }) => type === "hour")?.value;
  const minute = parts.find(({ type }) => type === "minute")?.value;
  if (!hour || !minute) return;

  const separator = document.createElement("span");
  separator.className = "time-info__separator";
  separator.setAttribute("aria-hidden", "true");
  separator.textContent = ":";
  element.replaceChildren(`[${hour}`, separator, `${minute}]`);
  element.setAttribute("aria-label", `${hour}:${minute}`);
};
const updateTime = () => {
  renderTime(localTime);
  renderTime(brasiliaTime, "America/Sao_Paulo");
};
updateTime();
window.setInterval(updateTime, 60_000);
