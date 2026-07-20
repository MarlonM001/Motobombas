// Punto de entrada: monta cada componente y arranca sus comportamientos.
// El Navbar y el Footer no tienen lógica propia (son HTML/CSS estático), salvo
// la lista de servicios del footer, que se genera junto a la grilla de Servicios
// porque comparte la misma fuente de datos (SERVICES).
import { renderServicesSection } from './components/servicesSection.js';
import { renderGallerySection } from './components/gallerySection.js';
import { renderFaqSection } from './components/faqSection.js';
import { initModal } from './components/modal.js';
import { initBenefitsCarousel } from './components/benefitsCarousel.js';
import { initHeroSlider } from './components/heroSlider.js';
import { initContactForm } from './components/contactForm.js';
import { initFloatingWhatsapp } from './components/floatingWhatsapp.js';
import { initScrollReveal } from './utils/scrollReveal.js';
import { initGateEffect } from './utils/gateEffect.js';

renderServicesSection();
renderGallerySection();
renderFaqSection();
initModal();
initScrollReveal();
initGateEffect();
initBenefitsCarousel();
initHeroSlider();
initContactForm();
initFloatingWhatsapp();
