import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "A selection of concept projects showcasing our approach to premium web design and development across industries.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Concepts crafted with intent"
        description="We're a new studio building our public portfolio. These concept projects show how we think about design, motion, and conversion — real client work joins them as it ships."
      />

      <Section>
        <PortfolioGrid />
      </Section>

      <CTASection
        title="Want your brand in here?"
        description="Let's create something worth showing off. Start your project today."
      />
    </>
  );
}
