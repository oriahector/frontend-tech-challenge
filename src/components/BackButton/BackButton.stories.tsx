import type { Meta, StoryObj } from '@storybook/react-vite'
import { BackButton } from './BackButton'

const meta = {
  title: 'Components/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An animated back navigation button with hover text reveal, ripple effects, and spring animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label shown on hover',
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
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default BackButton with dark background and white text.
 * Hover to see the text reveal animation.
 */
export const Default: Story = {
  args: {
    label: 'Back',
  },
}

/**
 * Ghost variant with transparent background.
 * Subtle hover state for minimal interfaces.
 */
export const Ghost: Story = {
  args: {
    label: 'Back',
    variant: 'ghost',
  },
}

/**
 * Outline variant with border.
 * Works well on both light and dark backgrounds.
 */
export const Outline: Story = {
  args: {
    label: 'Back',
    variant: 'outline',
  },
}

/**
 * Small size variant.
 * Compact design for tight spaces.
 */
export const Small: Story = {
  args: {
    label: 'Back',
    size: 'sm',
  },
}

/**
 * Large size variant.
 * Prominent design for important navigation.
 */
export const Large: Story = {
  args: {
    label: 'Back',
    size: 'lg',
  },
}

/**
 * Custom label text.
 * The label can be customized for different languages or contexts.
 */
export const CustomLabel: Story = {
  args: {
    label: 'Volver',
  },
}

/**
 * Disabled state.
 * The button is visually muted and non-interactive.
 */
export const Disabled: Story = {
  args: {
    label: 'Back',
    disabled: true,
  },
}

/**
 * All variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Default</span>
        <BackButton label="Back" variant="default" size="sm" />
        <BackButton label="Back" variant="default" size="md" />
        <BackButton label="Back" variant="default" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Ghost</span>
        <BackButton label="Back" variant="ghost" size="sm" />
        <BackButton label="Back" variant="ghost" size="md" />
        <BackButton label="Back" variant="ghost" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-zinc-500">Outline</span>
        <BackButton label="Back" variant="outline" size="sm" />
        <BackButton label="Back" variant="outline" size="md" />
        <BackButton label="Back" variant="outline" size="lg" />
      </div>
    </div>
  ),
}
