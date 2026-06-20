import * as React from "react";
import { cn } from "@/lib/utils";

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export interface AvatarInitialsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Full name; initials are derived from the first and last word. */
  name: string;
  /** Larger 88px variant. */
  lg?: boolean;
}

/** Gradient circle showing a person's initials (placeholder until photos arrive). */
export const AvatarInitials = React.forwardRef<HTMLDivElement, AvatarInitialsProps>(
  ({ className, name, lg = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inr-avatar", lg && "inr-avatar-lg", className)}
      aria-label={name}
      title={name}
      {...props}
    >
      {initialsFrom(name)}
    </div>
  )
);
AvatarInitials.displayName = "InrAvatarInitials";
