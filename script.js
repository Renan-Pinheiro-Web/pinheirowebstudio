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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), index * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
