// ==============================================
// Main Entry Point
// ==============================================

import '../css/variables.css';
import '../css/reset.css';
import '../css/base.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/sections.css';
import '../css/overlays.css';
import '../css/responsive.css';

import { initLenis } from './lenis.js';
import { initHeader } from './header.js';
import { initAnimations } from './animations.js';
import { initLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initHeader();
  initAnimations();
  initLoader();
  initProductFilter();
});

function initProductFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.products-grid .card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('--active'));
      btn.classList.add('--active');
      const cat = btn.dataset.category;
      cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
      });
    });
  });
}
