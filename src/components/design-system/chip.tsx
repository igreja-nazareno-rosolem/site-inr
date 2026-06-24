import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva("inr-chip", {
  variants: {
    variant: {
      solid: "", // navy (default)
      soft: "inr-chip-soft",
      line: "inr-chip-line",
    },
  },
  defaultVariants: { variant: "solid" },
});

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(chipVariants({ variant }), className)} {...props} />
  )
);
Chip.displayName = "InrChip";

export { chipVariants };
