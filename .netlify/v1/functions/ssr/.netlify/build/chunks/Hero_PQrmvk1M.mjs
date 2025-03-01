import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, f as renderSlot, b as renderTemplate } from './astro/server_C4u_gNs8.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Bi2q2chM.mjs';

const $$Astro = createAstro("https://piano-starek.netlify.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    heroTitle,
    backgroundImage
  } = Astro2.props;
  return renderTemplate`<!-- HERO -->${maybeRenderHead()}<section class="section-hero"> <div class="hero-background-image"> ${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "Obr\xE1zek v pozad\xED", "class": "__image background-image", "width": 2560, "height": 1500, "quality": 50, "format": "webp", "loading": "eager" })} </div> <div class="hero-container"> <h1 class="hero-heading">${heroTitle}</h1> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Hero.astro", void 0);

export { $$Hero as $ };
