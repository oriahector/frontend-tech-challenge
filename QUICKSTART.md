# Quick Start Guide

Get started with the Interactive Components Challenge in 3 easy steps!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173 (or the port shown in terminal)

## Step 3: Start Building!

1. **Choose a component** from the list in `README.md`
2. **Create your component file** in `src/components/`
   ```
   src/components/YourComponent.tsx
   ```
3. **Import it in App.tsx**
   ```tsx
   import YourComponent from './components/YourComponent'

   function App() {
     return (
       <div className="min-h-screen bg-gray-50 py-12 px-4">
         <YourComponent />
       </div>
     )
   }
   ```

## Need Help?

- 📖 Check the example in `src/components/examples/AnimatedButton.tsx`
- 📚 Read component guidelines in `src/components/README.md`
- 🎨 View the full README for component options and tips
- 📦 Resources:
  - [Framer Motion](https://www.framer.com/motion/)
  - [Tailwind CSS](https://tailwindcss.com/docs)
  - [Lucide Icons](https://lucide.dev/)

## Optional Tools

### Storybook (Component Showcase)
```bash
npm run storybook
```

### Tests
```bash
npm test
```

## Common Imports

```jsx
// Animation
import { motion } from 'framer-motion'

// State
import { useState, useEffect } from 'react'

// Icons (examples)
import { Heart, Copy, Check, Menu, X, Search } from 'lucide-react'
```

Happy coding! 🚀
