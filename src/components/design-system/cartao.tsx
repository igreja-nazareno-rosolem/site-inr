import * as React from "react";
import { cn } from "@/lib/utils";

export interface CartaoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adiciona a elevação ao passar o mouse (`.inr-card-hover`). */
  hover?: boolean;
}

/** Cartão de superfície da INR. Adapta-se automaticamente dentro de `.inr-dark`. */
export const Cartao = React.forwardRef<HTMLDivElement, CartaoProps>(
  ({ className, hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-card", hover && "inr-card-hover", className)}
      {...props}
    />
  )
);
Cartao.displayName = "InrCartao";
