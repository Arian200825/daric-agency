import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants — one tunable source of truth for motion.
 * Components consume these so timing/easing stays consistent everywhere.
 * (Reduced motion is handled globally in globals.css + the Reveal component.)
 */

const EASE = [0.16, 1, 0.3, 1] as const; // ease-out-expo

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Child item for use inside staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Default viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
