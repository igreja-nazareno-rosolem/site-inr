# Igreja do Nazareno Rosolém — Site

Site institucional da **Igreja do Nazareno Rosolém (INR)** — Hortolândia/SP. SPA estática, mobile-first, em português (pt-BR).

🌐 **Produção:** https://igreja-nazareno-rosolem.github.io/site-inr/

## Stack

- **React 19** + **TypeScript** (modo strict)
- **Vite 8** (bundler Rolldown/Oxc)
- **Tailwind CSS v4** — configuração CSS-first (não há `tailwind.config`; os tokens ficam em `src/index.css` via `@theme` + variáveis CSS)
- **shadcn/ui** (primitivos Radix) em `src/components/ui/`
- **wouter** (rotas) · **TanStack Query** (preparado para a Fase 2) · framer-motion · lucide-react
- **Design System INR** próprio — ver [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)

## Pré-requisitos

- **Node.js `^20.19` ou `>=22.12`** (exigência do Vite 8). A CI usa Node 22.
- **npm** (o projeto usa `npm`, não Yarn)

## Scripts

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento em http://localhost:5173/site-inr/ |
| `npm run build` | Build de produção → `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npx tsc --noEmit` | Checagem de tipos (⚠️ o build do Vite **não** roda o `tsc`) |

> Antes de abrir um PR, rode `npm run build` **e** `npx tsc --noEmit` — ambos devem passar.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse **http://localhost:5173/site-inr/** (a base `/site-inr/` faz parte da URL, inclusive em dev).

## Estrutura do projeto

```
src/
  App.tsx                  → Rotas (wouter) + Layout (Navbar/Footer). Registre páginas novas aqui.
  pages/                   → Uma página por arquivo (home, sobre, lideranca, ...)
  components/
    design-system/         → Primitivos React do Design System INR (Button, Card, Chip, ...)
    icons/                 → Ícones de marca (SVG inline)
    ui/                    → Componentes shadcn/ui (Radix)
    navbar.tsx, footer.tsx
  styles/
    inr-design-system.css  → Camada de classes utilitárias `inr-*` do Design System
  index.css                → Tokens da marca (cores, gradientes, Manrope) + tema shadcn
  lib/utils.ts             → util `cn()` (clsx + tailwind-merge)
public/                    → Assets estáticos (logo, imagens, robots.txt)
```

Alias de import: `@/` → `src/` (configurado em `vite.config.ts` e `tsconfig.json`).

## Identidade visual / Design System

A identidade visual aprovada está implementada em código. Comece por [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

- **Tokens** (paleta, gradientes, raios, sombras, fonte **Manrope**): `src/index.css` (`:root` + `@theme`)
- **Classes utilitárias** `inr-*`: `src/styles/inr-design-system.css`
- **Componentes React**: `src/components/design-system/`

> Para mudar a identidade visual, edite os tokens em `src/index.css` — não cores soltas espalhadas pelas páginas.

## Base path do GitHub Pages (cuidado)

O site é servido a partir de `/site-inr/`, definido em três lugares que precisam ficar em sincronia:

1. `vite.config.ts` — `const BASE = "/site-inr/"`
2. `src/App.tsx` — `<Router base={...}>` derivado de `import.meta.env.BASE_URL`
3. URLs de assets em `index.html` / algumas páginas

Ao referenciar assets de `public/` no código, monte a URL com `import.meta.env.BASE_URL` em vez de fixar `/site-inr/`.

## Deploy

O deploy é **automático**: todo push na branch `main` dispara o workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), que builda (Node 22) e publica `dist/` no GitHub Pages. Não há passo manual.

Para o site funcionar, o GitHub Pages precisa estar configurado em **Settings → Pages → Source: GitHub Actions** (já configurado neste repositório).

## Convenções

- **Idioma:** todo o conteúdo é em **pt-BR** — nada em inglês, nem em textos de placeholder/erro.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) com mensagens em pt-BR (`feat: adiciona página de liderança`).
- **Fluxo:** nunca commitar direto na `main` — branch de feature + PR, revisado por pelo menos uma pessoa do time.
- **Conteúdo institucional** (nomes, fotos, e-mails) nunca é inventado: usa-se o conteúdo canônico ou um placeholder claramente marcado (`{/* TODO: confirmar com a equipe */}`).

## Documentação adicional

- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — tokens, classes e componentes do Design System
- [`CLAUDE.md`](./CLAUDE.md) — guia do projeto (arquitetura, escopo das fases, conteúdo canônico)
