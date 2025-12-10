import { useState } from 'react'
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
import { ToggleSwitch } from '../ToggleSwitch'

export function ToggleSwitchExample() {
  const [basic, setBasic] = useState(false)
  const [sizes, setSizes] = useState({ sm: true, md: true, lg: true })
  const [icons, setIcons] = useState({
    darkMode: false,
    sound: true,
    wifi: true,
    agree: false,
  })
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
    analytics: false,
    sounds: true,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
            Neumorphic Toggle
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            A toggle switch with neumorphic design inspired by{' '}
            <a
              href="https://www.framer.com/marketplace/components/neoswitch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              NeoSwitch from Framer
            </a>
            . Soft shadows and smooth spring animations.
          </p>
        </div>

        {/* Hero Demo */}
        <section className="mb-20">
          <div className="flex flex-col items-center justify-center gap-8 p-12 rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 backdrop-blur">
            <ToggleSwitch
              checked={basic}
              onChange={setBasic}
              size="lg"
              colorScheme="emerald"
            />
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-medium transition-colors ${
                  !basic ? 'text-white' : 'text-zinc-500'
                }`}
              >
                OFF
              </span>
              <span className="text-zinc-600">•</span>
              <span
                className={`text-sm font-medium transition-colors ${
                  basic ? 'text-emerald-400' : 'text-zinc-500'
                }`}
              >
                ON
              </span>
            </div>
          </div>
        </section>

        {/* Color Schemes */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Color Schemes
          </h2>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/50 p-8">
            <div className="flex flex-col gap-6">
              {(['emerald', 'blue', 'violet', 'rose', 'amber'] as const).map(
                color => (
                  <div key={color} className="flex items-center gap-6">
                    <span className="w-20 text-sm text-zinc-400 capitalize">
                      {color}
                    </span>
                    <ToggleSwitch
                      checked={true}
                      colorScheme={color}
                      size="md"
                    />
                    <ToggleSwitch
                      checked={false}
                      colorScheme={color}
                      size="md"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Sizes
          </h2>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/50 p-8">
            <div className="flex flex-wrap items-end justify-center gap-10">
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={sizes.sm}
                  onChange={v => setSizes(s => ({ ...s, sm: v }))}
                  size="sm"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">Small</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={sizes.md}
                  onChange={v => setSizes(s => ({ ...s, md: v }))}
                  size="md"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ToggleSwitch
                  checked={sizes.lg}
                  onChange={v => setSizes(s => ({ ...s, lg: v }))}
                  size="lg"
                  colorScheme="blue"
                />
                <span className="text-xs text-zinc-500 font-medium">Large</span>
              </div>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            With Icons
          </h2>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/50 p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-400">Dark Mode</span>
                <ToggleSwitch
                  checked={icons.darkMode}
                  onChange={v => setIcons(s => ({ ...s, darkMode: v }))}
                  colorScheme="violet"
                  size="lg"
                  offIcon={<Sun className="w-full h-full text-amber-500" />}
                  onIcon={<Moon className="w-full h-full text-violet-400" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-400">Sound</span>
                <ToggleSwitch
                  checked={icons.sound}
                  onChange={v => setIcons(s => ({ ...s, sound: v }))}
                  colorScheme="blue"
                  size="lg"
                  offIcon={<VolumeX className="w-full h-full text-zinc-400" />}
                  onIcon={<Volume2 className="w-full h-full text-blue-400" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-400">WiFi</span>
                <ToggleSwitch
                  checked={icons.wifi}
                  onChange={v => setIcons(s => ({ ...s, wifi: v }))}
                  colorScheme="emerald"
                  size="lg"
                  offIcon={<WifiOff className="w-full h-full text-zinc-400" />}
                  onIcon={<Wifi className="w-full h-full text-emerald-400" />}
                />
              </div>
              <div className="flex items-center gap-6">
                <span className="w-28 text-sm text-zinc-400">Terms</span>
                <ToggleSwitch
                  checked={icons.agree}
                  onChange={v => setIcons(s => ({ ...s, agree: v }))}
                  colorScheme="rose"
                  size="lg"
                  offIcon={<X className="w-full h-full text-zinc-400" />}
                  onIcon={<Check className="w-full h-full text-rose-400" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* With Labels */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            With Labels
          </h2>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/50 p-8">
            <div className="flex flex-col gap-6">
              <ToggleSwitch
                checked={true}
                label="Label on the right"
                labelPosition="right"
                colorScheme="emerald"
              />
              <ToggleSwitch
                checked={true}
                label="Label on the left"
                labelPosition="left"
                colorScheme="blue"
              />
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Disabled State
          </h2>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700/50 p-8">
            <div className="flex flex-wrap items-center gap-8">
              <ToggleSwitch checked={false} disabled />
              <ToggleSwitch checked={true} disabled />
            </div>
          </div>
        </section>

        {/* Settings Panel Demo */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Settings Panel
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-zinc-800/80 p-6 border border-zinc-700/50 backdrop-blur">
              <h3 className="text-lg font-semibold text-white mb-6">
                ⚙️ Settings
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">
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
                  <span className="text-sm text-zinc-300">Dark mode</span>
                  <ToggleSwitch
                    checked={settings.darkMode}
                    onChange={v => setSettings(s => ({ ...s, darkMode: v }))}
                    colorScheme="violet"
                    size="sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Auto-update</span>
                  <ToggleSwitch
                    checked={settings.autoUpdate}
                    onChange={v => setSettings(s => ({ ...s, autoUpdate: v }))}
                    colorScheme="emerald"
                    size="sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Usage analytics</span>
                  <ToggleSwitch
                    checked={settings.analytics}
                    onChange={v => setSettings(s => ({ ...s, analytics: v }))}
                    colorScheme="amber"
                    size="sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Sound effects</span>
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
        </section>
      </div>
    </div>
  )
}

export default ToggleSwitchExample
