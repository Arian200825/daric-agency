import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

/**
 * Container — consistent max-width + horizontal padding for every section.
 * Polymorphic via `as` so it can render as <div>, <section>, <header>, etc.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
