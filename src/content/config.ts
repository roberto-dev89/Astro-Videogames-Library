import { defineCollection, z } from "astro:content";

const videogames = defineCollection({
  schema: z.object({
    title: z.string(),
    platform: z.string(),
    release_date: z.string(),
    developer: z.string(),
    publisher: z.string(),
    genre: z.string(),
    price: z.string(),
    rating: z.string(),
    img: z.string(),
    video_id: z.string(),
    current_version: z.string(),
    epic: z.string().url().optional().or(z.literal("")),
    other: z.string().url().optional().or(z.literal("")),
    steam: z.string().url().optional().or(z.literal("")),
  })
});

export const collections = { videogames };
