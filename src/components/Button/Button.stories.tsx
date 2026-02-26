import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component that supports multiple intents (primary, secondary, danger, ghost, outline), sizes, and states. Uses design tokens from `design-tokens.css` for consistent styling.',
      },
    },
  },
  args: {
    label: 'Button',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outline'],
      description: 'The visual intent/style of the button',
      table: {
        type: { summary: "'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The text label displayed inside the button',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Primary buttons are used for main actions or calls to action.
 * They have the highest visual prominence and should be used sparingly.
 */
export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are used for main actions. They have the highest visual prominence.',
      },
    },
  },
}

/**
 * Secondary buttons are used for secondary actions that complement primary actions.
 * They have less visual weight than primary buttons.
 */
export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons are used for less prominent actions alongside primary buttons.',
      },
    },
  },
}

/**
 * Danger buttons are used for destructive or dangerous actions.
 * They use error/warning colors to communicate caution.
 */
export const Danger: Story = {
  args: {
    intent: 'danger',
    label: 'Danger Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger buttons are used for destructive actions like delete or remove.',
      },
    },
  },
}

/**
 * Ghost buttons have a transparent background and are used for low-priority actions.
 * They're often used in toolbars, cards, or alongside other buttons.
 */
export const Ghost: Story = {
  args: {
    intent: 'ghost',
    label: 'Ghost Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons have transparent backgrounds and are used for low-priority actions.',
      },
    },
  },
}

/**
 * Outline buttons have a border but no background color.
 * They're useful for secondary actions or in tight spaces.
 */
export const Outline: Story = {
  args: {
    intent: 'outline',
    label: 'Outline Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons have a border with transparent background.',
      },
    },
  },
}

/**
 * Small buttons are used when space is limited or in compact UIs.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size button for compact interfaces.',
      },
    },
  },
}

/**
 * Large buttons are used for prominent call-to-action buttons.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size button for prominent CTAs.',
      },
    },
  },
}

/**
 * Disabled buttons cannot be interacted with and are visually muted.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction.',
      },
    },
  },
}

/**
 * Full width buttons stretch to fill their container's width.
 * Useful for mobile interfaces or form submission buttons.
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Full width button that spans the container width.',
      },
    },
  },
}

export const ClickInteraction: Story = {
  args: {
    label: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /click me/i })

    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()

    await userEvent.click(button)

    await expect(button).toHaveFocus()
  },
}

export const DisabledInteraction: Story = {
  args: {
    label: 'Cannot click',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /cannot click/i })

    await expect(button).toBeDisabled()
  },
}
