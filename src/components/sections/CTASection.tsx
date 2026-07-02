import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

/**
 * CTASection — reusable closing call-to-action used at the foot of most pages.
 * Pass custom copy or fall back to the brand default.
 */
export function CTASection({
  title = "Let's build something worth bookmarking.",
  description = "Tell us about your project. We'll reply within one business day with next steps.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.cta.primary.href} size="lg">
              {site.cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {site.contact.email && (
              <Button
                href={`mailto:${site.contact.email}`}
                size="lg"
                variant="ghost"
              >
                {site.contact.email}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
