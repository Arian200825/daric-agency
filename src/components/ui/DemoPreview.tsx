"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const BASE_W = 1440;
const BASE_H = 900;

/**
 * DemoPreview — a live, scaled preview of a demo site inside a browser frame.
 * The iframe renders the real site at desktop width, scaled to fit responsively
 * (ResizeObserver). Decorative + non-interactive; the accessible path to the
 * demo is the "View Live Demo" button on the card. Falls back to a gradient
 * when no url is provided (coming-soon).
 */
export function DemoPreview({
  url,
  label,
  gradient,
  className,
}: {
  url?: string;
  label: string;
  gradient: [string, string];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    if (!url) return;
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / BASE_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [url]);

  return (
    <div className={cn("overflow-hidden rounded-[var(--radius)] border border-card-border bg-card", className)}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-card-border bg-background-subtle px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted">
          {url ? url.replace(/^https?:\/\//, "") : `${label.toLowerCase()} · coming soon`}
        </span>
      </div>

      {/* Screen */}
      <div ref={ref} className="relative aspect-[16/10] w-full overflow-hidden">
        {url ? (
          <iframe
            src={url}
            title={`${label} demo preview`}
            aria-hidden
            tabIndex={-1}
            loading="lazy"
            scrolling="no"
            className="absolute left-0 top-0 origin-top-left border-0"
            style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})` }}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">Coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}
