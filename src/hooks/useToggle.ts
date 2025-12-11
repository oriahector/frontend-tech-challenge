import { useState, useCallback } from 'react'

interface UseToggleOptions {
  initialValue?: boolean
  onChange?: (value: boolean) => void
}

interface UseToggleReturn {
  value: boolean
  toggle: () => void
  setOn: () => void
  setOff: () => void
  setValue: (value: boolean) => void
}

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

  const setOn = useCallback(() => setValue(true), [setValue])
  const setOff = useCallback(() => setValue(false), [setValue])

  return { value, toggle, setOn, setOff, setValue }
}

export default useToggle
