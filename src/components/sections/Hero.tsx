"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

const INDUSTRIES = ["Restaurants", "Hotels", "Healthcare", "Automotive"];

/**
 * Hero — left-aligned, asymmetric, technical (a product/engineering composition).
 * Grid backdrop + a monospace industry strip signal a technology company.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
        <div className="absolute left-[10%] top-[-10%] h-[420px] w-[720px] rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <Container className="py-24 sm:py-32 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col items-start gap-7 text-left"
        >
          <motion.div variants={staggerItem}>
            <Eyebrow>{site.tagline}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            Premium websites,
            <br />
            built for <span className="text-gradient">your industry</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            Daric is a premium web agency building industry-specific websites —
            fast, accessible, and engineered to convert. Explore our live demos.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-1 flex flex-col gap-3 sm:flex-row">
            <Button href={site.cta.primary.href} size="lg">
              {site.cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.cta.secondary.href} size="lg" variant="outline">
              {site.cta.secondary.label}
            </Button>
          </motion.div>

          {/* Technical industry strip */}
          <motion.ul
            variants={staggerItem}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted"
          >
            {INDUSTRIES.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                {i > 0 && <span className="text-border" aria-hidden>/</span>}
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
