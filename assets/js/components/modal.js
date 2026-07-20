// Modal de detalle de un servicio: contenido, apertura/cierre y salto a la galería.
import { SERVICES, WHATSAPP_NUMBER } from '../data.js';
import { CHECK_ICON, PHOTO_ICON } from '../utils/icons.js';

const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const modalPoints = document.getElementById('modal-points');
const modalCta = document.getElementById('modal-cta');
const modalGalleryLink = document.getElementById('modal-gallery-link');
const modalFormLink = document.getElementById('modal-form-link');

export function openModal(key) {
  const s = SERVICES[key];
  modalTitle.textContent = s.title;
  modalImage.innerHTML = s.image
    ? `<img src="${s.image}" alt="${s.title}">`
    : `<div class="img-placeholder"><div>${PHOTO_ICON}Foto de referencia del trabajo realizado</div></div>`;
  modalDesc.textContent = s.desc;
  modalPoints.innerHTML = s.points.map(p => `<div class="modal-point">${CHECK_ICON}<span>${p}</span></div>`).join('');
  const message = `Hola, quiero información sobre el servicio de ${s.title}.`;
  modalCta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (modalGalleryLink) modalGalleryLink.dataset.key = key;
  if (modalFormLink) modalFormLink.dataset.key = key;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

export function initModal() {
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.getElementById('modal-box').addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  if (modalGalleryLink) {
    modalGalleryLink.addEventListener('click', () => {
      const key = modalGalleryLink.dataset.key;
      closeModal();
      const target = document.getElementById(`galeria-${key}`);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
      }
    });
  }

  if (modalFormLink) {
    modalFormLink.addEventListener('click', () => {
      const key = modalFormLink.dataset.key;
      closeModal();
      const target = document.getElementById('contacto');
      const select = document.getElementById('cf-servicio');
      if (select && SERVICES[key]) select.value = SERVICES[key].title;
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('cf-nombre')?.focus();
        }, 250);
      }
    });
  }
}
