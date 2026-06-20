# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Institutional website for **Igreja do Nazareno Rosolém (INR)**, a Church of the Nazarene congregation in Hortolândia/SP, Brazil. Static SPA deployed to GitHub Pages at https://igreja-nazareno-rosolem.github.io/site-inr/.

All UI copy is in Brazilian Portuguese (pt-BR). Most visitors arrive via WhatsApp/Instagram on mobile — design mobile-first.

**Current state caveat:** the existing pages are an AI-generated base produced before the design was approved. They do NOT follow the approved visual identity and contain invented content (e.g., fictional pastor names/bios in `src/pages/lideranca.tsx`). Treat existing page content as unverified placeholder. Replace it with the canonical content below or with clearly marked placeholders (`{/* TODO: confirmar com a equipe */}`) — never invent names, e-mails, photos, or institutional text.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npx tsc --noEmit   # type-check (Vite build does NOT run tsc)
```

No lint, format, or test setup exists yet (configuring lint/format is a Phase 1 item). Always run `npm run build` and `npx tsc --noEmit` before opening a PR.

## Stack (decision record)

**Decision: keep and evolve the existing Vite stack — do not rewrite in Next.js.** The site is almost entirely static, hosting must stay free in Phase 1 (GitHub Pages), and the Vite + React base already works end-to-end including CI/CD. Next.js SSG (`output: export`) was considered for SEO, but would mean a rewrite for marginal gain on a ~9-page mostly-static site. Revisit only if Phase 2 needs outgrow this; mitigate SEO via meta tags, Open Graph, and `sitemap.xml` instead.

- Vite 7 + React 19 + TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/vite` — **there is no `tailwind.config`**; theme tokens live in `src/index.css` using `@theme` + CSS variables
- shadcn/ui-style components (Radix primitives) in `src/components/ui/` — generated code, edit in place
- wouter for routing; TanStack Query provider already wired in `App.tsx` (unused today, kept for Phase 2 dynamic data)
- framer-motion, lucide-react, sonner, react-hook-form + zod resolvers available

## Architecture

- `src/App.tsx` — all routes (wouter `<Switch>`) wrapped in a `Layout` with `Navbar`/`Footer` from `src/components/`. Register new pages here.
- `src/pages/*.tsx` — one file per page; pages are self-contained, with content data declared as consts at the top of each file.
- Path alias `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

### GitHub Pages base path — easy to break

The site is served from `/site-inr/`, configured in three places that must stay in sync:

1. `vite.config.ts` — `const BASE = "/site-inr/"`
2. `src/App.tsx` — `<WouterRouter base={...}>` derived from `import.meta.env.BASE_URL`
3. Hardcoded `/site-inr/...` asset URLs in `index.html` (favicon) and some pages (e.g., hero image in `home.tsx`)

When referencing `public/` assets in code, build URLs with `import.meta.env.BASE_URL` instead of hardcoding `/site-inr/`.

## Deploy

`.github/workflows/deploy.yml`: every push to `main` builds (Node 22) and publishes `dist/` to GitHub Pages — no manual deploy step. The workflow currently deletes `package-lock.json` and runs `npm install` instead of `npm ci` (a past workaround that defeats lockfile reproducibility — candidate for cleanup).

## Visual identity (approved design system)

Implement design tokens and base components BEFORE pages. Faithful reference: the HTML prototype `INR Site (offline).html` attached to the design card on Trello — replicate its layout, spacing, and components.

- **Palette:** gradient Ciano `#00A9E0` → Azul Royal `#2440E8` → Índigo/Violeta `#5B2EC8`; dark background Azul-marinho `#0A1626`; white text/logo `#FFFFFF`
- **Gradient** (ciano→royal→índigo) on heros and highlights; sections alternate light/dark backgrounds
- **Buttons/chips:** dark pill style (`#0A1626`), fully rounded corners, bold white text
- **Typography:** **Manrope** (400–800) for both headings and body — headings weight 800, tracking `-0.02em`. (The real handoff uses Manrope, not Poppins/Archivo; the old Fraunces/Plus Jakarta leftovers were removed.)
- **Logo:** Nazarene flame + Bible + "INR" monogram in white (use existing SVG or placeholder)
- **Accessibility:** adequate contrast over gradients, generous touch targets, keyboard navigation

**The design system is now implemented in code** (extracted from the handoff). See `DESIGN_SYSTEM.md`. Tokens live in `src/index.css` (`:root` brand vars + `@theme`); the `inr-*` component classes in `src/styles/inr-design-system.css`; typed React primitives in `src/components/design-system/`. Use these when building pages. Existing pages still hold the old AI-base markup until the page-build phase.

## Canonical content (approved data — do not invent)

- **Address:** R. Ercílio Antônio Meira, 777 — Jd. Santa Izabel, Hortolândia/SP, 13185-220
- **Weekly schedule:** Dom 8h30 Culto · 9h45 EBD · 19h Culto; Ter 19h30 oração; Sáb 19h30 JNI + NazaTeen; 1ª sex 19h30 homens; 3ª sex 22h30 vigília; última sex 19h30 mulheres
- **Pastoral care:** seg–sex 9h–18h; Pr. Isaque +55 19 99450-4004
- **Giving:** PIX CNPJ `09493935001799` (Sicredi)
- **YouTube:** @nazarenorosolem
- **Pastors:** Isaque (fundador, desde 2001), Adnan Attuy, Gustavo Fontes, Gabriel, Rivaldo Sena, Jorge
- **Team:** Secretaria — Matheus Gabriel; Financeiro — Sidmar; Infantil — Adriana de Paula; JNI — Marcos Cogo; Louvor — Wesley Alves; Mídia — Rafael Fonseca; Social — Rones; MNI — Diego Santos; Casais — Adnan e Débora Attuy; Mulheres — Carla; Homens — Alan; DNI/Discipulado
- **Ministries:** JNI, NazaTeen, Infantil, Louvor, Mídia, Recepção, DNI, MNI, Casais, Homens, Mulheres, Social

Other sensitive content (official e-mail, institutional texts, photos requiring image-use authorization) goes in as clearly marked placeholders pending team confirmation.

## Scope

**Phase 1 (current — MVP, one small PR per item, in order):** foundation (tokens, responsive header/nav with mobile hamburger, footer, floating WhatsApp button) → CI/CD → Home (hero "Aqui tem lugar pra você", service times, CTAs) → Sobre/História → Liderança → Ministérios ("Envolva-se") → Agenda (static) → Central de contatos (WhatsApp buttons, Google Maps embed) → Contribua (PIX + QR code + copy button) → basic SEO (meta, Open Graph for WhatsApp previews, sitemap.xml, favicon) → LGPD privacy policy page.

**Phase 2 (structure for it, don't build):** dynamic agenda with category/ministry filters, boletim/avisos, online services (YouTube embeds), per-ministry pages, "Novo aqui?", secretaria services. Leave `// TODO Fase 2` markers where the structure anticipates this.

**Out of scope (Phases 3–4 — do not build):** leader area/login (Firebase), space reservations, financial transparency, event registration. Note: `src/pages/transparencia.tsx` exists from the old AI base but is out-of-scope content — don't expand it.

## Process

- Conventional commits with pt-BR messages (`feat: adiciona página de liderança`); small, reviewable commits
- Never commit directly to `main` — feature branch + PR, reviewed by at least one of Erick, Gabriel, Eliseu
- Build must pass before merge; after finishing each page, run the build and report what's done vs. what still depends on team content
