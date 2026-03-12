# Relats.com Rebuild — Projekt-Design-Tokens

## Tech-Stack
- Vite (vanilla JS, kein Framework)
- GSAP + ScrollTrigger (Animationen)
- Lenis (Smooth Scrolling)
- Lottie-Web (Logo-Animation)
- Reines HTML/CSS/JS

## Design-Tokens

### Farben — NUR DIESE VERWENDEN
| Token | Wert | Verwendung |
|-------|------|------------|
| `--color-dark` | `#1C1C1C` | Text, dunkle Sections, Header scrolled |
| `--color-orange` | `#FF5710` | Akzent, CTAs, Hero-BG Products |
| `--color-beige` | `#E8E4DF` | Warme Section-Backgrounds |
| `--color-loader-bg` | `#EAE4DF` | Page Transition Overlay |
| `--color-white` | `#FFFFFF` | Text auf Dunkel, Buttons |

### Fonts
| Token | Wert | Verwendung |
|-------|------|------------|
| `--font-primary` | `'Inter', Helvetica, Arial, sans-serif` | Body, Headlines, Buttons (Roobert-Alternative) |
| `--font-mono` | `'DM Mono', Georgia, 'Times New Roman', serif` | Labels, Tags, Kategorien |

### Typografie-Skala
| Token | Wert | Element |
|-------|------|---------|
| `--text-jumbo` | `clamp(48px, 5vw, 69px)` | `.title --jumbo` |
| `--text-xlarge` | `clamp(40px, 4vw, 56px)` | `.title --xlarge` |
| `--text-large` | `clamp(32px, 3.5vw, 40px)` | `.title --large` |
| `--text-medium` | `clamp(20px, 2vw, 24px)` | `.title --medium` |
| `--text-small` | `clamp(16px, 1.5vw, 20px)` | `.title --small` |
| `--text-xsmall` | `14px` | `.title --xsmall` |
| `--text-label` | `12px` | `.label` (DM Mono, uppercase) |
| `--text-body` | `16px` | Body text |
| `--text-button` | `14px` | Buttons |

### Layout
| Token | Wert |
|-------|------|
| `--container-margin` | `17.25px` |
| `--container-max-width` | `calc(100% - 34.5px)` |
| `--section-padding-y` | `120px` |

### Button
| Token | Wert |
|-------|------|
| `--btn-height` | `46px` |
| `--btn-radius` | `17.25px` |
| `--btn-padding-x` | `24px` |
| `--btn-font-size` | `14px` |
| `--btn-transition` | `0.6s cubic-bezier(0.16, 1, 0.3, 1)` |

### Card
| Token | Wert |
|-------|------|
| `--card-radius` | `10px` |
| `--card-image-scale-hover` | `1.05` |

### Header
| Token | Wert |
|-------|------|
| `--header-height` | `69px` |
| `--header-z` | `80` |

### Z-Index Scale
| Token | Wert |
|-------|------|
| `--z-header` | `80` |
| `--z-menu` | `90` |
| `--z-loader` | `100` |

### Animation
| Token | Wert |
|-------|------|
| `--ease-default` | `cubic-bezier(0.16, 1, 0.3, 1)` (expo.out) |
| `--ease-in-out` | `cubic-bezier(0.87, 0, 0.13, 1)` (expo.inOut) |
| `--duration-fast` | `0.4s` |
| `--duration-normal` | `0.6s` |
| `--duration-slow` | `1.2s` |

### Breakpoints
| Token | Wert | Beschreibung |
|-------|------|-------------|
| `--bp-phone-small` | `400px` | Kleine Phones |
| `--bp-phone` | `576px` | Phones |
| `--bp-tablet` | `768px` | Tablet Portrait |
| `--bp-tablet-landscape` | `1024px` | Tablet Landscape |
| `--bp-desktop` | `1100px` | **HAUPT-BREAKPOINT** |
| `--bp-wide` | `1920px` | Ultrawide |

## Regeln
- KEINE Farben/Fonts erfinden — nur die oben definierten verwenden
- Alle Farben/Sizes als CSS Custom Properties, NIEMALS hardcoden
- Semantic HTML5, WCAG 2.1 AA
- Conventional Commits (feat:, fix:, docs:, style:, refactor:)
- Container: calc(100% - 34.5px) mit 17.25px Margin
- Buttons: Pill-Form, 46px height, 17.25px radius
- Labels: DM Mono, uppercase, letter-spacing 0.05em
