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
