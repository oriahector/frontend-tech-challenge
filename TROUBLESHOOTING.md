# Troubleshooting Guide

Common issues and solutions for the Interactive Components Challenge.

## Tailwind CSS Not Working

### Symptom
Tailwind classes like `bg-blue-500`, `flex`, `text-center` don't apply any styles.

### Solution
This project uses **Tailwind CSS v4**, which requires the PostCSS plugin:

1. Ensure `@tailwindcss/postcss` is installed:
   ```bash
   npm install -D @tailwindcss/postcss
   ```

2. Verify `postcss.config.js` exists with:
   ```js
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
     },
   }
   ```

3. Check `src/index.css` has:
   ```css
   @import "tailwindcss";
   ```

4. Restart the dev server:
   ```bash
   npm run dev
   ```

## Framer Motion Not Working

### Symptom
Animations don't play or you get import errors.

### Solution
1. Verify framer-motion is installed:
   ```bash
   npm install framer-motion
   ```

2. Import correctly:
   ```jsx
   import { motion } from 'framer-motion'
   ```

3. Use motion components:
   ```jsx
   <motion.div animate={{ x: 100 }}>
   ```

## Icons Not Showing

### Symptom
Lucide icons don't appear or import fails.

### Solution
1. Install lucide-react:
   ```bash
   npm install lucide-react
   ```

2. Import specific icons:
   ```jsx
   import { Heart, Copy, Check } from 'lucide-react'
   ```

3. Use as components:
   ```jsx
   <Heart className="w-5 h-5" />
   ```

## Dev Server Won't Start

### Symptom
`npm run dev` fails or shows errors.

### Solutions

**Port already in use:**
- Vite will automatically try another port (5174, 5175, etc.)
- Or manually kill the process using the port:
  ```bash
  lsof -ti:5173 | xargs kill
  ```

**Node version issues:**
- Vitest requires Node 20+
- Check your version: `node --version`
- Update if needed or ignore the warning (it won't affect development)

**Missing dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Build Errors

### Symptom
`npm run build` fails.

### Solutions

**ESLint errors:**
- Fix linting issues or temporarily disable:
  ```bash
  npm run build -- --no-lint
  ```

**Import errors:**
- Check all imports are correct
- Ensure all files are saved
- Verify component names match file names

## Hot Reload Not Working

### Solution
1. Check that files are saved
2. Ensure you're editing files inside `src/`
3. Restart dev server:
   ```bash
   # Stop with Ctrl+C
   npm run dev
   ```

## Storybook Issues

### Symptom
Storybook won't start or components don't appear.

### Solution
1. Verify installation:
   ```bash
   npm install
   ```

2. Start Storybook:
   ```bash
   npm run storybook
   ```

3. Storybook is **optional** - you can complete the challenge without it

## TypeScript Errors

This project uses TypeScript for type safety.

### Common TypeScript Issues

**Missing type annotations:**
```tsx
// ❌ Bad
const [count, setCount] = useState(0)

// ✅ Good
const [count, setCount] = useState<number>(0)
```

**Props not typed:**
```tsx
// ❌ Bad
export default function MyComponent({ title, onClick }) {

// ✅ Good
interface MyComponentProps {
  title: string
  onClick?: () => void
}
export default function MyComponent({ title, onClick }: MyComponentProps) {
```

**Import errors:**
- Make sure to use `.tsx` extension for files with JSX
- Use `.ts` for utility files without JSX

## Still Having Issues?

1. **Check the example component**: `src/components/examples/AnimatedButton.tsx`
2. **Read the documentation**: `README.md`, `QUICKSTART.md`, `CONTRIBUTING.md`
3. **Clear cache and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json dist .vite
   npm install
   ```
4. **Verify file structure**:
   ```
   src/
   ├── components/
   │   └── YourComponent.jsx  ← Your component
   ├── App.jsx                ← Import here
   └── index.css              ← Tailwind import
   ```

## Quick Verification

Test that everything works:

```jsx
// In src/App.jsx
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-white p-8 rounded-lg"
      >
        <Heart className="w-12 h-12 text-red-500" />
        <p className="mt-4 text-gray-800">If you see this, everything works!</p>
      </motion.div>
    </div>
  )
}
```

If you see a blue screen with a pulsing heart icon, everything is configured correctly! ✅
