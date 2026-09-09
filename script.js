document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

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

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('#workGrid .work-item');

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
document.querySelectorAll('[data-ba]').forEach((slider) => {
  const before = slider.querySelector('.ba-before');
  const handle = slider.querySelector('.ba-handle');
  const range = slider.querySelector('.ba-range');

  const update = (value) => {
    before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    handle.style.left = `${value}%`;
  };

  range.addEventListener('input', () => update(range.value));
  update(range.value);
});

// Scroll-triggered reveal animations
const revealEls = document.querySelectorAll('[data-reveal]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

// Services nav dropdown
const servicesTrigger = document.getElementById('servicesTrigger');
const servicesMenu = document.getElementById('servicesMenu');

const closeServicesMenu = () => {
  servicesMenu.classList.remove('is-open');
  servicesTrigger.setAttribute('aria-expanded', 'false');
};

servicesTrigger.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = servicesMenu.classList.toggle('is-open');
  servicesTrigger.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) closeServicesMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeServicesMenu();
});

// Testimonial carousel
const testimonialTrack = document.getElementById('testimonialTrack');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

const scrollTestimonials = (direction) => {
  const card = testimonialTrack.querySelector('.testimonial-card');
  if (!card) return;
  const distance = card.getBoundingClientRect().width + 24;
  testimonialTrack.scrollBy({ left: distance * direction, behavior: 'smooth' });
};

carouselPrev.addEventListener('click', () => scrollTestimonials(-1));
carouselNext.addEventListener('click', () => scrollTestimonials(1));

// Stat count-up
const statNumbers = document.querySelectorAll('.stat-number');

const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
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
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNumbers.forEach((el) => statObserver.observe(el));
}
