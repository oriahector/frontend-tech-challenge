import './App.css'
import {
  BackButtonSection,
  CopyButtonSection,
  AnimatedCounterSection,
  ToggleSwitchSection,
} from '@/views'

function App() {
  return (
    <div className="min-h-screen bg-surface-base py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Design System Components
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Interactive components with smooth animations and delightful
            interactions
          </p>
        </header>

        {/* Component Sections */}
        <BackButtonSection />
        <CopyButtonSection />
        <AnimatedCounterSection />
        <ToggleSwitchSection />
      </div>
    </div>
  )
}

export default App
