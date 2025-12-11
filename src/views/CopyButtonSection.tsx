import { CopyButton } from '@/components'

export function CopyButtonSection() {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">CopyButton</h2>
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
            <span className="text-xs text-zinc-500 font-medium">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CopyButton value="Ghost variant text" variant="ghost" />
            <span className="text-xs text-zinc-500 font-medium">Ghost</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CopyButton value="Outline variant text" variant="outline" />
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
            <CopyButton value="Small" size="sm" />
            <span className="text-xs text-zinc-500 font-medium">Small</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CopyButton value="Medium" size="md" />
            <span className="text-xs text-zinc-500 font-medium">Medium</span>
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
            <span className="text-xs text-zinc-500 font-medium">API Key</span>
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
  )
}
