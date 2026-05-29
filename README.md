# ESIE 2026 Official Website

International Energy Storage and Hydrogen Expo

## Tech Stack
- **Framework**: Astro 4.x (Static Site Generator)
- **Styling**: TailwindCSS 3.x
- **Hosting**: Cloudflare Pages
- **CDN**: Cloudflare Global Network

## Key Features
- ✅ SEO-optimized (sitemap, canonical, hreflang, schema.org)
- ✅ Fully responsive (mobile-first)
- ✅ Lightning fast (static HTML + minimal JS)
- ✅ Structured content (Markdown + frontmatter)
- ✅ Automatic GitHub → Cloudflare deployment

## Content Types
- `/exhibitors/` - Exhibitor profiles
- `/speakers/` - Speaker profiles  
- `/agenda/` - Conference schedule
- `/news/` - Press releases and news

## Development

```bash
# Install dependencies
npm install

# Local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment
1. Push to GitHub
2. Cloudflare Pages auto-deploys
3. Live at https://en.esexpo.org

## Content Update Workflow (OpenClaw Agent)
1. Leon sends content via Feishu (text, images, Excel)
2. Agent generates Markdown files with frontmatter
3. Agent commits to GitHub
4. Cloudflare auto-builds and deploys
5. Agent confirms deployment to Leon

## Directory Structure
```
src/
├── components/         # Reusable UI components
│   ├── layout/        # Header, Footer, BaseLayout
│   ├── sections/      # Home page sections
│   └── ui/            # Buttons, cards, etc.
├── content/           # Content collections (Markdown)
│   ├── exhibitors/    # Exhibitor profiles
│   ├── speakers/      # Speaker profiles
│   ├── agenda/        # Conference sessions
│   └── news/          # Press releases
├── pages/             # Page routes
├── styles/            # Global CSS
└── lib/               # Utilities
public/                # Static assets
```
