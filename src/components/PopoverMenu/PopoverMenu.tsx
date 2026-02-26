import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import { cn } from '../../lib/cn'
import { popoverMenuStyles } from './PopoverMenu.styles'
import type {
  PopoverMenuProps,
  PopoverMenuItemProps,
  PopoverMenuSeparatorProps,
  PopoverMenuLabelProps,
} from './PopoverMenu.types'

// Context for managing popover state
interface PopoverMenuContextValue {
  isOpen: boolean
  closeMenu: () => void
  closeOnItemClick: boolean
}

const PopoverMenuContext = createContext<PopoverMenuContextValue | null>(null)

const usePopoverMenu = () => {
  const context = useContext(PopoverMenuContext)
  if (!context) {
    throw new Error('PopoverMenu compound components must be used within PopoverMenu')
  }
  return context
}

export const PopoverMenu = ({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange,
  position = 'bottom',
  align = 'start',
  closeOnItemClick = true,
  className,
  ...props
}: PopoverMenuProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const styles = popoverMenuStyles({ position, align })

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const toggleMenu = () => {
    handleOpenChange(!isOpen)
  }

  const closeMenu = () => {
    handleOpenChange(false)
  }

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <PopoverMenuContext.Provider value={{ isOpen, closeMenu, closeOnItemClick }}>
      <div className="relative inline-block" {...props}>
        <div ref={triggerRef} onClick={toggleMenu}>
          {trigger}
        </div>

        {isOpen && (
          <>
            <div className={styles.overlay()} onClick={closeMenu} />
            <div ref={contentRef} className={cn(styles.content(), className)}>
              {children}
            </div>
          </>
        )}
      </div>
    </PopoverMenuContext.Provider>
  )
}

export const PopoverMenuItem = ({
  icon,
  label,
  action,
  active = false,
  disabled = false,
  onSelect,
  onClick,
  className,
  ...props
}: PopoverMenuItemProps) => {
  const { closeMenu, closeOnItemClick } = usePopoverMenu()
  const styles = popoverMenuStyles({ active, disabled })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    onClick?.(event)
    onSelect?.()

    if (closeOnItemClick) {
      closeMenu()
    }
  }

  return (
    <button
      type="button"
      className={cn(styles.item(), className)}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className={styles.itemIcon()}>{icon}</span>}
      <span className={styles.itemLabel()}>{label}</span>
      {action && <span className={styles.itemAction()}>{action}</span>}
    </button>
  )
}

export const PopoverMenuSeparator = ({
  className,
  ...props
}: PopoverMenuSeparatorProps) => {
  const styles = popoverMenuStyles()
  return <div className={cn(styles.separator(), className)} {...props} />
}

export const PopoverMenuLabel = ({
  children,
  className,
  ...props
}: PopoverMenuLabelProps) => {
  const styles = popoverMenuStyles()
  return (
    <div className={cn(styles.label(), className)} {...props}>
      {children}
    </div>
  )
}

// Compound component pattern
PopoverMenu.Item = PopoverMenuItem
PopoverMenu.Separator = PopoverMenuSeparator
PopoverMenu.Label = PopoverMenuLabel
