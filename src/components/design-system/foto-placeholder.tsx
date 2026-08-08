import * as React from "react";
import { cn } from "@/lib/utils";

export interface FotoPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rótulo curto exibido na pílula (ex.: "FOTO — EQUIPE"). */
  rotulo?: string;
  /** Variante clara para uso sobre superfícies com gradiente/escuras. */
  sobreGradiente?: boolean;
}

/**
 * Placeholder de imagem com listras diagonais. Use sempre que uma foto real
 * ainda depende de autorização de uso de imagem — nunca publicar imagem inventada.
 */
export const FotoPlaceholder = React.forwardRef<HTMLDivElement, FotoPlaceholderProps>(
  ({ className, rotulo = "FOTO", sobreGradiente = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-ph", sobreGradiente && "inr-on-grad", className)}
      role="img"
      aria-label={rotulo}
      {...props}
    >
      <span>{rotulo}</span>
    </div>
  )
);
FotoPlaceholder.displayName = "InrFotoPlaceholder";
