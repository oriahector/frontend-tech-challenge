import { cn } from '@/lib/utils'
import type { SizeConfig } from '@/types'

interface CounterSizeConfig {
  container: string
  digit: string
  digitHeight: number
  fontSize: string
}

export const sizeConfig: SizeConfig<CounterSizeConfig> = {
  sm: {
    container: 'gap-0.5',
    digit: 'w-5',
    digitHeight: 24,
    fontSize: 'text-lg',
  },
  md: {
    container: 'gap-1',
    digit: 'w-7',
    digitHeight: 36,
    fontSize: 'text-2xl',
  },
  lg: {
    container: 'gap-1.5',
    digit: 'w-10',
    digitHeight: 48,
    fontSize: 'text-4xl',
  },
}

export type CounterVariant = 'default' | 'ghost' | 'pill'

interface CounterVariantConfig {
  container: string
  digit: string
}

export const variantConfig: Record<CounterVariant, CounterVariantConfig> = {
  default: {
    container: '',
    digit: 'text-text-primary',
  },
  ghost: {
    container: '',
    digit: 'text-text-muted',
  },
  pill: {
    container: 'bg-button-secondary rounded-full px-3 py-1',
    digit: 'text-text-primary',
  },
}

export const baseStyles = {
  container: cn('inline-flex items-center justify-center overflow-hidden'),
  digitWrapper: cn('relative overflow-hidden'),
  digitColumn: cn('flex flex-col items-center'),
  digit: cn('font-mono font-semibold tabular-nums leading-none'),
  separator: cn('font-mono font-semibold'),
} as const
