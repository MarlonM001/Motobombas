// Carrusel horizontal con auto-scroll de la sección Beneficios.
export function initBenefitsCarousel() {
  const track = document.getElementById('benefits-track');
  const prevBtn = document.getElementById('benefits-prev');
  const nextBtn = document.getElementById('benefits-next');
  const dotsWrap = document.getElementById('benefits-dots');
  if (!track) return;

  const allCards = Array.from(track.children);
  const cards = allCards.filter((c) => !c.dataset.clone);
  const REAL_COUNT = cards.length;

  const dots = cards.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Ir a la tarjeta ${i + 1}`);
    dot.addEventListener('click', () => {
      track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  const cardStep = () => cards[0].getBoundingClientRect().width + 20;

  const setActiveDot = () => {
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDist = Infinity;
    allCards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === (closest % REAL_COUNT)));
  };

  let scrollEndTimer = null;
  const resetIfInCloneZone = () => {
    const step = cardStep();
    const index = Math.round(track.scrollLeft / step);
    if (index >= REAL_COUNT) {
      track.scrollTo({ left: (index - REAL_COUNT) * step, behavior: 'auto' });
    }
  };

  let ticking = false;
  track.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { setActiveDot(); ticking = false; });
    }
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(resetIfInCloneZone, 200);
  }, { passive: true });

  const scrollByCard = (dir) => {
    track.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const AUTO_INTERVAL = 1800;
  let autoTimer = null;
  const stopAuto = () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } };
  const startAuto = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopAuto();
    autoTimer = setInterval(() => scrollByCard(1), AUTO_INTERVAL);
  };
  const restartAuto = () => { stopAuto(); startAuto(); };

  prevBtn.addEventListener('click', () => { scrollByCard(-1); restartAuto(); });
  nextBtn.addEventListener('click', () => { scrollByCard(1); restartAuto(); });
  dots.forEach((dot) => dot.addEventListener('click', restartAuto));

  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);
  prevBtn.addEventListener('mouseenter', stopAuto);
  prevBtn.addEventListener('mouseleave', startAuto);
  nextBtn.addEventListener('mouseenter', stopAuto);
  nextBtn.addEventListener('mouseleave', startAuto);
  track.addEventListener('touchstart', stopAuto, { passive: true });
  track.addEventListener('touchend', () => { setTimeout(startAuto, 2500); }, { passive: true });

  setActiveDot();
  startAuto();
}
