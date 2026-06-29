import { cn } from "@/lib/utils";

/**
 * Eyebrow — small mono label with an accent dot. Sits above section headings.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}
