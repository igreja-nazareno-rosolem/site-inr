import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variantesChip = cva("inr-chip", {
  variants: {
    variante: {
      solido: "", // navy (padrão)
      suave: "inr-chip-soft",
      linha: "inr-chip-line",
    },
  },
  defaultVariants: { variante: "solido" },
});

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof variantesChip> {}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variante, ...props }, ref) => (
    <span ref={ref} className={cn(variantesChip({ variante }), className)} {...props} />
  )
);
Chip.displayName = "InrChip";

export { variantesChip };
