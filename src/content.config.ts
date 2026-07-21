import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicii = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicii' }),
  schema: z.object({
    titlu: z.string(),
    slug: z.string(),
    rezumat: z.string(),
    icon: z.string(),
    ordine: z.number().default(0),
  }),
});

export const collections = { servicii };