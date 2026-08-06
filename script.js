const testimonialCards = Array.from(
  document.querySelectorAll(".testimonial-card"),
);

const revealTestimonials = () => {
  testimonialCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    card.classList.toggle("is-visible", isVisible);
  });
};

window.addEventListener("scroll", revealTestimonials, { passive: true });
window.addEventListener("load", revealTestimonials);
window.addEventListener("resize", revealTestimonials);

const galleryCards = Array.from(document.querySelectorAll(".gallery-card"));

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    galleryCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 180;
  let currentSectionId = "";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", targetId === currentSectionId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", updateActiveNavLink, { passive: true });
window.addEventListener("resize", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

const form = document.getElementById("intake-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name") || "There";
    const email = formData.get("email") || "hello@peakflowfit.com";
    const goals = formData.get("goals") || "No additional notes";

    const subject = encodeURIComponent("Fitness intake");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nGoals: ${goals}`,
    );

    window.location.href = `mailto:hello@peakflowfit.com?subject=${subject}&body=${body}`;
  });
}
