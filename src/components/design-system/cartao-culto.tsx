import * as React from "react";
import { cn } from "@/lib/utils";

export interface CartaoCultoProps extends React.HTMLAttributes<HTMLDivElement> {
  dia: React.ReactNode;
  hora: React.ReactNode;
  nome: React.ReactNode;
}

/**
 * Cartão "vidro" da faixa de cultos do hero. Agrupe até três dentro de um
 * `<div className="inr-svc-strip">` sobre uma superfície com gradiente.
 */
export const CartaoCulto = React.forwardRef<HTMLDivElement, CartaoCultoProps>(
  ({ className, dia, hora, nome, ...props }, ref) => (
    <div ref={ref} className={cn("inr-glass", className)} {...props}>
      <div className="inr-svc-day">{dia}</div>
      <div className="inr-svc-time">{hora}</div>
      <div className="inr-svc-name">{nome}</div>
    </div>
  )
);
CartaoCulto.displayName = "InrCartaoCulto";
