# Cobalt — Agency Website

A premium, high-performance marketing site for the Cobalt web agency.
Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**Framer Motion**, and **Supabase** (contact lead capture).

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then add your Supabase keys
npm run dev                         # http://localhost:3000
```

## Architecture

The site is **content-driven** — copy and data live in typed files so you can
change the business content without touching components.

```
src/
  app/                 # routes (home, services, portfolio, process, pricing, about, contact)
  components/
    ui/                # primitives: Button, Card, Section, Container, Reveal, Icon…
    sections/          # composed blocks: Hero, ServicesGrid, PricingTable, ContactForm…
    layout/            # Navbar, Footer, Logo, ThemeToggle
  content/             # ⭐ single source of truth: site, services, pricing, process, portfolio
  lib/                 # utils, animations, seo, supabase, leads (validation)
  app/globals.css      # ⭐ design tokens (CSS variables) + dark mode + theme
```

### Where to edit common things
| Want to change…            | Edit                          |
| -------------------------- | ----------------------------- |
| Brand name, nav, contact   | `src/content/site.ts`         |
| Services                   | `src/content/services.ts`     |
| Pricing tiers              | `src/content/pricing.ts`      |
| Portfolio projects         | `src/content/portfolio.ts`    |
| Colors / theme             | `src/app/globals.css`         |

## Supabase (lead capture)

1. Create a free project at [supabase.com](https://supabase.com).
2. Run the SQL in **`supabase/schema.sql`** (Supabase → SQL Editor).
3. Copy your Project URL + anon key (Settings → API) into `.env.local`.

The contact form writes leads to Supabase **directly from the browser** (anon
insert, protected by Row Level Security) so it works on static hosting with no
backend server. Reads are blocked for anonymous users — view leads from the
Supabase dashboard. Until keys are set, the form shows a friendly fallback.

## Deployment (GitHub Pages)

The app is configured for **static export** (`output: "export"` in
`next.config.ts`) and deploys to GitHub Pages from the `gh-pages` branch.

```bash
# Build with the project base path (repo name) and publish the gh-pages branch:
NEXT_PUBLIC_BASE_PATH=/cobalt npm run build   # outputs ./out
# (CI/script pushes ./out to the gh-pages branch)
```

- Live (temporary): `https://arian200825.github.io/cobalt/`
- For a custom domain (e.g. `cobalt.design`), build **without** `NEXT_PUBLIC_BASE_PATH`
  and point the domain at Pages (or deploy to Vercel/Netlify for full SSR).
- To enable live lead capture on the deployed site, build with
  `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` set in the
  environment.

## Outstanding inputs (search the code for `NEEDS_INPUT`)
- Real contact email / phone / location, booking (Calendly) URL
- Social handles
- Founder/about story, real testimonials & client logos
- Real project images in `public/work/` (gradient placeholders show until then)

## Scripts
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint
