import type { PopoverMenuVariantProps } from './PopoverMenu.styles'

export interface PopoverMenuProps
  extends React.ComponentPropsWithoutRef<'div'>,
    PopoverMenuVariantProps {
  /** The trigger element that opens the popover */
  trigger: React.ReactNode
  /** Whether the popover is open (controlled) */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Position of the popover relative to trigger */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** Alignment of the popover */
  align?: 'start' | 'center' | 'end'
  /** Whether to close on item click */
  closeOnItemClick?: boolean
}

export interface PopoverMenuItemProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /** Icon to display before the label */
  icon?: React.ReactNode
  /** Label text */
  label: React.ReactNode
  /** Whether the item is active */
  active?: boolean
  /** Whether the item is disabled */
  disabled?: boolean
  /** Action element to display after the label */
  action?: React.ReactNode
  /** Callback when item is clicked */
  onSelect?: () => void
}

export interface PopoverMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export interface PopoverMenuLabelProps
  extends React.ComponentPropsWithoutRef<'div'> {}
