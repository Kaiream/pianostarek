# Bakalářská práce

## Tvorba webových stránek pro obchod s hudebními nástroji.

### 🚀 Struktura projektu:

```text
/
├── public/
│   └── images/
│   └── favicon.ico
├── src/
│   └── assets/
│   └── components/
│       └── Breadcrumb.astro
│       └── FilterOverlay.astro
│       └── Footer.astro
│       └── Head.astro
│       └── Nav.astro
│       └── NavMobile.astro
│       └── Pagination.astro
│       └── Scripts.astro
│       └── Video.astro
│   └── content/
│       └── archiv/
│           └── images/
│           └── [...products]
│       └── nabidka/
│           └── images/
│           └── [...products]
│       └── config.ts
│   └── layouts/
│       └── MainLayout.astro
│       └── ProductPage.astro
│   └── pages/
│       └── archiv/
│           └── [page].astro
│           └── [slug].astro
│           └── index.astro
│       └── nabidka/
│           └── [slug].astro
│           └── index.astro
│       └── index.astro
│       └── kontakt.astro
│       └── showroom.astro
│       └── sluzby.astro
│   └── scripts/
│       └── filter-buttons.js
│       └── filter-mobile.js
│       └── gallery-swap.js
│       └── image-zoom.js
│       └── nav-mobile.js
│       └── nav-scroll.js
│       └── nav-search.js
│       └── tabs.js
│   └── styles/
│       └── global.css
│   └── utils/
│       └── categories.js
│       └── lookup.js
│       └── pagination.js
│       └── price-format.js
│       └── probe.js
│       └── sort-archiv.js
│       └── sort-nabidka.js
└── astro.config.mjs
└── package.json
└── tsconfig.json
```