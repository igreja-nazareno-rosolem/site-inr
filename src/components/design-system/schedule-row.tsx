import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScheduleRowProps extends React.HTMLAttributes<HTMLDivElement> {
  day: React.ReactNode;
  time: React.ReactNode;
  name: React.ReactNode;
  /** Optional trailing element (e.g. a <Chip>), pinned to the right. */
  tag?: React.ReactNode;
}

/** Dark navy agenda pill (day · time · name · optional tag). */
export const ScheduleRow = React.forwardRef<HTMLDivElement, ScheduleRowProps>(
  ({ className, day, time, name, tag, ...props }, ref) => (
    <div ref={ref} className={cn("inr-sched-row", className)} {...props}>
      <span className="inr-sched-day">{day}</span>
      <span className="inr-sched-time">{time}</span>
      <span className="inr-sched-name">{name}</span>
      {tag ? <span className="inr-sched-tag">{tag}</span> : null}
    </div>
  )
);
ScheduleRow.displayName = "InrScheduleRow";
