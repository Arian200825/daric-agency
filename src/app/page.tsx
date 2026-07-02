import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PricingTable } from "@/components/sections/PricingTable";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

// Organization + website structured data for richer search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  ...(site.contact.email ? { email: site.contact.email } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Industry Solutions — Daric's core positioning */}
      <Section id="industries">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industry solutions"
              title="Premium websites, built for your industry"
              description="We don't do generic. Daric builds conversion-focused websites tailored to the businesses we know best — each a ready-to-launch, customizable solution."
            />
            <Button href="/solutions" variant="outline">
              All solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <IndustrySolutions />
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="Everything you need to launch and grow"
              description="A full-stack studio across strategy, brand, design, and engineering — so your website is handled end to end."
            />
            <Button href="/services" variant="outline">
              All services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <ServicesGrid />
        </div>
      </Section>

      {/* Process */}
      <Section className="border-t border-border">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="How we work"
            title="A process built to de-risk your project"
            description="Six clear steps from first conversation to launch and beyond — so you always know what's next."
          />
          <ProcessTimeline />
        </div>
      </Section>

      {/* Concept explorations */}
      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Concept explorations"
              title="Design directions across industries"
              description="Beyond our flagship solutions, a look at how we approach premium design and conversion for other sectors."
            />
            <Button href="/portfolio" variant="outline">
              View concepts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <PortfolioGrid limit={4} />
        </div>
      </Section>

      {/* Pricing */}
      <Section className="border-t border-border">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Pricing"
            title="Premium work, transparent pricing"
            description="Clear tiers and fixed scopes. You'll always get an honest quote before any work begins."
            align="center"
          />
          <PricingTable />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
