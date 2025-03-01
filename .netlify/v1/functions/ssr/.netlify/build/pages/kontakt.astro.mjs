import { a as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, c as createAstro, r as renderComponent } from '../chunks/astro/server_C4u_gNs8.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_PQrmvk1M.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CSAG3EoI.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_Bi2q2chM.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="contact-form"> <h2 id="contact" class="heading-3">Kontaktujte nás</h2> <form class="form" id="contactForm"> <article class="field-group"> <div class="field-wrapper"> <input placeholder="Jméno" required id="firstName" class="__text-input form-input" type="text" name="firstName"> </div> <div class="field-wrapper"> <input placeholder="Příjmení" required id="lastName" class="__text-input form-input" type="text" name="lastName"> </div> </article> <article class="field-wrapper"> <input placeholder="Emailová adresa" required id="email" class="__text-input form-input" type="email" name="email"> </article> <article class="field-wrapper"> <textarea placeholder="Vaše zpráva" name="message" required id="message" class="__text-input message"></textarea> </article> <button type="submit" class="__button button-send"> <span>Odeslat</span> <div class="send-icon"> <svg width="100%" height="100%" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.0446 13.9995L1.02182 4.77392C0.728864 2.13369 3.44163 0.194234 5.83773 1.33279L26.0632 10.9333C28.6456 12.1584 28.6456 15.8405 26.0632 17.0656L5.83773 26.6679C3.44163 27.8047 0.728864 25.867 1.02182 23.2267L2.0446 13.9995ZM2.0446 13.9995H13.8981" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <div class="spinner"></div> </button> </form> </div> ${renderScript($$result, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/ContactForm.astro", void 0);

const $$Astro = createAstro("https://piano-starek.netlify.app");
const prerender = false;
const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontakt;
  const { title = "Kontakt", description = "Máte rozhodnuto? Chcete sjednat nezávislou prohlídku? Spojte se s námi a všechno zařídíme!" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main role="main" aria-label="Kontaktuje nás"> <!-- HERO --> ${renderComponent($$result2, "Hero", $$Hero, { "heroTitle": "KONTAKT", "backgroundImage": `${"/"}images/kontakt.webp` })} <!-- SHOPS --> <section class="section-shops"> <div class="shops-container"> <div class="shops-left"> <div class="shops"> <div class="shop"> <h2 class="heading-3">Sídlo firmy</h2> <p class="paraddress">
Podkrušnohorská<br>
2058, 436 01, Litvínov
</p> </div> <div class="shop"> <h2 class="heading-3">Showroom</h2> <p class="paraddress">
Přemyslovská 5,<br>
130 00 Praha 3
</p> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": `${"/"}images/mapa-provozoven.webp`, "alt": "Mapa České republiky", "class": "__image czech-map", "width": 2e3, "height": 1140, "quality": 80, "format": "webp", "loading": "eager" })} </div> <!-- CONTACT INFO --> <div class="shops-right"> <h2 class="heading-3">Kontaktní údaje</h2> <p class="paracontact">
Tel:
<a href="tel:+420774359074" class="rich-link">
+420 774 359 074
</a><br>
Mail:
<a href="mailto:info@pianostarek.cz" class="rich-link">
info@pianostarek.cz
</a><br>
Web:
<a href="https://www.pianostarek.cz/" class="rich-link">
www.pianostarek.cz
</a> </p> <!-- SOCIALS --> <div class="contact-socials"> <a target="_blank" href="https://www.facebook.com/pages/wwwpianostarekcz/109704172392121" class="social-link"> ${renderComponent($$result2, "Image", $$Image, { "src": `${"/"}images/facebook-logo.webp`, "alt": "Facebook logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "eager" })} </a> <a target="_blank" href="https://www.instagram.com/pianostarek.cz/" class="social-link"> ${renderComponent($$result2, "Image", $$Image, { "src": `${"/"}images/instagram-logo.webp`, "alt": "Instagram logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "eager" })} </a> <a target="_blank" href="https://www.youtube.com/@pianostarek" class="social-link"> ${renderComponent($$result2, "Image", $$Image, { "src": `${"/"}images/youtube-logo.webp`, "alt": "Youtube logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "eager" })} </a> </div> </div> </div> </section> <!-- DETAILS --> <section class="section-details"> <article class="details-container"> <h3 class="heading-3">Dodatečné informace</h3> <div class="details-body"> <!-- LEFT --> <div class="details-left"> <span class="detail-heading">Prodejní sklad Litvínov</span> <p class="__paragraph">
Lze navštívit po telefonické dohodě.<br>
Od 8.00 do 20.00 hodin.
</p> <span class="__paragraph front-text"> <b>
Další užitečné informace:
</b> </span> <p class="__paragraph bottom-text">
My nezavíráme!<br>
Přijďte si vybrat Vaše vysněné pianino nebo klavír.<br>
Volejte 774 35 90 74 a domluvte si prohlídku.
</p> </div> <!-- RIGHT --> <div class="details-right"> <span class="detail-heading">
Provozovatel fimy
</span> <span class="__paragraph top-text"> <b>
Vlastislav Stárek
</b> </span> <p class="__paragraph bottom-text">
Podkrušnohorská 2058<br>
436 01 Litvínov<br>
Česká republika
</p> <p class="left-aligned">
„Pokud nechcete vycházet z tepla domova, vyberte si nástroj na našich stránkách a zavolejte nám.<br>
O vše se postaráme.”
</p> </div> </div> </article> </section> <!-- CONTACT FORM --> <section class="section-form"> <div class="form-container"> <div class="form-image"> ${renderComponent($$result2, "Image", $$Image, { "src": `${"/"}images/kontakt-form.webp`, "alt": "Mozart nakupuje u nás", "class": "__image mozart", "width": 640, "height": 360, "quality": 80, "format": "webp", "loading": "lazy" })} </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> </main> ` })}`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/pages/kontakt.astro", void 0);
const $$file = "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
