# Your Components

Place your component implementations in this folder.

## Suggested Structure

For each component, create a dedicated file:

```
components/
├── AnimatedBackButton.tsx
├── ToggleSwitch.tsx
├── CopyButton.tsx
└── ... (your other components)
```

## Component Template

```tsx
import { motion } from 'framer-motion'
import { useState } from 'react'

type YourComponentProps = {
  // Define your props here
  title?: string
  onClick?: () => void
}

export const YourComponent = ({ title, onClick }: YourComponentProps) => {
  const [state, setState] = useState<boolean>(false)

  return (
    <motion.div
      // Add your animations here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="your-tailwind-classes"
      onClick={onClick}
    >
      {title && <h1>{title}</h1>}
      {/* Your component JSX */}
    </motion.div>
  )
}
```

## Tips

1. **Import in App.tsx** - Don't forget to import and use your component in `App.tsx`
2. **Use Framer Motion** - Great for smooth animations
3. **Tailwind CSS** - Use utility classes for styling
4. **Icons** - Import from `lucide-react`
5. **TypeScript Interfaces** - Define prop types with interfaces
6. **State** - Use `useState` with type annotations for interactive state

## Example Import

```tsx
// In App.tsx - using path alias
import YourComponent from '@/components/YourComponent'

// Or relative import
import YourComponent from './components/YourComponent'

function App() {
  return (
    <div>
      <YourComponent title="Hello" onClick={() => console.log('Clicked')} />
    </div>
  )
}
```

## Path Aliases

This project uses TypeScript path aliases for cleaner imports:

- `@/*` maps to `src/*`
- Use `@/lib/utils` instead of `../../lib/utils`
- Use `@/components/Button` instead of `../components/Button`

This makes imports cleaner and easier to refactor!

Each component has its own folder with the component, stories, and styles files.
