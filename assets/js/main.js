// Render de tarjetas de servicio + enlaces de footer, y control del modal de detalle.
// Depende de SERVICES definido en data.js (cargado antes que este archivo).

const CHECK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2" style="flex-shrink:0;margin-top:2px;"><path d="M4 12l5 5L20 6"/></svg>';
const PHOTO_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5B7FA6" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5-9 9"/></svg>';

const grid = document.getElementById('services-grid');
const footerServices = document.getElementById('footer-services');
const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPoints = document.getElementById('modal-points');

function renderServices() {
  Object.keys(SERVICES).forEach((key, i) => {
    const s = SERVICES[key];

    const card = document.createElement('button');
    card.className = 'service-card';
    card.style.animationDelay = (i % 3) * 0.05 + 's';
    card.innerHTML = `
      <div class="thumb"><div class="img-placeholder">${PHOTO_ICON}${s.thumb}</div></div>
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
  modalDesc.textContent = s.desc;
  modalPoints.innerHTML = s.points.map(p => `<div class="modal-point">${CHECK_ICON}<span>${p}</span></div>`).join('');
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

renderServices();
initModalControls();
