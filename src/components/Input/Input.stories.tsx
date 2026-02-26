// @ts-ignore: storybook/test may not have type declarations
import { expect, userEvent } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import type { InputProps } from './Input.types'

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile input component that supports multiple input types, variants, sizes, and includes features like labels, icons, and password strength indicator. Uses design tokens for consistent styling.',
      },
    },
  },
  args: {
    inputSize: 'md',
    variant: 'default',
    disabled: false,
    placeholder: 'Type here...',
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input field',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual variant of the input',
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
      description: 'The label text displayed above the input',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'select',
      options: ['Mail', 'Phone', 'Search', 'User', 'Lock', 'Eye', 'EyeOff', 'Check', 'X', 'Home', 'Settings', 'Heart', 'Star', 'Calendar', 'Clock'],
      description: 'Lucide icon to display in the label',
      table: {
        type: { summary: 'keyof typeof LucideIcons' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required (shows asterisk)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'tel', 'search', 'number'],
      description: 'The input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta

/**
 * Basic text input for general text entry.
 */
export const Text: StoryObj<InputProps> = {
  args: { type: 'text' },
  parameters: {
    docs: {
      description: {
        story: 'Basic text input for general text entry.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'hello')
    await expect(input).toHaveValue('hello')
  },
}

/**
 * Password input that hides text and shows password strength indicator.
 */
export const Password: StoryObj<InputProps> = {
  args: { type: 'password', placeholder: 'Enter password' },
  parameters: {
    docs: {
      description: {
        story: 'Password input with masked text and strength indicator.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'secret')
    await expect(input).toHaveValue('secret')
  },
}

/**
 * Email input for email addresses with appropriate keyboard support.
 */
export const Email: StoryObj<InputProps> = {
  args: { type: 'email', placeholder: 'name@example.com' },
  parameters: {
    docs: {
      description: {
        story: 'Email input with appropriate keyboard for email addresses.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'test@domain.com')
    await expect(input).toHaveValue('test@domain.com')
  },
}

/**
 * Error variant for validation errors.
 */
export const Error: StoryObj<InputProps> = {
  args: { variant: 'error', placeholder: 'Error state' },
  parameters: {
    docs: {
      description: {
        story: 'Error variant with red border for validation errors.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    // expect error border class
    await expect(input).toHaveClass('border-red-500')
  },
}

/**
 * Success variant for valid inputs.
 */
export const Success: StoryObj<InputProps> = {
  args: { variant: 'success', placeholder: 'Success state' },
  parameters: {
    docs: {
      description: {
        story: 'Success variant with green border for valid inputs.',
      },
    },
  },
}

/**
 * Input with label displayed above the field.
 */
export const WithLabel: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with label displayed above.',
      },
    },
  },
}

/**
 * Required input field with asterisk indicator.
 */
export const WithRequiredLabel: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Required field with asterisk in label.',
      },
    },
  },
}

/**
 * Password input with label and validation.
 */
export const WithLabelAndValidation: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Password field with label, required indicator, and strength meter.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    const label = canvasElement.querySelector('label')
    
    // Check that label exists and has asterisk for required field
    await expect(label).toBeInTheDocument()
    await expect(label).toHaveTextContent('Password*')
    
    // Test input functionality
    await userEvent.type(input, 'mypassword123')
    await expect(input).toHaveValue('mypassword123')
  },
}

/**
 * Input with icon in the label.
 */
export const WithIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Email',
    icon: 'Mail',
    type: 'email',
    placeholder: 'Enter your email'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with Lucide icon displayed in the label.',
      },
    },
  },
}

/**
 * Input with icon and required indicator.
 */
export const WithIconRequired: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Phone Number',
    icon: 'Phone',
    type: 'tel',
    placeholder: 'Enter your phone number',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with icon and required field indicator.',
      },
    },
  },
}

/**
 * Search input with search icon.
 */
export const WithSearchIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Search',
    icon: 'Search',
    type: 'search',
    placeholder: 'Search for something...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input with search icon.',
      },
    },
  },
}

/**
 * Small input size for compact UIs.
 */
export const Small: StoryObj<InputProps> = {
  args: { 
    inputSize: 'sm',
    placeholder: 'Small input'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size input for compact interfaces.',
      },
    },
  },
}

/**
 * Large input size for prominent form fields.
 */
export const Large: StoryObj<InputProps> = {
  args: { 
    inputSize: 'lg',
    placeholder: 'Large input'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size input for prominent form fields.',
      },
    },
  },
}

/**
 * Disabled input that cannot be edited.
 */
export const Disabled: StoryObj<InputProps> = {
  args: { 
    disabled: true,
    placeholder: 'Disabled input'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input that prevents user interaction.',
      },
    },
  },
}

/**
 * Password strength indicator showing requirements.
 */
export const PasswordStrength: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Create Password',
    icon: 'Lock',
    type: 'password',
    placeholder: 'Enter a strong password',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input showing strength indicator and requirements.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    
    // Test weak password
    await userEvent.type(input, 'weak')
    await expect(canvasElement).toHaveTextContent('Weak')
    await expect(canvasElement).toHaveTextContent('At least 8 characters')
    
    // Clear and test medium password (7 chars, mixed case, number = score 3)
    await userEvent.clear(input)
    await userEvent.type(input, 'Medium1')
    await expect(canvasElement).toHaveTextContent('Medium')
    
    // Clear and test strong password
    await userEvent.clear(input)
    await userEvent.type(input, 'StrongPass123!')
    await expect(canvasElement).toHaveTextContent('Strong')
    
    // Check that all requirements are met for strong password
    await expect(canvasElement).toHaveTextContent('At least 8 characters')
    await expect(canvasElement).toHaveTextContent('One lowercase letter (a-z)')
    await expect(canvasElement).toHaveTextContent('One uppercase letter (A-Z)')
    await expect(canvasElement).toHaveTextContent('One number (0-9)')
    await expect(canvasElement).toHaveTextContent('One special character (!@#$%^&*)')
  },
}
