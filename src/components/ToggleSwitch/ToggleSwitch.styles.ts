/**
 * ToggleSwitch Styles
 *
 * Centralized style configurations for the ToggleSwitch component
 */

export const sizeConfig = {
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
} as const

export const colorConfig = {
  emerald: 'var(--color-emerald-500)',
  blue: 'var(--color-blue-500)',
  violet: 'var(--color-violet-500)',
  rose: 'var(--color-rose-500)',
  amber: 'var(--color-amber-500)',
  neutral: 'var(--color-neutral-400)',
} as const

export const baseStyles = {
  track: 'bg-[var(--color-surface-base)]',
  knob: 'bg-gradient-to-br from-[var(--color-surface-elevated-start)] to-[var(--color-surface-elevated-end)]',
  knobHighlight: 'bg-gradient-to-br from-white/80 to-transparent',
} as const

export const shadowStyles = {
  trackShadowOff: `
    inset 4px 4px 8px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9),
    inset 1px 1px 2px rgba(0, 0, 0, 0.05)
  `,
  trackShadowOn: `
    inset 4px 4px 8px rgba(0, 0, 0, 0.15),
    inset -4px -4px 8px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(0, 0, 0, 0.1)
  `,
  knobShadow: `
    4px 4px 10px rgba(0, 0, 0, 0.15),
    -2px -2px 8px rgba(255, 255, 255, 0.8),
    1px 1px 3px rgba(0, 0, 0, 0.1)
  `,
  knobShadowPressed: `
    2px 2px 6px rgba(0, 0, 0, 0.12),
    -1px -1px 4px rgba(255, 255, 255, 0.6)
  `,
} as const
