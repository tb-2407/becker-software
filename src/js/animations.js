// ==============================================
// GSAP / ScrollTrigger Animationen
// Basiert auf ref/gsap-animations.js
// ==============================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // -- 1. Hero: Floating-Elemente fade in --
  if (document.querySelector('.component--hero')) {
    gsap.from('.component--hero .floating', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.15,
      delay: 0.8, // nach Loader
    });
  }

  // -- 2. Animation Section: Sticky + ClipPath + Video Scrub --
  const animSection = document.querySelector('.component--animation');
  if (animSection) {
    const animVideo = document.querySelector('.animation__video');

    // ClipPath reveal — subtle: small inset fades to fullscreen
    gsap.fromTo('.component--animation .animation__video', {
      clipPath: 'inset(4% round 10px)',
    }, {
      clipPath: 'inset(0% round 0px)',
      ease: 'none',
      scrollTrigger: {
        trigger: '.component--animation',
        start: 'top 80%',
        end: '20% top',
        scrub: true,
      },
    });

    // Video playback coupled to scroll
    if (animVideo) {
      const initVideoScrub = () => {
        const duration = animVideo.duration;
        if (!duration || isNaN(duration)) return;

        ScrollTrigger.create({
          trigger: '.component--animation',
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const targetTime = self.progress * duration;
            if (Math.abs(animVideo.currentTime - targetTime) > 0.05) {
              animVideo.currentTime = targetTime;
            }
          },
        });
      };

      if (animVideo.readyState >= 1) {
        initVideoScrub();
      } else {
        animVideo.addEventListener('loadedmetadata', initVideoScrub, { once: true });
      }
    }

    // Title 1: fade in
    gsap.fromTo('.component--animation .title--1', {
      opacity: 0, y: 60,
    }, {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: '.component--animation',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });

    // Title 2: fade in (delayed)
    gsap.fromTo('.component--animation .title--2', {
      opacity: 0, y: 60,
    }, {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: '.component--animation',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
      },
    });
  }

  // -- 3. Industries: product count reveal on scroll --
  // (Hover-based, handled via CSS)

  // -- 4. Text Split: alle .split Elemente --
  document.querySelectorAll('.title.split').forEach(title => {
    gsap.from(title, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none none',
      },
    });
  });

  // -- 5. Generic Section Fade-In --
  document.querySelectorAll('.component:not(.component--header):not(.component--footer):not(.component--hero):not(.component--animation)').forEach(section => {
    const elements = section.querySelectorAll('.title, .label, .button, .columns__item, .card, .industries__item, .text');
    if (elements.length === 0) return;

    gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // -- 6. Card Hover: Image Scale (GSAP-powered for smoothness) --
  document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('.card__image');
    if (!img) return;

    card.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, duration: 0.6, ease: 'expo.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.6, ease: 'expo.out' });
    });
  });
}
