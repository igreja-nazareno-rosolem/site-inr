# INR — Design System

Ported faithfully from the approved design handoff (`design-handoff/inr-institucional/`, file `css/inr.css`). This document is the reference for the upcoming page-build phase.

## Where things live

| Layer | File | Contents |
|-------|------|----------|
| **Tokens** | `src/index.css` | Brand CSS variables + Tailwind `@theme` color/font mappings. Also keeps the shadcn token system, now aligned to the brand. |
| **Component CSS** | `src/styles/inr-design-system.css` | The `inr-*` classes (buttons, cards, chips, hero, agenda pills, etc.), in `@layer components`. |
| **React primitives** | `src/components/design-system/` | Typed wrappers over the `inr-*` classes. Import from `@/components/design-system`. |
| **Brand icons** | `src/components/icons/social-icons.tsx` | Instagram/Facebook/Youtube as inline SVG (lucide v1 dropped brand icons). |

> Classes are namespaced **`inr-`** on purpose — raw names like `.card`, `.grid`, `.section`, `.dark` would collide with Tailwind utilities and shadcn's dark-mode class and break existing pages.

## Tokens

**Palette:** `--cyan #00A9E0` · `--royal #2440E8` · `--indigo #5B2EC8` · `--navy #0A1626` (+ `--navy-soft`, `--navy-card`) · cool neutrals `--mist`, `--mist-2`, `--ink`, `--brand-muted`.

**Gradients:**
- `--grad` — `cyan→royal→indigo` (118°): heros, badges, avatars, gradient buttons.
- `--grad-nav` — 5-stop `#0B1546→#2434C6→#5B2EC8→#9B2A93→#C0267F`: navbar only (adds magenta/pink).
- `--grad-text` — light cyan→periwinkle→lavender, for text clip on dark.

**Type:** **Manrope** (400–800), headings weight 800, tracking `-0.02em`. (Replaced the old Fraunces/Plus Jakarta leftovers.)

**Radii:** `--r-pill 999px` · `--r-xl 30px` · `--r-lg 24px` · `--r-md 16px` · `--r-sm 11px`.
**Shadows:** `--sh-sm/md/lg` + `--sh-glow` (royal glow for gradient buttons).

Brand colors are also Tailwind utilities: `bg-navy`, `text-royal`, `bg-mist`, `text-cyan`, `text-indigo`, etc.

## React primitives

```tsx
import { Button, Chip, Card, Eyebrow, SectionHeading, IconBadge,
         AvatarInitials, ImagePlaceholder, ScheduleRow, ServiceTimeCard,
         WhatsAppFloat } from "@/components/design-system";
```

- **`Button`** — pill. `variant`: `solid|gradient|light|ghost|outline|whatsapp`; `size`: `md|sm`; `block`; `asChild` (wrap a wouter `<Link>`/`<a>`).
- **`Chip`** — `variant`: `solid|soft|line`.
- **`Card`** — surface card; `hover` for lift. Adapts inside `.inr-dark`.
- **`Eyebrow`** / **`SectionHeading`** (`eyebrow`, `title`, `lead`, `center`, `gradientTitle`).
- **`IconBadge`** — gradient icon square; `soft` variant. Pass a lucide icon as children.
- **`AvatarInitials`** — gradient circle from `name`; `lg`.
- **`ImagePlaceholder`** — striped placeholder; `label`, `onGrad`. Use wherever a real photo is pending team authorization — never invent imagery.
- **`ScheduleRow`** — dark navy agenda pill (`day`/`time`/`name`/`tag`).
- **`ServiceTimeCard`** — glass card for the hero strip (wrap in `<div className="inr-svc-strip">`).
- **`WhatsAppFloat`** — fixed floating button; requires `phone`, optional `message`.

## Section pattern

```tsx
<section className="inr-section inr-light">      {/* or inr-dark / inr-plain */}
  <div className="inr-wrap">
    <SectionHeading eyebrow="Envolva-se" title="Ministérios" gradientTitle lead="…" />
    <div className="inr-grid inr-g-3"> … </div>
  </div>
</section>
```

`.inr-page-anim` on a page wrapper staggers a reveal-on-load animation (respects `prefers-reduced-motion`).

## Scope note

Tokens + CSS layer + primitives are in place. **Existing page files were intentionally not modified** — pages adopt these during the page-build phase. The Fase-2 prototype styles (video player, calendar grid, finance donut) were not ported yet.
