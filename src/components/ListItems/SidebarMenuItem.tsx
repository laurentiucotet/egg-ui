import React, { useState } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useSidebarMenu } from '../SidebarMenu/SidebarMenu'

const listItem = tv({
  base: [
    'flex items-center gap-3',
    'px-3 py-2',
    'rounded-[var(--radius-md)]',
    'text-sm font-medium',
    'text-(--color-text-primary)',
    'transition-all duration-200',
    'cursor-pointer',
    'hover:bg-(--color-bg-tertiary)',
    'focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2',
    'dark:text-(--color-neutral-100)',
    'dark:hover:bg-neutral-700',
    'dark:focus:ring-offset-(--color-neutral-800)',
  ],
  variants: {
    active: {
      true: [
        'bg-(--color-primary) border-l-4 border-(--color-primary) text-white dark:bg-(--color-primary-hover)',
      ],
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed hover:bg-transparent',
      false: '',
    },
    collapsed: {
      true: 'justify-center gap-0 px-0',
      false: '',
    },
    expandable: {
      true: 'pr-8 relative', // reserve space for the chevron
      false: '',
    },
    open: {
      true: 'bg-(--color-bg-secondary)',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
    collapsed: false,
    expandable: false,
    open: false,
  },
})

const listItemIcon = tv({
  base: [
    'flex items-center justify-center',
    'w-5 h-5',
    'shrink-0',
    'text-(--color-text-secondary)',
    'transition duration-200',
    'dark:text-(--color-neutral-400)',
  ],
  variants: {
    active: {
      true: 'text-white dark:text-(--color-neutral-100)',
      false: '',
    },
    collapsed: {
      true: 'scale-110',
      false: '',
    },
  },
})

const listItemLabel = tv({
  base: 'flex-1 truncate',
})

const listItemAction = tv({
  base: [
    'flex items-center justify-center',
    'w-5 h-5',
    'shrink-0',
    'text-[var(--color-text-secondary)]',
    'hover:text-(--color-text-primary)',
    'transition-colors duration-200',
    'dark:text-(--color-neutral-400)',
    'dark:hover:text-(--color-neutral-100)',
  ],
})

export type SidebarMenuItemProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof listItem> & {
    icon?: React.ReactNode
    action?: React.ReactNode
    label: React.ReactNode
    /** enables the item to behave like an expandable list row */
    expandable?: boolean
    /** controlled expanded state */
    open?: boolean
    onToggle?: (open: boolean) => void
    children?: React.ReactNode
  }

// SidebarMenu.Item slot
export const SidebarMenuItem = ({
  className,
  active,
  disabled,
  icon,
  action,
  label,
  expandable,
  open: openProp,
  onToggle,
  children,
  ...props
}: SidebarMenuItemProps) => {
  const { collapsed } = useSidebarMenu()

  // determine if we actually have children
  const hasChildren = React.Children.count(children) > 0
  const isExpandable = expandable ?? hasChildren

  const [openState, setOpenState] = useState(openProp ?? false)
  const controlled = openProp !== undefined
  const open = controlled ? !!openProp : openState

  const toggle = () => {
    const next = !open
    if (!controlled) setOpenState(next)
    onToggle?.(next)
  }

  const titleAttr = collapsed && typeof label === 'string' ? { title: label } : {}

  return (
    <li className="list-none">
      <button
        className={listItem({
          className,
          active,
          disabled,
          collapsed,
          expandable: isExpandable,
          open,
        })}
        disabled={disabled}
        {...titleAttr}
        {...props}
        onClick={(e) => {
          if (isExpandable) {
            e.preventDefault()
            toggle()
          }
          props.onClick?.(e)
        }}
      >
        {icon && <span className={listItemIcon({ active, collapsed })}>{icon}</span>}
        {!collapsed && <span className={listItemLabel()}>{label}</span>}
        {isExpandable && !collapsed && (
          <span
            className={`absolute right-3 transition-transform duration-200 ${
              open ? 'rotate-90' : ''
            }`}
          >
            {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        {action && !collapsed && (
          <span className={listItemAction()}>{action}</span>
        )}
      </button>
      {open && children && !collapsed && (
        <ul className="pl-4">
          {children}
        </ul>
      )}
    </li>
  )
}
