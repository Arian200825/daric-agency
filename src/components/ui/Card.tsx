import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Card — base surface used for services, pricing, portfolio, etc.
 * `interactive` adds a hover lift + accent border for clickable cards.
 */
export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // Flat, technical cards — sharp corners, crisp border (no soft lift).
        "rounded-[var(--radius)] border border-card-border bg-card p-6 sm:p-8",
        interactive &&
          "transition-colors duration-200 hover:border-foreground/25",
        className
      )}
    >
      {children}
    </div>
  );
}
