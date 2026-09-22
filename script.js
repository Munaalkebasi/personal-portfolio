// The portfolio remains readable and navigable without JavaScript.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');
const closeMenu = () => {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
};
menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
menu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

// Content stays visible even when animation support is unavailable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let entranceObserver;
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  entranceObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 650, easing: 'cubic-bezier(.2,.65,.25,1)', fill: 'none' }
      );
      entranceObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.hero-copy,.hero-art,.section-heading,.project,.about-grid,.skill-group,.experience-row,.contact-grid').forEach(element => entranceObserver.observe(element));
}
motionPreference.addEventListener('change', event => {
  if (event.matches) {
    entranceObserver?.disconnect();
    document.getAnimations().forEach(animation => animation.cancel());
  }
});
