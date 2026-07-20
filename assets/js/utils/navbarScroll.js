// Encoge el navbar sutilmente cuando el usuario baja en la página.
export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const toggle = () => navbar.classList.toggle('scrolled', window.scrollY > 40);

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
