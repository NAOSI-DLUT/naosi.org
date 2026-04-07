import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
    }),
  }),
  events: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
    schema: z.object({
      title: z.string(),
      date: z.date(),
      location: z.string().optional(),
      href: z.string().optional(),
    }),
  }),
};
