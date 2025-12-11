/**
 * BackButton Styles
 *
 * Centralized style configurations for the BackButton component
 */

import { cn } from '../../lib/utils'

export const sizeConfig = {
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
} as const

export const variantConfig = {
  default: {
    base: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-800',
    ripple: 'bg-white/25',
  },
  ghost: {
    base: 'bg-transparent text-zinc-900 hover:bg-zinc-100',
    ripple: 'bg-zinc-900/15',
  },
  outline: {
    base: 'bg-transparent text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50',
    ripple: 'bg-zinc-900/10',
  },
} as const

export const baseStyles = {
  button: cn(
    'relative inline-flex items-center justify-center overflow-hidden',
    'rounded-full font-medium cursor-pointer',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
  ),
} as const
