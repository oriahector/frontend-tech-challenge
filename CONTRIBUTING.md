# Development Guidelines

## Code Style

- Use functional components with hooks
- Use `export function` for component definitions (NOT arrow functions)
- Use arrow functions or `useCallback` for event handlers
- Use Tailwind CSS for styling (avoid custom CSS when possible)
- Use Framer Motion for animations
- Keep components in separate files
- Add JSDoc comments for complex components
- Use `cn()` utility for className composition

## Component Best Practices

### File Structure
```tsx
// 1. Imports
import { motion } from 'framer-motion'
import { useState, useCallback, ComponentProps } from 'react'
import { Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

// 2. Types/Interfaces (export type for props)
export type ComponentNameProps = Omit<
  ComponentProps<'button'>,
  'onClick' | 'children'
> & {
  /** Prop description */
  prop1: string
  prop2?: number
  onAction?: () => void
}

// 3. Component (named export with function keyword)
export function ComponentName({
  prop1,
  prop2,
  onAction,
  className,
  ref,
  ...props
}: ComponentNameProps) {
  // 4. State
  const [state, setState] = useState<boolean>(false)

  // 5. Handlers (use useCallback for optimization)
  const handleClick = useCallback(() => {
    onAction?.()
  }, [onAction])

  // 6. Render
  return (
    <motion.button
      ref={ref}
      className={cn('base-classes', className)}
      {...props}
    >
      {/* JSX */}
    </motion.button>
  )
}

// 7. Display name (for debugging)
ComponentName.displayName = 'ComponentName'
```

### Animation Tips

**Use spring animations for natural feel:**
```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
```

**Add hover states:**
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

**Animate state changes with keys:**
```jsx
<motion.span
  key={count}
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
>
  {count}
</motion.span>
```

### Accessibility

- Add `aria-label` to icon-only buttons
- Use semantic HTML elements
- Support keyboard navigation
- Provide focus states

Example:
```jsx
<button
  aria-label="Like this post"
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <Heart />
</button>
```

## Testing Your Component

1. **Visual Testing** - Does it look good?
2. **Interaction Testing** - Do animations work smoothly?
3. **State Testing** - Do state changes update correctly?
4. **Edge Cases** - What happens with long text, no data, etc?
5. **Accessibility** - Can you navigate with keyboard?

## Common Patterns

### Controlled vs Uncontrolled State
```tsx
// Support both controlled and uncontrolled patterns
export type ComponentProps = {
  // Controlled props (undefined = uncontrolled)
  value?: string
  onChange?: (value: string) => void

  // Uncontrolled props (initial values)
  defaultValue?: string
}

export function Component({
  value: controlledValue,
  defaultValue = '',
  onChange,
}: ComponentProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)

  // Determine if controlled
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleChange = useCallback((newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue)
    }
    onChange?.(newValue)
  }, [isControlled, onChange])

  return <input value={value} onChange={(e) => handleChange(e.target.value)} />
}
```

### Toggle State
```tsx
const [isActive, setIsActive] = useState(false)
const toggle = () => setIsActive(!isActive)
```

### Auto-reset Timer
```jsx
useEffect(() => {
  if (copied) {
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }
}, [copied])
```

### Variant System
```tsx
// Define variants as objects for better organization
const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  default: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  ghost: 'bg-transparent hover:bg-gray-100',
}

// Use in component
<button className={cn(
  'base-classes',
  sizeClasses[size],
  variantClasses[variant],
  className
)} />
```

### Conditional Classes with cn() utility
```tsx
import { cn } from '@/lib/utils'

// Use cn() for className composition (combines clsx + tailwind-merge)
className={cn(
  'base-class',
  condition && 'conditional-class',
  variant === 'primary' ? 'primary-class' : 'secondary-class',
  className // User classes come last for proper override
)}
```

### Data Attributes for Testing & Styling
```tsx
// Expose component state via data attributes
<button
  data-slot="button"
  data-state={isActive ? 'active' : 'inactive'}
  data-disabled={disabled ? 'true' : undefined}
>
  <span data-slot="label">Click me</span>
  <span data-slot="icon">→</span>
</button>

// Use in tests
const button = screen.getByRole('button')
expect(button).toHaveAttribute('data-state', 'active')

// Use for conditional styling
button[data-state="active"] {
  background: blue;
}
```

## Resources

- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [React Hooks Reference](https://react.dev/reference/react)
- [Lucide Icons](https://lucide.dev/icons/)

Happy building! 🎨
