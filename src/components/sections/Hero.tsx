"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Hero — the primary conversion surface. Animated headline, dual CTA, and a
 * subtle grid + glow backdrop that reads premium in dark mode.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop: grid + radial accent glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <Container className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-center gap-7"
        >
          <motion.div variants={staggerItem}>
            <Eyebrow>{site.tagline}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Premium websites, built for{" "}
            <span className="text-gradient">your industry</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
          >
            Daric is a premium web agency building industry-specific websites —
            for restaurants, hotels, healthcare, and beyond. Fast, beautiful, and
            engineered to convert. Explore our live demos below.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href={site.cta.primary.href} size="lg">
              {site.cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.cta.secondary.href} size="lg" variant="outline">
              {site.cta.secondary.label}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-2 text-sm text-muted"
          >
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  strokeWidth={0}
                />
              ))}
            </span>
            AI-accelerated craft, end-to-end — strategy, design &amp; development.
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
