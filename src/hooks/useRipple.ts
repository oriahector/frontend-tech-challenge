import { useState, useCallback, useRef, type MouseEvent } from 'react'

interface RippleEffect {
  id: number
  x: number
  y: number
}

interface UseRippleOptions {
  /** Duration of ripple animation in ms */
  duration?: number
  /** Whether ripple is disabled */
  disabled?: boolean
}

interface UseRippleReturn<T extends HTMLElement> {
  /** Ref to attach to the target element */
  ref: React.RefObject<T | null>
  /** Current active ripples */
  ripples: RippleEffect[]
  /** Handler to create ripple on click */
  createRipple: (e: MouseEvent<T>) => void
}

/**
 * Custom hook for creating ripple effects on click
 *
 * @example
 * ```tsx
 * const { ref, ripples, createRipple } = useRipple<HTMLButtonElement>()
 *
 * return (
 *   <button ref={ref} onClick={createRipple}>
 *     {ripples.map(ripple => (
 *       <span
 *         key={ripple.id}
 *         style={{ left: ripple.x, top: ripple.y }}
 *         className="ripple"
 *       />
 *     ))}
 *     Click me
 *   </button>
 * )
 * ```
 */
export function useRipple<T extends HTMLElement = HTMLElement>(
  options: UseRippleOptions = {}
): UseRippleReturn<T> {
  const { duration = 600, disabled = false } = options

  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const ref = useRef<T>(null)
  const rippleIdRef = useRef(0)

  const createRipple = useCallback(
    (e: MouseEvent<T>) => {
      if (disabled) return

      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
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
      }, duration)
    },
    [disabled, duration]
  )

  return {
    ref,
    ripples,
    createRipple,
  }
}

export type { RippleEffect }
export default useRipple
