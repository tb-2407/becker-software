# Becker Software — Asset-Liste mit Generierungs-Prompts

> Ersetzt die alte relats asset-list.md
> Alle Assets für software-becker.com, mit exakten Specs und Copy-Paste-Prompts für KI-Generierung.
> Tools: **Nano Banana** (Bilder), **Grok** (Videos), **SVG manuell** (Lottie/Favicon)

---

## 1. Videos (2)

| # | Dateiname | Auflösung | Dauer | Seite | Tool |
|---|-----------|-----------|-------|-------|------|
| V1 | `hero-bg.mp4` | 1920x1080 | 15-30s Loop | index.html Hero | Grok |
| V2 | `animation-reel.mp4` | 1920x1080 | 10-20s Loop | index.html Animation | Grok |

### V1 — Hero Background Video
**Prompt (Grok):**
```
Cinematic dark tech atmosphere video loop, 1920x1080, 15 seconds seamless loop.
Slow camera movement over a developer workspace at night. Deep dark background (#0A0A0A),
soft orange accent lighting (#FF5710). Show: glowing code on a monitor, subtle particle
effects, smooth UI animations floating in space. Moody, minimal, premium feel.
No text overlays. Muted, no audio. Professional software company aesthetic.
```

### V2 — Animation Reel (Sticky Section)
**Prompt (Grok):**
```
Screen recording style video loop, 1920x1080, 10 seconds seamless loop.
Shows a website being built in real-time: code appearing line by line on the left,
live preview rendering on the right. Dark editor theme, orange syntax highlights.
Clean, fast, satisfying to watch. Minimal UI chrome. The website preview shows a
modern landing page taking shape. No faces, just hands occasionally typing.
Moody overhead shot. No audio.
```

**Video-Specs:**
- Codec: H.264 (MP4) + VP9 (WebM)
- Framerate: 24-30fps
- Bitrate: 2-4 Mbps
- Audio: Kein Audio (muted autoplay)
- Max: < 5MB pro Video
- Poster: Erstes Frame als JPG exportieren

---

## 2. Bilder — Homepage (9)

| # | Dateiname | Auflösung | Ratio | Seite/Section |
|---|-----------|-----------|-------|---------------|
| I1 | `notch-thumb.jpg` | 112x112 | 1:1 | Hero (floating notch) |
| I2 | `featured-project-web.jpg` | 800x800 | 1:1 | Featured Grid |
| I3 | `featured-project-ios.jpg` | 800x800 | 1:1 | Featured Grid |
| I4 | `featured-project-dashboard.jpg` | 800x800 | 1:1 | Featured Grid |
| I5 | `featured-project-automation.jpg` | 800x800 | 1:1 | Featured Grid |
| I6 | `about-workspace.jpg` | 960x640 | 3:2 | Combo Section |
| I7 | `blog-code.jpg` | 640x440 | ~3:2 | Posts/Blog |
| I8 | `blog-design.jpg` | 640x440 | ~3:2 | Posts/Blog |
| I9 | `blog-tech.jpg` | 640x440 | ~3:2 | Posts/Blog |

### I1 — Notch Thumbnail
**Prompt (Nano Banana):**
```
Minimal app icon design, 112x112 pixels, dark background #0A0A0A.
A stylized letter "B" in orange (#FF5710) with a subtle glow effect.
Modern, geometric, flat design. Could be a software company logo mark.
Clean edges, no gradients, just the letter on dark.
```

### I2 — Featured Project: Website
**Prompt (Nano Banana):**
```
Realistic MacBook Pro mockup on a dark desk, 800x800, square crop.
Screen shows a modern minimalist business website with dark theme and orange accents.
Clean typography, hero section visible. Ambient lighting from the screen.
Dark moody atmosphere. Shot from slight angle. Professional product photography style.
```

### I3 — Featured Project: iOS App
**Prompt (Nano Banana):**
```
iPhone 15 Pro mockup floating on dark background, 800x800, square crop.
Screen displays a clean iOS app interface with dark mode, orange accent buttons,
card-based layout. Professional app design. Subtle shadow beneath phone.
Minimal, premium feel. No hands holding the phone.
```

