// Slider de imágenes + textos del Hero.
export function initHeroSlider() {
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
