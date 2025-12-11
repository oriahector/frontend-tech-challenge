import { useState } from 'react'
import './App.css'
import { BackButton } from './components/BackButton'
import { ToggleSwitch } from './components/ToggleSwitch'
import {
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Check,
  X,
} from 'lucide-react'

function App() {
  const [toggleBasic, setToggleBasic] = useState(false)
  const [toggleSizes, setToggleSizes] = useState({
    sm: true,
    md: true,
    lg: true,
  })
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
    analytics: false,
    sounds: true,
  })
  const [icons, setIcons] = useState({
    darkMode: false,
    sound: true,
    wifi: true,
    agree: false,
  })
  const [colorSchemes, setColorSchemes] = useState({
    emerald: { on: true, off: false },
    blue: { on: true, off: false },
    violet: { on: true, off: false },
    rose: { on: true, off: false },
    amber: { on: true, off: false },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-stone-50 to-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Design System Components
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Interactive components with smooth animations and delightful
            interactions
          </p>
        </div>

        {/* BackButton Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">
              BackButton
            </h2>
            <p className="text-zinc-600">
              Navigation button with text reveal animation, ripple effect and
              spring transitions.
            </p>
          </div>

          {/* Variants */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Variants
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <BackButton variant="default" />
                <span className="text-xs text-zinc-500 font-medium">
                  Default
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <BackButton variant="ghost" />
                <span className="text-xs text-zinc-500 font-medium">Ghost</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <BackButton variant="outline" />
                <span className="text-xs text-zinc-500 font-medium">
                  Outline
                </span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Sizes
            </h3>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-3">
                <BackButton size="sm" />
                <span className="text-xs text-zinc-500 font-medium">Small</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <BackButton size="md" />
                <span className="text-xs text-zinc-500 font-medium">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <BackButton size="lg" />
                <span className="text-xs text-zinc-500 font-medium">Large</span>
              </div>
            </div>
          </div>

          {/* Custom Labels */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Custom Labels
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <BackButton label="Go Back" />
              <BackButton label="Return" variant="ghost" />
              <BackButton label="Previous" variant="outline" />
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Disabled State
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <BackButton disabled />
              <BackButton variant="ghost" disabled />
              <BackButton variant="outline" disabled />
            </div>
          </div>
        </section>

        {/* ToggleSwitch Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">
              ToggleSwitch
            </h2>
            <p className="text-zinc-600">
              Neumorphic toggle switch with smooth spring animations and color
              transitions.
            </p>
          </div>

          {/* Hero Demo */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Interactive Demo
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <ToggleSwitch
                checked={toggleBasic}
                onChange={setToggleBasic}
                size="lg"
                colorScheme="emerald"
              />
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium transition-colors ${
                    !toggleBasic ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  OFF
                </span>
                <span className="text-zinc-400">•</span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    toggleBasic ? 'text-emerald-600' : 'text-zinc-400'
                  }`}
                >
                  ON
                </span>
              </div>
            </div>
          </div>

          {/* Color Schemes */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Color Schemes
            </h3>
            <div className="flex flex-col gap-6">
              {(['emerald', 'blue', 'violet', 'rose', 'amber'] as const).map(
                color => (
                  <div key={color} className="flex items-center gap-6">
                    <span className="w-20 text-sm text-zinc-600 capitalize">
                      {color}
                    </span>
                    <ToggleSwitch
                      checked={colorSchemes[color].on}
                      onChange={v =>
                        setColorSchemes(s => ({
                          ...s,
                          [color]: { ...s[color], on: v },
                        }))
                      }
                      colorScheme={color}
                      size="md"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Sizes
            </h3>
            <div className="flex flex-wrap items-end justify-center gap-10">
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={toggleSizes.sm}
                  onChange={v => setToggleSizes(s => ({ ...s, sm: v }))}
                  size="sm"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">Small</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={toggleSizes.md}
                  onChange={v => setToggleSizes(s => ({ ...s, md: v }))}
                  size="md"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={toggleSizes.lg}
                  onChange={v => setToggleSizes(s => ({ ...s, lg: v }))}
                  size="lg"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">Large</span>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              With Icons
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-600">Dark Mode</span>
                <ToggleSwitch
                  checked={icons.darkMode}
                  onChange={v => setIcons(s => ({ ...s, darkMode: v }))}
                  colorScheme="violet"
                  size="lg"
                  offIcon={<Sun className="w-full h-full text-amber-500" />}
                  onIcon={<Moon className="w-full h-full text-violet-500" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-600">Sound</span>
                <ToggleSwitch
                  checked={icons.sound}
                  onChange={v => setIcons(s => ({ ...s, sound: v }))}
                  colorScheme="blue"
                  size="lg"
                  offIcon={<VolumeX className="w-full h-full text-zinc-400" />}
                  onIcon={<Volume2 className="w-full h-full text-blue-500" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-600">WiFi</span>
                <ToggleSwitch
                  checked={icons.wifi}
                  onChange={v => setIcons(s => ({ ...s, wifi: v }))}
                  colorScheme="emerald"
                  size="lg"
                  offIcon={<WifiOff className="w-full h-full text-zinc-400" />}
                  onIcon={<Wifi className="w-full h-full text-emerald-500" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-600">Agree</span>
                <ToggleSwitch
                  checked={icons.agree}
                  onChange={v => setIcons(s => ({ ...s, agree: v }))}
                  colorScheme="rose"
                  size="lg"
                  offIcon={<X className="w-full h-full text-zinc-400" />}
                  onIcon={<Check className="w-full h-full text-rose-500" />}
                />
              </div>
            </div>
          </div>

          {/* Settings Panel Demo */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Settings Panel Example
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-xl bg-zinc-50 p-6 border border-zinc-200">
                <h4 className="text-lg font-semibold text-zinc-900 mb-6">
                  ⚙️ Settings
                </h4>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">
                      Push notifications
                    </span>
                    <ToggleSwitch
                      checked={settings.notifications}
                      onChange={v =>
                        setSettings(s => ({ ...s, notifications: v }))
                      }
                      colorScheme="blue"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Dark mode</span>
                    <ToggleSwitch
                      checked={settings.darkMode}
                      onChange={v => setSettings(s => ({ ...s, darkMode: v }))}
                      colorScheme="violet"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Auto-update</span>
                    <ToggleSwitch
                      checked={settings.autoUpdate}
                      onChange={v =>
                        setSettings(s => ({ ...s, autoUpdate: v }))
                      }
                      colorScheme="emerald"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">
                      Usage analytics
                    </span>
                    <ToggleSwitch
                      checked={settings.analytics}
                      onChange={v => setSettings(s => ({ ...s, analytics: v }))}
                      colorScheme="amber"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Sound effects</span>
                    <ToggleSwitch
                      checked={settings.sounds}
                      onChange={v => setSettings(s => ({ ...s, sounds: v }))}
                      colorScheme="rose"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
