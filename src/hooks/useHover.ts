import { useState, useCallback, useRef, type RefObject } from 'react'

interface UseHoverOptions {
  /** Delay before hover state becomes true (ms) */
  enterDelay?: number
  /** Delay before hover state becomes false (ms) */
  leaveDelay?: number
  /** Callback when hover state changes */
  onHoverChange?: (isHovered: boolean) => void
}

interface UseHoverReturn<T extends HTMLElement> {
  /** Ref to attach to the target element */
  ref: RefObject<T | null>
  /** Current hover state */
  isHovered: boolean
  /** Props to spread on the target element */
  hoverProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
    onFocus: () => void
    onBlur: () => void
  }
}

/**
 * Custom hook for tracking hover state on an element
 *
 * @example
 * ```tsx
 * const { ref, isHovered, hoverProps } = useHover<HTMLButtonElement>()
 *
 * return (
 *   <button ref={ref} {...hoverProps}>
 *     {isHovered ? 'Hovering!' : 'Hover me'}
 *   </button>
 * )
 * ```
 */
export function useHover<T extends HTMLElement = HTMLElement>(
  options: UseHoverOptions = {}
): UseHoverReturn<T> {
  const { enterDelay = 0, leaveDelay = 0, onHoverChange } = options

  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<T>(null)
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const handleMouseEnter = useCallback(() => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = undefined
    }

    if (enterDelay > 0) {
      enterTimeoutRef.current = setTimeout(() => {
        setIsHovered(true)
        onHoverChange?.(true)
      }, enterDelay)
    } else {
      setIsHovered(true)
      onHoverChange?.(true)
    }
  }, [enterDelay, onHoverChange])

  const handleMouseLeave = useCallback(() => {
    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current)
      enterTimeoutRef.current = undefined
    }

    if (leaveDelay > 0) {
      leaveTimeoutRef.current = setTimeout(() => {
        setIsHovered(false)
        onHoverChange?.(false)
      }, leaveDelay)
    } else {
      setIsHovered(false)
      onHoverChange?.(false)
    }
  }, [leaveDelay, onHoverChange])

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleMouseEnter,
    onBlur: handleMouseLeave,
  }

  return {
    ref,
    isHovered,
    hoverProps,
  }
}

export default useHover
