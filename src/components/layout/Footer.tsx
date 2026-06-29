import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

/**
 * Footer — brand, sitemap, contact, socials. Server component (no interactivity).
 * Social links with empty hrefs are hidden automatically.
 */
export function Footer() {
  const year = "2025"; // build-time constant; bump on next deploy if needed
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="border-t border-border bg-background-subtle">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            {site.contact.email && (
              <a
                href={`mailto:${site.contact.email}`}
                className="text-sm text-foreground underline-offset-4 hover:underline"
              >
                {site.contact.email}
              </a>
            )}
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Navigate
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Connect
            </p>
            {socials.length > 0 ? (
              socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))
            ) : (
              <span className="text-sm text-muted">Coming soon</span>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em]">
            {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
