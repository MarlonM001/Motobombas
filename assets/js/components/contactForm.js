// Formulario de contacto: arma el mensaje con nombre/servicio/detalle y abre WhatsApp.
import { SERVICES, WHATSAPP_NUMBER } from '../data.js';

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const select = document.getElementById('cf-servicio');

  Object.keys(SERVICES).forEach((key) => {
    const option = document.createElement('option');
    option.value = SERVICES[key].title;
    option.textContent = SERVICES[key].title;
    select.appendChild(option);
  });
  const otroOption = document.createElement('option');
  otroOption.value = 'Otro / no estoy seguro';
  otroOption.textContent = 'Otro / no estoy seguro';
  select.appendChild(otroOption);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const servicio = form.servicio.value;
    const detalle = form.detalle.value.trim();

    let message = `Hola, soy ${nombre}. Quiero información sobre el servicio de ${servicio}.`;
    if (detalle) message += ` Detalle: ${detalle}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
