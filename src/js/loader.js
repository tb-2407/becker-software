// ==============================================
// Page Transition / Loader (GSAP-basiert)
// ==============================================

import gsap from 'gsap';

export function initLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.6,
      ease: 'expo.out',
      delay: 0.3,
      onComplete: () => {
        loader.style.display = 'none';
      },
    });
  });
}
