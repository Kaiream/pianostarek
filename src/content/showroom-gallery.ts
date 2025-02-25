import type { ImageMetadata } from "astro";
import galleryImage1 from "../../src/assets/showroom-showcase-1.jpg";
import galleryImage2 from "../../src/assets/showroom-showcase-2.jpg";
import galleryImage3 from "../../src/assets/showroom-showcase-3.jpg";
import galleryImage4 from "../../src/assets/showroom-showcase-4.jpg";
import galleryImage5 from "../../src/assets/showroom-showcase-5.jpg";
import galleryImage6 from "../../src/assets/showroom-showcase-6.jpg";
import galleryImage7 from "../../src/assets/showroom-showcase-7.jpg";
import galleryImage8 from "../../src/assets/showroom-showcase-8.jpg";

export interface GalleryImage {
  src: ImageMetadata;
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: galleryImage1,
    width: 2048,
    height: 1356
  },
  {
    src: galleryImage2,
    width: 1280,
    height: 720
  },
  {
    src: galleryImage3,
    width: 2048,
    height: 1356
  },
  {
    src: galleryImage4,
    width: 2048,
    height: 1096
  },
  {
    src: galleryImage5,
    width: 1800,
    height: 1800
  },
  {
    src: galleryImage6,
    width: 1848,
    height: 1224
  },
  {
    src: galleryImage7,
    width: 1647,
    height: 1827
  },
  {
    src: galleryImage8,
    width: 1317,
    height: 640
  },
];