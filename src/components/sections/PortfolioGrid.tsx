import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type Project } from "@/content/portfolio";
import { staggerItem } from "@/lib/animations";

/**
 * PortfolioCard — single project. Renders a real image when `image` is set,
 * otherwise a branded gradient placeholder so the grid always looks finished.
 */
function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
            }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-white/80">
              {project.title}
            </span>
          </div>
        )}
        {project.concept && (
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur">
            Concept Design
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="font-mono uppercase tracking-[0.15em]">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/**
 * PortfolioGrid — responsive grid of project cards. `limit` trims the set for
 * the home preview.
 */
export function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((project, i) => (
        <Reveal as="div" key={project.slug} delay={i * 0.05} variants={staggerItem}>
          <PortfolioCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
