// ===== PARALLAX =====
const parallaxBg = document.getElementById('parallaxBg');
const parallaxMid = document.getElementById('parallaxMid');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  if (parallaxBg) parallaxBg.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
  if (parallaxMid) parallaxMid.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (parallaxBg) parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  if (parallaxMid) parallaxMid.style.transform = `translateY(${scrollY * 0.15}px)`;
});

// ===== GSAP SCROLL ANIMATIONS =====
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero-badge', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 });
  gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1, delay: 0.4 });
  gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.9, delay: 0.7 });
  gsap.from('.btn-hero', { opacity: 0, scale: 0.85, duration: 0.7, delay: 1 });

  // Section header
  gsap.from('.section-header', {
    scrollTrigger: { trigger: '.section-header', start: 'top 85%' },
    opacity: 0, y: 30, duration: 0.8
  });

  // Cards stagger
  gsap.to('.card', {
    scrollTrigger: { trigger: '.grid', start: 'top 80%' },
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out'
  });

  // Footer
  gsap.from('footer', {
    scrollTrigger: { trigger: 'footer', start: 'top 95%' },
    opacity: 0, y: 20, duration: 0.6
  });
});

// ===== VANILLA TILT =====
window.addEventListener('load', () => {
  if (typeof VanillaTilt === 'undefined') return;
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
