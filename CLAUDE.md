# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Institutional website for **Igreja do Nazareno Rosolém (INR)**, a Church of the Nazarene congregation in Hortolândia/SP, Brazil. Static SPA deployed to GitHub Pages at https://igreja-nazareno-rosolem.github.io/site-inr/.

All UI copy is in Brazilian Portuguese (pt-BR). Most visitors arrive via WhatsApp/Instagram on mobile — design mobile-first; every page must stay fully responsive (no horizontal overflow at 360–768px).

**Naming convention:** files, variables, props, and comments are written in **pt-BR** (e.g. `cabecalho.tsx`, `dados-igreja.ts`, `variante`, `sobretitulo`). Established technical loanwords stay in English (`hover`, `asChild`, `Link`, `URL`, `props`, `Chip`, `Layout`). If generated/vendored code is ever added (e.g. shadcn components), it keeps its original English names.

**Content rule:** all page content comes from the approved design handoff and lives in `src/lib/dados-igreja.ts` — never invent names, e-mails, photos, or institutional text. Anything still pending team confirmation is marked `{/* TODO: confirmar com a equipe */}` or rendered with `FotoPlaceholder`.

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
- No shadcn kit: the AI-base `src/components/ui/` was removed as dead code once the INR design system replaced it. The semantic tokens in `src/index.css` stay shadcn-compatible — if Phase 2+ needs a ready Radix component, `npx shadcn@latest add <component>` works without rework
- wouter for routing; TanStack Query provider already wired in `App.tsx` (unused today, kept for Phase 2 dynamic data)
- Lean dependency set (9 runtime deps): wouter, TanStack Query, qrcode.react, Radix Slot + cva/clsx/tailwind-merge. Add libraries only when a phase actually needs them

## Architecture

- `src/App.tsx` — all routes (wouter `<Switch>`) wrapped in `Estrutura` with `Cabecalho`/`Rodape` from `src/components/` plus the floating WhatsApp button. Register new pages here. The `<main>` gets `inr-page-anim` + `key` per route (entry animation and scroll-to-top).
- Routes (Fase 1): `/`, `/sobre`, `/lideranca`, `/ministerios`, `/agenda`, `/contato`, `/contribua` (+ 404 `nao-encontrada.tsx`).
- `src/pages/*.tsx` — one file per page. Content data is centralized in `src/lib/dados-igreja.ts` (typed, canonical); pages only render it.
- `src/lib/pix.ts` — EMV "copia e cola" payload for the PIX QR code (rendered with `qrcode.react`).
- Path alias `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

### GitHub Pages base path — easy to break

The site is served from `/site-inr/`, configured in three places that must stay in sync:

1. `vite.config.ts` — `const BASE = "/site-inr/"`
2. `src/App.tsx` — `<WouterRouter base={...}>` derived from `import.meta.env.BASE_URL`
3. `index.html` — favicon uses `%BASE_URL%` (replaced by Vite at build time)

When referencing `public/` assets in code, use `urlPublica()` from `src/lib/dados-igreja.ts` (wraps `import.meta.env.BASE_URL`) instead of hardcoding `/site-inr/`.

## Deploy

`.github/workflows/deploy.yml`: every push to `main` builds (Node 22) and publishes `dist/` to GitHub Pages — no manual deploy step. The workflow currently deletes `package-lock.json` and runs `npm install` instead of `npm ci` (a past workaround that defeats lockfile reproducibility — candidate for cleanup).

## Visual identity (approved design system)

Faithful reference: the **"INR Institucional"** project on claude.ai/design (project id `8a453cf3-bb2d-4f6e-8d99-aa864f67e910`, main file `INR Site.html` + `css/` + `js/`), accessible via the DesignSync tool after `/design-login`. A local mirror of the fetched files lives in `design-handoff/` (gitignored). The same prototype is attached to the design card on Trello as `INR Site (offline).html`.

- **Palette:** gradient Ciano `#00A9E0` → Azul Royal `#2440E8` → Índigo/Violeta `#5B2EC8`; dark background Azul-marinho `#0A1626`; white text/logo `#FFFFFF`
- **Gradient** (ciano→royal→índigo) on heros and highlights; sections alternate light/dark backgrounds
- **Buttons/chips:** dark pill style (`#0A1626`), fully rounded corners, bold white text
- **Typography:** **Manrope** (400–800) for both headings and body — headings weight 800, tracking `-0.02em`. (The real handoff uses Manrope, not Poppins/Archivo; the old Fraunces/Plus Jakarta leftovers were removed.)
- **Logo:** Nazarene flame + Bible + "INR" monogram in white (use existing SVG or placeholder)
- **Accessibility:** adequate contrast over gradients, generous touch targets, keyboard navigation

