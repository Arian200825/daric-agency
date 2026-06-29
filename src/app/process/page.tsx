import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description:
    "Our six-step process takes your project from discovery to launch and growth — disciplined, transparent, and built to de-risk the work.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="From idea to launch, without the guesswork"
        description="Great websites aren't lucky — they're the output of a clear process. Here's exactly how we'll work together."
      />

      <Section>
        <ProcessTimeline />
      </Section>

      <CTASection
        title="Ready to start at step one?"
        description="Book a discovery call and we'll map your project together."
      />
    </>
  );
}
