// @ts-ignore: storybook/test may not have type declarations
import { expect, userEvent } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import { Input, type InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'UI / Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    variant: 'default',
    disabled: false,
    placeholder: 'Type here...',
  },
  argTypes: {
    showLabel: {
      control: 'boolean',
      description: 'Toggle to show/hide the label',
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
      if: { arg: 'showLabel' },
    },
    icon: {
      control: 'select',
      options: ['Mail', 'Phone', 'Search', 'User', 'Lock', 'Eye', 'EyeOff', 'Check', 'X', 'Home', 'Settings', 'Heart', 'Star', 'Calendar', 'Clock'],
      description: 'Lucide icon to display next to the label',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required (shows asterisk)',
    },
  },
}

export default meta

export const Text: StoryObj<InputProps> = {
  args: { type: 'text' },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'hello')
    await expect(input).toHaveValue('hello')
  },
}

export const Password: StoryObj<InputProps> = {
  args: { type: 'password', placeholder: 'Enter password' },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'secret')
    await expect(input).toHaveValue('secret')
  },
}

export const Email: StoryObj<InputProps> = {
  args: { type: 'email', placeholder: 'name@example.com' },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    await userEvent.type(input, 'test@domain.com')
    await expect(input).toHaveValue('test@domain.com')
  },
}

export const Error: StoryObj<InputProps> = {
  args: { variant: 'error', placeholder: 'Error state' },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    // expect error border class
    await expect(input).toHaveClass('border-red-500')
  },
}

export const WithLabel: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email'
  },
}

export const WithRequiredLabel: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true
  },
}

export const WithLabelAndValidation: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
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

export const WithIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Email',
    icon: 'Mail',
    type: 'email',
    placeholder: 'Enter your email'
  },
}

export const WithIconRequired: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Phone Number',
    icon: 'Phone',
    type: 'tel',
    placeholder: 'Enter your phone number',
    required: true
  },
}

export const WithCustomIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Search',
    icon: 'Search',
    type: 'search',
    placeholder: 'Search for something...'
  },
}

export const WithUserIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Username',
    icon: 'User',
    type: 'text',
    placeholder: 'Enter your username'
  },
}

export const WithLockIcon: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Password',
    icon: 'Lock',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  },
}

export const PasswordStrength: StoryObj<InputProps> = {
  args: { 
    showLabel: true,
    label: 'Create Password',
    icon: 'Lock',
    type: 'password',
    placeholder: 'Enter a strong password',
    required: true
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
