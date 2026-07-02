import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industry Solutions",
  description:
    "Premium, industry-specific websites for restaurants, hotels, healthcare, and automotive — ready to launch and tailored to your business.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industry solutions"
        title="Websites built for your industry — not a template"
        description="Daric specializes in premium, conversion-focused websites for specific industries. Explore our live demos, or request a site tailored to yours."
      />
      <Section>
        <IndustrySolutions />
      </Section>
      <CTASection
        title="Don't see your industry?"
        description="We build bespoke premium websites for ambitious businesses in any sector. Tell us about yours."
      />
    </>
  );
}
