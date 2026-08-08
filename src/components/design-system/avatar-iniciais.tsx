import * as React from "react";
import { cn } from "@/lib/utils";

function iniciaisDe(nome: string): string {
  const limpo = nome.replace(/^(Pr\.|Pra\.)\s*/, "").trim();
  const partes = limpo.split(/\s+/).filter(Boolean);
  if (partes.length === 0) return "";
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[1][0]).toUpperCase();
}

export interface AvatarIniciaisProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nome completo; as iniciais vêm das duas primeiras palavras (ignora "Pr."/"Pra."). */
  nome: string;
  /** Variante grande de 88px. */
  grande?: boolean;
}

/** Círculo com gradiente exibindo as iniciais (placeholder até chegarem as fotos). */
export const AvatarIniciais = React.forwardRef<HTMLDivElement, AvatarIniciaisProps>(
  ({ className, nome, grande = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-avatar", grande && "inr-avatar-lg", className)}
      aria-label={nome}
      title={nome}
      {...props}
    >
      {iniciaisDe(nome)}
    </div>
  )
);
AvatarIniciais.displayName = "InrAvatarIniciais";
