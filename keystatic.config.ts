import { config, fields, collection } from '@keystatic/core';

let storedID: string;
let slug: string = '';

function generateUniqueId() {
  return storedID = Math.floor(Date.now() / 1000).toString();
}

storedID = generateUniqueId();

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'kaiream',
      name: 'pianostarek'
    }
  },

  collections: {
    nabidka: collection({
      label: 'Nabídka',
      path: 'src/content/nabidka/*',
      slugField: 'model',
      format: { contentField: 'content' },
      schema: {
        model: fields.slug({
          name: {
            label: 'Model',
            validation: { isRequired: true }
          },
          slug: {
            label: 'Přívěsek',
            description: 'Přátelský název pro URI, neměnit pls :)',
            generate: (name: string) => {
              // Clean the name for the slug
              return slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${storedID}`;
            },
          },
        }),
        id: fields.number({
          label: 'ID produktu',
          defaultValue: parseInt(storedID),
          description: 'Automaticky generováno',
          validation: {
            isRequired: true,
            min: parseInt(storedID),
            max: parseInt(storedID),
          }
        }),
        price: fields.number({
          label: 'Cena',
          validation: {
            isRequired: true,
            min: 0,
          },
        }),
        content: fields.markdoc({
          label: 'Popis produktu',
          extension: 'md',
          options: {
            image: false,
            code: false,
            table: false,
          }
        }),
        coverImage: fields.object({
          src: fields.image({
            label: 'Úvodní obrázek',
            publicPath: `${import.meta.env.BASE_URL}src/assets/nabidka/${slug}`,
            directory: `src/assets/nabidka`,
            validation: { isRequired: true },
          }),
          alt: fields.text({
            label: 'Textový popis obrázku',
          })
        }),
        gallery: fields.array(
          fields.object({
            src: fields.image({
              label: 'Přidat další obrázek',
              publicPath: `${import.meta.env.BASE_URL}src/assets/nabidka/${slug}`,
              directory: 'src/assets/nabidka',
            }),
            alt: fields.text({
              label: 'Textový popis obrázku'
            }),
          }),
          {
            label: 'Doprovázející obrázky',
            itemLabel: props => props.value
          }
        ),
        details: fields.array(
          fields.text({
            label: 'Přidat položku do detailů',
            description: 'e. g. Rok výroby / opus: 1999',
          }),
          {
            label: 'Detaily',
            itemLabel: props => props.value
          },
        ),
        constructionType: fields.select({
          label: 'Dle konstrukce',
          options: [
            { label: 'Křídlo', value: 'Křídlo' },
            { label: 'Pianino', value: 'Pianino' },
          ],
          defaultValue: 'Křídlo',
        }),
        condition: fields.select({
          label: 'Stav',
          options: [
            { label: 'Nové', value: 'Nové' },
            { label: 'Renovované', value: 'Renovované' },
          ],
          defaultValue: 'Nové',
        }),
        brand: fields.select({
          label: 'Značky',
          options: [
            { label: 'Petrof', value: 'Petrof' },
            { label: 'August Förster', value: 'August Förster' },
            { label: 'Kawai', value: 'Kawai' },
            { label: 'Yamaha', value: 'Yamaha' },
            { label: 'Rösler', value: 'Rösler' },
            { label: 'Samick', value: 'Samick' },
            { label: 'Pearl River', value: 'Pearl River' },
            { label: 'Scholze', value: 'Scholze' },
            { label: 'Weinbach', value: 'Weinbach' },
            { label: 'Hellas', value: 'Hellas' },
            { label: 'Ostatní', value: 'Ostatní' },
          ],
          defaultValue: 'Petrof',
        }),
        finish: fields.select({
          label: 'Provedení',
          options: [
            { label: 'Černé', value: 'Černé' },
            { label: 'Bílé', value: 'Bílé' },
            { label: 'Hnědé', value: 'Hnědé' },
            { label: 'Dub', value: 'Dub' },
            { label: 'Ořech', value: 'Ořech' },
            { label: 'Exotické dřevo', value: 'Exotické dřevo' },
            { label: 'Kombinace', value: 'Kombinace' },
            { label: 'Barevné', value: 'Barevné' },
            { label: 'Ostatní', value: 'Ostatní' },
          ],
          defaultValue: 'Černé',
        }),
      },
    }),
  },
});