**The design system AND the Fase-1 pages are implemented in code.** See `DESIGN_SYSTEM.md`. Tokens live in `src/index.css` (`:root` brand vars + `@theme`); the `inr-*` component classes in `src/styles/inr-design-system.css`; typed React primitives (pt-BR API) in `src/components/design-system/`; the design's stroke icon set in `src/components/icones/`. Approved photos/logos from the handoff live in `public/fotos/` and `public/logo-inr-*`.

## Canonical content (approved data — do not invent)

- **Address:** R. Ercílio Antônio Meira, 777 — Jd. Santa Izabel, Hortolândia/SP, 13185-220
- **Weekly schedule:** Dom 8h30 Culto · 9h45 EBD · 19h Culto; Ter 19h30 oração; Sáb 19h30 JNI + NazaTeen; 1ª sex 19h30 homens; 3ª sex 22h30 vigília; última sex 19h30 mulheres
- **Pastoral care:** seg–sex 9h–18h; Pr. Isaque +55 19 99450-4004; Secretaria (19) 3869-8121 / WhatsApp 55 19 3869-8121
- **Giving:** PIX CNPJ `09493935001799` (Sicredi, ag. 2387, c/c 2171-7, favorecido Igreja do Nazareno Rosolém)
- **Social:** YouTube @nazarenorosolem · Instagram @nazarenorosolem, @nazateenrosolem, @jnisemlimites · Facebook /inrosolem
- **Identidade ministerial** (documento oficial): slogan "Um Lugar de Novos Começos" · versículo 2Co 5:17 · missão/visão/7 valores/DNA/manifesto — full text in `src/lib/dados-igreja.ts` (`IDENTIDADE`)
- **Pastors:** Isaque (fundador, desde 2001), Adnan Attuy, Gustavo Fontes, Gabriel, Rivaldo Sena, Jorge
- **Team:** Secretaria — Matheus Gabriel; Financeiro — Sidmar; Infantil — Adriana de Paula; JNI — Marcos Cogo; Louvor — Wesley Alves; Mídia — Rafael Fonseca; Social — Rones; MNI — Diego Santos; Casais — Adnan e Débora Attuy; Mulheres — Carla; Homens — Alan; DNI/Discipulado
- **Ministries:** JNI, NazaTeen, Infantil, Louvor, Mídia, Recepção, DNI, MNI, Casais, Homens, Mulheres, Social

Other sensitive content (official e-mail, institutional texts, photos requiring image-use authorization) goes in as clearly marked placeholders pending team confirmation.

## Scope

**Phase 1 (current — MVP):** ✅ foundation (tokens, responsive header/nav with mobile drawer, footer, floating WhatsApp button) · ✅ CI/CD · ✅ Home (hero "Um lugar de novos começos", service times, CTAs) · ✅ Sobre (identidade ministerial completa) · ✅ Liderança · ✅ Ministérios ("Envolva-se") · ✅ Agenda (static) · ✅ Central de contatos (WhatsApp buttons, Google Maps embed) · ✅ Contribua (PIX + QR code local + copy button). **Remaining:** full SEO (Open Graph for WhatsApp previews, sitemap.xml — title/description/favicon done) → LGPD privacy policy page → real photos pending team authorization (`FotoPlaceholder` marks the spots).

**Phase 2 (structure for it, don't build):** dynamic agenda with category/ministry filters, boletim/avisos, online services (YouTube embeds), per-ministry pages, "Novo aqui?", secretaria services. Leave `// TODO Fase 2` markers where the structure anticipates this.

**Out of scope (Phases 3–4 — do not build):** leader area/login (Firebase), space reservations, financial transparency, event registration. (The old AI-base `transparencia.tsx` was removed with the rest of the AI-generated pages; the approved prototype has a Fase-2+ layout for it in `js/pages-fase2.js` with illustrative percentages, to be built only when the junta provides real numbers.)

## Process

- Conventional commits with pt-BR messages (`feat: adiciona página de liderança`); small, reviewable commits
- Never commit directly to `main` — feature branch + PR, reviewed by at least one of Erick, Gabriel, Eliseu
- Build must pass before merge; after finishing each page, run the build and report what's done vs. what still depends on team content
