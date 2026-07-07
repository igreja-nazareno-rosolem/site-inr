# INR — Design System

Portado fielmente do handoff aprovado (projeto **"INR Institucional"** no claude.ai/design, arquivos `css/inr.css`, `css/inr-pages.css`, `js/*.js` — espelho local gitignorado em `design-handoff/`). Este documento é a referência da camada visual do site.

## Onde cada coisa vive

| Camada | Arquivo | Conteúdo |
|--------|---------|----------|
| **Tokens** | `src/index.css` | Variáveis CSS da marca + mapeamento `@theme` do Tailwind (cores/fonte). Inclui tokens semânticos compatíveis com shadcn (o kit foi removido por falta de uso; readicionável via `npx shadcn add`). |
| **CSS de componentes** | `src/styles/inr-design-system.css` | Classes `inr-*` (botões, cartões, chips, hero, navbar, menu lateral, rodapé, agenda, seções da identidade etc.), em `@layer components`. |
| **Primitivos React** | `src/components/design-system/` | Wrappers tipados sobre as classes `inr-*`. Importe de `@/components/design-system`. |
| **Ícones do design** | `src/components/icones/icones.tsx` | Conjunto de ícones de traço do handoff (`Icone nome="..."`) + `GlifoWhatsApp`. |
| **Ícones de redes** | `src/components/icones/redes-sociais.tsx` | Instagram/Facebook/Youtube em SVG inline (o lucide v1 removeu ícones de marca). |
| **Dados canônicos** | `src/lib/dados-igreja.ts` | Conteúdo aprovado (igreja, agenda, pastores, equipe, ministérios, contatos, PIX, identidade ministerial) + `urlPublica()`. |

> As classes têm o prefixo **`inr-`** de propósito — nomes crus como `.card`, `.grid`, `.section`, `.dark` colidiriam com utilitários do Tailwind (e com convenções como a classe de dark-mode usada pelo ecossistema shadcn, caso volte a ser adotado).

> **Nomenclatura:** arquivos, variáveis e props em **pt-BR**; termos técnicos consagrados permanecem em inglês (`hover`, `asChild`, `Link`, `URL`, `props`, `Chip`).

## Tokens

**Paleta:** `--cyan #00A9E0` · `--royal #2440E8` · `--indigo #5B2EC8` · `--navy #0A1626` (+ `--navy-soft`, `--navy-card`) · neutros frios `--mist`, `--mist-2`, `--ink`, `--brand-muted`.

**Gradientes:**
- `--grad` — `cyan→royal→indigo` (118°): heros, emblemas, avatares, botões gradientes.
- `--grad-nav` — 5 paradas `#0B1546→#2434C6→#5B2EC8→#9B2A93→#C0267F`: somente navbar (adiciona magenta/rosa).
- `--grad-text` — ciano claro→periwinkle→lavanda, para texto recortado sobre escuro.

**Tipografia:** **Manrope** (400–800), títulos peso 800, tracking `-0.02em`.

**Raios:** `--r-pill 999px` · `--r-xl 30px` · `--r-lg 24px` · `--r-md 16px` · `--r-sm 11px`.
**Sombras:** `--sh-sm/md/lg` + `--sh-glow` (brilho royal dos botões gradientes).

As cores da marca também são utilitários Tailwind: `bg-navy`, `text-royal`, `bg-mist`, `text-cyan`, `text-indigo` etc.

## Primitivos React

```tsx
import { Botao, Chip, Cartao, Sobretitulo, TituloSecao, Emblema,
         AvatarIniciais, FotoPlaceholder, LinhaAgenda, CartaoCulto,
         WhatsAppFlutuante } from "@/components/design-system";
```

- **`Botao`** — pílula. `variante`: `solido|gradiente|claro|fantasma|contorno|whatsapp`; `tamanho`: `medio|pequeno`; `bloco`; `asChild` (envolva um `<Link>` do wouter ou `<a>`).
- **`Chip`** — `variante`: `solido|suave|linha`.
- **`Cartao`** — cartão de superfície; `hover` para elevação. Adapta-se dentro de `.inr-dark`.
- **`Sobretitulo`** / **`TituloSecao`** (`sobretitulo`, `titulo`, `descricao`, `centralizado`, `tituloGradiente`).
- **`Emblema`** — quadrado com ícone em gradiente; variante `suave`. Passe um `<Icone>` como filho.
- **`AvatarIniciais`** — círculo gradiente a partir de `nome`; `grande`.
- **`FotoPlaceholder`** — placeholder listrado; `rotulo`, `sobreGradiente`. Use onde a foto real depende de autorização — nunca inventar imagem.
- **`LinhaAgenda`** — pílula navy da agenda (`dia`/`hora`/`nome`/`etiqueta`).
- **`CartaoCulto`** — cartão "vidro" da faixa do hero (envolva em `<div className="inr-svc-strip">`).
- **`WhatsAppFlutuante`** — botão flutuante fixo; exige `telefone`, `mensagem` opcional.

Componentes de página compartilhados: **`Cabecalho`** (`src/components/cabecalho.tsx` — navbar gradiente com estado "rolada" + menu lateral mobile), **`Rodape`** (`src/components/rodape.tsx`) e **`HeroPagina`** (`src/components/hero-pagina.tsx` — hero interno com foto opcional de `public/fotos/`).

## Padrão de seção

```tsx
<section className="inr-section inr-light">      {/* ou inr-dark / inr-plain */}
  <div className="inr-wrap">
    <TituloSecao sobretitulo="Envolva-se" titulo="Ministérios" tituloGradiente descricao="…" />
    <div className="inr-grid inr-g-3"> … </div>
  </div>
</section>
```

`.inr-page-anim` num contêiner escalona uma animação de entrada (respeita `prefers-reduced-motion`). O `App.tsx` já aplica no `<main>` com `key` por rota. **Atenção:** elementos `position: fixed` (toast etc.) não podem ser filhos diretos do contêiner animado — a animação força `opacity: 1`; use um portal para o `body` (ver `contribua.tsx`).

Classes específicas de página já portadas: hero com foto (`inr-hero-photo`), versículo (`inr-verse`), valores (`inr-valores-grid`, `inr-valor-card`), DNA (`inr-dna-sec/list/linha`), manifesto (`inr-manif*`), toast (`inr-toast`), pastor em destaque (`inr-pastor-destaque`).

## Fotos e logos

Aprovadas no handoff e disponíveis em `public/`: `logo-inr-branco.png` (nav/rodapé), `logo-inr-app.jpg` (favicon) e `fotos/foto1..7.jpg` (heros: 1=início, 2=contato, 3=ministérios, 4=sobre, 6=contribua, 7=liderança; 5 reservada à agenda dinâmica da Fase 2). Sempre monte URLs com `urlPublica()` (respeita o base `/site-inr/`).

## Nota de escopo

Tokens + CSS + primitivos + **páginas da Fase 1 implementadas** (Início, Sobre, Liderança, Ministérios, Agenda, Contato, Contribua). Os estilos do protótipo da Fase 2 (agenda dinâmica com calendário, player de cultos online, jornada "novo aqui", passos da secretaria, rosca financeira) **não foram portados** — portar junto com as respectivas páginas.
