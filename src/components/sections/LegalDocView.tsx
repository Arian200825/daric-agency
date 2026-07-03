import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/sections/CTASection";
import { getLegalDoc, company } from "@/content/legal";

/** LegalDocView — renders a policy document (privacy / terms / cookies). */
export function LegalDocView({ slug }: { slug: string }) {
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} description={`Last updated ${company.effectiveDate}`} />
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <p className="text-pretty leading-relaxed text-muted">{doc.intro}</p>
          {doc.sections.map((s) => (
            <div key={s.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-pretty leading-relaxed text-muted">{p}</p>
              ))}
            </div>
          ))}
          <p className="rounded-xl border border-border bg-background-subtle p-4 text-xs text-muted">
            This document is a starting template and not legal advice. Have it reviewed by a qualified
            professional before relying on it.
          </p>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
