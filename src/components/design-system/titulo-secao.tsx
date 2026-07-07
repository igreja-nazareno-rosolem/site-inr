import * as React from "react";
import { cn } from "@/lib/utils";

export interface SobretituloProps extends React.HTMLAttributes<HTMLSpanElement> {}

/** Rótulo pequeno em caixa alta com traço à esquerda (eyebrow do design). */
export const Sobretitulo = React.forwardRef<HTMLSpanElement, SobretituloProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("inr-eyebrow", className)} {...props} />
  )
);
Sobretitulo.displayName = "InrSobretitulo";

export interface TituloSecaoProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  sobretitulo?: React.ReactNode;
  titulo: React.ReactNode;
  descricao?: React.ReactNode;
  /** Centraliza o bloco do título. */
  centralizado?: boolean;
  /** Aplica o gradiente da marca como preenchimento do título. */
  tituloGradiente?: boolean;
  as?: "h1" | "h2" | "h3";
}

/** Bloco sobretítulo + título + descrição usado na abertura das seções. */
export const TituloSecao = React.forwardRef<HTMLDivElement, TituloSecaoProps>(
  (
    { className, sobretitulo, titulo, descricao, centralizado = false, tituloGradiente = false, as = "h2", ...props },
    ref
  ) => {
    const Titulo = as;
    return (
      <div
        ref={ref}
        className={cn("inr-section-head", centralizado && "inr-center", className)}
        {...props}
      >
        {sobretitulo ? <Sobretitulo>{sobretitulo}</Sobretitulo> : null}
        <Titulo className={cn(tituloGradiente && "inr-grad-ink")}>{titulo}</Titulo>
        {descricao ? <p className="inr-lead">{descricao}</p> : null}
      </div>
    );
  }
);
TituloSecao.displayName = "InrTituloSecao";
