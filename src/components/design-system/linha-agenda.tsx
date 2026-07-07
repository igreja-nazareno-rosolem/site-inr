import * as React from "react";
import { cn } from "@/lib/utils";

export interface LinhaAgendaProps extends React.HTMLAttributes<HTMLDivElement> {
  dia: React.ReactNode;
  hora: React.ReactNode;
  nome: React.ReactNode;
  /** Elemento opcional no final (ex.: um <Chip>), alinhado à direita. */
  etiqueta?: React.ReactNode;
}

/** Pílula navy da agenda (dia · hora · nome · etiqueta opcional). */
export const LinhaAgenda = React.forwardRef<HTMLDivElement, LinhaAgendaProps>(
  ({ className, dia, hora, nome, etiqueta, ...props }, ref) => (
    <div ref={ref} className={cn("inr-sched-row", className)} {...props}>
      <span className="inr-sched-day">{dia}</span>
      <span className="inr-sched-time">{hora}</span>
      <span className="inr-sched-name">{nome}</span>
      {etiqueta ? <span className="inr-sched-tag">{etiqueta}</span> : null}
    </div>
  )
);
LinhaAgenda.displayName = "InrLinhaAgenda";
