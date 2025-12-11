import { useState, useRef, type MouseEvent } from 'react'
import {
  motion,
  AnimatePresence,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'

interface RippleEffect {
  id: number
  x: number
  y: number
}

export interface BackButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** Text label shown on hover */
  label?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Visual variant */
  variant?: 'default' | 'ghost' | 'outline'
}

const sizeConfig = {
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

const variantConfig = {
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
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: -3,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
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
      width: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
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

const rippleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0.6,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
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
  ...props
}: BackButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleIdRef = useRef(0)

  const config = sizeConfig[size]
  const variantStyles = variantConfig[variant]

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    // Create ripple effect
    const button = buttonRef.current
    if (button) {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newRipple: RippleEffect = {
        id: rippleIdRef.current++,
        x,
        y,
      }

      setRipples(prev => [...prev, newRipple])

      // Clean up ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 600)
    }

    onClick?.(e)
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        // Base styles
        'relative inline-flex items-center justify-center overflow-hidden',
        'rounded-full font-medium cursor-pointer',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
        // Size config - use fixed width for outline variant when not hovered to ensure perfect circle
        variant === 'outline' && !isHovered
          ? config.buttonFixed
          : config.button,
        // Variant config
        variantStyles.base,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={disabled}
      initial="initial"
      animate={isHovered ? 'hover' : 'initial'}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Ripple effects container */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <AnimatePresence>
          {ripples.map(ripple => (
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
          className="relative flex items-center justify-center shrink-0"
          variants={arrowVariants}
        >
          <ArrowLeft size={config.icon} strokeWidth={2.5} />
        </motion.span>

        {/* Text reveal on hover */}
        <motion.span
          className="relative overflow-hidden whitespace-nowrap"
          variants={textVariants}
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
        >
          <span className="inline-block">{label}</span>
        </motion.span>
      </span>
    </motion.button>
  )
}

export default BackButton
