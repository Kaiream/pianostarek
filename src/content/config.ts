// ZOD schema file for defining the types of product data I'm working with and the collections

import { defineCollection, z } from "astro:content";
import type { ImageFunction } from 'astro:content';

const productSchema = ({ image }: { image: ImageFunction }) => z.object({
  id: z.number(),
  coverImage: z.object({
    src: image(),
    alt: z.string().optional(),
  }),
  gallery: z.array(z.object({
    src: image(),
    alt: z.string().optional(),
  })),
  model: z.string(),
  price: z.union([z.number(), z.string()]),
  details: z.array(z.string()),
  categories: z.array(z.string()),
});

const nabidkaCollection = defineCollection({
  type: "content",
  schema: productSchema,
});

const archivCollection = defineCollection({
  type: "content", 
  schema: productSchema,
});

export const collections = {
  "nabidka": nabidkaCollection,
  "archiv": archivCollection,
};

// The ID is added at the end of the URL to make every listing absolutely unique
export function generateSlug(model: string, id: number): string {
  const cleanModel = model.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `${cleanModel}-${id}`;
}