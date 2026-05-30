// 请先安装：npm install astro @astrojs/markdoc --save-dev
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('ESIE 组委会'),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.enum(['exhibition', 'industry', 'policy']).default('exhibition'),
    sticky: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

const exhibitors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    booth: z.string(),
    logo: z.string().optional(),
    country: z.string().default('中国'),
    zone: z.enum(['energy-storage', 'hydrogen', 'battery', 'general']).default('energy-storage'),
    description: z.string().optional(),
    website: z.string().optional(),
    email: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    level: z.enum(['diamond', 'platinum', 'gold', 'silver', 'partner']).default('partner'),
    website: z.string().optional(),
    weight: z.number().int().min(1).max(999).default(100),
  }),
});

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    title: z.string(),
    company: z.string(),
    topic: z.string().optional(),
    date: z.date().optional(),
    bio: z.string().optional(),
    keynote: z.boolean().default(false),
  }),
});

export const collections = { news, exhibitors, sponsors, speakers };