### I4 — Featured Project: Dashboard
**Prompt (Nano Banana):**
```
Wide monitor showing a data dashboard, 800x800, square crop.
Dark UI with charts, graphs, KPI cards in orange and white on near-black background.
Modern analytics dashboard. Ambient desk lighting. Clean minimal workspace.
Professional software product screenshot aesthetic.
```

### I5 — Featured Project: Automation
**Prompt (Nano Banana):**
```
Abstract visualization of connected workflow nodes, 800x800, square crop.
Dark background (#0A0A0A), orange (#FF5710) and white connection lines between
circular nodes. Resembles an n8n or Zapier automation flow but more artistic.
Glowing connections, subtle grid in background. Tech/futuristic feel.
```

### I6 — About / Workspace
**Prompt (Nano Banana):**
```
Developer workspace overhead shot, 960x640, 3:2 ratio.
Clean minimal desk with MacBook Pro, external monitor showing code,
mechanical keyboard, coffee cup. Dark desk surface, warm ambient lighting.
Professional but lived-in. Moody, editorial photography style.
Orange desk lamp or accent light.
```

### I7 — Blog: Code
**Prompt (Nano Banana):**
```
Close-up of code on a dark screen, 640x440, 3:2 ratio.
JavaScript/TypeScript code with orange syntax highlighting on dark editor theme.
Shallow depth of field, parts slightly blurred. Moody developer aesthetic.
No readable text, just the feel of clean code. Dark ambient background.
```

### I8 — Blog: Design
**Prompt (Nano Banana):**
```
UI design mockup on screen, 640x440, 3:2 ratio.
Shows a Figma-style design tool with a website layout being created.
Dark interface, orange and white UI elements. Grid lines visible.
Clean, professional design process shot. Moody lighting.
```

### I9 — Blog: Tech
**Prompt (Nano Banana):**
```
Abstract tech visual, 640x440, 3:2 ratio.
Circuit board or chip close-up with orange glow highlights on dark background.
Or: server room with orange LED indicators in darkness.
Futuristic, clean, minimal. Professional tech blog header image.
```

---

## 3. Bilder — Products/Portfolio (7 — je 1 pro Kategorie)

| # | Dateiname | Auflösung | Ratio | Kategorie |
|---|-----------|-----------|-------|-----------|
| I10 | `product-website.jpg` | 640x440 | ~3:2 | Websites |
| I11 | `product-ios-app.jpg` | 640x440 | ~3:2 | iOS Apps |
| I12 | `product-macos-app.jpg` | 640x440 | ~3:2 | macOS Apps |
| I13 | `product-watchos.jpg` | 640x440 | ~3:2 | watchOS |
| I14 | `product-web-app.jpg` | 640x440 | ~3:2 | Web Apps |
| I15 | `product-automation.jpg` | 640x440 | ~3:2 | Automation |
| I16 | `product-service.jpg` | 640x440 | ~3:2 | Laufende Betreuung |

> Hinweis: Mehrere Produkte pro Kategorie teilen sich dasselbe Kategorie-Bild,
> oder du generierst pro Produkt ein eigenes (dann ~20 Bilder). Start mit 7.

### I10 — Websites
**Prompt (Nano Banana):**
```
Laptop and phone side by side showing same responsive website, 640x440.
Business website with navigation, hero section, content sections. Dark theme,
orange accents. Professional multi-device mockup on dark surface.
Clean, minimal, premium feel. No text overlays.
```

### I11 — iOS App
**Prompt (Nano Banana):**
```
Three iPhone screens in a row showing different app screens, 640x440.
Dark mode iOS app: onboarding, main screen, detail view. Orange accent color.
Clean SwiftUI-style interface. Floating on dark background with subtle shadows.
```

### I12 — macOS App
**Prompt (Nano Banana):**
```
MacBook Pro showing a native macOS application, 640x440.
Desktop app with sidebar navigation, main content area, toolbar.
Dark mode, orange highlights. Professional productivity software look.
Clean, minimal desk environment.
```

