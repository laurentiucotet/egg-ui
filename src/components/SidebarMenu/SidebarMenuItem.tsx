import { tv, type VariantProps } from 'tailwind-variants'

const sidebarMenuItem = tv({
  base: [
    'flex items-center gap-3',
    'px-3 py-2',
    'rounded-[var(--radius-md)]',
    'text-sm font-medium',
    'text-[var(--color-text-primary)]',
    'transition-all duration-200',
    'cursor-pointer',
    'hover:bg-[var(--color-bg-tertiary)]',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
    'dark:text-[var(--color-neutral-100)]',
    'dark:hover:bg-[var(--color-neutral-700)]',
    'dark:focus:ring-offset-[var(--color-neutral-800)]',
  ],
  variants: {
    active: {
      true: [
        'bg-[var(--color-primary)]',
        'text-white',
        'dark:bg-[var(--color-primary-hover)]',
      ],
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed hover:bg-transparent',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
})

const sidebarMenuItemIcon = tv({
  base: [
    'flex items-center justify-center',
    'w-5 h-5',
    'shrink-0',
    'text-[var(--color-text-secondary)]',
    'transition-colors duration-200',
    'dark:text-[var(--color-neutral-400)]',
  ],
  variants: {
    active: {
      true: 'text-white dark:text-[var(--color-neutral-100)]',
      false: '',
    },
  },
})

const sidebarMenuItemLabel = tv({
  base: 'flex-1 truncate',
})

const sidebarMenuItemAction = tv({
  base: [
    'flex items-center justify-center',
    'w-5 h-5',
    'shrink-0',
    'text-[var(--color-text-secondary)]',
    'hover:text-[var(--color-text-primary)]',
    'transition-colors duration-200',
    'dark:text-[var(--color-neutral-400)]',
    'dark:hover:text-[var(--color-neutral-100)]',
  ],
})

export type SidebarMenuItemProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof sidebarMenuItem> & {
    icon?: React.ReactNode
    action?: React.ReactNode
    label: React.ReactNode
  }

// SidebarMenu.Item slot
export const SidebarMenuItem = ({
  className,
  active,
  disabled,
  icon,
  action,
  label,
  ...props
}: SidebarMenuItemProps) => {
  return (
    <li>
      <button
        className={sidebarMenuItem({ className, active, disabled })}
        disabled={disabled}
        {...props}
      >
        {icon && <span className={sidebarMenuItemIcon({ active })}>{icon}</span>}
        <span className={sidebarMenuItemLabel()}>{label}</span>
        {action && <span className={sidebarMenuItemAction()}>{action}</span>}
      </button>
    </li>
  )
}
