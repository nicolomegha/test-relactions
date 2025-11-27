## 1. Panoramica Tecnica del Progetto

Il progetto è una landing page altamente visuale che include:

* Header sticky con effetti al cambio scroll
* Hero slider con transizione **cross-fade** basato su Splide.js
* Layout creativo delle immagini con absolute positioning
* Effetto **marquee** custom in CSS/JS
* Sezione con effetto **parallasse** in JavaScript
* Sezioni contenutistiche responsabili basate sulla griglia Bootstrap
* Footer avanzato con comportamento mobile differenziato
* Responsive design completo: mobile-first e breakpoints specifici
* Gestione immagini con **srcset** e **sizes** su tutte le sezioni

---

# 2. Struttura della Repository

```
/project-root
│
├── index.html
├── /css
│   └── style.css
├── /js
│   └── app.js
├── /images
│   ├── hero-1.jpeg
│   ├── hero-2.jpg
│   ├── hero-3.jpg
│   ├── top-left.jpg
│   ├── top-left@2x.jpg
│   ├── ...
└── README.md
```

### Decisioni Tecniche

* **HTML e CSS completamente custom**, senza framework aggiuntivi
* **JavaScript Vanilla** → nessuna dipendenza esterna extra
* **Bootstrap usato SOLO per la griglia** (no componenti, no helpers)
* **Splide.js** per l'hero slider (lightweight, moderno, semplice da montare)

---

# 3. Librerie e CDN Utilizzate

## Bootstrap 5.3.3

Utilizzato esclusivamente per:

* griglia
* gestione responsiveness base

## Google Fonts

* Playfair Display → titoli
* Open Sans → paragrafi

## Splide.js

Usato per:

* slideshow hero con transizione fade
* autoplay
* pagination e arrows disattivati

CDN inclusi:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide/dist/css/splide.min.css" />
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide/dist/js/splide.min.js"></script>
```

---

# 4. Architettura del CSS

Tutto il codice è centralizzato in **style.css**, organizzato in sezioni:

```
1. Base
2. Header
3. Hero
4. Location
5. Spiagge(marquee)
6. Bar & Restaurant
7. Attività
8. Matrimoni (parallasse)
9. Offerte
10. Footer
```

## Linee guida CSS adottate

* Naming BEM-like semplificato (es. `.loc-img-top-left`)
* Overlay costruite con `::before` e `z-index`
* Media queries al fondo del CSS
* Uso massivo di `position: absolute` per le sezioni creative

---

# 5. JavaScript – Dettagli Tecnici (app.js)

## 5.1. Hero Slider (Splide.js)

```
new Splide('.splide', {
  type: 'fade',
  rewind: true,
  autoplay: true,
  interval: 5000,
  speed: 1600,
  arrows: false,
  pagination: false,
}).mount();
```

* Transizione fade
* Autoplay
* Nessuna UI visibile
* Comportamento 100% fluido

---

## 5.2. Header Sticky

```js
document.addEventListener('scroll', () => {
  const header = document.querySelector('.header-lux');
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
```

Lo stile sticky viene applicato tramite CSS alla classe `.scrolled`.

---

## 5.3. Effetto Parallasse (Sezione Matrimoni)

```js
const matrimoniSection = document.querySelector('.matrimoni-section');
const matrimoniImg = document.querySelector('.matrimoni-bg');

function handleParallax() {
  if (!matrimoniSection || !matrimoniImg) return;
  const rect = matrimoniSection.getBoundingClientRect();
  matrimoniImg.style.transform = `translateY(${rect.top * 0.3}px)`;
}

window.addEventListener('scroll', handleParallax);
handleParallax();
```

Caratteristiche:

* Semplice e leggero
* Funziona su tutti i browser moderni
* Non richiede IntersectionObserver
* Mantiene prestazioni ottimali

---

## 5.4. Mobile Behavior

Non usiamo JS per mobile particolare, perché:

* Offerte → gestite via CSS (nasconde le card e mostra il pulsante)
* Footer → gestito interamente via CSS (show/hide colonne)
* Hero → mobile-first gestito con CSS

---

# 6. Gestione Immagini (srcset + sizes)

Tutte le immagini seguono questo pattern:

```html
<img
  src="./images/attivita.jpg"
  srcset="./images/attivita.jpg 640w, ./images/attivita.jpg 1024w"
  sizes="(max-width: 768px) 100vw, 50vw"
  class="img-fluid"
/>
```

Vantaggi:

* Riduzione del peso della pagina
* Immagini diverse servite per: mobile, tablet, desktop
* Nessuna immagine con ritaglio personalizzato (rispetta i requisiti)

---

# 7. Responsive Design

Breakpoints principali:

```
Desktop     ≥ 1200px
Tablet      ≥ 768px
Mobile      ≤ 768px
```

Gestione mobile:

* Immagini della sezione Location attenuate e non più assolute
* Sezione Offerte → solo titolo / testo / pulsante
* Footer → solo "Contact" e "Follow"
* Hero → overlay rimosso, testo sopra, immagine sotto
* Spiaggia privata → marquee e button visibili davanti all'immagine

---

# 8. Testing e Compatibilità

### Testato su:

* Chrome (mobile + desktop)
* Safari (mobile + desktop)
* Firefox
* Edge

### Compatibilità garantita:

* Splide.js → cross-browser
* Parallasse → funziona ovunque (JS puro)
* Marquee → fallback automatico 


