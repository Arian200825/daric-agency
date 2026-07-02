import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, X } from "lucide-react";
import { getIndustry, industries } from "@/content/industries";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DemoPreview } from "@/components/ui/DemoPreview";
import { buildMetadata } from "@/lib/seo";

// Pre-render one page per industry (required for static export).
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return buildMetadata({ title: "Solution" });
  return buildMetadata({
    title: `${ind.name} Websites`,
    description: ind.description,
    path: `/solutions/${ind.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const requestHref = `/contact?industry=${ind.slug}`;

  return (
    <>
      <PageHeader
        eyebrow={ind.category}
        title={`${ind.name} websites that convert`}
        description={ind.page.intro}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <DemoPreview url={ind.demoUrl} label={ind.name} gradient={ind.gradient} />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-5">
            <p className="text-lg leading-relaxed text-muted">{ind.tagline}</p>
            <div className="flex flex-wrap gap-3">
              {ind.status === "live" && ind.demoUrl && (
                <Button href={ind.demoUrl}>
                  View Live Demo <ArrowUpRight className="h-4 w-4" />
                </Button>
              )}
              <Button href={requestHref} variant={ind.status === "live" ? "outline" : "primary"}>
                Request a {ind.name} Website
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Challenges */}
      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="The challenge"
            title={`What holds ${ind.name.toLowerCase()} back online`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ind.page.challenges.map((c, i) => (
              <Reveal as="div" key={c.title} delay={i * 0.05}>
                <Card className="flex h-full flex-col gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted">
                    <X className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="border-t border-border">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="How Daric solves it"
            title="Designed and built to convert"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ind.page.solutions.map((s, i) => (
              <Reveal as="div" key={s.title} delay={i * 0.05}>
                <Card className="flex h-full flex-col gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <SectionHeading eyebrow="The payoff" title="What you can expect" align="center" />
          <div className="grid gap-5 sm:grid-cols-3">
            {ind.page.benefits.map((b, i) => (
              <Reveal as="div" key={b.label} delay={i * 0.06}
                className="flex flex-col items-center gap-2 rounded-2xl border border-card-border bg-card p-8 text-center">
                <span className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl">{b.stat}</span>
                <span className="text-sm text-muted">{b.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title={`Ready for a premium ${ind.name.toLowerCase()} website?`}
        description="Tell us about your business and we'll reply within one business day with next steps."
      />
    </>
  );
}
