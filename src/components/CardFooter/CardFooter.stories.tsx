import type { Meta, StoryObj } from '@storybook/react-vite'
import { CardFooter } from './CardFooter'

const meta = {
  title: 'UI/Card/CardFooter',
  component: CardFooter,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    left: { control: 'object' },
    right: { control: 'object' },
    showLeft: { control: 'boolean' },
    showRight: { control: 'boolean' },
  },
} satisfies Meta<typeof CardFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    left: <span>Left content</span>,
    right: <span>Right content</span>,
  },
}
