import type { Metadata } from "next";
import { Compass, Gem, Rocket, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Daric is a premium digital bureau obsessed with craft, speed, and measurable results for ambitious brands.",
  path: "/about",
});

// Brand principles — true to our positioning (no fabricated history/team).
const principles = [
  {
    icon: Gem,
    title: "Craft over templates",
    body: "Every site is designed and built from scratch. No themes, no shortcuts — work that looks and feels genuinely premium.",
  },
  {
    icon: Rocket,
    title: "Speed that compounds",
    body: "Fast to launch, fast to load. Performance isn't an afterthought — it's a feature your customers feel.",
  },
  {
    icon: Compass,
    title: "Strategy first",
    body: "Beautiful is easy; effective is the goal. We start with your business and design backwards from results.",
  },
  {
    icon: ShieldCheck,
    title: "No-surprise delivery",
    body: "Clear scope, clear timeline, clear price. You'll always know exactly where your project stands.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A premium bureau built for ambitious brands"
        description="Daric exists to give growing companies the kind of website usually reserved for the industry's biggest players — without the agency bloat."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
            <p>
              We&apos;re a small, senior studio that pairs sharp design with
              serious engineering. No layers of account managers, no
              outsourced work — just craftspeople who care about the details
              that make a brand feel expensive.
            </p>
            <p>
              Our belief is simple: your website is your hardest-working
              salesperson. It should look immaculate, load instantly, and turn
              visitors into customers. Everything we make is built to do exactly
              that.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-3xl border border-card-border bg-card p-8"
          >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute right-[-20%] top-[-20%] h-[280px] w-[280px] rounded-full bg-accent/[0.06] blur-[100px]" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Our promise
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
              &ldquo;We treat every project like our own brand depends on it —
              because it does.&rdquo;
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-background-subtle">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What we believe"
            title="Principles we don't compromise on"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="div" key={p.title} delay={i * 0.05}>
                <Card className="flex h-full gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <p.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
