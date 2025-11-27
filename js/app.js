document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 5000,
    speed: 1600,
    arrows: false,
    pagination: false,
  }).mount();
});

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header-lux');
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

const matrimoniSection = document.querySelector('.matrimoni-section');
const matrimoniImg = document.querySelector('.matrimoni-bg');

function handleParallax() {
  if (!matrimoniSection || !matrimoniImg) return;
  const rect = matrimoniSection.getBoundingClientRect();
  matrimoniImg.style.transform = `translateY(${rect.top * 0.3}px)`;
}

window.addEventListener('scroll', handleParallax);
handleParallax();
