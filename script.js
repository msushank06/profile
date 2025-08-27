// Init AOS
AOS.init({ duration: 1000, once: true });

// Animate skills on scroll
const skills = document.querySelectorAll('.skill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 1.0 });
skills.forEach(skill => observer.observe(skill));

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("show");
});
