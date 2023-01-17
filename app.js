/* Section Slide Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting)
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Navigation Bar Highlighting */
const sections = document.querySelectorAll('section[id]');
const MAX_BOUNCE = 50;

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - MAX_BOUNCE;
    sectionId = current.getAttribute('id');
    document.querySelector(".navigation a[href*=" + sectionId + "]").classList
    .toggle('active', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
  });
}