/**
 * Shared types for the design system
 */

/** Common size variants used across components */
export type Size = 'sm' | 'md' | 'lg'

/** Common color schemes used across components */
export type ColorScheme =
  | 'emerald'
  | 'blue'
  | 'violet'
  | 'rose'
  | 'amber'
  | 'neutral'

/** Button variant types */
export type ButtonVariant = 'default' | 'ghost' | 'outline'

/** Label position for form elements */
export type LabelPosition = 'left' | 'right'

/**
 * Generic size configuration type
 * Used for defining size-specific styles and dimensions
 */
export interface SizeConfig<T> {
  sm: T
  md: T
  lg: T
}

/**
 * Generic variant configuration type
 * Used for defining variant-specific styles
 */
export interface VariantConfig<T> {
  default: T
  ghost: T
  outline: T
}

/**
 * Generic color configuration type
 * Used for defining color-specific values
 */
export interface ColorConfig<T> {
  emerald: T
  blue: T
  violet: T
  rose: T
  amber: T
  neutral: T
}

/**
 * Base props that most interactive components share
 */
export interface BaseInteractiveProps {
  /** Whether the component is disabled */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * Props for components with accessible labels
 */
export interface AccessibleProps {
  /** Accessible label for screen readers */
  'aria-label'?: string
  /** ID of element that describes the component */
  'aria-describedby'?: string
}
