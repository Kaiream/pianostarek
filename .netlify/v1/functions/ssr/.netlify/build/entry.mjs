import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Db6aznCB.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/archiv/_page_.astro.mjs');
const _page5 = () => import('./pages/archiv/_slug_.astro.mjs');
const _page6 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page7 = () => import('./pages/kontakt.astro.mjs');
const _page8 = () => import('./pages/nabidka/_slug_.astro.mjs');
const _page9 = () => import('./pages/nabidka.astro.mjs');
const _page10 = () => import('./pages/showroom.astro.mjs');
const _page11 = () => import('./pages/sluzby.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/archiv/[page].astro", _page4],
    ["src/pages/archiv/[slug].astro", _page5],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page6],
    ["src/pages/kontakt.astro", _page7],
    ["src/pages/nabidka/[slug].astro", _page8],
    ["src/pages/nabidka/index.astro", _page9],
    ["src/pages/showroom.astro", _page10],
    ["src/pages/sluzby.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "da516c2a-17c7-4385-9d22-e4f02b87bff5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
