import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start your project with Daric. Tell us what you're building and we'll reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start your project"
        description="Tell us about what you're building. The more detail you share, the more useful our first reply will be."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Info sidebar */}
          <aside className="order-1 flex flex-col gap-6 lg:order-2">
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h2 className="text-lg font-semibold tracking-tight">
                What happens next
              </h2>
              <ol className="mt-4 flex flex-col gap-4">
                {[
                  "We review your message and goals.",
                  "You get a reply within one business day.",
                  "We book a short call to scope and quote.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-muted">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-card-border bg-card p-6 text-sm">
              {site.contact.email && (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  {site.contact.email}
                </a>
              )}
              {site.contact.location && (
                <p className="flex items-center gap-3 text-muted">
                  <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  {site.contact.location}
                </p>
              )}
              <p className="flex items-center gap-3 text-muted">
                <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                Replies within 1 business day
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
