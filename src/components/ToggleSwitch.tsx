import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../lib/utils'

export interface ToggleSwitchProps
  extends Omit<HTMLMotionProps<'button'>, 'children' | 'onChange'> {
  /** Whether the switch is on */
  checked?: boolean
  /** Callback when the switch state changes */
  onChange?: (checked: boolean) => void
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Color scheme for the on state */
  colorScheme?: 'emerald' | 'blue' | 'violet' | 'rose' | 'amber' | 'neutral'
  /** Icon to show when switch is off */
  offIcon?: ReactNode
  /** Icon to show when switch is on */
  onIcon?: ReactNode
  /** Label text */
  label?: string
  /** Position of the label */
  labelPosition?: 'left' | 'right'
}

const sizeConfig = {
  sm: {
    track: { width: 48, height: 28 },
    knob: 22,
    padding: 3,
    icon: 12,
    label: 'text-sm',
    gap: 'gap-2',
  },
  md: {
    track: { width: 60, height: 34 },
    knob: 26,
    padding: 4,
    icon: 14,
    label: 'text-base',
    gap: 'gap-3',
  },
  lg: {
    track: { width: 76, height: 42 },
    knob: 34,
    padding: 4,
    icon: 18,
    label: 'text-lg',
    gap: 'gap-4',
  },
}

const colorConfig = {
  emerald: '#10b981',
  blue: '#3b82f6',
  violet: '#8b5cf6',
  rose: '#f43f5e',
  amber: '#f59e0b',
  neutral: '#a1a1aa',
}

// Spring animation for smooth, natural movement
const springTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
}

/**
 * ToggleSwitch - A neumorphic toggle switch with soft shadows
 *
 * Inspired by: https://www.framer.com/marketplace/components/neoswitch/
 *
 * Features:
 * - Clean neumorphic aesthetic with soft shadows
 * - Smooth toggle animation
 * - Tactile, 3D appearance
 * - Multiple color schemes
 * - Optional icons
 */
export function ToggleSwitch({
  checked = false,
  onChange,
  size = 'md',
  colorScheme = 'blue',
  offIcon,
  onIcon,
  label,
  labelPosition = 'right',
  disabled,
  className,
  ...props
}: ToggleSwitchProps) {
  const config = sizeConfig[size]
  const accentColor = colorConfig[colorScheme]

  const knobTravel = config.track.width - config.knob - config.padding * 2

  const handleToggle = () => {
    if (disabled) return
    onChange?.(!checked)
  }

  // Neumorphic shadow styles
  const trackShadowOff = `
    inset 4px 4px 8px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9),
    inset 1px 1px 2px rgba(0, 0, 0, 0.05)
  `

  const trackShadowOn = `
    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(0, 0, 0, 0.1)
  `

  const knobShadow = `
    4px 4px 10px rgba(0, 0, 0, 0.15),
    -2px -2px 8px rgba(255, 255, 255, 0.8),
    1px 1px 3px rgba(0, 0, 0, 0.1)
  `

  const knobShadowPressed = `
    2px 2px 6px rgba(0, 0, 0, 0.12),
    -1px -1px 4px rgba(255, 255, 255, 0.6)
  `

  const switchElement = (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={cn(
        'relative rounded-full cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e0e5ec]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'focus-visible:ring-blue-400' : 'focus-visible:ring-zinc-400',
        className
      )}
      style={{
        width: config.track.width,
        height: config.track.height,
        backgroundColor: '#e0e5ec',
      }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      {...props}
    >
      {/* Track - Inset neumorphic effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: checked ? trackShadowOn : trackShadowOff,
          backgroundColor: checked ? accentColor : '#e0e5ec',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      {/* Inner track highlight */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: 2,
          left: 2,
          right: 2,
          bottom: 2,
        }}
        animate={{
          opacity: checked ? 0.15 : 0,
          backgroundColor: '#ffffff',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Knob - Raised neumorphic effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: config.knob,
          height: config.knob,
          top: config.padding,
          left: config.padding,
          background: 'linear-gradient(145deg, #f0f5fa, #d1d9e6)',
        }}
        animate={{
          x: checked ? knobTravel : 0,
          boxShadow: knobShadow,
        }}
        whileTap={{
          boxShadow: knobShadowPressed,
        }}
        transition={springTransition}
      />

      {/* Knob inner highlight */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: config.knob - 6,
          height: config.knob - 6,
          top: config.padding + 3,
          left: config.padding + 3,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0))',
        }}
        animate={{
          x: checked ? knobTravel : 0,
        }}
        transition={springTransition}
      />

      {/* Icon inside knob */}
      {(offIcon || onIcon) && (
        <motion.div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            width: config.knob,
            height: config.knob,
            top: config.padding,
            left: config.padding,
          }}
          animate={{
            x: checked ? knobTravel : 0,
          }}
          transition={springTransition}
        >
          <motion.span
            className="flex items-center justify-center text-zinc-500"
            style={{ width: config.icon, height: config.icon }}
            initial={false}
            animate={{ opacity: 1 }}
          >
            {checked ? onIcon : offIcon}
          </motion.span>
        </motion.div>
      )}

      {/* Indicator dots */}
      <div
        className="absolute flex items-center justify-between px-2 pointer-events-none"
        style={{
          top: '50%',
          left: config.padding,
          right: config.padding,
          transform: 'translateY(-50%)',
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          animate={{
            backgroundColor: checked ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          animate={{
            backgroundColor: checked ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.15)',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  )

  if (!label) return switchElement

  return (
    <label
      className={cn(
        'inline-flex items-center cursor-pointer',
        config.gap,
        disabled && 'cursor-not-allowed opacity-50',
        labelPosition === 'left' && 'flex-row-reverse'
      )}
    >
      {switchElement}
      <span className={cn('select-none text-zinc-600', config.label)}>
        {label}
      </span>
    </label>
  )
}

export default ToggleSwitch
