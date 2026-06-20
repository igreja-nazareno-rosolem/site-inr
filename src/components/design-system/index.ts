/**
 * INR Design System — typed React primitives over the `inr-*` CSS layer
 * (src/styles/inr-design-system.css), ported from the approved design handoff.
 *
 * Tokens (colors, gradients, radii, shadows, Manrope) live in src/index.css.
 * These primitives are framework-agnostic building blocks; pages adopt them
 * during the page-build phase. Existing pages are intentionally left untouched.
 */
export { Button, buttonVariants, type ButtonProps } from "./button";
export { Chip, chipVariants, type ChipProps } from "./chip";
export { Card, type CardProps } from "./card";
export { Eyebrow, SectionHeading, type EyebrowProps, type SectionHeadingProps } from "./section-heading";
export { IconBadge, type IconBadgeProps } from "./icon-badge";
export { AvatarInitials, type AvatarInitialsProps } from "./avatar-initials";
export { ImagePlaceholder, type ImagePlaceholderProps } from "./image-placeholder";
export { ScheduleRow, type ScheduleRowProps } from "./schedule-row";
export { ServiceTimeCard, type ServiceTimeCardProps } from "./service-time-card";
export { WhatsAppFloat, type WhatsAppFloatProps } from "./whatsapp-float";
