import { type ReactNode, useId, useCallback, useMemo } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { springFast, easeStandard, tapScaleGentle } from '@/lib/animations'
import {
  sizeConfig,
  colorConfig,
  baseStyles,
  shadowStyles,
} from './ToggleSwitch.styles'
import type { Size, ColorScheme, LabelPosition } from '@/types'

export interface ToggleSwitchProps
  extends Omit<HTMLMotionProps<'button'>, 'children' | 'onChange'> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  size?: Size
  colorScheme?: ColorScheme
  offIcon?: ReactNode
  onIcon?: ReactNode
  label?: string
  labelPosition?: LabelPosition
  'aria-label'?: string
  'aria-describedby'?: string
}

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

  const knobTravel = useMemo(
    () => config.track.width - config.knob - config.padding * 2,
    [config.track.width, config.knob, config.padding]
  )

  const generatedId = useId()
  const labelId = label ? `toggle-label-${generatedId}` : undefined
  const accessibleLabel = ariaLabel || (label ? undefined : 'Toggle switch')

  const handleToggle = useCallback(() => {
    if (disabled) return
    onChange?.(!checked)
  }, [disabled, onChange, checked])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleToggle()
      }
    },
    [handleToggle]
  )

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
      style={{
        width: config.track.width,
        height: config.track.height,
        ...(props.style as Record<string, unknown>),
      }}
      whileTap={disabled ? undefined : tapScaleGentle}
      {...props}
    >
      {/* Track */}
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
        transition={easeStandard}
      />

      {/* Track highlight */}
      <motion.div
        className={cn(
          'absolute rounded-full bg-[var(--color-surface-highlight)] top-0.5 left-0.5 right-0.5 bottom-0.5'
        )}
        animate={{ opacity: checked ? 0.15 : 0 }}
        transition={easeStandard}
      />

      {/* Knob */}
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
        whileTap={{ boxShadow: shadowStyles.knobShadowPressed }}
        transition={springFast}
      />

      {/* Knob highlight */}
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
        animate={{ x: checked ? knobTravel : 0 }}
        transition={springFast}
      />

      {/* Icon */}
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
          animate={{ x: checked ? knobTravel : 0 }}
          transition={springFast}
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
          transition={easeStandard}
        />
        <motion.div
          className={cn('w-1.5 h-1.5 rounded-full')}
          animate={{
            backgroundColor: checked
              ? 'rgba(255,255,255,0.3)'
              : 'rgba(0,0,0,0.15)',
          }}
          transition={easeStandard}
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
