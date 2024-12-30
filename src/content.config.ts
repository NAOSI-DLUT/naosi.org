import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
    }),
  }),
  events: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      location: z.string(),
    }),
  }),
};
