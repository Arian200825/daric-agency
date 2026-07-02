import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants — one tunable source of truth for motion.
 * Components consume these so timing/easing stays consistent everywhere.
 * (Reduced motion is handled globally in globals.css + the Reveal component.)
 */

// Crisp, product-focused motion — quick and precise (a tech-product feel),
// distinct from the restaurant's slow, cinematic reveals.
const EASE = [0.22, 0.61, 0.36, 1] as const; // ease-out

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

/** Child item for use inside staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

/** Default viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: "-60px" } as const;
