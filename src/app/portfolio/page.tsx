import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Daric's industry-specific website solutions and concept explorations — premium, conversion-focused design across restaurants, hotels, healthcare, and automotive.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Industry-focused, premium by default"
        description="Daric specializes in websites built for specific industries. Explore our live solutions — then the concept explorations behind them."
      />

      {/* Live industry solutions lead the portfolio */}
      <Section>
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industry solutions"
              title="Live demos you can explore"
              description="Real, ready-to-launch websites — each tailored to how its industry wins customers."
            />
            <Button href="/solutions" variant="outline">
              All solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <IndustrySolutions />
        </div>
      </Section>

      {/* Concept explorations */}
      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Concept explorations"
            title="Design directions across sectors"
            description="How we approach premium design, motion, and conversion for other industries — clearly labeled as concept work."
          />
          <PortfolioGrid />
        </div>
      </Section>

      <CTASection
        title="Want your industry in here?"
        description="Let's build the premium website your business deserves. Start today."
      />
    </>
  );
}
