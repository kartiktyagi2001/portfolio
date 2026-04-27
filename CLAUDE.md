# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 15 portfolio (React 19, TypeScript, Tailwind CSS v4) deployed on Vercel. All content is static — no backend, no API calls.

**Source layout:**
- `src/app/` — Next.js App Router: `layout.tsx` (root with Navbar), `page.tsx` (home with all sections), `globals.css`
- `src/components/` — UI components and data

**Page structure** (`page.tsx`): four `<section>` elements — `#home`, `#projects`, `#blogs`, `#ideas` — rendered inline. Navbar keyboard shortcuts (`h`, `p`, `b`, `i`) scroll to these anchors.

**Content data** (`components/items.tsx`): All displayed content (projects, blogs, ideas) lives here as typed arrays. To add/remove items, edit these arrays — the `List` component renders them generically.

**Key components:**
- `list.tsx` — reusable renderer for all three item types; accepts `title`, `items`, optional `about`, and `type`
- `scramble.tsx` — client-side character-scramble animation (`"use client"`); used in the hero header
- `stack.tsx` — tech logo grid pulling SVGs from `/public/logos/`
- `navbar.tsx` — keyboard shortcut navigation (ignores keypresses when focus is on `input`/`textarea`)

## Styling

Tailwind CSS v4 (PostCSS plugin). Dark theme defined via CSS variables in `globals.css`:
- `--background`: `#090a0a` (near-black)
- `--foreground`: `#d1d5db` (light gray)
- Purple accent: `#a855f7`

Path alias `@/*` resolves to `./src/*`.
