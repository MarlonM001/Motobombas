// Botón flotante de WhatsApp: aparece después de bajar un poco en la página.
export function initFloatingWhatsapp() {
  const btn = document.getElementById('floating-whatsapp');
  if (!btn) return;

  const toggle = () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
