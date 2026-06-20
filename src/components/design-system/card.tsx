import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds the lift-on-hover interaction (`.inr-card-hover`). */
  hover?: boolean;
}

/** INR surface card. Adapts automatically inside `.inr-dark` sections. */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-card", hover && "inr-card-hover", className)}
      {...props}
    />
  )
);
Card.displayName = "InrCard";
