import { useState, useCallback, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRipple, type RippleEffect } from '@/hooks'
import {
  springFast,
  easeQuick,
  rippleVariants,
  tapScale,
} from '@/lib/animations'
import { sizeConfig, variantConfig, baseStyles } from './CopyButton.styles'
import type { Size, ButtonVariant } from '@/types'

export interface CopyButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children' | 'onCopy' | 'onError'> {
  value: string
  size?: Size
  variant?: ButtonVariant
  resetDelay?: number
  tooltipText?: string
  successText?: string
  onCopy?: (value: string) => void
  onError?: (error: Error) => void
  'aria-label'?: string
}

const iconVariants: Variants = {
  initial: { scale: 0, rotate: -90, opacity: 0 },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: springFast,
  },
  exit: {
    scale: 0,
    rotate: 90,
    opacity: 0,
    transition: easeQuick,
  },
}

const tooltipVariants: Variants = {
  initial: { opacity: 0, y: 4, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springFast,
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.95,
    transition: easeQuick,
  },
}

export function CopyButton({
  value,
  size = 'md',
  variant = 'default',
  resetDelay = 2000,
  tooltipText = 'Copy',
  successText = 'Copied!',
  onCopy,
  onError,
  className,
  disabled,
  'aria-label': ariaLabel,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { ripples, createRipple } = useRipple<HTMLButtonElement>({ disabled })

  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]
  const accessibleLabel = ariaLabel || (copied ? successText : tooltipText)

  // Auto-reset after delay
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, resetDelay)
      return () => clearTimeout(timer)
    }
  }, [copied, resetDelay])

  const handleCopy = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || copied) return

      createRipple(e)

      try {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        setShowTooltip(true)
        onCopy?.(value)

        // Hide tooltip after a short delay
        setTimeout(() => setShowTooltip(false), resetDelay - 300)
      } catch (err) {
        onError?.(err instanceof Error ? err : new Error('Failed to copy'))
      }
    },
    [disabled, copied, value, createRipple, onCopy, onError, resetDelay]
  )

  const handleMouseEnter = useCallback(() => {
    if (!copied) setShowTooltip(true)
  }, [copied])

  const handleMouseLeave = useCallback(() => {
    if (!copied) setShowTooltip(false)
  }, [copied])

  return (
    <motion.button
      type="button"
      aria-label={accessibleLabel}
      aria-disabled={disabled}
      className={cn(
        baseStyles.button,
        config.button,
        copied ? variantStyles.success : variantStyles.base,
        className
      )}
      onClick={handleCopy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      whileTap={disabled ? undefined : tapScale}
      {...props}
    >
      {/* Ripple effect */}
      <span className={cn('absolute inset-0 overflow-hidden rounded-lg')}>
        <AnimatePresence>
          {ripples.map((ripple: RippleEffect) => (
            <motion.span
              key={ripple.id}
              className={cn(
                'absolute rounded-full pointer-events-none',
                variantStyles.ripple
              )}
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 20,
                height: 20,
                marginLeft: -10,
                marginTop: -10,
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
            />
          ))}
        </AnimatePresence>
      </span>

      {/* Icon with morph animation */}
      <span className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-center"
            >
              <Check size={config.icon} strokeWidth={2.5} aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-center"
            >
              <Copy size={config.icon} strokeWidth={2} aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            role="tooltip"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(baseStyles.tooltip, config.tooltip)}
          >
            {copied ? successText : tooltipText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyButton
