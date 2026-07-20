// Efecto de "agua que se abre" al llegar a la sección de Servicios, ligado al scroll.
export function initGateEffect() {
  const section = document.getElementById('servicios');
  if (!section) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.style.setProperty('--gate-progress', 1);
    section.classList.add('gate-open');
    return;
  }

  let maxProgress = 0;
  let ticking = false;
  let done = false;

  const compute = () => {
    ticking = false;
    if (done) return;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const startY = vh * 0.9;
    const endY = vh * 0.35;
    let progress = (startY - rect.top) / (startY - endY);
    progress = Math.max(0, Math.min(1, progress));
    if (progress > maxProgress) {
      maxProgress = progress;
      section.style.setProperty('--gate-progress', maxProgress.toFixed(3));
      if (maxProgress >= 1) {
        section.classList.add('gate-open');
        done = true;
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(compute);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  compute();
}
