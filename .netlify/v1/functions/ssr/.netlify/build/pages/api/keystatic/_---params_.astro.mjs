import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "Iv23liVjvMzC3XWFNF9W";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "a64b05c9948d9e3b1de4208aa75683b9cb86a895";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "6cb0255b8187013376688bacd641bade578aaa7614216ee1113c7250069e2de6ad244abf8b2b55c9";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

let storedID;
let slug = "";
function generateUniqueId() {
  return Math.floor(Date.now() / 1e3).toString();
}
storedID = generateUniqueId();
const config = config$1({
  storage: {
    kind: "github",
    repo: {
      owner: "kaiream",
      name: "pianostarek"
    }
  },
  collections: {
    nabidka: collection({
      label: "Nabídka",
      path: "src/content/nabidka/*",
      slugField: "model",
      format: { contentField: "content" },
      schema: {
        model: fields.slug({
          name: {
            label: "Model",
            validation: { isRequired: true }
          },
          slug: {
            label: "Přívěsek",
            description: "URL-přátelský název, neměnit pls :)",
            generate: (name) => {
              return slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${storedID}`;
            }
          }
        }),
        id: fields.number({
          label: "ID produktu",
          defaultValue: parseInt(storedID),
          description: "Automaticky generováno",
          validation: {
            isRequired: true
          }
        }),
        price: fields.number({
          label: "Cena",
          defaultValue: 0,
          description: `0 nastaví text na "Dle dohody"`,
          validation: {
            isRequired: true,
            min: 0
          }
        }),
        content: fields.markdoc({
          label: "Popis produktu",
          extension: "md",
          options: {
            image: false,
            code: false,
            table: false
          }
        }),
        coverImage: fields.object({
          src: fields.image({
            label: "Úvodní obrázek",
            publicPath: `${"/"}src/assets/nabidka/${slug}`,
            directory: `src/assets/nabidka`,
            validation: { isRequired: true }
          }),
          alt: fields.text({
            label: "Textový popis obrázku",
            validation: { isRequired: true }
          })
        }),
        gallery: fields.array(
          fields.object({
            src: fields.image({
              label: "Přidat další obrázek",
              publicPath: `${"/"}src/assets/nabidka/${slug}`,
              directory: "src/assets/nabidka",
              validation: { isRequired: true }
            }),
            alt: fields.text({
              label: "Textový popis obrázku",
              validation: { isRequired: true }
            })
          }),
          {
            label: "Doprovázející obrázky",
            itemLabel: (props) => props.value
          }
        ),
        details: fields.array(
          fields.text({
            label: "Přidat položku do detailů",
            description: "e. g. Rok výroby / opus: 1999",
            validation: {
              length: {
                min: 1
              }
            }
          }),
          {
            label: "Detaily",
            itemLabel: (props) => props.value
          }
        ),
        constructionType: fields.select({
          label: "Dle konstrukce",
          options: [
            { label: "Křídlo", value: "Křídlo" },
            { label: "Pianino", value: "Pianino" }
          ],
          defaultValue: "Křídlo"
        }),
        condition: fields.select({
          label: "Stav",
          options: [
            { label: "Nové", value: "Nové" },
            { label: "Renovované", value: "Renovované" }
          ],
          defaultValue: "Nové"
        }),
        brand: fields.select({
          label: "Značky",
          options: [
            { label: "Petrof", value: "Petrof" },
            { label: "August Förster", value: "August Förster" },
            { label: "Kawai", value: "Kawai" },
            { label: "Yamaha", value: "Yamaha" },
            { label: "Rösler", value: "Rösler" },
            { label: "Samick", value: "Samick" },
            { label: "Pearl River", value: "Pearl River" },
            { label: "Scholze", value: "Scholze" },
            { label: "Weinbach", value: "Weinbach" },
            { label: "Hellas", value: "Hellas" },
            { label: "Ostatní", value: "Ostatní" }
          ],
          defaultValue: "Petrof"
        }),
        finish: fields.select({
          label: "Provedení",
          options: [
            { label: "Černé", value: "Černé" },
            { label: "Bílé", value: "Bílé" },
            { label: "Hnědé", value: "Hnědé" },
            { label: "Dub", value: "Dub" },
            { label: "Ořech", value: "Ořech" },
            { label: "Exotické dřevo", value: "Exotické dřevo" },
            { label: "Kombinace", value: "Kombinace" },
            { label: "Barevné", value: "Barevné" },
            { label: "Ostatní", value: "Ostatní" }
          ],
          defaultValue: "Černé"
        })
      }
    }),
    archiv: collection({
      label: "Archív",
      path: "src/content/archiv/*",
      slugField: "model",
      format: { contentField: "content" },
      schema: {
        model: fields.slug({
          name: {
            label: "Model",
            validation: { isRequired: true }
          },
          slug: {
            label: "Přívěsek",
            description: "URL-přátelský název, neměnit pls :)",
            generate: (name) => {
              return slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${storedID}`;
            }
          }
        }),
        id: fields.number({
          label: "ID produktu",
          defaultValue: parseInt(storedID),
          description: "Automaticky generováno",
          validation: {
            isRequired: true
          }
        }),
        price: fields.number({
          label: "Cena",
          defaultValue: -1,
          description: `-1 nastaví text na "Prodáno"`,
          validation: {
            isRequired: true
          }
        }),
        content: fields.markdoc({
          label: "Popis produktu",
          extension: "md",
          options: {
            image: false,
            code: false,
            table: false
          }
        }),
        coverImage: fields.object({
          src: fields.image({
            label: "Úvodní obrázek",
            publicPath: `${"/"}src/assets/archiv/${slug}`,
            directory: `src/assets/archiv`,
            validation: { isRequired: true }
          }),
          alt: fields.text({
            label: "Textový popis obrázku",
            validation: { isRequired: true }
          })
        }),
        gallery: fields.array(
          fields.object({
            src: fields.image({
              label: "Přidat další obrázek",
              publicPath: `${"/"}src/assets/archiv/${slug}`,
              directory: "src/assets/archiv",
              validation: { isRequired: true }
            }),
            alt: fields.text({
              label: "Textový popis obrázku",
              validation: { isRequired: true }
            })
          }),
          {
            label: "Doprovázející obrázky",
            itemLabel: (props) => props.value
          }
        ),
        details: fields.array(
          fields.text({
            label: "Přidat položku do detailů",
            description: "e. g. Rok výroby / opus: 1999",
            validation: {
              length: {
                min: 1
              }
            }
          }),
          {
            label: "Detaily",
            itemLabel: (props) => props.value
          }
        ),
        constructionType: fields.select({
          label: "Dle konstrukce",
          options: [
            { label: "Křídlo", value: "Křídlo" },
            { label: "Pianino", value: "Pianino" }
          ],
          defaultValue: "Křídlo"
        }),
        condition: fields.select({
          label: "Stav",
          options: [
            { label: "Nové", value: "Nové" },
            { label: "Renovované", value: "Renovované" }
          ],
          defaultValue: "Nové"
        }),
        brand: fields.select({
          label: "Značky",
          options: [
            { label: "Petrof", value: "Petrof" },
            { label: "August Förster", value: "August Förster" },
            { label: "Kawai", value: "Kawai" },
            { label: "Yamaha", value: "Yamaha" },
            { label: "Rösler", value: "Rösler" },
            { label: "Samick", value: "Samick" },
            { label: "Pearl River", value: "Pearl River" },
            { label: "Scholze", value: "Scholze" },
            { label: "Weinbach", value: "Weinbach" },
            { label: "Hellas", value: "Hellas" },
            { label: "Ostatní", value: "Ostatní" }
          ],
          defaultValue: "Petrof"
        }),
        finish: fields.select({
          label: "Provedení",
          options: [
            { label: "Černé", value: "Černé" },
            { label: "Bílé", value: "Bílé" },
            { label: "Hnědé", value: "Hnědé" },
            { label: "Dub", value: "Dub" },
            { label: "Ořech", value: "Ořech" },
            { label: "Exotické dřevo", value: "Exotické dřevo" },
            { label: "Kombinace", value: "Kombinace" },
            { label: "Barevné", value: "Barevné" },
            { label: "Ostatní", value: "Ostatní" }
          ],
          defaultValue: "Černé"
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
