import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Strategy, brand, design, and engineering — everything ambitious brands need to launch and grow online.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need, under one roof"
        description="We're a full-stack studio. From first strategy session to launch and beyond, your website is handled end to end — no handoffs, no gaps."
      />

      <Section>
        <ServicesGrid detailed />
      </Section>

      {/* Industries we specialize in */}
      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industries we specialize in"
              title="Deep expertise, industry by industry"
              description="We package that full-stack capability into ready-to-launch, industry-specific solutions."
            />
            <Button href="/solutions" variant="outline">
              All solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal as="div" key={ind.slug} delay={i * 0.05}>
                <Link
                  href={`/solutions/${ind.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {ind.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      {ind.status === "live" ? "Live demo" : "Soon"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{ind.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{ind.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors group-hover:text-accent">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="How we work"
            title="A clear, proven process"
            description="Every engagement follows the same disciplined path — so you always know what's happening and what's next."
          />
          <ProcessTimeline />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
