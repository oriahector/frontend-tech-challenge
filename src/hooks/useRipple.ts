import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type MouseEvent,
} from 'react'

interface RippleEffect {
  id: number
  x: number
  y: number
}

interface UseRippleOptions {
  duration?: number
  disabled?: boolean
}

interface UseRippleReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>
  ripples: RippleEffect[]
  createRipple: (e: MouseEvent<T>) => void
}

export function useRipple<T extends HTMLElement = HTMLElement>(
  options: UseRippleOptions = {}
): UseRippleReturn<T> {
  const { duration = 600, disabled = false } = options

  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const ref = useRef<T>(null)
  const rippleIdRef = useRef(0)
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set())

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  const createRipple = useCallback(
    (e: MouseEvent<T>) => {
      if (disabled) return

      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const newRipple: RippleEffect = {
        id: rippleIdRef.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      setRipples(prev => [...prev, newRipple])

      const timeoutId = setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
        timeoutsRef.current.delete(timeoutId)
      }, duration)

      timeoutsRef.current.add(timeoutId)
    },
    [disabled, duration]
  )

  return { ref, ripples, createRipple }
}

export type { RippleEffect }
export default useRipple
