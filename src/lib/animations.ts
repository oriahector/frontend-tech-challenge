import type { Transition, Variants } from 'framer-motion'

/**
 * Shared animation configurations for the design system
 */

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

/** Fast spring transition - for quick, snappy interactions */
export const springFast: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

/** Standard spring transition - balanced feel */
export const springStandard: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
}

/** Gentle spring transition - for subtle movements */
export const springGentle: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
}

/** Soft spring transition - for smooth, relaxed animations */
export const springSoft: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
}

/** Quick ease transition - for fast state changes */
export const easeQuick: Transition = {
  duration: 0.15,
  ease: 'easeOut',
}

/** Standard ease transition */
export const easeStandard: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
}

/** Smooth ease transition - for color/opacity changes */
export const easeSmooth: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
}

// ============================================================================
// TAP ANIMATIONS
// ============================================================================

/** Standard tap scale effect */
export const tapScale = {
  scale: 0.97,
}

/** Gentle tap scale effect */
export const tapScaleGentle = {
  scale: 0.98,
}

/** Strong tap scale effect */
export const tapScaleStrong = {
  scale: 0.95,
}

// ============================================================================
// SHARED VARIANTS
// ============================================================================

/** Fade in/out animation variants */
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

/** Scale fade animation variants */
export const scaleFadeVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

/** Slide from left variants */
export const slideLeftVariants: Variants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -10, opacity: 0 },
}

/** Slide from right variants */
export const slideRightVariants: Variants = {
  initial: { x: 10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 },
}

/** Ripple animation variants */
export const rippleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0.6,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// ============================================================================
// DURATION CONSTANTS
// ============================================================================

export const durations = {
  instant: 0,
  fast: 0.1,
  quick: 0.15,
  standard: 0.3,
  slow: 0.5,
  verySlow: 0.8,
} as const

// ============================================================================
// EASING CURVES
// ============================================================================

export const easings = {
  /** Standard Material Design easing */
  standard: [0.4, 0, 0.2, 1],
  /** Accelerate - starts slow, ends fast */
  accelerate: [0.4, 0, 1, 1],
  /** Decelerate - starts fast, ends slow */
  decelerate: [0, 0, 0.2, 1],
  /** Sharp - quick acceleration and deceleration */
  sharp: [0.4, 0, 0.6, 1],
} as const
