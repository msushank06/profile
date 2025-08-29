// Hire Me Modal logic
const hireMeBtn = document.querySelector('.hire-me-btn');
const hireMeModal = document.getElementById('hireMeModal');
const closeModal = document.getElementById('closeModal');
if (hireMeBtn && hireMeModal && closeModal) {
  hireMeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hireMeModal.style.display = 'flex';
  });
  closeModal.addEventListener('click', function() {
    hireMeModal.style.display = 'none';
  });
  window.addEventListener('click', function(e) {
    if (e.target === hireMeModal) {
      hireMeModal.style.display = 'none';
    }
  });
}
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
