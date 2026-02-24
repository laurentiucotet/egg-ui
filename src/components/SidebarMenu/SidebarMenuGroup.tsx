import React from 'react'
import { tv } from 'tailwind-variants'
import { useSidebarMenu } from './SidebarMenu'

const sidebarMenuGroup = tv({
  base: [
    'flex flex-col',
    'gap-0.5',
    'px-1 py-2',
  ],
  variants: {
    hasTitle: {
      true: 'border-b border-(--color-border) dark:border-(--color-neutral-700) mb-1',
      false: '',
    },
  },
  defaultVariants: {
    hasTitle: true,
  },
})

const sidebarMenuGroupTitle = tv({
  base: [
    'text-xs font-semibold uppercase tracking-wider',
    'text-(--color-text-secondary)',
    'px-3 py-1',
    'dark:text-(--color-neutral-400)',
  ],
})

export type SidebarMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
}

export type SidebarMenuGroupTitleProps = React.HTMLAttributes<HTMLHeadingElement>

// SidebarMenu.Group slot
export const SidebarMenuGroup = ({
  className,
  title: titleProp,
  ...props
}: SidebarMenuGroupProps) => {
  const hasTitle = !!titleProp
  const { collapsed } = useSidebarMenu()

  return (
    <div
      className={sidebarMenuGroup({ className, hasTitle })}
      {...props}
    >
      {hasTitle && !collapsed && (
        <SidebarMenuGroupTitle>{titleProp}</SidebarMenuGroupTitle>
      )}
      <div className="flex flex-col gap-0.5">{props.children}</div>
    </div>
  )
}

// SidebarMenu.GroupTitle slot
export const SidebarMenuGroupTitle = ({ className, ...props }: SidebarMenuGroupTitleProps) => {
  return (
    <h3
      className={sidebarMenuGroupTitle({ className })}
      {...props}
    />
  )
}
