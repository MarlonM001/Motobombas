// Anima cualquier elemento .stat-number (0 → data-target) cuando entra al viewport.
// Reutilizable en el Hero, Beneficios o donde se necesite reforzar una cifra.
const DURATION = 1400;

function animate(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function initStatCounters() {
  const nodes = document.querySelectorAll('.stat-number');
  if (!nodes.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => { el.textContent = el.dataset.target; });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  nodes.forEach((el) => observer.observe(el));
}
