const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", window.scrollY > 50),
);

const hamburger = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  hamburger.style.visibility = "hidden";
});
mobileClose.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  hamburger.style.visibility = "visible";
});
function closeMobile() {
  mobileMenu.classList.remove("open");
  hamburger.style.visibility = "visible";
}

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains("active");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

// Reveal com fallback robusto para CDN/Netlify
function initReveal() {
  const els = document.querySelectorAll(".reveal");

  // Fallback: se JS demorar, garante que nada fica invisível
  const safetyTimeout = setTimeout(() => {
    els.forEach((el) => el.classList.add("visible"));
  }, 2000);

  if (!("IntersectionObserver" in window)) {
    clearTimeout(safetyTimeout);
    els.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
  );

  els.forEach((el) => observer.observe(el));

  // Cancela o safety timeout se o observer funcionar
  setTimeout(() => clearTimeout(safetyTimeout), 500);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReveal);
} else {
  initReveal();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
