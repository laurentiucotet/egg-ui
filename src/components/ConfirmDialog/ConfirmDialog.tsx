import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Button } from '../Button/Button'

const overlay = tv({
  base: [
    'fixed inset-0',
    'bg-black/50',
    'dark:bg-black/70',
    'z-[var(--z-modal-backdrop)]',
  ],
})

const dialog = tv({
  base: [
    'bg-[var(--color-bg-primary)]',
    'overflow-hidden',
    'shadow-[var(--shadow-xl)]',
    'z-[var(--z-modal)]',
    // Use theme border radius
    'rounded-[var(--radius-theme)]',
  ],
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type ConfirmDialogProps = {
  open: boolean
  /** optional legacy title, use header for custom content */
  title?: string
  /** optional legacy description, use children for custom body */
  description?: string
  header?: React.ReactNode
  children?: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  size?: VariantProps<typeof dialog>['size']
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  description,
  header,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  size = 'sm',
  onConfirm,
  onCancel,
}) => {
  if (!open) return null

  return (
    <div 
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div 
        className={overlay()} 
        onClick={onCancel}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <div
        className={dialog({ size })}
        role="dialog"
        aria-modal="true"
        style={{ 
          borderRadius: 'var(--radius-theme)',
        }}
      >
        <div 
          className="p-[var(--spacing-4)]"
          style={{ padding: 'var(--spacing-4)' }}
        >
          {header ? (
            header
          ) : title ? (
            <h2 
              className="text-lg font-semibold"
              style={{ 
                color: 'var(--color-text-primary)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-snug)',
              }}
            >
              {title}
            </h2>
          ) : null}
          {children ? (
            <div 
              className="mt-[var(--spacing-2)]"
              style={{ marginTop: 'var(--spacing-2)' }}
            >
              {children}
            </div>
          ) : description ? (
            <p 
              className="mt-[var(--spacing-2)] text-sm"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--line-height-normal)',
                marginTop: 'var(--spacing-2)',
              }}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div 
          className="flex justify-end gap-[var(--spacing-2)] p-[var(--spacing-4)] bg-[var(--color-bg-secondary)]"
          style={{ 
            padding: 'var(--spacing-4)',
            gap: 'var(--spacing-2)',
            backgroundColor: 'var(--color-bg-secondary)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button 
            intent="secondary" 
            label={cancelLabel} 
            onClick={onCancel}
            size="sm"
          />
          <Button 
            intent="primary" 
            label={confirmLabel} 
            onClick={onConfirm}
            size="sm"
          />
        </div>
      </div>
    </div>
  )
}
