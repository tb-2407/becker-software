// ==============================================
// Menu Overlay
// Wird in Phase 5 implementiert
// ==============================================

export function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.component--menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('--open');
    toggle.classList.toggle('--active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}
