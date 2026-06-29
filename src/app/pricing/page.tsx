import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingTable } from "@/components/sections/PricingTable";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent, fixed-scope pricing for premium websites — from a fast launch to full e-commerce builds and bespoke retainers.",
  path: "/pricing",
});

const faqs = [
  {
    q: "What does 'starting at' mean?",
    a: "Each price is the floor for that tier. Final cost depends on scope — pages, integrations, and complexity. You'll always get a fixed quote before we begin, with no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "Most Essential builds ship in ~2 weeks and Professional in ~4 weeks. Larger Enterprise builds vary with scope — we'll give you a firm timeline up front.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Projects are typically split 50% to start and 50% on launch. For larger engagements we can arrange milestone-based payments.",
  },
  {
    q: "What if I need something custom?",
    a: "That's what Custom Solutions is for — retainers, multi-site programs, web apps, or anything outside the standard tiers. Tell us what you need and we'll scope it.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Premium work, transparent pricing"
        description="No vague 'contact us for everything'. Clear tiers, fixed scopes, and an honest quote before any work starts."
      />

      <Section>
        <PricingTable />
      </Section>

      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            align="center"
          />
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <Reveal
                as="div"
                key={faq.q}
                delay={i * 0.05}
                className="rounded-2xl border border-card-border bg-card p-6"
              >
                <h3 className="text-base font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
