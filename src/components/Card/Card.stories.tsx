import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Button } from '../Button/Button'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    showImage: { control: 'boolean' },
    showHeader: { control: 'boolean' },
    showFooter: { control: 'boolean' },
    shadow: { control: { type: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] } },
    hoverEffect: { control: { type: 'select', options: ['none', 'lift', 'grow', 'pulse'] } },
    rounded: { control: { type: 'select', options: ['base', 'md', 'full'] } },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: React.ComponentProps<typeof Card>) => (
  <Card {...args}>
    <CardContent>
      <p>Card content goes here. This is where you would place your main content.</p>
    </CardContent>
  </Card>
)

export const Default: Story = {
  args: {
    shadow: 'sm',
    hoverEffect: 'none',
    rounded: 'base',
    showImage: false,
    showHeader: true,
    showFooter: true,
    header: {
      title: 'Card Title',
      description: 'Card description goes here',
    },
    footer: {
      left: <span>Card footer</span>,
    },
  },
  render: (args) => Template(args),
}

export const WithImage: Story = {
  args: {
    imageSrc: 'https://picsum.photos/800/400',
    imageAlt: 'Sample image',
    shadow: 'md',
    hoverEffect: 'lift',
    showImage: true,
    showHeader: true,
    showFooter: true,
    header: {
      icon: <span className="inline-block w-5 h-5 bg-gray-200 rounded" />,
      title: 'Image Card',
      description: 'This card has an image on top',
      showBadge: false,
    },
    footer: {
      left: <span>Image footer</span>,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByRole('article')

    await expect(card).toBeInTheDocument()
    const img = canvas.getByRole('img')
    await expect(img).toBeInTheDocument()
  },
  render: (args) => Template(args),
}

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByRole('article')
    await expect(card).toBeInTheDocument()
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has interactive elements</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click the button below to test interaction:</p>
        <Button label="Test Button" intent="primary" className="mt-4" />
      </CardContent>
      <CardFooter>
        <Button label="Action" intent="secondary" />
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
        <Button label="Save Changes" intent="primary" />
        <Button label="Cancel" intent="secondary" className="ml-2" />
      </CardFooter>
    </Card>
  ),
}
