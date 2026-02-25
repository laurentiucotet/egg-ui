import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Badge>

// export portions of the configuration so other stories can reuse them
export const badgeArgTypes = meta.argTypes

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'New',
    variant: 'info',
    size: 'sm',
  },
}

export const Variants: Story = {
  render: (args: Story['args']) => (
    <div className="flex gap-2">
      <Badge {...args} variant="neutral">
        Neutral
      </Badge>
      <Badge {...args} variant="info">
        Info
      </Badge>
      <Badge {...args} variant="success">
        Success
      </Badge>
      <Badge {...args} variant="warning">
        Warning
      </Badge>
      <Badge {...args} variant="danger">
        Danger
      </Badge>
    </div>
  ),
}

export const Interaction: Story = {
  args: {
    children: 'Clickable',
    variant: 'neutral',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByText(/clickable/i)
    await expect(badge).toBeInTheDocument()
  },
}
