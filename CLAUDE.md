# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Run production server
pnpm lint       # ESLint (Next.js config)
```

No test suite is configured.

## Architecture

This is a **Next.js App Router** portfolio site with three content features: a blog, a photo gallery, and CSS tutorials.

### Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript 5
- **Tailwind CSS** + CSS variables for theming; `cn()` utility (`@/lib/utils`) wraps `clsx` + `tailwind-merge`
- **MicroCMS** — blog content via REST API (`src/app/blog/services/blogApi.ts`), cached with `revalidate: 3600`
- **Supabase** — photo metadata (PostgreSQL) + image storage (`src/app/gallery/services/photoApi.ts`)
- **Vercel Speed Insights** injected in root layout

### Data Flow

Each feature follows the same pattern: **async Server Component → service module → external API**

- `blog/page.tsx` and `blog/[slug]/page.tsx` call `blogApi.ts` which wraps the MicroCMS SDK
- `gallery/page.tsx` calls `photoApi.ts` which queries Supabase for photo records and constructs public storage URLs
- Tutorial content (`tutorial/`) is static — no external data

### Key Conventions

- **Path alias**: `@/*` → `./src/*`
- **Client components** are marked `'use client'` and kept minimal; data fetching happens in Server Components
- **Feature-scoped components**: each feature (`blog/`, `gallery/`, `tutorial/`) has its own `components/` and `types/` subdirectories
- **Shared UI** lives in `src/components/` (layout pieces) and `src/components/ui/` (base primitives built on Radix UI + CVA)
- Image domains for `next/image` are configured in `next.config.ts` (doodleipsum.com + Supabase storage)
- Build output is `standalone` for self-contained deployments

### Environment Variables

Required in `.env.local`:

```
MICROCMS_API_KEY
SUPABASE_URL
SUPABASE_KEY
SUPABASE_PHOTO_DIRECTORY
```
