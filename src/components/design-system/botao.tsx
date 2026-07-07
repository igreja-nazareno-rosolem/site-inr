import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Botão-pílula da INR. As variantes espelham as classes `.inr-btn*` do
 * handoff. Use `asChild` (convenção Radix) para renderizar outro elemento,
 * por exemplo um `<Link>` do wouter ou um `<a>`.
 */
const variantesBotao = cva("inr-btn", {
  variants: {
    variante: {
      solido: "", // pílula navy (padrão)
      gradiente: "inr-btn-grad",
      claro: "inr-btn-light",
      fantasma: "inr-btn-ghost",
      contorno: "inr-btn-outline",
      whatsapp: "inr-btn-wa",
    },
    tamanho: {
      medio: "",
      pequeno: "inr-btn-sm",
    },
    bloco: { true: "inr-btn-block", false: "" },
  },
  defaultVariants: { variante: "solido", tamanho: "medio", bloco: false },
});

export interface BotaoProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variantesBotao> {
  asChild?: boolean;
}

export const Botao = React.forwardRef<HTMLButtonElement, BotaoProps>(
  ({ className, variante, tamanho, bloco, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(variantesBotao({ variante, tamanho, bloco }), className)}
        {...props}
      />
    );
  }
);
Botao.displayName = "InrBotao";

export { variantesBotao };
