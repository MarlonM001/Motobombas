// Grid de tarjetas de servicio + enlaces del footer. Cada tarjeta abre el modal (components/modal.js).
import { SERVICES } from '../data.js';
import { PHOTO_ICON } from '../utils/icons.js';
import { openModal } from './modal.js';

const grid = document.getElementById('services-grid');
const footerServices = document.getElementById('footer-services');

export function renderServicesSection() {
  Object.keys(SERVICES).forEach((key) => {
    const s = SERVICES[key];

    const card = document.createElement('button');
    card.className = 'service-card reveal';
    const thumbSrc = s.thumbImage || s.image;
    const thumbContent = thumbSrc
      ? `<img src="${thumbSrc}" alt="${s.title}" loading="lazy">`
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
