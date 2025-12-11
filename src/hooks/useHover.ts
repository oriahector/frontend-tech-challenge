import { useState, useCallback, useRef, useEffect, type RefObject } from 'react'

interface UseHoverOptions {
  enterDelay?: number
  leaveDelay?: number
  onHoverChange?: (isHovered: boolean) => void
}

interface UseHoverReturn<T extends HTMLElement> {
  ref: RefObject<T | null>
  isHovered: boolean
  hoverProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
    onFocus: () => void
    onBlur: () => void
  }
}

export function useHover<T extends HTMLElement = HTMLElement>(
  options: UseHoverOptions = {}
): UseHoverReturn<T> {
  const { enterDelay = 0, leaveDelay = 0, onHoverChange } = options

  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<T>(null)
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current)
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current)
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
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

  return { ref, isHovered, hoverProps }
}

export default useHover
