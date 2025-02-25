import type { ImageMetadata } from 'astro';
import yamaha from "../assets/yamaha.png";
import petrof from "../assets/petrof.png";
import rosler from "../assets/rosler.png";
import kawai from "../assets/kawai.png";
import august from "../assets/august.png";
import hellas from "../assets/hellas.png";
import samick from "../assets/samick.png";
import pearlRiver from "../assets/pearl-river.png";
import scholze from "../assets/scholze.png";
import weinbach from "../assets/weinbach.png";

export interface BrandLogo {
  src: ImageMetadata;
  alt: string;
  width?: number;
  height?: number;
}

export const brands: BrandLogo[] = [
  {
    src: yamaha,
    alt: "Yamaha logo",
    width: 1440,
    height: 600,
  },
  {
    src: petrof,
    alt: "Petrof logo",
    width: 562,
    height: 200,
  },
  {
    src: rosler,
    alt: "Rösler logo",
    width: 780,
    height: 280,
  },
  {
    src: kawai,
    alt: "Kawai logo",
    width: 1850,
    height: 400,
  },
  {
    src: august,
    alt: "August logo",
    width: 1024,
    height: 591,
  },
  {
    src: hellas,
    alt: "Hellas logo",
    width: 346,
    height: 97,
  },
  {
    src: samick,
    alt: "Samick logo",
    width: 1100,
    height: 277,
  },
  {
    src: pearlRiver,
    alt: "Pearl River Piano logo",
    width: 650,
    height: 300,
  },
  {
    src: scholze,
    alt: "Scholze logo",
    width: 570,
    height: 190,
  },
  {
    src: weinbach,
    alt: "Weinbach logo",
    width: 844,
    height: 200,
  },
];