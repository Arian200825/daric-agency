import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Logo — the Cobalt wordmark. The accent dot doubles as the brand mark.
 * Swap for an SVG/image logo here once branding is finalized.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2 text-lg font-semibold tracking-tight",
        className
      )}
    >
      <span
        className="h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
        aria-hidden
      />
      {site.name}
    </Link>
  );
}
