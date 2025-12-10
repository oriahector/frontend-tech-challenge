import { useState } from 'react'
import './App.css'
import { BackButton } from './components/BackButton'
import { BackButtonExample } from './components/examples/BackButtonExample'
import { ToggleSwitchExample } from './components/examples/ToggleSwitchExample'

type View = 'home' | 'examples' | 'backbutton' | 'toggleswitch'

function App() {
  const [view, setView] = useState<View>('home')

  // BackButton Example View
  if (view === 'backbutton') {
    return (
      <div>
        <div className="fixed top-6 left-6 z-50">
          <BackButton
            label="Examples"
            onClick={() => setView('examples')}
            size="md"
          />
        </div>
        <BackButtonExample />
      </div>
    )
  }

  // ToggleSwitch Example View
  if (view === 'toggleswitch') {
    return (
      <div>
        <div className="fixed top-6 left-6 z-50">
          <BackButton
            label="Examples"
            onClick={() => setView('examples')}
            size="md"
          />
        </div>
        <ToggleSwitchExample />
      </div>
    )
  }

  // Examples List View
  if (view === 'examples') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-stone-50 to-zinc-100 py-16 px-6">
        <div className="fixed top-6 left-6 z-50">
          <BackButton label="Home" onClick={() => setView('home')} size="md" />
        </div>
        <div className="max-w-3xl mx-auto pt-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Component Examples
            </h1>
            <p className="text-lg text-zinc-600">
              Explore the design system components
            </p>
          </div>

          <div className="grid gap-6">
            {/* BackButton Card */}
            <button
              onClick={() => setView('backbutton')}
              className="group bg-white rounded-2xl shadow-sm border border-zinc-200 p-6 text-left hover:shadow-md hover:border-zinc-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    BackButton
                  </h2>
                  <p className="text-zinc-600 text-sm">
                    Navigation button with text reveal animation, ripple effect
                    and spring transitions.
                  </p>
                </div>
                <div className="shrink-0 ml-4">
                  <BackButton size="sm" />
                </div>
              </div>
            </button>

            {/* ToggleSwitch Card */}
            <button
              onClick={() => setView('toggleswitch')}
              className="group bg-white rounded-2xl shadow-sm border border-zinc-200 p-6 text-left hover:shadow-md hover:border-zinc-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    ToggleSwitch
                  </h2>
                  <p className="text-zinc-600 text-sm">
                    Neumorphic toggle with spring physics, color transitions and
                    icon support.
                  </p>
                </div>
                <div className="shrink-0 ml-4 pointer-events-none">
                  <div className="relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full bg-emerald-500">
                    <span className="absolute left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md translate-x-6" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Home View
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Interactive Components Challenge
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Build any of the animated components listed in the README
        </p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Your Components
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-gray-600">
              Import and showcase your components here. Check the{' '}
              <button
                onClick={() => setView('examples')}
                className="bg-gray-100 px-2 py-1 rounded text-sm font-mono hover:bg-gray-200 transition-colors cursor-pointer text-indigo-600 hover:text-indigo-700"
              >
                src/components/examples
              </button>{' '}
              folder for a reference implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
