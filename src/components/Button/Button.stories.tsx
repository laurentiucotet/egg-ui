import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    intent: 'danger',
    label: 'Danger Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
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
