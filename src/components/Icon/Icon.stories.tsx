import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['bell', 'settings', 'chevron'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'color' },
  },
  args: {
    name: 'bell',
    size: 'md',
  },
} satisfies Meta<typeof Icon>

// export portions of the configuration so other stories can reuse them
export const iconArgTypes = meta.argTypes
export const iconDefaultArgs = meta.args

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
