import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AnimatedCounter } from './AnimatedCounter'

const meta = {
  title: 'Components/AnimatedCounter',
  component: AnimatedCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An animated counter with rolling digit animations, smooth transitions, and configurable easing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'The numeric value to display',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the counter',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'pill'],
      description: 'Visual style variant',
    },
    duration: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: 'Animation duration in seconds',
    },
    prefix: {
      control: 'text',
      description: 'Character(s) to show before the number',
    },
    suffix: {
      control: 'text',
      description: 'Character(s) to show after the number',
    },
    padStart: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Minimum number of digits (pads with zeros)',
    },
    separator: {
      control: 'text',
      description: 'Thousands separator character',
    },
  },
} satisfies Meta<typeof AnimatedCounter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default counter with medium size.
 */
export const Default: Story = {
  args: {
    value: 42,
  },
}

/**
 * Interactive counter with increment/decrement buttons.
 */
export const Interactive: Story = {
  args: { value: 0 },
  render: () => {
    const [count, setCount] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <AnimatedCounter value={count} size="lg" />
        <div className="flex gap-4">
          <button
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-medium transition-colors"
          >
            − Decrease
          </button>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg font-medium transition-colors cursor-pointer"
          >
            + Increase
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(0)}
            className="px-3 py-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(Math.floor(Math.random() * 10000))}
            className="px-3 py-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            Random
          </button>
        </div>
      </div>
    )
  },
}

/**
 * Auto-incrementing counter.
 */
export const AutoIncrement: Story = {
  args: { value: 0 },
  render: () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(c => c + 1)
      }, 1000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="flex flex-col items-center gap-4">
        <AnimatedCounter value={count} size="lg" padStart={4} />
        <span className="text-sm text-zinc-500">
          Auto-incrementing every second
        </span>
      </div>
    )
  },
}

/**
 * All sizes comparison.
 */
export const Sizes: Story = {
  args: { value: 123 },
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <AnimatedCounter value={123} size="sm" />
        <span className="text-xs text-zinc-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AnimatedCounter value={123} size="md" />
        <span className="text-xs text-zinc-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AnimatedCounter value={123} size="lg" />
        <span className="text-xs text-zinc-500">Large</span>
      </div>
    </div>
  ),
}

/**
 * All variants comparison.
 */
export const Variants: Story = {
  args: { value: 42 },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Default</span>
        <AnimatedCounter value={42} variant="default" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Ghost</span>
        <AnimatedCounter value={42} variant="ghost" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Pill</span>
        <AnimatedCounter value={42} variant="pill" />
      </div>
    </div>
  ),
}

/**
 * With currency prefix.
 */
export const Currency: Story = {
  args: {
    value: 1234,
    prefix: '$',
    separator: ',',
  },
}

/**
 * With percentage suffix.
 */
export const Percentage: Story = {
  args: {
    value: 87,
    suffix: '%',
  },
}

/**
 * Large number with thousands separator.
 */
export const LargeNumber: Story = {
  args: {
    value: 1234567,
    separator: ',',
    size: 'lg',
  },
}

/**
 * Padded with leading zeros.
 */
export const Padded: Story = {
  args: {
    value: 42,
    padStart: 5,
  },
}

/**
 * Negative number support.
 */
export const Negative: Story = {
  args: {
    value: -123,
  },
}

/**
 * Custom animation duration.
 */
export const SlowAnimation: Story = {
  args: {
    value: 999,
    duration: 1.5,
  },
}

/**
 * Real-world examples: Stats dashboard.
 */
export const StatsDashboard: Story = {
  args: { value: 0 },
  render: () => {
    const [stats, setStats] = useState({
      users: 1234,
      revenue: 45678,
      orders: 892,
      rating: 49,
    })

    useEffect(() => {
      const interval = setInterval(() => {
        setStats(s => ({
          users: s.users + Math.floor(Math.random() * 10),
          revenue: s.revenue + Math.floor(Math.random() * 100),
          orders: s.orders + Math.floor(Math.random() * 5),
          rating: Math.min(50, s.rating + (Math.random() > 0.7 ? 1 : 0)),
        }))
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-2xl border border-zinc-200">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-500">Total Users</span>
          <AnimatedCounter value={stats.users} size="lg" separator="," />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-500">Revenue</span>
          <AnimatedCounter
            value={stats.revenue}
            size="lg"
            prefix="$"
            separator=","
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-500">Orders</span>
          <AnimatedCounter value={stats.orders} size="lg" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-500">Rating</span>
          <div className="flex items-baseline gap-1">
            <AnimatedCounter value={stats.rating} size="lg" />
            <span className="text-lg text-zinc-400">/50</span>
          </div>
        </div>
      </div>
    )
  },
}

/**
 * Timer display example.
 */
export const Timer: Story = {
  args: { value: 0 },
  render: () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
      return () => clearInterval(interval)
    }, [])

    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60

    return (
      <div className="flex items-center gap-1 font-mono">
        <AnimatedCounter value={minutes} size="lg" padStart={2} />
        <span className="text-4xl font-semibold text-zinc-400">:</span>
        <AnimatedCounter value={secs} size="lg" padStart={2} />
      </div>
    )
  },
}
