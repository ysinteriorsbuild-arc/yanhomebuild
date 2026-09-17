// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Portfolio filtering
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
const workItems = document.querySelectorAll<HTMLElement>('#workGrid .work-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove('is-active'));
    button.classList.add('is-active');

    workItems.forEach((item) => {
      const matches = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('is-hidden', !matches);
    });
  });
});

// Before/after sliders
document.querySelectorAll<HTMLElement>('[data-ba]').forEach((slider) => {
  const beforeWrap = slider.querySelector<HTMLElement>('.ba-before-wrap');
  const handle = slider.querySelector<HTMLElement>('.ba-handle');
  const range = slider.querySelector<HTMLInputElement>('.ba-range');
  if (!beforeWrap || !handle || !range) return;

  const update = (value: string) => {
    beforeWrap.style.clipPath = `inset(0 ${100 - Number(value)}% 0 0)`;
    handle.style.left = `${value}%`;
  };

  range.addEventListener('input', () => update(range.value));
  update(range.value);
});

// Testimonial carousel
const testimonialTrack = document.getElementById('testimonialTrack');
const carouselPrev = document.querySelector<HTMLButtonElement>('.carousel-prev');
const carouselNext = document.querySelector<HTMLButtonElement>('.carousel-next');

const scrollTestimonials = (direction: number) => {
  if (!testimonialTrack) return;
  const card = testimonialTrack.querySelector('.testimonial');
  if (!card) return;
  const distance = card.getBoundingClientRect().width + 40;
  testimonialTrack.scrollBy({ left: distance * direction, behavior: 'smooth' });
};

carouselPrev?.addEventListener('click', () => scrollTestimonials(-1));
carouselNext?.addEventListener('click', () => scrollTestimonials(1));

// Stat count-up
const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animateCount = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  statNumbers.forEach((el) => { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
} else {
  const statObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNumbers.forEach((el) => statObserver.observe(el));
}

// Scroll-triggered reveal animations
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealEls.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 3, 2) * 0.08}s`;
    revealObserver.observe(el);
  });
}
