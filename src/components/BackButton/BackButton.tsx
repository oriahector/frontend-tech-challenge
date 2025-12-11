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
  label?: string
  size?: Size
  variant?: ButtonVariant
  'aria-label'?: string
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3, transition: springStandard },
}

const textVariants: Variants = {
  initial: { width: 0, opacity: 0 },
  hover: {
    width: 'auto',
    opacity: 1,
    transition: {
      width: springFast,
      opacity: { duration: 0.2, delay: 0.05 },
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      width: { type: 'spring', stiffness: 400, damping: 30 },
      opacity: { duration: 0.1 },
    },
  },
}

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
      aria-label={accessibleLabel}
      aria-disabled={disabled}
      className={cn(
        baseStyles.button,
        variant === 'outline' && !isHovered
          ? config.buttonFixed
          : config.button,
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

      <span className={cn('relative z-10 flex items-center', config.padding)}>
        <motion.span
          className={cn('relative flex items-center justify-center shrink-0')}
          variants={arrowVariants}
          aria-hidden="true"
        >
          <ArrowLeft size={config.icon} strokeWidth={2.5} aria-hidden="true" />
        </motion.span>

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
