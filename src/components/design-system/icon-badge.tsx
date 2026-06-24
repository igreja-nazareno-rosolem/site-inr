import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Soft tinted variant instead of the solid gradient. */
  soft?: boolean;
}

/** Rounded badge holding an icon (gradient by default). Pass an icon as children. */
export const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  ({ className, soft = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-ibadge", soft && "inr-ibadge-soft", className)}
      {...props}
    >
      {children}
    </div>
  )
);
IconBadge.displayName = "InrIconBadge";
