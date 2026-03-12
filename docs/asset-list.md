# Relats.com Rebuild — Asset-Liste

> Alle Assets die erstellt/beschafft werden muessen, mit technischen Spezifikationen.
> Ziel: Diese Liste zusammen mit Claude.ai nutzen, um Placeholder-Assets zu generieren.

---

## 1. Videos

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | Dauer | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-------|-------|---------|-------------|
| V1 | `hero-bg.mp4` | MP4 (H.264) | 1920x1080 | 16:9 | 15-30s Loop | index.html | Hero | Fullscreen Hintergrund-Video. Dunkler Ton, atmosphaerisch. Zeigt Industrieszenen/Produkte. Muss als Loop funktionieren (nahtloser Uebergang). |
| V2 | `animation-reel.mp4` | MP4 (H.264) | 1920x1080 | 16:9 | 10-20s Loop | index.html | Animation/Sticky | Video im Sticky-Scroll-Bereich. Zeigt Produktanimation oder Markenfilm-Ausschnitt. Loop-faehig. |

**Video-Hinweise:**
- Komprimierung: H.264, CRF 23-28 fuer Web-Optimierung
- Zusaetzlich WebM-Version (VP9) fuer bessere Browser-Komprimierung
- Poster-Frame als JPG extrahieren (gleiches Format wie Video)
- Alle Videos muessen `playsinline`, `muted`, `loop` unterstuetzen

---

## 2. Bilder — Homepage (index.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I1 | `notch-card-thumb.jpg` | JPG/WebP | 112x112 | 1:1 | 56x56 CSS | index.html | Hero (floating) | Kleines Thumbnail im Notch-Card. Warmer Gradient, Produktvorschau. Wird bei 2x Retina angezeigt. |
| I2 | `featured-header.jpg` | JPG/WebP | 1440x800 | ~16:9 | 400px CSS | index.html | Featured (Header-Bild) | Grosses Bild ueber der Featured-Section. Industrielle Szene oder Produktuebersicht. |
| I3 | `featured-product-1.jpg` | JPG/WebP | 800x800 | ~1:1 | 400px CSS | index.html | Featured Grid | Produkt-Card Bild 1. Zeigt ein Relats-Produkt (z.B. Kabelschutz). |
| I4 | `featured-product-2.jpg` | JPG/WebP | 800x800 | ~1:1 | 400px CSS | index.html | Featured Grid | Produkt-Card Bild 2. |
| I5 | `featured-product-3.jpg` | JPG/WebP | 800x800 | ~1:1 | 400px CSS | index.html | Featured Grid | Produkt-Card Bild 3. |
| I6 | `featured-product-4.jpg` | JPG/WebP | 800x800 | ~1:1 | 400px CSS | index.html | Featured Grid | Produkt-Card Bild 4. |
| I7 | `combo-image-1.jpg` | JPG/WebP | 960x640 | 3:2 | 320px CSS | index.html | Combo Section | Linke Seite der Dual-Card-Section. Industrielle/Workplace-Szene. |
| I8 | `combo-image-2.jpg` | JPG/WebP | 960x640 | 3:2 | 320px CSS | index.html | Combo Section | Rechte Seite der Dual-Card-Section. |
| I9 | `news-post-1.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | index.html | Posts/News | Blog-/News-Artikelbild 1. |
| I10 | `news-post-2.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | index.html | Posts/News | Blog-/News-Artikelbild 2. |
| I11 | `news-post-3.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | index.html | Posts/News | Blog-/News-Artikelbild 3. |

---

## 3. Bilder — Products (products.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I12 | `product-card-1.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 1 (z.B. Cable Protection) |
| I13 | `product-card-2.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 2 (z.B. Heat Shrink) |
| I14 | `product-card-3.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 3 |
| I15 | `product-card-4.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 4 |
| I16 | `product-card-5.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 5 |
| I17 | `product-card-6.jpg` | JPG/WebP | 640x440 | ~3:2 | 220px CSS | products.html | Produkt-Grid | Produktkategorie-Bild 6 |

---

## 4. Bilder — Product Detail (product-detail.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I18 | `product-hero.jpg` | JPG/WebP | 1200x800 | 3:2 | 400px CSS | product-detail.html | Hero | Grosses Produktbild, Hauptansicht. Weisser/neutraler Hintergrund. |
| I19 | `product-gallery-1.jpg` | JPG/WebP | 900x600 | 3:2 | 300px CSS | product-detail.html | Gallery | Produktdetail-Aufnahme / Anwendungsszene. |
| I20 | `product-related-1.jpg` | JPG/WebP | 540x360 | 3:2 | 180px CSS | product-detail.html | Related Products | Verwandtes Produkt 1. |
| I21 | `product-related-2.jpg` | JPG/WebP | 540x360 | 3:2 | 180px CSS | product-detail.html | Related Products | Verwandtes Produkt 2. |
| I22 | `product-related-3.jpg` | JPG/WebP | 540x360 | 3:2 | 180px CSS | product-detail.html | Related Products | Verwandtes Produkt 3. |
| I23 | `product-related-4.jpg` | JPG/WebP | 540x360 | 3:2 | 180px CSS | product-detail.html | Related Products | Verwandtes Produkt 4. |

---

