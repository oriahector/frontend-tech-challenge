import type { Meta, StoryObj } from '@storybook/react-vite'
import { CopyButton } from './CopyButton'

const meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A copy-to-clipboard button with icon morphing animation, tooltip feedback, and auto-reset functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The text value to copy to clipboard',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the button',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'outline'],
      description: 'Visual style variant',
    },
    resetDelay: {
      control: 'number',
      description: 'Delay in ms before resetting to copy state',
    },
    tooltipText: {
      control: 'text',
      description: 'Text shown in tooltip before copying',
    },
    successText: {
      control: 'text',
      description: 'Text shown in tooltip after copying',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default CopyButton with dark background.
 * Click to copy and see the icon morph animation.
 */
export const Default: Story = {
  args: {
    value: 'Hello, World!',
  },
}

/**
 * Ghost variant with transparent background.
 * Subtle design for inline usage.
 */
export const Ghost: Story = {
  args: {
    value: 'npm install framer-motion',
    variant: 'ghost',
  },
}

/**
 * Outline variant with border.
 * Clean design that works on any background.
 */
export const Outline: Story = {
  args: {
    value: 'https://example.com',
    variant: 'outline',
  },
}

/**
 * Small size variant.
 * Compact design for tight spaces like code blocks.
 */
export const Small: Story = {
  args: {
    value: 'Copy me!',
    size: 'sm',
  },
}

/**
 * Large size variant.
 * Prominent design for important actions.
 */
export const Large: Story = {
  args: {
    value: 'Important text to copy',
    size: 'lg',
  },
}

/**
 * Custom tooltip text.
 * Localized or context-specific messaging.
 */
export const CustomTooltip: Story = {
  args: {
    value: 'secret-api-key-12345',
    tooltipText: 'Copy API Key',
    successText: '✓ Key copied!',
  },
}

/**
 * Longer reset delay.
 * Success state persists for 5 seconds.
 */
export const LongDelay: Story = {
  args: {
    value: 'This stays copied longer',
    resetDelay: 5000,
  },
}

/**
 * Disabled state.
 * The button is visually muted and non-interactive.
 */
export const Disabled: Story = {
  args: {
    value: 'Cannot copy',
    disabled: true,
  },
}

/**
 * All variants displayed together for comparison.
 */
export const AllVariants: Story = {
  args: { value: 'Text' },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Default</span>
        <CopyButton value="Text" variant="default" size="sm" />
        <CopyButton value="Text" variant="default" size="md" />
        <CopyButton value="Text" variant="default" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Ghost</span>
        <CopyButton value="Text" variant="ghost" size="sm" />
        <CopyButton value="Text" variant="ghost" size="md" />
        <CopyButton value="Text" variant="ghost" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Outline</span>
        <CopyButton value="Text" variant="outline" size="sm" />
        <CopyButton value="Text" variant="outline" size="md" />
        <CopyButton value="Text" variant="outline" size="lg" />
      </div>
    </div>
  ),
}

/**
 * Example usage in a code block context.
 */
export const CodeBlockExample: Story = {
  args: { value: 'npm install @design-system/components' },
  render: () => (
    <div className="relative bg-zinc-900 rounded-lg p-4 pr-14 font-mono text-sm text-zinc-100">
      <code>npm install @design-system/components</code>
      <div className="absolute top-2 right-2">
        <CopyButton
          value="npm install @design-system/components"
          variant="ghost"
          size="sm"
          className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
        />
      </div>
    </div>
  ),
}
