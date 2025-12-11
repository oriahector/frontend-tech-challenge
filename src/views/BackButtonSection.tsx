import { BackButton } from '@/components'

export function BackButtonSection() {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">BackButton</h2>
        <p className="text-zinc-600">
          Navigation button with text reveal animation, ripple effect and spring
          transitions.
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
            <span className="text-xs text-zinc-500 font-medium">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <BackButton variant="ghost" />
            <span className="text-xs text-zinc-500 font-medium">Ghost</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <BackButton variant="outline" />
            <span className="text-xs text-zinc-500 font-medium">Outline</span>
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
            <span className="text-xs text-zinc-500 font-medium">Medium</span>
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
  )
}
