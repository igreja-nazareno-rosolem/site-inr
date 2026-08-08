import type { SVGProps } from "react";

/**
 * Ícones de redes sociais do design aprovado (handoff `js/components.js`),
 * traço 2px sobre `currentColor`. O lucide-react 1.x removeu os ícones de
 * marca, por isso eles vivem aqui.
 */
type PropsIcone = SVGProps<SVGSVGElement>;

function IconeRede({ children, ...props }: PropsIcone & { children: React.ReactNode }) {
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
      {children}
    </svg>
  );
}

export function Instagram(props: PropsIcone) {
  return (
    <IconeRede {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </IconeRede>
  );
}

export function Facebook(props: PropsIcone) {
  return (
    <IconeRede {...props}>
      <path
        d="M14 9V7c0-1 .5-2 2-2h2V2h-3c-2.5 0-4 1.7-4 4v3H8v3h3v8h3v-8h2.5l.5-3h-3Z"
        fill="currentColor"
        stroke="none"
      />
    </IconeRede>
  );
}

export function Youtube(props: PropsIcone) {
  return (
    <IconeRede {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </IconeRede>
  );
}
