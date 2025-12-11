import { cn } from '@/lib/utils'
import type { SizeConfig, VariantConfig } from '@/types'

interface CopyButtonSizeConfig {
  button: string
  icon: number
  tooltip: string
}

interface CopyButtonVariantConfig {
  base: string
  success: string
  ripple: string
}

export const sizeConfig: SizeConfig<CopyButtonSizeConfig> = {
  sm: {
    button: 'h-8 w-8',
    icon: 14,
    tooltip: 'text-xs px-2 py-1',
  },
  md: {
    button: 'h-10 w-10',
    icon: 18,
    tooltip: 'text-sm px-2.5 py-1.5',
  },
  lg: {
    button: 'h-12 w-12',
    icon: 22,
    tooltip: 'text-base px-3 py-2',
  },
}

export const variantConfig: VariantConfig<CopyButtonVariantConfig> = {
  default: {
    base: 'bg-button-primary text-button-primary-text hover:bg-button-primary-hover',
    success: 'bg-emerald-500 text-white hover:bg-emerald-500',
    ripple: 'bg-white/25',
  },
  ghost: {
    base: 'bg-transparent text-text-primary hover:bg-button-secondary',
    success: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10',
    ripple: 'bg-text-primary/15',
  },
  outline: {
    base: 'bg-transparent text-text-primary border-2 border-button-border hover:border-button-border-hover hover:bg-button-secondary',
    success:
      'bg-transparent text-emerald-500 border-emerald-500 hover:bg-emerald-500/5',
    ripple: 'bg-text-primary/10',
  },
}

export const baseStyles = {
  button: cn(
    'relative inline-flex items-center justify-center overflow-hidden',
    'rounded-lg cursor-pointer',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
  ),
  tooltip: cn(
    'absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full',
    'bg-button-primary text-button-primary-text',
    'rounded-md font-medium whitespace-nowrap',
    'pointer-events-none'
  ),
} as const
