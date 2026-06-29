import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/content/process";
import { staggerItem } from "@/lib/animations";

/**
 * ProcessTimeline — numbered steps with a connecting line.
 * Shared by the Process page and home process preview.
 */
export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {process.map((step, i) => (
        <Reveal
          as="li"
          key={step.number}
          delay={i * 0.05}
          variants={staggerItem}
          className="group relative flex flex-col gap-3 rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
        >
          <span className="font-mono text-sm text-accent">{step.number}</span>
          <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{step.summary}</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {step.details.map((d) => (
              <li
                key={d}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  );
}
