import { type ReactNode, useId } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'
import {
  sizeConfig,
  colorConfig,
  baseStyles,
  shadowStyles,
} from './ToggleSwitch.styles'

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
  /** Accessible label for screen readers. If not provided and label exists, uses label */
  'aria-label'?: string
  /** ID of element that describes the switch */
  'aria-describedby'?: string
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
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}: ToggleSwitchProps) {
  const config = sizeConfig[size]
  const accentColor = colorConfig[colorScheme]

  const knobTravel = config.track.width - config.knob - config.padding * 2

  // Generate stable unique ID for label association if label exists
  const generatedId = useId()
  const labelId = label ? `toggle-label-${generatedId}` : undefined

  // Use aria-label if provided, otherwise use label if available
  const accessibleLabel = ariaLabel || (label ? undefined : 'Toggle switch')

  const handleToggle = () => {
    if (disabled) return
    onChange?.(!checked)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // Allow Space and Enter to toggle
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleToggle()
    }
  }

  const switchElement = (
    <motion.button
      type="button"
      role="switch"
      id={labelId}
      aria-checked={checked}
      aria-label={accessibleLabel}
      aria-labelledby={label ? labelId : undefined}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'relative rounded-full cursor-pointer',
        baseStyles.track,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'focus-visible:ring-blue-400' : 'focus-visible:ring-zinc-400',
        className
      )}
      style={
        {
          width: config.track.width,
          height: config.track.height,
          ...(props.style as Record<string, unknown>),
        } as React.CSSProperties
      }
      whileTap={disabled ? undefined : { scale: 0.96 }}
      {...props}
    >
      {/* Track - Inset neumorphic effect */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-full',
          !checked && baseStyles.track
        )}
        animate={{
          boxShadow: checked
            ? shadowStyles.trackShadowOn
            : shadowStyles.trackShadowOff,
          backgroundColor: checked ? accentColor : undefined,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      {/* Inner track highlight */}
      <motion.div
        className={cn(
          'absolute rounded-full bg-[var(--color-surface-highlight)] top-0.5 left-0.5 right-0.5 bottom-0.5'
        )}
        animate={{
          opacity: checked ? 0.15 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Knob - Raised neumorphic effect */}
      <motion.div
        className={cn('absolute rounded-full', baseStyles.knob)}
        style={{
          width: config.knob,
          height: config.knob,
          top: config.padding,
          left: config.padding,
        }}
        animate={{
          x: checked ? knobTravel : 0,
          boxShadow: shadowStyles.knobShadow,
        }}
        whileTap={{
          boxShadow: shadowStyles.knobShadowPressed,
        }}
        transition={springTransition}
      />

      {/* Knob inner highlight */}
      <motion.div
        className={cn(
          'absolute rounded-full pointer-events-none',
          baseStyles.knobHighlight
        )}
        style={{
          width: config.knob - 6,
          height: config.knob - 6,
          top: config.padding + 3,
          left: config.padding + 3,
        }}
        animate={{
          x: checked ? knobTravel : 0,
        }}
        transition={springTransition}
      />

      {/* Icon inside knob */}
      {(offIcon || onIcon) && (
        <motion.div
          className={cn(
            'absolute flex items-center justify-center pointer-events-none'
          )}
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
            className={cn('flex items-center justify-center text-zinc-500')}
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
        className={cn(
          'absolute flex items-center justify-between px-2 pointer-events-none'
        )}
        style={{
          top: '50%',
          left: config.padding,
          right: config.padding,
          transform: 'translateY(-50%)',
        }}
      >
        <motion.div
          className={cn('w-1.5 h-1.5 rounded-full')}
          animate={{
            backgroundColor: checked
              ? 'rgba(255,255,255,0.5)'
              : 'rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={cn('w-1.5 h-1.5 rounded-full')}
          animate={{
            backgroundColor: checked
              ? 'rgba(255,255,255,0.3)'
              : 'rgba(0,0,0,0.15)',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  )

  if (!label) return switchElement

  return (
    <label
      htmlFor={labelId}
      id={labelId}
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
