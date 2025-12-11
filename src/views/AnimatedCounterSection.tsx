import { useState, useEffect } from 'react'
import { AnimatedCounter } from '@/components'

export function AnimatedCounterSection() {
  const [counterValue, setCounterValue] = useState(1234)
  const [autoCounter, setAutoCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCounter(c => c + 1)
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
          <AnimatedCounter value={counterValue} size="lg" separator="," />
          <div className="flex gap-4">
            <button
              onClick={() => setCounterValue(c => Math.max(0, c - 100))}
              className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-medium transition-colors"
            >
              − 100
            </button>
            <button
              onClick={() => setCounterValue(c => c + 100)}
              className="px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg font-medium transition-colors"
            >
              + 100
            </button>
          </div>
          <button
            onClick={() => setCounterValue(Math.floor(Math.random() * 100000))}
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
          <AnimatedCounter value={autoCounter} size="lg" padStart={5} />
          <span className="text-sm text-zinc-500">
            Auto-incrementing every second
          </span>
        </div>
      </div>
    </section>
  )
}
