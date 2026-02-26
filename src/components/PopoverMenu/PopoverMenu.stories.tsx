import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { PopoverMenu } from './PopoverMenu'
import { Button } from '../Button'
import {
  User,
  Settings,
  LogOut,
  Bell,
  Mail,
  FileText,
  Download,
  Trash2,
  Edit,
  Copy,
} from 'lucide-react'

const meta = {
  title: 'Components/PopoverMenu',
  component: PopoverMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    trigger: {
      control: false,
      description: 'The trigger element that opens the popover',
      table: {
        category: 'Content',
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the popover relative to trigger',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'bottom' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the popover',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'start' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Whether the popover is open (controlled)',
      table: {
        category: 'State',
      },
    },
    closeOnItemClick: {
      control: 'boolean',
      description: 'Whether to close on item click',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'true' },
      },
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Callback when open state changes',
      table: {
        category: 'Events',
      },
    },
  },
} satisfies Meta<typeof PopoverMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button label="Open Menu" intent="primary" />,
    children: (
      <>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Separator />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const WithLabels: Story = {
  args: {
    trigger: <Button label="Actions" intent="secondary" />,
    children: (
      <>
        <PopoverMenu.Label>Account</PopoverMenu.Label>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Separator />
        <PopoverMenu.Label>Actions</PopoverMenu.Label>
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const WithActions: Story = {
  args: {
    trigger: <Button label="Notifications" intent="primary" />,
    children: (
      <>
        <PopoverMenu.Item
          icon={<Bell size={18} />}
          label="Notifications"
          action={<span className="text-xs bg-red-500 text-white rounded-full px-2 py-0.5">3</span>}
        />
        <PopoverMenu.Item
          icon={<Mail size={18} />}
          label="Messages"
          action={<span className="text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">12</span>}
        />
        <PopoverMenu.Item icon={<FileText size={18} />} label="Documents" />
      </>
    ),
  },
}

export const WithActiveItem: Story = {
  args: {
    trigger: <Button label="View Options" intent="secondary" />,
    children: (
      <>
        <PopoverMenu.Item icon={<FileText size={18} />} label="List View" active />
        <PopoverMenu.Item icon={<Copy size={18} />} label="Grid View" />
        <PopoverMenu.Item icon={<Download size={18} />} label="Compact View" />
      </>
    ),
  },
}

export const WithDisabledItems: Story = {
  args: {
    trigger: <Button label="File Actions" intent="primary" />,
    children: (
      <>
        <PopoverMenu.Item icon={<Edit size={18} />} label="Edit" />
        <PopoverMenu.Item icon={<Copy size={18} />} label="Duplicate" />
        <PopoverMenu.Item icon={<Download size={18} />} label="Download" disabled />
        <PopoverMenu.Separator />
        <PopoverMenu.Item icon={<Trash2 size={18} />} label="Delete" disabled />
      </>
    ),
  },
}

export const PositionTop: Story = {
  args: {
    trigger: <Button label="Open Above" intent="primary" />,
    position: 'top',
    children: (
      <>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const PositionRight: Story = {
  args: {
    trigger: <Button label="Open Right" intent="secondary" />,
    position: 'right',
    children: (
      <>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const AlignCenter: Story = {
  args: {
    trigger: <Button label="Centered Menu" intent="primary" />,
    align: 'center',
    children: (
      <>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const AlignEnd: Story = {
  args: {
    trigger: <Button label="Right Aligned" intent="secondary" />,
    align: 'end',
    children: (
      <>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
}

export const NoAutoClose: Story = {
  args: {
    trigger: <Button label="Stay Open" intent="primary" />,
    closeOnItemClick: false,
    children: (
      <>
        <PopoverMenu.Label>Select Multiple</PopoverMenu.Label>
        <PopoverMenu.Item icon={<FileText size={18} />} label="Option 1" />
        <PopoverMenu.Item icon={<Copy size={18} />} label="Option 2" />
        <PopoverMenu.Item icon={<Download size={18} />} label="Option 3" />
      </>
    ),
  },
}

export const Interactive: Story = {
  args: {
    trigger: <Button label="User Menu" intent="primary" />,
    children: (
      <>
        <PopoverMenu.Label>Account</PopoverMenu.Label>
        <PopoverMenu.Item icon={<User size={18} />} label="Profile" />
        <PopoverMenu.Item icon={<Settings size={18} />} label="Settings" />
        <PopoverMenu.Separator />
        <PopoverMenu.Item icon={<LogOut size={18} />} label="Logout" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /user menu/i })

    // Initially menu should not be visible
    expect(canvas.queryByText('Profile')).not.toBeInTheDocument()

    // Click to open menu
    await userEvent.click(trigger)
    await expect(canvas.getByText('Profile')).toBeInTheDocument()

    // Click on an item
    const profileItem = canvas.getByText('Profile')
    await userEvent.click(profileItem)

    // Menu should close after clicking item
    await expect(canvas.queryByText('Profile')).not.toBeInTheDocument()
  },
}

export const ComplexMenu: Story = {
  args: {
    trigger: <Button label="More Actions" intent="primary" />,
    children: (
      <>
        <PopoverMenu.Label>File Actions</PopoverMenu.Label>
        <PopoverMenu.Item
          icon={<Edit size={18} />}
          label="Edit"
          action={<span className="text-xs text-gray-500">⌘E</span>}
        />
        <PopoverMenu.Item
          icon={<Copy size={18} />}
          label="Duplicate"
          action={<span className="text-xs text-gray-500">⌘D</span>}
        />
        <PopoverMenu.Item
          icon={<Download size={18} />}
          label="Download"
          action={<span className="text-xs text-gray-500">⌘S</span>}
        />
        <PopoverMenu.Separator />
        <PopoverMenu.Label>Danger Zone</PopoverMenu.Label>
        <PopoverMenu.Item
          icon={<Trash2 size={18} />}
          label="Delete"
          action={<span className="text-xs text-red-500">⌘⌫</span>}
        />
      </>
    ),
  },
}
