import servis1 from "../../src/assets/servis1.jpg";
import servis2 from "../../src/assets/servis2.jpg";
import vykuprod1 from "../../src/assets/vykuprod1.jpg";
import vykuprod2 from "../../src/assets/vykuprod2.jpg";
import pujcovna1 from "../../src/assets/pujcovna1.jpg";
import pujcovna2 from "../../src/assets/pujcovna2.jpg";
import trans1 from "../../src/assets/trans1.jpg";
import trans2 from "../../src/assets/trans2.jpg";
import doplnky1 from "../../src/assets/dopln1.jpg";
import doplnky2 from "../../src/assets/dopln2.jpg";

export interface Service {
  idPrimary: string;
  idSecondary?: string;
  titlePrimary: string;
  titleSecondary?: string;
  paragraphs?: string[];
  items?: string[];
  images: {
    src: ImageMetadata;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

export const services: Service[] = [
  {
    idPrimary: "servis",
    titlePrimary: "Servis",
    paragraphs: [
      "Náš profesionální servisní tým se stará o údržbu a opravy klavírů a pianin s maximální péčí a odbornými znalostmi. Díky našim dlouholetým zkušenostem dokážeme diagnostikovat a řešit širokou škálu technických problémů, od běžného ladění až po komplexní renovace.",
      "Proto nabízíme servisní služby typu:",
    ],
    items: [
      "Ladění, regulace a intonace",
      "Čištění",
      "Dílenské opravy",
      "Povrchové úpravy",
      "Výměna klávesového obložení",
      "Výměna ladících kolíků a strun",
      "Opravy rezonančních desek a celých akustických elementů",
    ],
    images: [
      {
        src: servis1,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
      {
        src: servis2,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
    ]
  },
  {
    idPrimary: "vykup",
    idSecondary: "prodej",
    titlePrimary: "Výkup",
    titleSecondary: "Prodej",
    paragraphs: [
      "U všech nástrojů zakoupených u PIANOSTAREK (i po záruční době) v  případě vaší žádosti o prodej zajistíme: transport, stěhování a komisní prodej a to za cenu jen o 1 000 Kč nižší než byla jeho cena pořizovací. (Platí pouze v případě, že nástroj není poškozen a ani jinak  znehodnocen.)",
    ],
    items: [
      "Vykupujeme klavíry a pianina za nejvyšší možnou cenu",
      "Rychlé jednání",
      "Platba v hotovosti přímo na místě",
      "Odborné odstěhování nástroje",
      "Poradenství při koupi, prodeji a transportu",
      "Výměna ladících kolíků a strun",
      "Komisní prodej",
      "Na každé pianino a na každý klavír poskytujeme záruku 1-5 let",
      "+ Záruční a pozáruční servis.",
    ],
    images: [
      {
        src: vykuprod1,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
      {
        src: vykuprod2,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
    ]
  },
  {
    idPrimary: "pujcovna",
    titlePrimary: "Půjčovna",
    paragraphs: [
      "Naše půjčovna nabízí široký výběr kvalitních klavírů a pianin pro různé příležitosti, od krátkodobých pronájmů až po dlouhodobé zapůjčení. Každý zapůjčený nástroj je před pronájmem důkladně zkontrolován a naladěn našimi odborníky.",
    ],
    items: [
      "Krátkodobé i dlouhodobé půjčování klavírů a pianin.",
      "Kompletní servis zajištěn (doprava, stěhování, ladění).",
      "Půjčovné již od 499 Kč měsíčně.",
      "Půjčujeme nástroje po celé ČR a dle dohody i po celé EVROPĚ.",
    ],
    images: [
      {
        src: pujcovna1,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
      {
        src: pujcovna2,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
    ]
  },
  {
    idPrimary: "stehovani",
    titlePrimary: "Stěhování",
    paragraphs: [
      "Odborný transport a šetrné stěhování je u nás samozřejmostí.",
    ],
    images: [
      {
        src: trans1,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
      {
        src: trans2,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
    ]
  },
  {
    idPrimary: "doplnky",
    titlePrimary: "Doplňky",
    paragraphs: [
      "Zajišťujeme prodej těchto doplňků:",
    ],
    items: [
      "Židličky",
      "Lavice",
      "Metronomy",
      "Lampičky",
      "Svícny",
    ],
    images: [
      {
        src: doplnky1,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
      {
        src: doplnky2,
        alt: "Fotka servisu",
        width: 960,
        height: 826,
      },
    ]
  },
];
