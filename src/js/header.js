// ==============================================
// Header — Scroll-Verhalten + Lottie Logo
// ==============================================

import lottie from 'lottie-web';
import gsap from 'gsap';
import { getLenis } from './lenis';

let logoAnim = null;

export function initHeader() {
  const header = document.querySelector('.component--header');
  if (!header) return;

  // -- Scroll behavior --
  const SCROLL_THRESHOLD = 100;
  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('--scrolled');
    } else {
      header.classList.remove('--scrolled');
    }
  }, { passive: true });

  // -- Lottie Logo --
  const lottieContainer = document.getElementById('logo-lottie');
  if (lottieContainer) {
    try {
      logoAnim = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/lottie/logo-black.json',
      });
    } catch (e) {
      // Lottie file not available yet — fail silently
    }

    const logo = document.querySelector('.logo');
    if (logo && logoAnim) {
      logo.addEventListener('mouseenter', () => {
        logoAnim.setDirection(1);
        logoAnim.play();
      });
      logo.addEventListener('mouseleave', () => {
        logoAnim.setDirection(-1);
        logoAnim.play();
      });
    }
  }

  // -- Menu Toggle --
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.component--menu');
  const menuClose = document.querySelector('.menu__close');

  function openMenu() {
    menu?.classList.add('--open');
    menuToggle?.classList.add('--active');
    document.body.style.overflow = 'hidden';

    // Pause Lenis smooth scroll while menu is open
    const lenis = getLenis();
    if (lenis) lenis.stop();

    // Animate menu columns into view
    gsap.fromTo('.component--menu .columns__item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'expo.out', delay: 0.2 }
    );
  }

  function closeMenu() {
    // Animate menu columns out
    gsap.to('.component--menu .columns__item',
      { opacity: 0, y: 30, duration: 0.3, stagger: 0.04, ease: 'expo.in' }
    );

    menu?.classList.remove('--open');
    menuToggle?.classList.remove('--active');
    document.body.style.overflow = '';

    // Resume Lenis smooth scroll
    const lenis = getLenis();
    if (lenis) lenis.start();
  }

  menuToggle?.addEventListener('click', () => {
    menu?.classList.contains('--open') ? closeMenu() : openMenu();
  });
  menuClose?.addEventListener('click', closeMenu);

  // -- Search Toggle --
  const searchBtn = document.querySelector('[data-open="search"]');
  const search = document.querySelector('.component--search');
  const searchClose = document.querySelector('.search__close');

  searchBtn?.addEventListener('click', () => search?.classList.add('--open'));
  searchClose?.addEventListener('click', () => search?.classList.remove('--open'));

  // -- Login Toggle --
  const loginBtn = document.querySelector('[data-open="login"]');
  const login = document.querySelector('.component--login');
  const loginClose = document.querySelector('.login__close');

  loginBtn?.addEventListener('click', () => login?.classList.add('--open'));
  loginClose?.addEventListener('click', () => login?.classList.remove('--open'));

  // -- ESC closes all overlays --
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
      search?.classList.remove('--open');
      login?.classList.remove('--open');
    }
  });
}
