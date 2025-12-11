export type Size = 'sm' | 'md' | 'lg'

export type ColorScheme =
  | 'emerald'
  | 'blue'
  | 'violet'
  | 'rose'
  | 'amber'
  | 'neutral'

export type ButtonVariant = 'default' | 'ghost' | 'outline'

export type LabelPosition = 'left' | 'right'

export interface SizeConfig<T> {
  sm: T
  md: T
  lg: T
}

export interface VariantConfig<T> {
  default: T
  ghost: T
  outline: T
}

export interface ColorConfig<T> {
  emerald: T
  blue: T
  violet: T
  rose: T
  amber: T
  neutral: T
}

export interface BaseInteractiveProps {
  disabled?: boolean
  className?: string
}

export interface AccessibleProps {
  'aria-label'?: string
  'aria-describedby'?: string
}
