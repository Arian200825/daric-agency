import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/content/industries";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DemoPreview } from "@/components/ui/DemoPreview";
import { cn } from "@/lib/utils";

/**
 * IndustrySolutions — the core of Daric's positioning. A grid of industry
 * website solutions with live previews, descriptions, and dual CTAs
 * (View Live Demo · Request a Similar Website). Shared by home + /solutions.
 */
export function IndustrySolutions() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {industries.map((ind, i) => {
        const live = ind.status === "live";
        return (
          <Reveal as="article" key={ind.slug} delay={(i % 2) * 0.08}
            className="flex flex-col gap-6 rounded-[var(--radius)] border border-card-border bg-card p-5 sm:p-6">
            <div className="relative">
              <DemoPreview url={ind.demoUrl} label={ind.name} gradient={ind.gradient} />
              <span
                className={cn(
                  "absolute right-3 top-3 z-10 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] backdrop-blur",
                  live ? "bg-accent text-accent-foreground" : "bg-background/80 text-muted"
                )}
              >
                {live ? "Live Demo" : "Coming Soon"}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 px-1">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {ind.category}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{ind.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{ind.description}</p>

              <ul className="flex flex-wrap gap-2">
                {ind.tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap gap-3">
                  {live ? (
                    <>
                      <Button href={ind.demoUrl!} size="sm">
                        View Live Demo <ArrowUpRight className="h-4 w-4" />
                      </Button>
                      <Button href={`/contact?industry=${ind.slug}`} size="sm" variant="outline">
                        Request a Similar Website
                      </Button>
                    </>
                  ) : (
                    <Button href={`/contact?industry=${ind.slug}`} size="sm" variant="outline">
                      Register Interest
                    </Button>
                  )}
                </div>
                <Link
                  href={`/solutions/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  Explore {ind.name} websites <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
