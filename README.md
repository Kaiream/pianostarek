# Bakalářská práce

## Tvorba webových stránek pro obchod s hudebními nástroji.

### 🚀 Struktura projektu:

```text
/
├── public/
│   └── images/
│   └── favicon.ico
├── db/
│   └── config.ts
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
└── package-lock.json
└── package.json
└── tsconfig.json
```