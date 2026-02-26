import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox component that allows users to select one or more options. Supports checked, unchecked, and indeterminate states. Uses design tokens from `design-tokens.css` for consistent styling.',
      },
    },
  },
  args: {
    label: 'Checkbox label',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'The label text displayed next to the checkbox',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state (shows partial check)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Unchecked checkbox is the default state where no option is selected.
 */
export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default unchecked state of the checkbox.',
      },
    },
  },
}

/**
 * Checked checkbox shows a filled checkbox indicating the option is selected.
 */
export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checked state when the option is selected.',
      },
    },
  },
}

/**
 * Indeterminate checkbox shows a partial check, useful for "select all" scenarios
 * where some but not all items are selected.
 */
export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    label: 'Indeterminate checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate state used for "select all" with some items selected.',
      },
    },
  },
}

/**
 * Small checkbox for compact interfaces.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size checkbox for compact interfaces.',
      },
    },
  },
}

/**
 * Large checkbox for prominent selections.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size checkbox for prominent selections.',
      },
    },
  },
}

/**
 * Disabled checkbox cannot be interacted with and is visually muted.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled checkbox',
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
 * Disabled checked checkbox shows a checked but non-interactive state.
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled checked checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checked state shows selected but non-interactive.',
      },
    },
  },
}

/**
 * Checkbox without a label for use in tight spaces or custom layouts.
 */
export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox without label for custom layouts.',
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
    const checkbox = canvas.getByRole('checkbox', { name: /click me/i })

    await expect(checkbox).toBeInTheDocument()
    await expect(checkbox).not.toBeChecked()

    await userEvent.click(checkbox)

    await expect(checkbox).toBeChecked()
  },
}

export const ToggleInteraction: Story = {
  args: {
    label: 'Toggle me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: /toggle me/i })

    await expect(checkbox).toBeInTheDocument()

    // Click to check
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()

    // Click to uncheck
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

export const DisabledInteraction: Story = {
  args: {
    label: 'Cannot toggle',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: /cannot toggle/i })

    await expect(checkbox).toBeDisabled()
  },
}