### I13 — watchOS
**Prompt (Nano Banana):**
```
Apple Watch Ultra on dark background, 640x440.
Watch face showing a custom complication with orange accent data.
Clean watchOS interface, health or fitness data visible.
Floating on dark surface with subtle glow. Premium product photography.
```

### I14 — Web App
**Prompt (Nano Banana):**
```
Browser window showing an interactive dashboard application, 640x440.
Dark UI with charts, data tables, sidebar navigation. Orange accent buttons.
Modern SaaS-style web application. Clean, professional. Dark background.
```

### I15 — Automation
**Prompt (Nano Banana):**
```
n8n-style workflow automation interface, 640x440.
Connected nodes with arrows showing data flow: Email → Process → Database → Notify.
Dark canvas, orange and white nodes. Clean workflow visualization.
Professional automation platform aesthetic.
```

### I16 — Services / Betreuung
**Prompt (Nano Banana):**
```
Abstract service concept: wrench icon, shield, clock, and checkmark arranged
in a minimal grid on dark background, 640x440.
Orange and white icons on #0A0A0A. Flat, geometric style.
Represents ongoing maintenance, hosting, and support.
```

---

## 4. Bilder — Product Detail (6)

| # | Dateiname | Auflösung | Ratio | Beschreibung |
|---|-----------|-----------|-------|-------------|
| I17 | `product-hero.jpg` | 1200x800 | 3:2 | Großer Produkt-Mockup |
| I18 | `product-gallery.jpg` | 900x600 | 3:2 | Feature-Detail |
| I19 | `product-related-1.jpg` | 540x360 | 3:2 | Related: Web |
| I20 | `product-related-2.jpg` | 540x360 | 3:2 | Related: App |
| I21 | `product-related-3.jpg` | 540x360 | 3:2 | Related: Automation |
| I22 | `product-related-4.jpg` | 540x360 | 3:2 | Related: Dashboard |

### I17 — Product Hero (Large)
**Prompt (Nano Banana):**
```
Large MacBook Pro mockup showing a modern website, 1200x800, 3:2 ratio.
Centered on dark background. Website on screen has dark theme with orange accents,
visible navigation, hero section with image, content cards below.
Premium product photography style. Subtle reflection on surface.
```

### I18 — Product Gallery Detail
**Prompt (Nano Banana):**
```
Close-up of a website feature: a pricing table or feature comparison grid, 900x600.
Dark UI, orange highlights on selected plan. Clean typography.
Mockup floating on dark background. Sharp, detailed, professional.
```

### I19-I22 — Related Products (4x)
**Prompt (Nano Banana) — adjust content per image:**
```
Small product thumbnail mockup, 540x360, 3:2 ratio.
[I19: Browser showing a landing page / I20: iPhone with app /
 I21: Workflow automation diagram / I22: Dashboard on tablet]
Dark background, minimal, clean. Orange accent color.
Professional, consistent style with other product images.
```

---

## 5. Bilder — About/Company (3)

| # | Dateiname | Auflösung | Ratio | Beschreibung |
|---|-----------|-----------|-------|-------------|
| I23 | `about-hero.jpg` | 960x640 | 3:2 | Portrait oder Workspace |
| I24 | `about-stats.jpg` | 1200x800 | 3:2 | Code/Monitor Scene |
| I25 | `about-innovation.jpg` | 900x600 | 3:2 | Methodik/Planning |

### I23 — About Hero
**Prompt (Nano Banana):**
```
Professional developer portrait from behind, sitting at a multi-monitor setup, 960x640.
Dark room, screens glowing with code and designs. Orange accent lighting.
Silhouette style, not showing face clearly. Atmospheric, moody.
Solo developer working late. Premium editorial photography.
```

### I24 — Statistics Background
**Prompt (Nano Banana):**
```
Dual monitor coding setup with visible lines of code, 1200x800.
Dark room, blue-orange color grading. Mechanical keyboard in foreground.
Clean desk, professional developer workspace. Atmospheric lighting.
Statistics and numbers could overlay this image.
```

### I25 — Innovation / Methodology
**Prompt (Nano Banana):**
```
Whiteboard or iPad with wireframes and flowcharts, 900x600.
Planning session: sticky notes, user flows, UI sketches.
Dark desk surface, warm lighting. Orange marker or highlights.
Behind-the-scenes of the design process. Clean, organized.
```

