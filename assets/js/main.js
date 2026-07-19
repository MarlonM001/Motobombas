// Render de tarjetas de servicio + enlaces de footer, y control del modal de detalle.
// Depende de SERVICES definido en data.js (cargado antes que este archivo).

const CHECK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" style="flex-shrink:0;margin-top:2px;"><path d="M4 12l5 5L20 6"/></svg>';
const PHOTO_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B7FA6" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5-9 9"/></svg>';

const grid = document.getElementById('services-grid');
const footerServices = document.getElementById('footer-services');
const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const modalPoints = document.getElementById('modal-points');
const modalCta = document.getElementById('modal-cta');
const WHATSAPP_NUMBER = '573124432044';

function renderServices() {
  Object.keys(SERVICES).forEach((key, i) => {
    const s = SERVICES[key];

    const card = document.createElement('button');
    card.className = 'service-card reveal';
    const thumbContent = s.image
      ? `<img src="${s.image}" alt="${s.title}" loading="lazy">`
      : `<div class="img-placeholder">${PHOTO_ICON}${s.thumb}</div>`;
    card.innerHTML = `
      <div class="thumb">${thumbContent}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    `;
    card.addEventListener('click', () => openModal(key));
    grid.appendChild(card);

    const link = document.createElement('button');
    link.type = 'button';
    link.textContent = s.title;
    link.addEventListener('click', () => openModal(key));
    footerServices.appendChild(link);
  });
}

function openModal(key) {
  const s = SERVICES[key];
  modalTitle.textContent = s.title;
  modalImage.innerHTML = s.image
    ? `<img src="${s.image}" alt="${s.title}">`
    : `<div class="img-placeholder"><div>${PHOTO_ICON}Foto de referencia del trabajo realizado</div></div>`;
  modalDesc.textContent = s.desc;
  modalPoints.innerHTML = s.points.map(p => `<div class="modal-point">${CHECK_ICON}<span>${p}</span></div>`).join('');
  const message = `Hola, quiero información sobre el servicio de ${s.title}.`;
  modalCta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModalControls() {
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.getElementById('modal-box').addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el) => observer.observe(el));
}

function initGateEffect() {
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

function initBenefitsCarousel() {
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

function initHeroSlider() {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const texts = Array.from(document.querySelectorAll('.hero-text-slide'));
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const dotsWrap = document.getElementById('hero-dots');
  if (!slides.length || !prevBtn || !nextBtn || !dotsWrap) return;

  let index = Math.max(0, slides.findIndex((s) => s.classList.contains('active')));

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Ver imagen ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    texts.forEach((t, i) => t.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  render();
}

renderServices();
initModalControls();
initScrollReveal();
initGateEffect();
initBenefitsCarousel();
initHeroSlider();
