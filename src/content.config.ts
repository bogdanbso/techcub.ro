import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const serviciiCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicii' }),
  schema: z.object({
    titlu: z.string(),
    rezumat: z.string(),
    icon: z.string().optional().default('code'),
    ordine: z.number(),
  }),
});

export const collections = {
  servicii: serviciiCollection,
};
