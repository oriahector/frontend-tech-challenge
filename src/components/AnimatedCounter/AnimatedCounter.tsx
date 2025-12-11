import { useMemo } from 'react'
import { motion, type Transition } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  sizeConfig,
  variantConfig,
  baseStyles,
  type CounterVariant,
} from './AnimatedCounter.styles'
import type { Size } from '@/types'

export interface AnimatedCounterProps {
  value: number
  size?: Size
  variant?: CounterVariant
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  padStart?: number
  separator?: string
  separatorInterval?: number
  'aria-label'?: string
}

// Digits array for rolling animation
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

interface DigitColumnProps {
  digit: number
  size: Size
  variant: CounterVariant
  transition: Transition
}

function DigitColumn({ digit, size, variant, transition }: DigitColumnProps) {
  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]

  return (
    <div
      className={cn(baseStyles.digitWrapper, config.digit)}
      style={{ height: config.digitHeight }}
    >
      <motion.div
        className={baseStyles.digitColumn}
        initial={false}
        animate={{ y: -digit * config.digitHeight }}
        transition={transition}
      >
        {DIGITS.map(d => (
          <span
            key={d}
            className={cn(
              baseStyles.digit,
              config.fontSize,
              variantStyles.digit
            )}
            style={{
              height: config.digitHeight,
              lineHeight: `${config.digitHeight}px`,
            }}
            aria-hidden={d !== digit}
          >
            {d}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

interface StaticCharProps {
  char: string
  size: Size
  variant: CounterVariant
  isSeparator?: boolean
}

function StaticChar({ char, size, variant, isSeparator }: StaticCharProps) {
  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]

  return (
    <span
      className={cn(
        isSeparator ? baseStyles.separator : baseStyles.digit,
        config.fontSize,
        variantStyles.digit,
        isSeparator && 'opacity-50'
      )}
      style={{
        height: config.digitHeight,
        lineHeight: `${config.digitHeight}px`,
      }}
    >
      {char}
    </span>
  )
}

export function AnimatedCounter({
  value,
  size = 'md',
  variant = 'default',
  duration = 0.5,
  className,
  prefix,
  suffix,
  padStart = 0,
  separator,
  separatorInterval = 3,
  'aria-label': ariaLabel,
}: AnimatedCounterProps) {
  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]

  // Custom spring transition for smooth rolling
  const transition: Transition = useMemo(
    () => ({
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration,
    }),
    [duration]
  )

  // Convert value to array of digits with optional padding
  const digits = useMemo(() => {
    const isNegative = value < 0
    const absValue = Math.abs(Math.floor(value))
    const digitString = absValue.toString().padStart(padStart, '0')

    return {
      isNegative,
      digits: digitString.split('').map(Number),
    }
  }, [value, padStart])

  // Add separators (e.g., thousands separator)
  const formattedDigits = useMemo(() => {
    if (!separator)
      return digits.digits.map((d, i) => ({
        type: 'digit' as const,
        value: d,
        key: i,
      }))

    const result: Array<{
      type: 'digit' | 'separator'
      value: number | string
      key: number
    }> = []
    const reversed = [...digits.digits].reverse()

    reversed.forEach((d, i) => {
      if (i > 0 && i % separatorInterval === 0) {
        result.unshift({ type: 'separator', value: separator, key: -i })
      }
      result.unshift({ type: 'digit', value: d, key: i })
    })

    return result
  }, [digits.digits, separator, separatorInterval])

  const accessibleValue = `${prefix || ''}${
    digits.isNegative ? '-' : ''
  }${value}${suffix || ''}`

  return (
    <div
      className={cn(
        baseStyles.container,
        config.container,
        variantStyles.container,
        className
      )}
      role="text"
      aria-label={ariaLabel || accessibleValue}
      aria-live="polite"
    >
      {/* Prefix */}
      {prefix && <StaticChar char={prefix} size={size} variant={variant} />}

      {/* Negative sign */}
      {digits.isNegative && (
        <StaticChar char="-" size={size} variant={variant} />
      )}

      {/* Digits with optional separators */}
      {formattedDigits.map(item =>
        item.type === 'digit' ? (
          <DigitColumn
            key={item.key}
            digit={item.value as number}
            size={size}
            variant={variant}
            transition={transition}
          />
        ) : (
          <StaticChar
            key={item.key}
            char={item.value as string}
            size={size}
            variant={variant}
            isSeparator
          />
        )
      )}

      {/* Suffix */}
      {suffix && <StaticChar char={suffix} size={size} variant={variant} />}
    </div>
  )
}

export default AnimatedCounter