## 5. Bilder — Company (company.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I24 | `company-about.jpg` | JPG/WebP | 960x640 | 3:2 | 320px CSS | company.html | About | Firmengebaeude oder Team-Foto. Professionell, warm. |
| I25 | `company-stats.jpg` | JPG/WebP | 1200x800 | 3:2 | 400px CSS | company.html | Statistics | Grosses Bild neben Statistik-Zahlen. Produktion/Fertigung. |
| I26 | `company-innovation.jpg` | JPG/WebP | 900x600 | 3:2 | 300px CSS | company.html | Innovation | Labor- oder R&D-Szene. |

---

## 6. Bilder — Governance (governance.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I27 | `team-member-1.jpg` | JPG/WebP | 560x560 | 1:1 | 280px CSS | governance.html | Team Grid | Portraet-Foto, CEO/Geschaeftsfuehrer. Professionelles Headshot. |
| I28 | `team-member-2.jpg` | JPG/WebP | 560x560 | 1:1 | 280px CSS | governance.html | Team Grid | Portraet-Foto, CFO/Finanzen. |
| I29 | `team-member-3.jpg` | JPG/WebP | 560x560 | 1:1 | 280px CSS | governance.html | Team Grid | Portraet-Foto, CTO/Technik. |
| I30 | `team-member-4.jpg` | JPG/WebP | 560x560 | 1:1 | 280px CSS | governance.html | Team Grid | Portraet-Foto, COO/Operations. |

---

## 7. Bilder — Sustainability (sustainability.html)

| # | Dateiname | Typ | Aufloesung | Seitenverhaeltnis | CSS-Hoehe | Seite | Section | Beschreibung |
|---|-----------|-----|------------|-------------------|-----------|-------|---------|-------------|
| I31 | `sustainability-1.jpg` | JPG/WebP | 960x640 | 3:2 | 320px CSS | sustainability.html | Section 1 | Natur/Umwelt-Szene oder gruene Fertigung. |
| I32 | `sustainability-2.jpg` | JPG/WebP | 960x640 | 3:2 | 320px CSS | sustainability.html | Section 2 | Recycling/Kreislaufwirtschaft oder Solar/Erneuerbare. |

---

## 8. Animationen & Icons

| # | Dateiname | Typ | Groesse | Seite | Beschreibung |
|---|-----------|-----|---------|-------|-------------|
| A1 | `logo-animation.json` | Lottie JSON | 46x46 CSS | Global (Header) | Lottie-Animation fuer das Logo. Spielt beim Hover oder Page-Load. Farbe: currentColor oder #1C1C1C / #FFFFFF je nach Header-State. |
| A2 | `favicon.svg` | SVG | 32x32 | Global | Favicon im SVG-Format. Relats "R" oder Logo-Mark. |

---

## 9. Zusammenfassung

| Kategorie | Anzahl | Formate |
|-----------|--------|---------|
| Videos | 2 | MP4 + WebM + Poster-JPG |
| Bilder (Homepage) | 11 | JPG/WebP (2x fuer Retina) |
| Bilder (Products) | 6 | JPG/WebP (2x fuer Retina) |
| Bilder (Product Detail) | 6 | JPG/WebP (2x fuer Retina) |
| Bilder (Company) | 3 | JPG/WebP (2x fuer Retina) |
| Bilder (Governance) | 4 | JPG/WebP (2x fuer Retina) |
| Bilder (Sustainability) | 2 | JPG/WebP (2x fuer Retina) |
| Animationen/Icons | 2 | Lottie JSON + SVG |
| **Gesamt** | **36** | |

---

## 10. Technische Anforderungen

### Bilder
- **Format:** JPG fuer Fotos, WebP als optimierte Alternative, PNG nur fuer Transparenz
- **Retina:** Alle Bilder in 2x der CSS-Groesse liefern (in Tabelle bereits beruecksichtigt)
- **Komprimierung:** JPG Qualitaet 80-85%, WebP Qualitaet 75-80%
- **Farbprofil:** sRGB
- **Max. Dateigrösse:** Bilder < 200KB, Hero-Bilder < 400KB

### Videos
- **Codec:** H.264 (MP4) + VP9 (WebM)
- **Framerate:** 24-30fps
- **Bitrate:** 2-4 Mbps (1080p Web)
- **Audio:** Kein Audio (muted autoplay)
- **Max. Dateigrösse:** < 5MB pro Video
- **Poster:** Erstes Frame als JPG exportieren

### Lottie
- **Format:** Lottie JSON (bodymovin export)
- **Groesse:** < 50KB
- **Farben:** Sollte `currentColor` unterstuetzen oder nur Weiss/Schwarz verwenden

### Ordnerstruktur
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
        notch-card-thumb.jpg
        featured-header.jpg
        featured-product-1.jpg ... 4.jpg
        combo-image-1.jpg ... 2.jpg
        news-post-1.jpg ... 3.jpg
      products/
        product-card-1.jpg ... 6.jpg
      product-detail/
        product-hero.jpg
        product-gallery-1.jpg
        product-related-1.jpg ... 4.jpg
      company/
        company-about.jpg
        company-stats.jpg
        company-innovation.jpg
      governance/
        team-member-1.jpg ... 4.jpg
      sustainability/
        sustainability-1.jpg ... 2.jpg
    lottie/
      logo-animation.json
    favicon.svg
```
