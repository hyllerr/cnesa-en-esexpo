import { defineCollection, z } from 'astro:content';

const exhibitors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    booth: z.string(),
    category: z.string(),
    logo: z.string().optional(),
    website: z.string().url().optional(),
    description: z.string().optional(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    topic: z.string().optional(),
    time: z.string().optional(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const agenda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time_start: z.string(),
    time_end: z.string(),
    track: z.string(),
    speakers: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

export const collections = { exhibitors, speakers, agenda, news };