---

## 6. Bilder — Arbeitsweise/Process (4)

| # | Dateiname | Auflösung | Ratio | Beschreibung |
|---|-----------|-----------|-------|-------------|
| I26 | `process-briefing.jpg` | 560x560 | 1:1 | Step 1: Briefing |
| I27 | `process-concept.jpg` | 560x560 | 1:1 | Step 2: Konzept |
| I28 | `process-build.jpg` | 560x560 | 1:1 | Step 3: Build |
| I29 | `process-launch.jpg` | 560x560 | 1:1 | Step 4: Launch |

### I26 — Process: Briefing
**Prompt (Nano Banana):**
```
Minimal icon-style illustration, 560x560, square.
Video call or meeting concept: two speech bubbles, a notepad, and a pen.
Dark background (#0A0A0A), orange (#FF5710) and white elements only.
Flat, geometric, modern iconography style. Clean lines, no gradients.
```

### I27 — Process: Concept
**Prompt (Nano Banana):**
```
Minimal icon-style illustration, 560x560, square.
Wireframe and flowchart concept: browser outline with grid layout,
connected boxes with arrows. Dark background (#0A0A0A),
orange and white elements. Flat, geometric, modern. Clean lines.
```

### I28 — Process: Build
**Prompt (Nano Banana):**
```
Minimal icon-style illustration, 560x560, square.
Code and development concept: terminal window with code lines, gear icon.
Dark background (#0A0A0A), orange and white elements only.
Flat, geometric, modern iconography style. Clean lines, no gradients.
```

### I29 — Process: Launch
**Prompt (Nano Banana):**
```
Minimal icon-style illustration, 560x560, square.
Rocket or launch concept: upward arrow, globe icon, checkmark.
Dark background (#0A0A0A), orange (#FF5710) and white elements only.
Flat, geometric, modern iconography style. Clean lines, no gradients.
```

---

## 7. Bilder — Tech Stack (2)

| # | Dateiname | Auflösung | Ratio | Beschreibung |
|---|-----------|-----------|-------|-------------|
| I30 | `techstack-overview.jpg` | 960x640 | 3:2 | Tool-Logos Collage |
| I31 | `techstack-detail.jpg` | 960x640 | 3:2 | Code Editor / Terminal |

### I30 — Tech Stack Overview
**Prompt (Nano Banana):**
```
Abstract tech grid visualization, 960x640, 3:2 ratio.
Floating technology logos/icons in a 3D grid: React, Swift, Node.js,
n8n styled as glowing orange hexagons on dark background.
Connected with subtle lines. Futuristic, clean, minimal.
Dark (#0A0A0A) with orange (#FF5710) accent glow.
```

### I31 — Tech Stack Detail
**Prompt (Nano Banana):**
```
Split screen: VS Code on left, Terminal on right, 960x640.
Dark editor theme with orange syntax highlights. Terminal showing
npm commands or git log. Professional developer environment.
Clean, no clutter. Moody ambient lighting.
```

---

## 8. Bilder — Zusammenarbeit (1)

| # | Dateiname | Auflösung | Ratio | Beschreibung |
|---|-----------|-----------|-------|-------------|
| I32 | `collaboration.jpg` | 960x640 | 3:2 | Collaboration Visual |

### I32 — Collaboration
**Prompt (Nano Banana):**
```
Abstract handshake or connection concept, 960x640, 3:2 ratio.
Two hands reaching toward each other or two puzzle pieces connecting.
Dark background, orange and white elements.
Minimalist, professional. Partnership and collaboration theme.
Or: laptop screen showing a Zoom/video call interface.
```

---

## 9. Sonstiges (2)

| # | Dateiname | Typ | Größe | Beschreibung |
|---|-----------|-----|-------|-------------|
| A1 | `logo-animation.json` | Lottie JSON | <50KB | Becker "B" Logo Animation |
| A2 | `favicon.svg` | SVG | <5KB | Favicon |

