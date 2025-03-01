import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as createAstro, d as addAttribute, k as renderHead, F as Fragment, u as unescapeHTML, e as renderScript, f as renderSlot } from './astro/server_C4u_gNs8.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Bi2q2chM.mjs';
import 'clsx';
/* empty css                          */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- FOOTER -->${maybeRenderHead()}<footer class="footer" role="contentinfo"> <section class="section-footer"> <div class="footer-kategorie"> <span class="footer-heading">
Kategorie
</span> <hr class="__separator separator-footer"> <div class="footer-links" aria-label="Kategorie produktů"> <a href="/nabidka" class="footer-link">
Křídla
</a> <a href="/nabidka" class="footer-link">
Pianina
</a> <a href="/nabidka" class="footer-link">
Renovované
</a> <a href="/nabidka" class="footer-link">
Nové
</a> <a href="/nabidka" class="footer-link">
Značky
</a> </div> </div> <div class="footer-navigace"> <span class="footer-heading">
Navigace
</span> <hr class="__separator separator-footer"> <div class="footer-links" aria-label="Footer navigace"> <a href="/" class="footer-link">
Domů
</a> <a href="/nabidka" class="footer-link">
Nabídka
</a> <a href="/archiv/1" class="footer-link">
Archív
</a> <a href="/sluzby" class="footer-link">
Služby
</a> <a href="/kontakt" class="footer-link">
Kontakt
</a> <a href="/showroom" class="footer-link">
Showroom
</a> </div> </div> <div class="footer-sledovat"> <span class="footer-heading follow-us">
Sledujte nás
</span> <div class="footer-socials" aria-label="Sociální média"> <a href="https://www.facebook.com/pages/wwwpianostarekcz/109704172392121" target="_blank" class="social-link"> ${renderComponent($$result, "Image", $$Image, { "src": `${"/"}images/facebook-logo.webp`, "alt": "Facebook logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "lazy" })} </a> <a href="https://www.instagram.com/pianostarek.cz/" target="_blank" class="social-link"> ${renderComponent($$result, "Image", $$Image, { "src": `${"/"}images/instagram-logo.webp`, "alt": "Instagram logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "lazy" })} </a> <a href="https://www.youtube.com/@pianostarek" target="_blank" class="social-link"> ${renderComponent($$result, "Image", $$Image, { "src": `${"/"}images/youtube-logo.webp`, "alt": "Youtube logo", "class": "__image social-image", "width": 64, "height": 64, "quality": 80, "loading": "lazy" })} </a> </div> <a href="/" class="footer-logo-big"> ${renderComponent($$result, "Image", $$Image, { "src": `${"/"}images/logo.webp`, "alt": "Piano Stárek logo", "class": "__image footer-logo", "width": 720, "height": 558, "format": "webp", "quality": 80, "loading": "lazy" })} </a> <div class="copyright">© 2025 Piano Stárek</div> </div> <div class="footer-najit"> <span class="footer-heading">Kde nás najdete</span> <hr class="__separator separator-footer"> <div class="footer-info-box" aria-label="Lokace provozoven"> <p class="parafooter"> <b class="__bold">
Showroom:</b><br>
Přemyslovská 5,<br>
130 00 Praha 3
</p> <p class="parafooter"> <b class="__bold">
Sídlo firmy:</b><br>
Podkrušnohorská<br>
2058, 436 01, Litvínov
</p> </div> </div> <div class="footer-kontakt"> <span class="footer-heading">Kontakt</span> <hr class="__separator separator-footer"> <div class="footer-info-box" aria-label="Kontaktní informace"> <p class="parafooter">
Tel:
<a href="tel:+420774359074" class="rich-link">
+420 774 359 074
</a><br>
Mail:
<a href="mailto:info@pianostarek.cz" class="rich-link">
info@pianostarek.cz
</a><br>
Web:
<a href="https://www.pianostarek.cz/" target="_blank" class="rich-link">
www.pianostarek.cz
</a> </p> </div> </div> </section> <small class="bp">
Bakalářská práce<br>
Karim Boufala
</small> </footer>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://piano-starek.netlify.app");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description, additionalDeclarations } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<head><!-- META --><meta charset="UTF-8"><meta http-equiv="content-language" content="cs-CZ"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- LINKS --><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon"${addAttribute(`${"/"}favicon.ico`, "href")} sizes="any"><title>${title}</title><!-- ADDITIONAL HEAD DECLARATIONS -->${additionalDeclarations && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(additionalDeclarations)}` })}`}<!-- SCRIPTS -->${renderHead()}</head>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Head.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- NAV -->${maybeRenderHead()}<header class="nav-header is-nav-active" aria-label="Hlavní navigace"> <a href="/" class="nav-logo-link"> ${renderComponent($$result, "Image", $$Image, { "src": `${"/"}images/logo-bare.webp`, "alt": "Piano Stárek logo", "class": "__image logo-link", "width": 480, "height": 480, "quality": 80, "format": "webp", "loading": "eager" })} <span class="logo-text">pianostarek.cz</span> </a> <nav class="nav-desktop"> <ul class="__list nav-list" role="menu" aria-label="Hlavní menu"> <li role="none"> <a href="/nabidka" class="nav-link" role="menuitem">Nabídka</a> </li> <li role="none"> <a href="/archiv/1" class="nav-link" role="menuitem">Archív</a> </li> <li role="none"> <a href="/sluzby" class="nav-link" role="menuitem">Služby</a> </li> <li role="none"> <a href="/kontakt" class="nav-link" role="menuitem">Kontakt</a> </li> <li role="none"> <a href="/showroom" class="nav-link" role="menuitem">Showroom</a> </li> <li class="nav-search-icon" role="none"> <div class="search-icon" role="menuitem" aria-label="Vyhledávání" tabindex="0"> <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.98249 4.75168e-08C8.40059 0.000205762 6.84139 0.376283 5.43336 1.09724C4.02533 1.8182 2.80877 2.86341 1.88395 4.14673C0.959125 5.43005 0.3525 6.91475 0.114064 8.47848C-0.124373 10.0422 0.012205 11.6402 0.512542 13.1408C1.01288 14.6414 1.86265 16.0017 2.99184 17.1095C4.12102 18.2172 5.4973 19.0409 7.00726 19.5125C8.51721 19.9841 10.1176 20.0901 11.6766 19.8219C13.2356 19.5537 14.7085 18.9189 15.9741 17.9698C16.0494 18.1905 16.174 18.3969 16.3506 18.5722L21.336 23.5573C21.6322 23.8443 22.0295 24.0033 22.4419 23.9999C22.8544 23.9966 23.249 23.8311 23.5405 23.5393C23.832 23.2474 23.9971 22.8527 24 22.4402C24.0029 22.0277 23.8434 21.6307 23.556 21.3348L18.5706 16.3497C18.4017 16.1801 18.196 16.0517 17.9695 15.9745C19.0824 14.4913 19.7601 12.7275 19.9268 10.8808C20.0935 9.03404 19.7426 7.17739 18.9134 5.51889C18.0842 3.86039 16.8094 2.46559 15.232 1.49082C13.6546 0.516044 11.8368 -0.000180831 9.98249 4.75168e-08ZM2.51737 9.98324C2.51737 9.00296 2.71046 8.03228 3.08562 7.12662C3.46077 6.22096 4.01065 5.39805 4.70385 4.70489C5.39705 4.01173 6.22 3.46188 7.12571 3.08675C8.03142 2.71161 9.00215 2.51853 9.98249 2.51853C10.9628 2.51853 11.9336 2.71161 12.8393 3.08675C13.745 3.46188 14.5679 4.01173 15.2611 4.70489C15.9543 5.39805 16.5042 6.22096 16.8794 7.12662C17.2545 8.03228 17.4476 9.00296 17.4476 9.98324C17.4476 11.963 16.6611 13.8617 15.2611 15.2616C13.8611 16.6615 11.9624 17.4479 9.98249 17.4479C8.00261 17.4479 6.10383 16.6615 4.70385 15.2616C3.30387 13.8617 2.51737 11.963 2.51737 9.98324Z" fill="currentColor"></path> </svg> </div> <form class="nav-search-field" role="search" aria-label="Hledat v nabídce" action="/nabidka" method="get" style="display: none;"> <input placeholder="Vyhledat v nabídce..." aria-label="Vyhledat v nabídce" id="vyhledat-nav" class="__text-input search-field" type="search" name="vyhledat"> </form> </li> </ul> </nav> <!-- HAMBURGER --> <button type="button" class="__button hambutton" role="button" aria-label="Otevřít menu"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" class="burger-icon"> <path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" class="close-icon"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3 3 12.5M3 3l9.5 9.5"></path> </svg> </button> </header>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Nav.astro", void 0);

const $$NavMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- MOBILE NAV -->${maybeRenderHead()}<div class="overlay" role="navigation" aria-label="Mobilní menu"> <div class="overlay-content"> <nav aria-label="Mobilní navigace" class="nav-mobile"> <ul class="__list nav-list" role="menubar"> <li> <a href="/nabidka" class="nav-link" role="menuitem">Nabídka</a> </li> <li> <a href="/archiv/1" class="nav-link" role="menuitem">Archív</a> </li> <li> <a href="/sluzby" class="nav-link" role="menuitem">Služby</a> </li> <li> <a href="/kontakt" class="nav-link" role="menuitem">Kontakt</a> </li> <li> <a href="/showroom" class="nav-link" role="menuitem">Showroom</a> </li> </ul> <form action="/nabidka" method="get" class="mobile-nav-search-form" role="search" aria-label="Hledat v nabídce"> <input placeholder="Vyhledat v nabídce..." id="vyhledat-nav" class="__text-input search-field mobile-nav-search" type="search" name="vyhledat"> </form> </nav> </div> </div>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/NavMobile.astro", void 0);

const $$Scripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Scripts.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Scripts.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Scripts.astro?astro&type=script&index=2&lang.ts")}`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/components/Scripts.astro", void 0);

const $$Astro = createAstro("https://piano-starek.netlify.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, additionalDeclarations } = Astro2.props;
  return renderTemplate`<html lang="cs-CZ"> ${renderComponent($$result, "Head", $$Head, { "title": title, "description": description, "additionalDeclarations": additionalDeclarations })}${maybeRenderHead()}<body class="body-main"> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "NavMobile", $$NavMobile, {})} ${renderComponent($$result, "Scripts", $$Scripts, {})} </body></html>`;
}, "C:/Users/karim/Documents/Hard School/BACHELOR THESIS/site/pianostarek/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
