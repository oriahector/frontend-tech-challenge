# Interactive Components Challenge

Welcome to the Interactive Components Challenge! This is a technical assessment where you'll build one or more interactive React components with smooth animations and delightful user interactions.

## 🎯 Objective

Choose **one or more** components from the list below and implement them with high-quality animations, interactions, and attention to detail. Quality over quantity is preferred.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your work.

### Storybook (Optional)

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view component stories.

### Testing (Optional)

```bash
npm test
```

## 📋 Component Options

Choose **one or more** of the following components to implement:

### 1. **Animated Back Button**

- Arrow icon with smooth hover animations
- Text reveal/slide effect on hover
- Ripple effect on click
- Smooth transitions and spring animations

### 2. **Toggle Switch with State**

- Smooth sliding knob animation
- Color transitions (on/off states)
- Spring physics for natural feel
- Optional: Add icons inside the switch

### 3. **Copy to Clipboard Button**

- Icon morphs from copy to checkmark
- Tooltip feedback ("Copied!")
- Auto-reset after delay
- Smooth state transitions

### 4. **Animated Counter/Number Display**

- Rolling digit animations
- Smooth counting animations
- Configurable duration and easing
- Support for increment/decrement

### 5. **Interactive Avatar/Profile Picture**

- Hover overlay with edit icon
- Upload state indicators (loading spinner)
- Status indicator (online/offline/busy)
- Smooth transitions and effects

### 6. **Expandable Search Icon**

- Icon expands to reveal input field
- Auto-focus on expand
- Smooth collapse animation
- Backdrop blur/overlay (optional)

### 7. **Like/Favorite Button**

- Heart fill animation
- Particle burst effects on click
- Counter increment with animation
- Scale and color transitions

### 8. **Floating Action Button (FAB)**

- Reveals child action buttons on click
- Staggered animations for children
- Main icon rotation (+ to ×)
- Backdrop overlay

### 9. **Progress Button**

- Button morphs to progress bar on click
- Shows percentage during loading
- Success/error states with icons
- Smooth state transitions

### 10. **Tag/Chip Input**

- Animated tag creation
- Drag to reorder (optional)
- Character limits with feedback
- Delete animation

### 11. **Notification Dot/Badge**

- Pulse/bounce animation
- Number morphing (count changes)
- Max count display (99+)
- Appear/disappear transitions

### 12. **Menu Button (Hamburger)**

- Three lines morph to × (close icon)
- Staggered line animations
- Smooth rotation and position changes
- Interactive states

### 13. **Skeleton Loading Card**

- Shimmer/wave effect
- Progressive content reveal
- Smooth fade transitions
- Realistic content placeholders

### 14. **Interactive Tooltip**

- Smart positioning (avoids edges)
- Arrow pointing to trigger
- Fade and scale entrance
- Multiple trigger modes (hover/click)

### 15. **Animated Checkbox**

- Checkmark draws in (path animation)
- Spring/bounce animation
- Ripple effect on click
- Smooth color transitions

### 16. **Build Your Own!**

- Have an idea for an interactive component?
- Feel free to build something unique and impressive!

## 🛠️ Tech Stack

This project includes:

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Storybook** - Component development environment (optional)
- **Vitest** - Testing framework (optional)

## 📁 Project Structure

```
src/
├── components/          # Place your components here
│   └── examples/        # Example component reference
├── App.tsx             # Main app - showcase your components here
├── App.css             # Custom styles
└── index.css           # Global styles & Tailwind imports
```

## ✅ Evaluation Criteria

Your component(s) will be evaluated on:

1. **Animation Quality** - Smooth, natural, performant animations
2. **Code Quality** - Clean, readable, well-organized code
3. **User Experience** - Intuitive interactions and visual feedback
4. **Attention to Detail** - Polish, edge cases, accessibility
5. **Creativity** - Unique touches and thoughtful implementation

## 💡 Tips

- Focus on smooth, natural-feeling animations (use spring physics when appropriate)
- Pay attention to hover states, active states, and transitions
- Consider accessibility (keyboard navigation, ARIA labels)
- Use Framer Motion for complex animations
- Test your component in different states
- Define proper TypeScript interfaces for props
- Use Storybook to develop and showcase different states (optional)

## 📚 Helpful Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)

## 🔧 Troubleshooting

Having issues? Check the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) guide for common problems and solutions.

## 📤 Submission

When you're done:

1. Ensure your code runs with `npm run dev`
2. Showcase your component(s) in the main App.tsx
3. Include any additional documentation in comments if needed
4. Submit your completed project as instructed

Good luck and have fun building! 🚀
