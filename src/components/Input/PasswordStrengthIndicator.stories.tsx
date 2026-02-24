import type { Meta, StoryObj } from '@storybook/react'
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator'

const meta: Meta<typeof PasswordStrengthIndicator> = {
  title: 'UI / PasswordStrengthIndicator',
  component: PasswordStrengthIndicator,
  tags: ['autodocs'],
  args: {
    password: 'MyPassword123!',
  },
  argTypes: {
    password: {
      control: 'text',
      description: 'The password to analyze for strength',
    },
  },
}

export default meta

type Story = StoryObj<typeof PasswordStrengthIndicator>

export const Default: Story = {
  args: {
    password: 'password',
  },
}

export const Weak: Story = {
  args: {
    password: 'weak',
  },
}

export const Medium: Story = {
  args: {
    password: 'Medium123',
  },
}

export const Strong: Story = {
  args: {
    password: 'StrongPass123!',
  },
}

export const Empty: Story = {
  args: {
    password: '',
  },
}
