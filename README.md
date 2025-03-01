<h1 style="border: none;">Bakalářská práce</h1>

<h2 style="margin-top: 0;">Tvorba webových stránek pro obchod s hudebními nástroji.</h2>

Bakalářská práce se zaměřuje na vývoj moderního webového řešení pro obchod [Piano Stárek](http://www.pianostarek.cz/) specializující se na prodej hudebních nástrojů. Stránky slouží jako online storefront - výloha pro uživatele, kteří se v případě zájmu o produkt mohou spojit s provozovatelem.

Projekt využívá framework Astro s SSR funkcionalitou, integruje libSQL databázi pro ukládání dat z formuláře (pomocí API endpointů), spravuje kolekci dat za pomocí CMS Keystatic a samozřejmě implementuje sexy frontend s důrazem na přístupnost a uživatelskou přívětivost s bleskurychlou odezvou (Lighthouse 100 ze všech 4 kategorií 🎉)

Řešení je plně responzivní a nabízí super rychlé načítání díky frameworku Astro 🚀.

[Link na stránky](https://piano-starek.netlify.app/)

### ⛓️ Struktura projektu:

```text
/
├── db/
│   └── config.ts
├── public/
│   └── images/
│   └── favicon.ico
├── src/
│   └── assets/
│   └── components/
│       └── Breadcrumb.astro
│       └── ContactForm.astro
│       └── FilterOverlay.astro
│       └── FiltrationProtocol.astro
│       └── Footer.astro
│       └── Head.astro
│       └── Hero.astro
│       └── Nav.astro
│       └── NavMobile.astro
│       └── Pagination.astro
│       └── Scripts.astro
│       └── Services.astro
│       └── Video.astro
│   └── content/
│       └── archiv/
│           └── images/
│           └── [...products]
│       └── nabidka/
│           └── images/
│           └── [...products]
│       └── config.ts
│       └── brands.ts
│       └── categories.ts
│       └── services.ts
│       └── showroom-gallery.ts
│   └── layouts/
│       └── MainLayout.astro
│       └── ProductPage.astro
│   └── pages/
│       └── api/
│           └── contact.ts
│       └── archiv/
│           └── [page].astro
│           └── [slug].astro
│       └── nabidka/
│           └── [slug].astro
│           └── index.astro
│       └── 404.astro
│       └── index.astro
│       └── kontakt.astro
│       └── showroom.astro
│       └── sluzby.astro
│   └── scripts/
│       └── filter-buttons.js
│       └── filter-mobile.js
│       └── form-submit.js
│       └── gallery-swap.js
│       └── image-zoom.js
│       └── nav-mobile.js
│       └── nav-scroll.js
│       └── nav-search.js
│       └── product-filter.js
│       └── sort.js
│       └── tabs.js
│   └── styles/
│       └── global.css
│   └── utils/
│       └── date-time.js
│       └── pagination.js
│       └── price-format.js
└── README.md
└── astro.config.mjs
└── keystatic.config.ts
└── netlify.toml
└── package-lock.json
└── package.json
└── tsconfig.json
```