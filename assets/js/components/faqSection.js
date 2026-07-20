// Acordeón de preguntas frecuentes.
import { FAQS } from '../data.js';

export function renderFaqSection() {
  const wrap = document.getElementById('faq-list');
  if (!wrap) return;

  FAQS.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'faq-item reveal';
    el.innerHTML = `
      <button type="button" class="faq-question" aria-expanded="false">
        <span>${item.q}</span>
        <span class="faq-chevron-wrap">
          <svg class="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    `;
    const btn = el.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = el.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
    wrap.appendChild(el);
  });
}
