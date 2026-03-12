# Becker Website — Audit Ergebnis

## Phase 0: Code-Audit Findings

### KRITISCH
| # | Problem | Datei | Status |
|---|---------|-------|--------|
| A1 | Menu-Links unsichtbar (GSAP children nicht animiert) | header.js | DONE — gsap.fromTo stagger animation added |
| A2 | Lottie XHR Error (logo-black.json) | header.js, index.html | DONE — removed unused lottie-container div |
| A3 | 32 tote href="#" Links | alle HTML | DONE — all replaced with real URLs |
| A4 | Products: "All (20)" aber 19 Cards | products.html | DONE — changed to "All (19)" |
| NEW | DSGVO: Google Fonts via @import ohne Consent | base.css | DONE — @import removed, falls back to system fonts |
| NEW | Keine aria-label auf Formularen | contact.html, index.html | DONE — aria-labels added |

### HOCH
| # | Problem | Datei | Status |
|---|---------|-------|--------|
| B1 | Animation Section Höhe | sections.css | DONE — set to 500vh |
| B2-B4 | Dunkle Renders (F18-F21, F28, F4, F8) | assets/images/ | DONE |
| NEW | Lenis nicht gestoppt bei Menu-Open | header.js | DONE — getLenis()?.stop()/start() |
| NEW | GSAP warnings auf Nicht-Homepage Seiten | animations.js | DONE — null-check added |
| NEW | Overlay-Backdrop nie gerendert | overlays.css | NOTED — CSS exists, no HTML element. Low impact. |

### MITTEL
| # | Problem | Datei | Status |
|---|---------|-------|--------|
| C1 | Hitbox-Größen unter WCAG 44x44px | header.css, footer.css | DONE — min-height: 44px added |
| C2 | CTA-Buttons fehlend | HTML | DONE |
| C3 | Industries Hover-Bilder | index.html, sections.css | DONE |
| C4 | Platzhalter-Telefonnummer | alle Footer | DONE — phone lines removed |
| NEW | Fehlende meta description | alle HTML | DONE — descriptions added |
| NEW | Hardcoded z-index: 10 on .product-sticky-bar | sections.css | NOTED — acceptable, below header(80) |
| NEW | Inkonsistente Header auf Unterseiten | HTML | NOTED — subpages use simpler header |
| NEW | Unused CSS: --header-z, .video-placeholder, etc. | CSS | NOTED — dead code, no functional impact |

### NIEDRIG
| # | Problem | Status |
|---|---------|--------|
| D1 | Mobile Animation Text Overlay | DONE |
| D2 | Mobile NEW Badge | DONE |
| D3 | Governance Placeholder-Bilder | LATER |
| NEW | Empty nav/aside on subpages | NOTED |
| NEW | No skip-to-content link | LATER |
| NEW | lang="en" vs German content | NOTED |

## Asset-Check
- Images: 35 files, largest 568KB (og-image.png), all WebP under 50KB — OK
- Videos: 2 files, 1.3MB + 2.3MB — OK
- No missing files detected

## Verification Results
- Menu: Opens with stagger animation, all 4 columns visible (opacity: 1)
- Console errors: 0
- Dead links (href="#"): 0 on homepage
- Lenis: Paused on menu open, resumed on close
- GSAP: No warnings on non-homepage pages
- Google Fonts: Removed, site uses system font fallback
- Touch targets: 44px minimum on header icons and footer links
