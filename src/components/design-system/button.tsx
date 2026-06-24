import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * INR pill button. Variants mirror the design handoff `.btn*` classes.
 * Use `asChild` to render as another element (e.g. a wouter <Link> or <a>).
 */
const buttonVariants = cva("inr-btn", {
  variants: {
    variant: {
      solid: "", // navy pill (default)
      gradient: "inr-btn-grad",
      light: "inr-btn-light",
      ghost: "inr-btn-ghost",
      outline: "inr-btn-outline",
      whatsapp: "inr-btn-wa",
    },
    size: {
      md: "",
      sm: "inr-btn-sm",
    },
    block: { true: "inr-btn-block", false: "" },
  },
  defaultVariants: { variant: "solid", size: "md", block: false },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, block }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "InrButton";

export { buttonVariants };
