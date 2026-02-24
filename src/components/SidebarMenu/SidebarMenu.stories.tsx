import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  SidebarMenu,
  SidebarMenuHeader,
  SidebarMenuFooter,
  SidebarMenuList,
  SidebarMenuGroup,
  SidebarMenuItem,
} from './index'
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  Folder,
  FileText,
  Clock,
} from 'lucide-react'

const meta = {
  title: 'UI/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'inset'],
    },
  },
} satisfies Meta<typeof SidebarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <SidebarMenu {...args}>
      <SidebarMenuHeader>
        <div className="px-3 py-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]">
            Menu
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-neutral-400)]">
            Navigation
          </p>
        </div>
      </SidebarMenuHeader>
      <SidebarMenuList>
        <SidebarMenuGroup title="Overview">
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarMenuItem icon={<Clock size={18} />} label="Activity" />
        </SidebarMenuGroup>
        <SidebarMenuGroup title="Management">
          <SidebarMenuItem icon={<Users size={18} />} label="Users" />
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />
          <SidebarMenuItem icon={<FileText size={18} />} label="Documents" />
        </SidebarMenuGroup>
      </SidebarMenuList>
      <SidebarMenuFooter>
        <div className="px-3 py-2">
          <SidebarMenuItem icon={<Settings size={18} />} label="Settings" />
        </div>
      </SidebarMenuFooter>
    </SidebarMenu>
  ),
}

export const Interactive: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Test clicking on a menu item
    const dashboardItem = canvas.getByText('Dashboard')
    await userEvent.click(dashboardItem)
    await expect(dashboardItem).toHaveClass('bg-[var(--color-primary)]')
    
    // Test clicking on another item
    const usersItem = canvas.getByText('Users')
    await userEvent.click(usersItem)
    await expect(usersItem).toHaveClass('bg-[var(--color-primary)]')
  },
  render: (args) => (
    <SidebarMenu {...args}>
      <SidebarMenuHeader>
        <div className="px-3 py-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]">
            Menu
          </h2>
        </div>
      </SidebarMenuHeader>
      <SidebarMenuList>
        <SidebarMenuGroup title="Overview">
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarMenuItem icon={<Clock size={18} />} label="Activity" />
        </SidebarMenuGroup>
        <SidebarMenuGroup title="Management">
          <SidebarMenuItem icon={<Users size={18} />} label="Users" />
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />
        </SidebarMenuGroup>
      </SidebarMenuList>
    </SidebarMenu>
  ),
}

export const WithSearchAndActions: Story = {
  args: {
    size: 'sm',
    variant: 'inset',
  },
  render: (args) => (
    <SidebarMenu {...args}>
      <SidebarMenuHeader>
        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-[var(--color-text-secondary)] dark:text-[var(--color-neutral-400)]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-[var(--color-border)] bg-transparent px-8 py-1.5 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:border-[var(--color-neutral-700)] dark:text-[var(--color-neutral-100)]"
            />
          </div>
        </div>
      </SidebarMenuHeader>
      <SidebarMenuList>
        <SidebarMenuGroup title="Quick Actions">
          <SidebarMenuItem icon={<Bell size={18} />} label="Notifications" action={<span className="ml-auto text-xs bg-[var(--color-primary)] text-white rounded-full px-1.5 py-0.5">3</span>} />
          <SidebarMenuItem icon={<Search size={18} />} label="Search" />
        </SidebarMenuGroup>
        <SidebarMenuGroup title="Recent">
          <SidebarMenuItem icon={<FileText size={18} />} label="Report.pdf" />
          <SidebarMenuItem icon={<FileText size={18} />} label="Notes.txt" />
        </SidebarMenuGroup>
      </SidebarMenuList>
      <SidebarMenuFooter>
        <div className="px-2 py-2">
          <SidebarMenuItem icon={<Settings size={18} />} label="Settings" />
        </div>
      </SidebarMenuFooter>
    </SidebarMenu>
  ),
}

export const CollapsibleGroups: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <SidebarMenu {...args}>
      <SidebarMenuHeader>
        <div className="flex items-center justify-between px-3 py-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]">
            Sidebar
          </h2>
          <button className="p-1 rounded hover:bg-[var(--color-bg-tertiary)] dark:hover:bg-[var(--color-neutral-700)]">
            <Menu size={18} className="text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]" />
          </button>
        </div>
      </SidebarMenuHeader>
      <SidebarMenuList>
        <SidebarMenuGroup title="Dashboard">
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Overview" active />
          <SidebarMenuItem icon={<Users size={18} />} label="Team" />
        </SidebarMenuGroup>
        <SidebarMenuGroup title="Projects">
          <SidebarMenuItem icon={<Folder size={18} />} label="All Projects" />
          <SidebarMenuItem icon={<ChevronRight size={14} />} label="Active" />
          <SidebarMenuItem icon={<ChevronRight size={14} />} label="Completed" />
        </SidebarMenuGroup>
        <SidebarMenuGroup title="Settings">
          <SidebarMenuItem icon={<Settings size={18} />} label="Preferences" />
        </SidebarMenuGroup>
      </SidebarMenuList>
      <SidebarMenuFooter>
        <div className="px-3 py-2">
          <SidebarMenuItem icon={<X size={18} />} label="Close" />
        </div>
      </SidebarMenuFooter>
    </SidebarMenu>
  ),
}

export const DisabledItems: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <SidebarMenu {...args}>
      <SidebarMenuHeader>
        <div className="px-3 py-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]">
            Menu
          </h2>
        </div>
      </SidebarMenuHeader>
      <SidebarMenuList>
        <SidebarMenuGroup title="Features">
          <SidebarMenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarMenuItem icon={<Users size={18} />} label="Users" disabled />
          <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />
          <SidebarMenuItem icon={<FileText size={18} />} label="Documents" disabled />
        </SidebarMenuGroup>
      </SidebarMenuList>
    </SidebarMenu>
  ),
}
