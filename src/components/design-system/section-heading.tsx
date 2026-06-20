import * as React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {}

/** Small uppercase label with a leading dash. */
export const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("inr-eyebrow", className)} {...props} />
  )
);
Eyebrow.displayName = "InrEyebrow";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Center-align the heading block. */
  center?: boolean;
  /** Render the title with the brand gradient text fill. */
  gradientTitle?: boolean;
  as?: "h1" | "h2" | "h3";
}

/** Eyebrow + title + lead block used at the top of sections. */
export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, eyebrow, title, lead, center = false, gradientTitle = false, as = "h2", ...props }, ref) => {
    const Title = as;
    return (
      <div
        ref={ref}
        className={cn("inr-section-head", center && "inr-center", className)}
        {...props}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Title className={cn(gradientTitle && "inr-grad-ink")}>{title}</Title>
        {lead ? <p className="inr-lead">{lead}</p> : null}
      </div>
    );
  }
);
SectionHeading.displayName = "InrSectionHeading";
