import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_C4u_gNs8.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
