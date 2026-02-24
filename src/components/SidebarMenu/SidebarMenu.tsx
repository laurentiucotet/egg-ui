import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const sidebarMenu = tv({
  base: [
    // Base styles
    'flex flex-col',
    'w-64 overflow-hidden',                      // default width, hide overflow
    'bg-(--color-bg-secondary)',
    'rounded-(--radius-lg)',
    'border border-(--color-border)',
    'shadow-sm',
    // smooth width transition for collapse
    'transition-all duration-200',
    'dark:bg-(--color-neutral-800)',
    'dark:border-(--color-neutral-700)',
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
    collapsed: {
      true: 'w-20',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    collapsed: false,
  },
})

const sidebarMenuHeader = tv({
  base: [
    'flex flex-col',
    'px-3 py-2',
    'bg-(--color-bg-primary)',                  // light header background
    'border-b border-(--color-border)',
    'dark:border-(--color-neutral-700)',
  ],
  variants: {
    collapsed: {
      true: 'p-2',
      false: '',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})

const sidebarMenuFooter = tv({
  base: [
    'flex flex-col',
    'px-3 py-2',
    'bg-(--color-bg-primary)',                  // mirrored header bg
    'border-t border-(--color-border)',
    'dark:border-(--color-neutral-700)',
  ],
  variants: {
    collapsed: {
      true: 'p-2',
      false: '',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})

const sidebarMenuList = tv({
  base: [
    'flex flex-col',
    'gap-0.5',
    'p-1',
    'list-none',          // remove default ul bullets
    'pl-0',               // no left padding
    'ml-0',               // no left margin (some browsers add it)
  ],
})

export type SidebarMenuProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sidebarMenu> & {
    /**
     * When true the menu collapses to a narrow icon‑only strip.
     * Can be controlled or uncontrolled; see `onCollapsedChange`.
     */
    collapsed?: boolean
    /** called whenever the collapsed state changes (uncontrolled mode) */
    onCollapsedChange?: (collapsed: boolean) => void
  }

export type SidebarMenuHeaderProps = React.HTMLAttributes<HTMLDivElement>

export type SidebarMenuFooterProps = React.HTMLAttributes<HTMLDivElement>

export type SidebarMenuListProps = React.HTMLAttributes<HTMLUListElement>

// context used by sub‑components to adapt to collapsed state
interface SidebarMenuContextType {
  collapsed: boolean
  toggleCollapsed: () => void
}

const SidebarMenuContext = React.createContext<SidebarMenuContextType>({
  collapsed: false,
  toggleCollapsed: () => {},
})

export const useSidebarMenu = () => React.useContext(SidebarMenuContext)

// Main SidebarMenu component
export const SidebarMenu = ({
  className,
  size,
  variant,
  collapsed: collapsedProp,
  onCollapsedChange,
  ...props
}: SidebarMenuProps) => {
  const [collapsed, setCollapsed] = React.useState(collapsedProp ?? false)

  React.useEffect(() => {
    if (collapsedProp !== undefined) {
      setCollapsed(collapsedProp)
    }
  }, [collapsedProp])

  const toggleCollapsed = () => {
    setCollapsed((c) => {
      const next = !c
      onCollapsedChange?.(next)
      return next
    })
  }

  return (
    <SidebarMenuContext.Provider value={{ collapsed, toggleCollapsed }}>
      <div
        role="navigation"
        className={sidebarMenu({ className, size, variant, collapsed })}
        {...props}
      />
    </SidebarMenuContext.Provider>
  )
}

// SidebarMenu.Header slot
export const SidebarMenuHeader = ({ className, children, ...props }: SidebarMenuHeaderProps) => {
  const { collapsed } = useSidebarMenu()

  return (
    <div
      className={sidebarMenuHeader({ className, collapsed })}
      {...props}
    >
      {!collapsed && children}
    </div>
  )
}

// SidebarMenu.Footer slot
export const SidebarMenuFooter = ({ className, children, ...props }: SidebarMenuFooterProps) => {
  const { collapsed } = useSidebarMenu()

  return (
    <div
      className={sidebarMenuFooter({ className, collapsed })}
      {...props}
    >
      {!collapsed && children}
    </div>
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
