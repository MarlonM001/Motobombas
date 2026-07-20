// Visor de fotos a pantalla completa para la galería de trabajos, con navegación
// entre las fotos del mismo servicio.
import { GALLERY } from '../data.js';

const overlay = document.getElementById('lightbox-overlay');
const imageEl = document.getElementById('lightbox-image');
const captionEl = document.getElementById('lightbox-caption');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
const closeBtn = document.getElementById('lightbox-close');

let currentGroup = null;
let currentIndex = 0;

function show(group, index) {
  const photos = GALLERY[group] || [];
  if (!photos.length) return;
  currentGroup = group;
  currentIndex = (index + photos.length) % photos.length;
  const photo = photos[currentIndex];
  imageEl.src = photo.src;
  imageEl.alt = photo.alt || '';
  captionEl.textContent = photo.alt || '';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  imageEl.src = '';
}

function step(dir) {
  if (currentGroup === null) return;
  show(currentGroup, currentIndex + dir);
}

export function initLightbox() {
  if (!overlay) return;

  document.addEventListener('click', (e) => {
    const img = e.target.closest('img[data-lightbox-group]');
    if (!img) return;
    show(img.dataset.lightboxGroup, parseInt(img.dataset.lightboxIndex, 10) || 0);
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}
