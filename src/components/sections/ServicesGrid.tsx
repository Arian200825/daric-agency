import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import { services } from "@/content/services";
import { staggerItem } from "@/lib/animations";

/**
 * ServicesGrid — renders service cards. `detailed` shows the deliverables
 * checklist (Services page); compact mode (home preview) hides it.
 */
export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal as="div" key={service.slug} delay={i * 0.05} variants={staggerItem}>
          <Card interactive className="flex h-full flex-col gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {service.summary}
            </p>

            {detailed && (
              <ul className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
