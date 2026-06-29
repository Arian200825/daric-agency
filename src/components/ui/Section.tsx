import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Section — vertical rhythm wrapper used by every page block.
 * Set `contained={false}` to manage the inner Container yourself.
 */
export function Section({
  id,
  className,
  containerClassName,
  contained = true,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  contained?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
