// Sección de galería: un carrusel de fotos por servicio (o un estado vacío con CTA de WhatsApp).
import { SERVICES, GALLERY, WHATSAPP_NUMBER } from '../data.js';
import { PHOTO_ICON } from '../utils/icons.js';

const galleryWrap = document.getElementById('gallery-groups');

export function renderGallerySection() {
  if (!galleryWrap) return;
  Object.keys(SERVICES).forEach((key) => {
    const s = SERVICES[key];
    const photos = GALLERY[key] || [];

    const group = document.createElement('div');
    group.className = 'gallery-group reveal';
    group.id = `galeria-${key}`;

    const photosHtml = photos.length
      ? `<div class="gallery-carousel">
          <button type="button" class="gallery-arrow prev" aria-label="Foto anterior">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B4F9C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="gallery-track">
            ${photos.map((p) => `<div class="gallery-slide"><div class="gallery-photo"><img src="${p.src}" alt="${p.alt || s.title}" loading="lazy"></div></div>`).join('')}
          </div>
          <button type="button" class="gallery-arrow next" aria-label="Foto siguiente">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B4F9C" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="gallery-dots"></div>`
      : `<div class="gallery-empty">
          ${PHOTO_ICON}
          <p>Estamos organizando las fotos de este servicio. Escríbenos por WhatsApp y con gusto te mostramos evidencia de trabajos ya realizados.</p>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero ver trabajos realizados del servicio de ${s.title}.`)}" target="_blank" rel="noopener" class="gallery-empty-cta">Pedir evidencia por WhatsApp</a>
        </div>`;

    group.innerHTML = `<h3>${s.title}</h3>${photosHtml}`;
    galleryWrap.appendChild(group);
  });
  initGalleryCarousels();
}

function initGalleryCarousels() {
  document.querySelectorAll('.gallery-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.gallery-track');
    const prevBtn = carousel.querySelector('.gallery-arrow.prev');
    const nextBtn = carousel.querySelector('.gallery-arrow.next');
    const dotsWrap = carousel.parentElement.querySelector('.gallery-dots');
    const slides = Array.from(track.children);
    if (!slides.length) return;

    const dots = slides.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'gallery-dot';
      dot.setAttribute('aria-label', `Ir a la foto ${i + 1}`);
      dot.addEventListener('click', () => {
        track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    const setActiveDot = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === closest));
    };

    let ticking = false;
    track.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { setActiveDot(); ticking = false; });
      }
    }, { passive: true });

    const scrollByStep = (dir) => {
      const step = slides[0].getBoundingClientRect().width + 12;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByStep(-1));
    nextBtn.addEventListener('click', () => scrollByStep(1));

    setActiveDot();
  });
}
