import type { ReactNode, SVGProps } from "react";

/**
 * Conjunto de ícones do design aprovado (handoff `js/components.js`),
 * traço 2px, 24×24, `currentColor` — portado exatamente como no protótipo.
 */
const TRACOS = {
  chama: <path d="M12 3c2 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.2.4-2 .8-2.6C8 9.5 7 11 7 13a5 5 0 0 0 10 0c0-4-3-6-5-10Z" />,
  predio: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-3.5h4V21" />
    </>
  ),
  cruz: <path d="M12 4v17M5.5 10h13" />,
  alvorada: (
    <>
      <path d="M4 18h16M8 18a4 4 0 0 1 8 0" />
      <path d="M12 6v3M6 9.5l1.8 1.8M18 9.5l-1.8 1.8" />
    </>
  ),
  ferramenta: <path d="M15.5 6.5a4 4 0 0 0-5.3 4.9L4 17.6V20h2.4l6.2-6.2a4 4 0 0 0 4.9-5.3l-2.5 2.5-2.1-.5-.5-2.1 2.6-2.4Z" />,
  faisca: (
    <>
      <path d="M12 3v6M12 15v6M5 12h6M13 12h6" />
      <path d="M7.5 7.5l3 3M13.5 13.5l3 3" />
    </>
  ),
  pipa: (
    <>
      <path d="M12 3l7 7-7 11-7-11 7-7Z" />
      <path d="M5 10h14M12 3v18" />
    </>
  ),
  musica: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </>
  ),
  maos: <path d="M5 13c0-3 2-5 4-5l3 2 3-2c2 0 4 2 4 5v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2Z" />,
  livro: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2V5Z" />
    </>
  ),
  globo: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
  aliancas: (
    <>
      <circle cx="9" cy="13" r="6" />
      <circle cx="15" cy="13" r="6" />
      <path d="M9 3l3 3 3-3" />
    </>
  ),
  escudo: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />,
  coracao: <path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20Z" />,
  presente: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 13h16M12 9v11M12 9C9 9 7 8 7 6a2 2 0 0 1 5-1c0-1 5-1 5 1 0 2-2 3-5 3Z" />
    </>
  ),
  documento: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M8 13h8M8 17h6" />
    </>
  ),
  carteira: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16 14h2" />
    </>
  ),
  pessoas: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5a3 3 0 0 1 0 6M17 14c2.2.7 4 2.6 4 6" />
    </>
  ),
  oracao: (
    <>
      <path d="M12 3c-1 3-3 5-3 8 0 2 1 4 3 5 2-1 3-3 3-5 0-3-2-5-3-8Z" />
      <path d="M9 19h6" />
    </>
  ),
  conversa: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />,
  calendario: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  gota: <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z" />,
  play: <path d="M8 5v14l11-7L8 5Z" />,
  pino: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  copiar: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  confirmado: <path d="M5 12l5 5L20 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  seta_direita: <path d="M9 6l6 6-6 6" />,
  seta_baixo: <path d="M6 9l6 6 6-6" />,
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  telefone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  ao_vivo: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M6.5 6.5a8 8 0 0 0 0 11M17.5 6.5a8 8 0 0 1 0 11M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17" />
    </>
  ),
  filtro: <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />,
  pix: <path d="M12 3l4 4-4 4-4-4 4-4ZM12 13l4 4-4 4-4-4 4-4ZM3 12l4-4 4 4-4 4-4-4ZM13 12l4-4 4 4-4 4-4-4Z" />,
  estrela: <path d="M12 3l2.5 6 6.5.5-5 4 1.6 6.5L12 16.8 6.4 20l1.6-6.5-5-4 6.5-.5L12 3Z" />,
} satisfies Record<string, ReactNode>;

export type NomeIcone = keyof typeof TRACOS;

export interface IconeProps extends SVGProps<SVGSVGElement> {
  nome: NomeIcone;
}

export function Icone({ nome, ...props }: IconeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {TRACOS[nome]}
    </svg>
  );
}

/** Glifo do WhatsApp (preenchido), usado nos botões `.inr-btn-wa`. */
export function GlifoWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7-1.8a12.9 12.9 0 0 0 5 1c6.6 0 12-5.3 12-11.9S22.6 3 16 3Zm0 21.7c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3a9.6 9.6 0 0 1-1.5-5.1c0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8-4.5 9.7-10 9.7Zm5.5-7.3c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8 8 0 0 1-3.9-3.4c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}
