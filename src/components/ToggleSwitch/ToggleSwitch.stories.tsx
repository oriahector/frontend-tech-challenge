import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
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
import { ToggleSwitch } from './ToggleSwitch'

const meta = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An animated toggle switch with smooth sliding animation, spring physics, and color transitions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the switch',
    },
    colorScheme: {
      control: 'select',
      options: ['emerald', 'blue', 'violet', 'rose', 'amber'],
      description: 'Color scheme for the on state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the label relative to the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
  },
} satisfies Meta<typeof ToggleSwitch>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default toggle switch in the off state.
 * Click to toggle and see the smooth spring animation.
 */
export const Default: Story = {
  args: {
    checked: false,
  },
}

/**
 * Toggle switch in the on state.
 * Notice the color transition and subtle glow effect.
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
}

/**
 * Interactive toggle that maintains its own state.
 * Click to toggle between on and off states.
 */
export const Interactive: Story = {
  render: function InteractiveToggle() {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex flex-col items-center gap-4">
        <ToggleSwitch checked={checked} onChange={setChecked} size="lg" />
        <span className="text-sm text-zinc-500">
          Status: {checked ? 'On' : 'Off'}
        </span>
      </div>
    )
  },
}

/**
 * All available sizes displayed together.
 */
export const Sizes: Story = {
  render: function SizesDemo() {
    const [checked, setChecked] = useState(true)
    return (
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <ToggleSwitch checked={checked} onChange={setChecked} size="sm" />
          <span className="text-xs text-zinc-500">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ToggleSwitch checked={checked} onChange={setChecked} size="md" />
          <span className="text-xs text-zinc-500">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ToggleSwitch checked={checked} onChange={setChecked} size="lg" />
          <span className="text-xs text-zinc-500">Large</span>
        </div>
      </div>
    )
  },
}

/**
 * All color schemes displayed together.
 */
export const ColorSchemes: Story = {
  render: function ColorSchemesDemo() {
    const [colorSchemes, setColorSchemes] = useState({
      emerald: true,
      blue: true,
      violet: true,
      rose: true,
      amber: true,
    })
    return (
      <div className="flex flex-col gap-4">
        {(['emerald', 'blue', 'violet', 'rose', 'amber'] as const).map(
          color => (
            <div key={color} className="flex items-center gap-4">
              <span className="w-16 text-sm text-zinc-500 capitalize">
                {color}
              </span>
              <ToggleSwitch
                checked={colorSchemes[color]}
                onChange={v =>
                  setColorSchemes(s => ({
                    ...s,
                    [color]: v,
                  }))
                }
                colorScheme={color}
              />
            </div>
          )
        )}
      </div>
    )
  },
}

/**
 * Toggle with icons inside the knob.
 * Icons change based on the current state.
 */
export const WithIcons: Story = {
  render: function WithIconsDemo() {
    const [darkMode, setDarkMode] = useState(false)
    const [sound, setSound] = useState(true)
    const [wifi, setWifi] = useState(true)
    const [agree, setAgree] = useState(false)

    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-zinc-600">Dark Mode</span>
          <ToggleSwitch
            checked={darkMode}
            onChange={setDarkMode}
            colorScheme="violet"
            size="lg"
            offIcon={<Sun className="w-full h-full text-amber-500" />}
            onIcon={<Moon className="w-full h-full text-violet-500" />}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-zinc-600">Sound</span>
          <ToggleSwitch
            checked={sound}
            onChange={setSound}
            colorScheme="blue"
            size="lg"
            offIcon={<VolumeX className="w-full h-full text-zinc-400" />}
            onIcon={<Volume2 className="w-full h-full text-blue-500" />}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-zinc-600">WiFi</span>
          <ToggleSwitch
            checked={wifi}
            onChange={setWifi}
            colorScheme="emerald"
            size="lg"
            offIcon={<WifiOff className="w-full h-full text-zinc-400" />}
            onIcon={<Wifi className="w-full h-full text-emerald-500" />}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-zinc-600">Agree</span>
          <ToggleSwitch
            checked={agree}
            onChange={setAgree}
            colorScheme="rose"
            size="lg"
            offIcon={<X className="w-full h-full text-zinc-400" />}
            onIcon={<Check className="w-full h-full text-rose-500" />}
          />
        </div>
      </div>
    )
  },
}

/**
 * Toggle with a label positioned to the right.
 */
export const WithLabelRight: Story = {
  render: function WithLabelDemo() {
    const [notifications, setNotifications] = useState(true)
    return (
      <ToggleSwitch
        checked={notifications}
        onChange={setNotifications}
        label="Enable notifications"
        labelPosition="right"
      />
    )
  },
}

/**
 * Toggle with a label positioned to the left.
 */
export const WithLabelLeft: Story = {
  render: function WithLabelLeftDemo() {
    const [autoSave, setAutoSave] = useState(false)
    return (
      <ToggleSwitch
        checked={autoSave}
        onChange={setAutoSave}
        label="Auto-save"
        labelPosition="left"
      />
    )
  },
}

/**
 * Disabled toggle switches in both states.
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-zinc-500">Off (disabled)</span>
        <ToggleSwitch checked={false} disabled />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-zinc-500">On (disabled)</span>
        <ToggleSwitch checked={true} disabled />
      </div>
    </div>
  ),
}

/**
 * Settings panel example showing multiple toggles in context.
 */
export const SettingsPanel: Story = {
  render: function SettingsPanelDemo() {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoUpdate: true,
      analytics: false,
      sounds: true,
    })

    const updateSetting = (key: keyof typeof settings) => (value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }))
    }

    return (
      <div className="w-80 rounded-xl bg-white p-6 shadow-lg border border-zinc-200">
        <h3 className="text-lg font-semibold text-zinc-900 mb-6">Settings</h3>
        <div className="flex flex-col gap-5">
          <ToggleSwitch
            checked={settings.notifications}
            onChange={updateSetting('notifications')}
            label="Push notifications"
            colorScheme="blue"
          />
          <ToggleSwitch
            checked={settings.darkMode}
            onChange={updateSetting('darkMode')}
            label="Dark mode"
            colorScheme="violet"
          />
          <ToggleSwitch
            checked={settings.autoUpdate}
            onChange={updateSetting('autoUpdate')}
            label="Auto-update"
            colorScheme="emerald"
          />
          <ToggleSwitch
            checked={settings.analytics}
            onChange={updateSetting('analytics')}
            label="Usage analytics"
            colorScheme="amber"
          />
          <ToggleSwitch
            checked={settings.sounds}
            onChange={updateSetting('sounds')}
            label="Sound effects"
            colorScheme="rose"
          />
        </div>
      </div>
    )
  },
}
