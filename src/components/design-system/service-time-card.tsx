import * as React from "react";
import { cn } from "@/lib/utils";

export interface ServiceTimeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  day: React.ReactNode;
  time: React.ReactNode;
  name: React.ReactNode;
}

/**
 * Glass card for the hero service-times strip. Wrap up to three in a
 * `<div className="inr-svc-strip">` over a gradient/hero surface.
 */
export const ServiceTimeCard = React.forwardRef<HTMLDivElement, ServiceTimeCardProps>(
  ({ className, day, time, name, ...props }, ref) => (
    <div ref={ref} className={cn("inr-glass", className)} {...props}>
      <div className="inr-svc-day">{day}</div>
      <div className="inr-svc-time">{time}</div>
      <div className="inr-svc-name">{name}</div>
    </div>
  )
);
ServiceTimeCard.displayName = "InrServiceTimeCard";