### A1 — Lottie Logo Animation
**Methode:** Manuell erstellen oder LottieFiles.com
```
Erstelle in After Effects oder online (LottieFiles Creator):
- Buchstabe "B" in Space Grotesk Bold
- Animation: Draw-on / Stroke reveal, 2 Sekunden, 60fps
- Farbe: Weiß (#FFFFFF) für dunklen Header, Schwarz (#1C1C1C) für hellen
- Export als Lottie JSON via Bodymovin
- Alternativ: Einfaches SVG "B" ohne Animation als Fallback
```

### A2 — Favicon
**Methode:** SVG manuell erstellen
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0A0A0A"/>
  <text x="16" y="23" text-anchor="middle"
        font-family="'Space Grotesk', sans-serif" font-weight="700"
        font-size="22" fill="#FF5710">B</text>
</svg>
```

---

## 10. Zusammenfassung

| Kategorie | Anzahl | Tool | Format |
|-----------|--------|------|--------|
| Videos | 2 | Grok | MP4 + WebM + Poster-JPG |
| Bilder Homepage | 9 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder Products | 7 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder Product Detail | 6 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder About | 3 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder Arbeitsweise | 4 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder Tech Stack | 2 | Nano Banana | JPG/WebP (2x Retina) |
| Bilder Zusammenarbeit | 1 | Nano Banana | JPG/WebP (2x Retina) |
| Lottie + Favicon | 2 | Manuell/LottieFiles | JSON + SVG |
| **Gesamt** | **36** | | |

---

## 11. Ordnerstruktur (Ziel)

```
public/
  assets/
    video/
      hero-bg.mp4
      hero-bg.webm
      hero-bg-poster.jpg
      animation-reel.mp4
      animation-reel.webm
      animation-reel-poster.jpg
    img/
      homepage/
        notch-thumb.jpg
        featured-project-web.jpg
        featured-project-ios.jpg
        featured-project-dashboard.jpg
        featured-project-automation.jpg
        about-workspace.jpg
        blog-code.jpg
        blog-design.jpg
        blog-tech.jpg
      products/
        product-landing-page.jpg
        product-business-web.jpg
        product-ios-app.jpg
        product-macos-app.jpg
        product-automation.jpg
        product-chatbot.jpg
      product-detail/
        product-hero.jpg
        product-gallery.jpg
        product-related-1.jpg
        product-related-2.jpg
        product-related-3.jpg
        product-related-4.jpg
      company/
        about-hero.jpg
        about-stats.jpg
        about-innovation.jpg
      process/
        process-briefing.jpg
        process-concept.jpg
        process-build.jpg
        process-launch.jpg
      techstack/
        techstack-overview.jpg
        techstack-detail.jpg
      collaboration/
        collaboration.jpg
    lottie/
      logo-animation.json
    favicon.svg
```

---

## 12. Workflow — So generierst du die Assets

### Bilder (Nano Banana)
1. Geh zu https://nanobananapro.com (oder aktuelle URL)
2. Kopiere den Prompt aus dieser Liste
3. Setze die gewünschte Auflösung
4. Generiere, wähle beste Variante
5. Download als JPG
6. Optional: In Squoosh.app auf WebP komprimieren (Qualität 80%)
7. Speichere in den richtigen Unterordner

### Videos (Grok)
1. Geh zu https://x.com/i/grok (oder grok.x.ai)
2. Nutze die Video-Generation mit dem Prompt
3. Download als MP4
4. Konvertiere zu WebM: `ffmpeg -i hero-bg.mp4 -c:v libvpx-vp9 -crf 30 hero-bg.webm`
5. Extrahiere Poster: `ffmpeg -i hero-bg.mp4 -vframes 1 hero-bg-poster.jpg`

### Lottie
1. Erstelle in LottieFiles Creator oder After Effects + Bodymovin
2. Oder nutze ein einfaches SVG als Fallback (kein Animation nötig für V1)

### Qualitätskontrolle
- Alle Bilder müssen im selben visuellen Stil sein (dark, orange accents, moody)
- Konsistenter Look über alle Assets hinweg
- Teste jedes Bild im Browser bei der richtigen CSS-Größe
