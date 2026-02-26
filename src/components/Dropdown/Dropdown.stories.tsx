import { expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'
import type { DropdownProps } from './Dropdown.types'

const meta: Meta<DropdownProps> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A dropdown selector component that supports multiple sizes, variants, and includes features like labels, icons, and validation states. Uses design tokens for consistent styling.',
      },
    },
  },
  args: {
    dropdownSize: 'md',
    variant: 'default',
    disabled: false,
    placeholder: 'Select an option...',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  argTypes: {
    dropdownSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the dropdown',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual variant of the dropdown',
      table: {
        type: { summary: "'default' | 'error' | 'success'" },
        defaultValue: { summary: 'default' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The label text displayed above the dropdown',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'select',
      options: ['Mail', 'Phone', 'Search', 'User', 'Lock', 'Eye', 'EyeOff', 'Check', 'X', 'Home', 'Settings', 'Heart', 'Star', 'Calendar', 'Clock', 'ChevronDown'],
      description: 'Lucide icon to display in the label',
      table: {
        type: { summary: 'keyof typeof LucideIcons' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the dropdown is required (shows asterisk)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display below the dropdown',
      table: {
        type: { summary: 'string' },
      },
    },
    success: {
      control: 'boolean',
      description: 'Whether to show success state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta

/**
 * Default dropdown with basic options.
 */
export const Default: StoryObj<DropdownProps> = {
  args: {
    showLabel: false,
    required: false,
    success: false
  },

  parameters: {
    docs: {
      description: {
        story: 'Default dropdown with basic options.',
      },
    },
  }
}

/**
 * Small dropdown size for compact UIs.
 */
export const Small: StoryObj<DropdownProps> = {
  args: {
    dropdownSize: 'sm',
    placeholder: 'Small dropdown',
    success: false,
    required: false,
    showLabel: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size dropdown for compact interfaces.',
      },
    },
  },
}

/**
 * Large dropdown size for prominent form fields.
 */
export const Large: StoryObj<DropdownProps> = {
  args: {
    dropdownSize: 'lg',
    placeholder: 'Large dropdown',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size dropdown for prominent form fields.',
      },
    },
  },
}

/**
 * Error variant for validation errors.
 */
export const Error: StoryObj<DropdownProps> = {
  args: {
    variant: 'error',
    error: 'Please select an option',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error variant with red border for validation errors.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const errorText = canvasElement.querySelector('p')
    await expect(errorText).toHaveTextContent('Please select an option')
  },
}

/**
 * Success variant for valid selections.
 */
export const Success: StoryObj<DropdownProps> = {
  args: {
    variant: 'success',
    success: true,
    value: 'option1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success variant with green border for valid selections.',
      },
    },
  },
}

/**
 * Dropdown with label displayed above the field.
 */
export const WithLabel: StoryObj<DropdownProps> = {
  args: {
    showLabel: true,
    label: 'Select Country',
    placeholder: 'Choose your country',
    required: false,
    icon: "User",
    success: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with label displayed above.',
      },
    },
  },
}

/**
 * Required dropdown field with asterisk indicator.
 */
export const WithRequiredLabel: StoryObj<DropdownProps> = {
  args: {
    showLabel: true,
    label: 'Payment Method',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required field with asterisk in label.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const label = canvasElement.querySelector('label')
    await expect(label).toHaveTextContent('Payment Method*')
  },
}

/**
 * Dropdown with icon in the label.
 */
export const WithIcon: StoryObj<DropdownProps> = {
  args: {
    showLabel: true,
    label: 'Category',
    icon: 'Check',
    options: [
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'books', label: 'Books' },
      { value: 'food', label: 'Food' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with Lucide icon displayed in the label.',
      },
    },
  },
}

/**
 * Disabled dropdown that cannot be interacted with.
 */
export const Disabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled dropdown',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled dropdown that prevents user interaction.',
      },
    },
  },
}

/**
 * Dropdown with a pre-selected value.
 */
export const WithSelectedValue: StoryObj<DropdownProps> = {
  args: {
    showLabel: true,
    label: 'Favorite Color',
    value: 'blue',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with a pre-selected value.',
      },
    },
  },
}

/**
 * Dropdown with disabled options.
 */
export const WithDisabledOptions: StoryObj<DropdownProps> = {
  args: {
    showLabel: true,
    label: 'Subscription Plan',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'basic', label: 'Basic', disabled: true },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with some options disabled.',
      },
    },
  },
}
