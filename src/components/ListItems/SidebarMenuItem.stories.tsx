import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { SidebarMenuItem } from './SidebarMenuItem'
import { LayoutDashboard, Users, Settings, Bell, ChevronRight } from 'lucide-react'

const meta = {
  title: 'UI/List Items/SidebarMenuItem',
  component: SidebarMenuItem,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    action: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    expandable: {
      control: 'boolean',
    },
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SidebarMenuItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Menu Item',
    icon: <LayoutDashboard size={18} />,
  },
}

export const Active: Story = {
  args: {
    label: 'Active Item',
    icon: <LayoutDashboard size={18} />,
    active: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Item',
    icon: <Users size={18} />,
    disabled: true,
  },
}

export const WithAction: Story = {
  args: {
    label: 'Item with Action',
    icon: <Bell size={18} />,
    action: <span className="ml-auto text-xs bg-blue-500 text-white rounded-full px-1.5 py-0.5">3</span>,
  },
}

export const ExpandableCollapsed: Story = {
  args: {
    label: 'Parent Item',
    icon: <LayoutDashboard size={18} />,    
    expandable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const parent = canvas.getByText('Parent Item')
    // initially children should not be visible
    expect(canvas.queryByText('Child 1')).toBeNull()
    // click to expand
    await userEvent.click(parent)
    await expect(canvas.getByText('Child 1')).toBeInTheDocument()
  },
}

export const ExpandableOpen: Story = {
  args: {
    label: 'Parent Item',
    icon: <LayoutDashboard size={18} />,
    expandable: true,
    open: true,
    children: (
      <>
        <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 1" />
        <SidebarMenuItem icon={<ChevronRight size={14} />} label="Child 2" />
      </>
    ),
  },
}

export const WithChevron: Story = {
  args: {
    label: 'Sub-item',
    icon: <ChevronRight size={14} />,
  },
}

export const Interactive: Story = {
  args: {
    label: 'Interactive Item',
    icon: <Settings size={18} />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const item = canvas.getByText('Interactive Item')
    
    // Test clicking on the menu item
    await userEvent.click(item)
    await expect(item).toHaveClass('bg-[var(--color-primary)]')
  },
}
