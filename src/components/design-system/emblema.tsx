import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmblemaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variante suave (fundo tingido) em vez do gradiente sólido. */
  suave?: boolean;
}

/** Quadrado arredondado com ícone (gradiente por padrão). Passe um ícone como filho. */
export const Emblema = React.forwardRef<HTMLDivElement, EmblemaProps>(
  ({ className, suave = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-ibadge", suave && "inr-ibadge-soft", className)}
      {...props}
    >
      {children}
    </div>
  )
);
Emblema.displayName = "InrEmblema";
