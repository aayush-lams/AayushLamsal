import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    theme: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};
