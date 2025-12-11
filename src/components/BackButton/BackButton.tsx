import { useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useHover, useRipple, type RippleEffect } from '@/hooks'
import {
  springStandard,
  springFast,
  rippleVariants,
  tapScale,
} from '@/lib/animations'
import { sizeConfig, variantConfig, baseStyles } from './BackButton.styles'
import type { Size, ButtonVariant } from '@/types'

export interface BackButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** Text label shown on hover */
  label?: string
  /** Size variant */
  size?: Size
  /** Visual variant */
  variant?: ButtonVariant
  /** Accessible label for screen readers. If not provided, uses label prop */
  'aria-label'?: string
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: -3,
    transition: springStandard,
  },
}

const textVariants: Variants = {
  initial: {
    width: 0,
    opacity: 0,
  },
  hover: {
    width: 'auto',
    opacity: 1,
    transition: {
      width: springFast,
      opacity: {
        duration: 0.2,
        delay: 0.05,
      },
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      width: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
}

/**
 * BackButton - An animated back navigation button for design systems
 *
 * Features:
 * - Arrow icon with smooth spring hover animation
 * - Text reveal/slide effect on hover
 * - Ripple effect on click
 * - Three size variants: sm, md, lg
 * - Three visual variants: default, ghost, outline
 */
export function BackButton({
  label = 'Back',
  size = 'md',
  variant = 'default',
  onClick,
  className,
  disabled,
  'aria-label': ariaLabel,
  ...props
}: BackButtonProps) {
  const { ref, isHovered, hoverProps } = useHover<HTMLButtonElement>()
  const { ripples, createRipple } = useRipple<HTMLButtonElement>({ disabled })

  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]

  // Use aria-label if provided, otherwise use label prop
  const accessibleLabel = ariaLabel || label

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      createRipple(e)
      onClick?.(e)
    },
    [disabled, createRipple, onClick]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // Allow Enter and Space to trigger click
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!disabled) {
          handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
        }
      }
    },
    [disabled, handleClick]
  )

  return (
    <motion.button
      ref={ref}
      type="button"
      role="button"
      aria-label={accessibleLabel}
      aria-disabled={disabled}
      className={cn(
        baseStyles.button,
        // Size config - use fixed width for outline variant when not hovered to ensure perfect circle
        variant === 'outline' && !isHovered
          ? config.buttonFixed
          : config.button,
        // Variant config
        variantStyles.base,
        className
      )}
      {...hoverProps}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      initial="initial"
      animate={isHovered ? 'hover' : 'initial'}
      whileTap={tapScale}
      {...props}
    >
      {/* Ripple effects container */}
      <span className={cn('absolute inset-0 overflow-hidden rounded-full')}>
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

      {/* Inner container with fixed padding to prevent layout shifts */}
      <span className={cn('relative z-10 flex items-center', config.padding)}>
        {/* Arrow icon */}
        <motion.span
          className={cn('relative flex items-center justify-center shrink-0')}
          variants={arrowVariants}
          aria-hidden="true"
        >
          <ArrowLeft size={config.icon} strokeWidth={2.5} aria-hidden="true" />
        </motion.span>

        {/* Text reveal on hover */}
        <motion.span
          className={cn('relative overflow-hidden whitespace-nowrap')}
          variants={textVariants}
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
        >
          <span className={cn('inline-block')}>{label}</span>
        </motion.span>
      </span>
    </motion.button>
  )
}

export default BackButton
