// Efecto de onda de agua al hacer clic en los botones principales.
const SELECTOR = '.btn-primary, .contact-form-submit';

export function initRipple() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest(SELECTOR);
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}
