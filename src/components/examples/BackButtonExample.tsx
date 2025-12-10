import { BackButton } from '../BackButton'

export function BackButtonExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-stone-50 to-zinc-100 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            BackButton
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            A navigation button with smooth animations: hover reveal, ripple
            effect and spring transitions.
          </p>
        </div>

        {/* Variants Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Variants
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
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
        </section>

        {/* Sizes Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Sizes
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
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
        </section>

        {/* Custom Labels Section */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Custom Labels
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
            <div className="flex flex-wrap items-center gap-6">
              <BackButton label="Go Back" />
              <BackButton label="Return" variant="ghost" />
              <BackButton label="Previous" variant="outline" />
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Disabled State
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
            <div className="flex flex-wrap items-center gap-6">
              <BackButton disabled />
              <BackButton variant="ghost" disabled />
              <BackButton variant="outline" disabled />
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Interactive Demo
          </h2>
          <div className="bg-zinc-900 rounded-2xl shadow-lg p-12">
            <div className="flex flex-col items-center gap-8">
              <p className="text-zinc-400 text-sm text-center max-w-md">
                Hover over the button to see the text animation.
                <br />
                Click to see the ripple effect.
              </p>
              <div className="flex gap-6">
                <BackButton
                  size="lg"
                  label="Go Back"
                  onClick={() => alert('Click detected!')}
                />
                <BackButton
                  size="lg"
                  variant="outline"
                  label="Return"
                  className="border-zinc-700 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-600"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BackButtonExample
