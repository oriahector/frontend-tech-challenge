import { useCallback, useState, useEffect } from 'react'
import './App.css'
import {
  AnimatedCounter,
  BackButton,
  CopyButton,
  ToggleSwitch,
} from '@/components'
import { useToggle } from '@/hooks'
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
import type { ColorScheme } from '@/types'

// Color schemes available for the demo
const COLOR_SCHEMES: ColorScheme[] = [
  'emerald',
  'blue',
  'violet',
  'rose',
  'amber',
]

// AnimatedCounter Section Component
function AnimatedCounterSection() {
  const [count, setCount] = useState(1234)
  const [autoCount, setAutoCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">
          AnimatedCounter
        </h2>
        <p className="text-zinc-600">
          Rolling digit animations with smooth counting, configurable duration,
          and separator support.
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          Interactive Demo
        </h3>
        <div className="flex flex-col items-center gap-6">
          <AnimatedCounter value={count} size="lg" separator="," />
          <div className="flex gap-4">
            <button
              onClick={() => setCount(c => Math.max(0, c - 100))}
              className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-medium transition-colors"
            >
              − 100
            </button>
            <button
              onClick={() => setCount(c => c + 100)}
              className="px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg font-medium transition-colors"
            >
              + 100
            </button>
          </div>
          <button
            onClick={() => setCount(Math.floor(Math.random() * 100000))}
            className="px-3 py-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Random Number
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          Sizes
        </h3>
        <div className="flex flex-wrap items-end justify-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <AnimatedCounter value={42} size="sm" />
            <span className="text-xs text-zinc-500 font-medium">Small</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <AnimatedCounter value={42} size="md" />
            <span className="text-xs text-zinc-500 font-medium">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <AnimatedCounter value={42} size="lg" />
            <span className="text-xs text-zinc-500 font-medium">Large</span>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          Variants
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={123} variant="default" />
            <span className="text-xs text-zinc-500 font-medium">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={123} variant="ghost" />
            <span className="text-xs text-zinc-500 font-medium">Ghost</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={123} variant="pill" />
            <span className="text-xs text-zinc-500 font-medium">Pill</span>
          </div>
        </div>
      </div>

      {/* With Prefix/Suffix */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          Prefix & Suffix
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={1250} prefix="$" separator="," size="lg" />
            <span className="text-xs text-zinc-500 font-medium">Currency</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={87} suffix="%" size="lg" />
            <span className="text-xs text-zinc-500 font-medium">
              Percentage
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter value={42} padStart={4} size="lg" />
            <span className="text-xs text-zinc-500 font-medium">Padded</span>
          </div>
        </div>
      </div>

      {/* Auto Counter */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          Live Counter
        </h3>
        <div className="flex flex-col items-center gap-4">
          <AnimatedCounter value={autoCount} size="lg" padStart={5} />
          <span className="text-sm text-zinc-500">
            Auto-incrementing every second
          </span>
        </div>
      </div>
    </section>
  )
}

function App() {
  // Main demo toggle using custom hook
  const toggleBasic = useToggle({ initialValue: false })

  // Sizes demo state
  const [toggleSizes, setToggleSizes] = useState({
    sm: true,
    md: true,
    lg: true,
  })

  // Settings panel state
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
    analytics: false,
    sounds: true,
  })

  // Icons demo state
  const [icons, setIcons] = useState({
    darkMode: false,
    sound: true,
    wifi: true,
    agree: false,
  })

  // Color schemes demo state
  const [colorSchemes, setColorSchemes] = useState<
    Record<ColorScheme, boolean>
  >({
    emerald: true,
    blue: true,
    violet: true,
    rose: true,
    amber: true,
    neutral: false,
  })

  // Memoized handlers for better performance
  const handleSizeToggle = useCallback(
    (size: keyof typeof toggleSizes, value: boolean) => {
      setToggleSizes(prev => ({ ...prev, [size]: value }))
    },
    []
  )

  const handleSettingToggle = useCallback(
    (setting: keyof typeof settings, value: boolean) => {
      setSettings(prev => ({ ...prev, [setting]: value }))
    },
    []
  )

  const handleIconToggle = useCallback(
    (icon: keyof typeof icons, value: boolean) => {
      setIcons(prev => ({ ...prev, [icon]: value }))
    },
    []
  )

  const handleColorSchemeToggle = useCallback(
    (color: ColorScheme, value: boolean) => {
      setColorSchemes(prev => ({ ...prev, [color]: value }))
    },
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-stone-50 to-zinc-100 py-16 px-6">
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

        {/* CopyButton Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">
              CopyButton
            </h2>
            <p className="text-zinc-600">
              Copy-to-clipboard button with icon morphing, tooltip feedback, and
              auto-reset.
            </p>
          </div>

          {/* Variants */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Variants
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <CopyButton value="Default variant text" variant="default" />
                <span className="text-xs text-zinc-500 font-medium">
                  Default
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CopyButton value="Ghost variant text" variant="ghost" />
                <span className="text-xs text-zinc-500 font-medium">Ghost</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CopyButton value="Outline variant text" variant="outline" />
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
                <CopyButton value="Small" size="sm" />
                <span className="text-xs text-zinc-500 font-medium">Small</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CopyButton value="Medium" size="md" />
                <span className="text-xs text-zinc-500 font-medium">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CopyButton value="Large" size="lg" />
                <span className="text-xs text-zinc-500 font-medium">Large</span>
              </div>
            </div>
          </div>

          {/* Code Block Example */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Code Block Example
            </h3>
            <div className="flex flex-col gap-4">
              <div className="relative bg-zinc-900 rounded-lg p-4 pr-14 font-mono text-sm text-zinc-100">
                <code>npm install @design-system/ui</code>
                <div className="absolute top-2 right-2">
                  <CopyButton
                    value="npm install @design-system/ui"
                    variant="ghost"
                    size="sm"
                    className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="relative bg-zinc-900 rounded-lg p-4 pr-14 font-mono text-sm text-zinc-100">
                <code>pnpm add framer-motion lucide-react</code>
                <div className="absolute top-2 right-2">
                  <CopyButton
                    value="pnpm add framer-motion lucide-react"
                    variant="ghost"
                    size="sm"
                    className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Custom Tooltip */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Custom Tooltips
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <CopyButton
                  value="secret-api-key-12345"
                  tooltipText="Copy API Key"
                  successText="✓ Copied!"
                  variant="outline"
                />
                <span className="text-xs text-zinc-500 font-medium">
                  API Key
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CopyButton
                  value="https://example.com/share/abc123"
                  tooltipText="Copy Link"
                  successText="Link copied!"
                  variant="outline"
                />
                <span className="text-xs text-zinc-500 font-medium">
                  Share Link
                </span>
              </div>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              Disabled State
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <CopyButton value="Cannot copy" disabled />
              <CopyButton value="Cannot copy" variant="ghost" disabled />
              <CopyButton value="Cannot copy" variant="outline" disabled />
            </div>
          </div>
        </section>

        {/* AnimatedCounter Section */}
        <AnimatedCounterSection />

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
                checked={toggleBasic.value}
                onChange={toggleBasic.setValue}
                size="lg"
                colorScheme="emerald"
              />
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium transition-colors ${
                    !toggleBasic.value ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  OFF
                </span>
                <span className="text-zinc-400">•</span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    toggleBasic.value ? 'text-emerald-600' : 'text-zinc-400'
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
              {COLOR_SCHEMES.map(color => (
                <div key={color} className="flex items-center gap-6">
                  <span className="w-20 text-sm text-zinc-600 capitalize">
                    {color}
                  </span>
                  <ToggleSwitch
                    checked={colorSchemes[color]}
                    onChange={v => handleColorSchemeToggle(color, v)}
                    colorScheme={color}
                    size="md"
                  />
                </div>
              ))}
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
                  onChange={v => handleSizeToggle('sm', v)}
                  size="sm"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">Small</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={toggleSizes.md}
                  onChange={v => handleSizeToggle('md', v)}
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
                  onChange={v => handleSizeToggle('lg', v)}
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
                  onChange={v => handleIconToggle('darkMode', v)}
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
                  onChange={v => handleIconToggle('sound', v)}
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
                  onChange={v => handleIconToggle('wifi', v)}
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
                  onChange={v => handleIconToggle('agree', v)}
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
                      onChange={v => handleSettingToggle('notifications', v)}
                      colorScheme="blue"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Dark mode</span>
                    <ToggleSwitch
                      checked={settings.darkMode}
                      onChange={v => handleSettingToggle('darkMode', v)}
                      colorScheme="violet"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Auto-update</span>
                    <ToggleSwitch
                      checked={settings.autoUpdate}
                      onChange={v => handleSettingToggle('autoUpdate', v)}
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
                      onChange={v => handleSettingToggle('analytics', v)}
                      colorScheme="amber"
                      size="sm"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700">Sound effects</span>
                    <ToggleSwitch
                      checked={settings.sounds}
                      onChange={v => handleSettingToggle('sounds', v)}
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
