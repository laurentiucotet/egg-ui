import { tv, type VariantProps } from 'tailwind-variants'

const sidebarMenu = tv({
  base: [
    // Base styles
    'flex flex-col',
    'bg-[var(--color-bg-secondary)]',
    'rounded-[var(--radius-lg)]',
    'border border-[var(--color-border)]',
    'shadow-sm',
    'transition-all duration-200',
    'dark:bg-[var(--color-neutral-800)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
  variants: {
    size: {
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
    },
    variant: {
      default: '',
      inset: 'mx-2 my-1',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

const sidebarMenuHeader = tv({
  base: [
    'flex flex-col',
    'px-3 py-2',
    'border-b border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})

const sidebarMenuFooter = tv({
  base: [
    'flex flex-col',
    'px-3 py-2',
    'border-t border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})

const sidebarMenuList = tv({
  base: [
    'flex flex-col',
    'gap-0.5',
    'p-1',
  ],
})

export type SidebarMenuProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sidebarMenu>

export type SidebarMenuHeaderProps = React.HTMLAttributes<HTMLDivElement>

export type SidebarMenuFooterProps = React.HTMLAttributes<HTMLDivElement>

export type SidebarMenuListProps = React.HTMLAttributes<HTMLUListElement>

// Main SidebarMenu component
export const SidebarMenu = ({ className, size, variant, ...props }: SidebarMenuProps) => {
  return (
    <div
      className={sidebarMenu({ className, size, variant })}
      {...props}
    />
  )
}

// SidebarMenu.Header slot
export const SidebarMenuHeader = ({ className, ...props }: SidebarMenuHeaderProps) => {
  return (
    <div
      className={sidebarMenuHeader({ className })}
      {...props}
    />
  )
}

// SidebarMenu.Footer slot
export const SidebarMenuFooter = ({ className, ...props }: SidebarMenuFooterProps) => {
  return (
    <div
      className={sidebarMenuFooter({ className })}
      {...props}
    />
  )
}

// SidebarMenu.List slot
export const SidebarMenuList = ({ className, ...props }: SidebarMenuListProps) => {
  return (
    <ul
      className={sidebarMenuList({ className })}
      {...props}
    />
  )
}
