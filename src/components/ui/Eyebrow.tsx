import { cn } from "@/lib/utils";

/**
 * Eyebrow — monospace technical label with a sharp accent square marker.
 * (Technology-company detailing — deliberately not a soft dot.)
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
        "inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted",
        className
      )}
    >
      <span className="h-2 w-2 bg-accent" aria-hidden />
      {children}
    </span>
  );
}
