import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      <Section className="border-t border-border bg-background-subtle">
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
