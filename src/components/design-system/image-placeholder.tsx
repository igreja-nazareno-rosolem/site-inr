import * as React from "react";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Short uppercase label shown in the pill (e.g. "FOTO — EQUIPE"). */
  label?: string;
  /** Use the light-on-gradient variant when placed over a gradient/dark surface. */
  onGrad?: boolean;
}

/**
 * Diagonal-striped image placeholder. Used wherever a real photo is pending
 * team authorization — never ship invented imagery.
 */
export const ImagePlaceholder = React.forwardRef<HTMLDivElement, ImagePlaceholderProps>(
  ({ className, label = "FOTO", onGrad = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-ph", onGrad && "inr-on-grad", className)}
      role="img"
      aria-label={label}
      {...props}
    >
      <span>{label}</span>
    </div>
  )
);
ImagePlaceholder.displayName = "InrImagePlaceholder";
