import { useState, useCallback } from 'react'

interface UseToggleOptions {
  /** Initial toggle state */
  initialValue?: boolean
  /** Callback when toggle changes */
  onChange?: (value: boolean) => void
}

interface UseToggleReturn {
  /** Current toggle state */
  value: boolean
  /** Toggle the state */
  toggle: () => void
  /** Set state to true */
  setOn: () => void
  /** Set state to false */
  setOff: () => void
  /** Set state to specific value */
  setValue: (value: boolean) => void
}

/**
 * Custom hook for managing boolean toggle state
 *
 * @example
 * ```tsx
 * const { value, toggle, setOn, setOff } = useToggle(false)
 *
 * return (
 *   <button onClick={toggle}>
 *     {value ? 'ON' : 'OFF'}
 *   </button>
 * )
 * ```
 */
export function useToggle(options: UseToggleOptions = {}): UseToggleReturn {
  const { initialValue = false, onChange } = options
  const [value, setValueInternal] = useState(initialValue)

  const setValue = useCallback(
    (newValue: boolean) => {
      setValueInternal(newValue)
      onChange?.(newValue)
    },
    [onChange]
  )

  const toggle = useCallback(() => {
    setValueInternal(prev => {
      const newValue = !prev
      onChange?.(newValue)
      return newValue
    })
  }, [onChange])

  const setOn = useCallback(() => {
    setValue(true)
  }, [setValue])

  const setOff = useCallback(() => {
    setValue(false)
  }, [setValue])

  return {
    value,
    toggle,
    setOn,
    setOff,
    setValue,
  }
}

export default useToggle
