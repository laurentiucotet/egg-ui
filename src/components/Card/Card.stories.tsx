import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This is where you would place your main content.</p>
      </CardContent>
      <CardFooter>
        <span>Card footer</span>
      </CardFooter>
    </Card>
  ),
}

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByRole('article')

    await expect(card).toBeInTheDocument()
    await expect(card).toHaveClass('card')
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has interactive elements</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click the button below to test interaction:</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => alert('Button clicked!')}
        >
          Test Button
        </button>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-gray-200 rounded">Action</button>
      </CardFooter>
    </Card>
  ),
}

export const WithActions: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Update your preferences and account settings here.</p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save Changes
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-2">
          Cancel
        </button>
      </CardFooter>
    </Card>
  ),
}
