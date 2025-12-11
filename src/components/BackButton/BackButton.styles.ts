import { cn } from '@/lib/utils'
import type { SizeConfig, VariantConfig } from '@/types'

interface BackButtonSizeConfig {
  button: string
  buttonFixed: string
  icon: number
  padding: string
}

interface BackButtonVariantConfig {
  base: string
  ripple: string
}

export const sizeConfig: SizeConfig<BackButtonSizeConfig> = {
  sm: {
    button: 'h-9 min-w-9 text-sm gap-1.5',
    buttonFixed: 'h-9 w-9 text-sm gap-1.5',
    icon: 16,
    padding: 'px-2.5',
  },
  md: {
    button: 'h-11 min-w-11 text-base gap-2',
    buttonFixed: 'h-11 w-11 text-base gap-2',
    icon: 20,
    padding: 'px-3',
  },
  lg: {
    button: 'h-14 min-w-14 text-lg gap-2.5',
    buttonFixed: 'h-14 w-14 text-lg gap-2.5',
    icon: 24,
    padding: 'px-4',
  },
}

export const variantConfig: VariantConfig<BackButtonVariantConfig> = {
  default: {
    base: 'bg-button-primary text-button-primary-text hover:bg-button-primary-hover',
    ripple: 'bg-white/25',
  },
  ghost: {
    base: 'bg-transparent text-text-primary hover:bg-button-secondary',
    ripple: 'bg-text-primary/15',
  },
  outline: {
    base: 'bg-transparent text-text-primary border-2 border-button-border hover:border-button-border-hover hover:bg-button-secondary',
    ripple: 'bg-text-primary/10',
  },
}

export const baseStyles = {
  button: cn(
    'relative inline-flex items-center justify-center overflow-hidden',
    'rounded-full font-medium cursor-pointer',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
  ),
} as const
