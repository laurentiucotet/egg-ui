import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarMenuGroup } from './SidebarMenuGroup'
import { SidebarMenuItem } from '../ListItems/SidebarMenuItem'
import { Users, Folder, FileText, ChevronRight } from 'lucide-react'

const meta = {
  title: 'UI/SidebarMenu/SidebarMenuGroup',
  component: SidebarMenuGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SidebarMenuGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Section Title',
  },
  render: (args) => (
    <SidebarMenuGroup {...args}>
      <SidebarMenuItem icon={<Users size={18} />} label="Users" />
      <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />
      <SidebarMenuItem icon={<FileText size={18} />} label="Documents" />
    </SidebarMenuGroup>
  ),
}

export const WithoutTitle: Story = {
  args: {},
  render: (args) => (
    <SidebarMenuGroup {...args}>
      <SidebarMenuItem icon={<Users size={18} />} label="Users" />
      <SidebarMenuItem icon={<Folder size={18} />} label="Projects" />
    </SidebarMenuGroup>
  ),
}

export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Section',
  },
  render: (args) => (
    <SidebarMenuGroup {...args}>
      <SidebarMenuItem icon={<ChevronRight size={14} />} label="Active" />
      <SidebarMenuItem icon={<ChevronRight size={14} />} label="Completed" />
    </SidebarMenuGroup>
  ),
}
