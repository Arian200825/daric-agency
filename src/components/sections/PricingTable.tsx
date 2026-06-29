import { Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { pricing, currencySymbol } from "@/content/pricing";
import { staggerItem } from "@/lib/animations";

function formatPrice(price: number) {
  return `${currencySymbol}${price.toLocaleString("en-US")}`;
}

/**
 * PricingTable — the four tiers as cards, with the featured plan emphasized.
 * Shared by the Pricing page and the home pricing preview.
 */
export function PricingTable() {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {pricing.map((tier, i) => (
        <Reveal
          as="div"
          key={tier.slug}
          delay={i * 0.05}
          variants={staggerItem}
          className="h-full"
        >
          <div
            className={cn(
              "flex h-full flex-col rounded-2xl border p-6 sm:p-7",
              tier.featured
                ? "border-accent/50 bg-card shadow-[0_24px_70px_-30px_var(--accent)]"
                : "border-card-border bg-card"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">
                {tier.name}
              </h3>
              {tier.featured && (
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  Most Popular
                </span>
              )}
            </div>

            <div className="mt-5 flex items-baseline gap-1">
              {tier.price !== null ? (
                <>
                  <span className="text-4xl font-semibold tracking-tight">
                    {formatPrice(tier.price)}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-semibold tracking-tight">
                  Custom quote
                </span>
              )}
            </div>
            {tier.cadence && (
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {tier.cadence}
              </p>
            )}

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tier.tagline}
            </p>

            <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-6">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              href={tier.cta.href}
              variant={tier.featured ? "primary" : "outline"}
              className="mt-7 w-full"
            >
              {tier.cta.label}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
