document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('nav');

  function openNav(){
    burger.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
    nav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeNav(){
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    nav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function toggleNav(){
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    expanded ? closeNav() : openNav();
  }

  burger?.addEventListener('click', toggleNav);
  nav?.addEventListener('click', (e) => {
    const t = e.target;
    if (t && (t.closest('[data-close]') || t.matches('.nav__list a'))) {
      closeNav();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
});