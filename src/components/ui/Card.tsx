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
        "rounded-2xl border border-card-border bg-card p-6 sm:p-8",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_var(--accent-soft)]",
        className
      )}
    >
      {children}
    </div>
  );
}
