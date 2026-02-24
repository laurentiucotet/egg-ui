import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { useState } from 'react'
import { ConfirmDialog } from './ConfirmDialog'
import { Button } from '../Button/Button'

const meta = {
  title: 'UI/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  args: {
    open: false,
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item?',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta

type Story = StoryObj<typeof meta>

const Template: Story['render'] = (args) => {
  const [open, setOpen] = useState(args.open)

  return (
    <>
      <Button label="Open Dialog" onClick={() => setOpen(true)} />
      <ConfirmDialog
        {...args}
        open={open}
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </>
  )
}

export const Basic: Story = {
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {},
  },
}

export const Interaction: Story = {
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByRole('button', { name: /open dialog/i })
    await userEvent.click(openButton)

    const dialog = await canvas.findByRole('dialog')
    await expect(dialog).toBeInTheDocument()

    const confirm = canvas.getByRole('button', { name: /delete/i })
    await userEvent.click(confirm)

    await expect(dialog).not.toBeInTheDocument()
  },
}

export const WithSlots: Story = {
  render: Template,
  args: {
    onConfirm: () => {},
    onCancel: () => {},
    header: <div className="text-xl font-bold">Custom Header</div>,
    children: (
      <div>
        <p>This is the body passed as children. You can put any content here.</p>
      </div>
    ),
    confirmLabel: 'OK',
    cancelLabel: 'Back',
  },
}
