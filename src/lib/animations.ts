import type { Transition, Variants } from 'framer-motion'

// Transitions
export const springFast: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

export const springStandard: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
}

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
}

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
}

export const easeQuick: Transition = {
  duration: 0.15,
  ease: 'easeOut',
}

export const easeStandard: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
}

export const easeSmooth: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
}

// Tap animations
export const tapScale = { scale: 0.97 }
export const tapScaleGentle = { scale: 0.98 }
export const tapScaleStrong = { scale: 0.95 }

// Variants
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const scaleFadeVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const slideLeftVariants: Variants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -10, opacity: 0 },
}

export const slideRightVariants: Variants = {
  initial: { x: 10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 },
}

export const rippleVariants: Variants = {
  initial: { scale: 0, opacity: 0.6 },
  animate: {
    scale: 4,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

// Constants
export const durations = {
  instant: 0,
  fast: 0.1,
  quick: 0.15,
  standard: 0.3,
  slow: 0.5,
  verySlow: 0.8,
} as const

export const easings = {
  standard: [0.4, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
  decelerate: [0, 0, 0.2, 1],
  sharp: [0.4, 0, 0.6, 1],
} as const
