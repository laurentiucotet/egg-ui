import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Button } from '../Button/Button'
import { theme } from '../../theme'

const overlay = tv({
  base: 'fixed inset-0 bg-black bg-opacity-50',
})

const dialog = tv({
  base: 'bg-white dark:bg-gray-800 overflow-hidden shadow-xl z-10',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={overlay()} onClick={onCancel} />
      <div
        className={dialog({ size })}
        role="dialog"
        aria-modal="true"
        style={{ borderRadius: theme.cornerRadius }}
      >
        <div className="p-4">
          {header ? (
            header
          ) : (
            title && <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h2>
          )}
          {children ? (
            <div className="mt-2">{children}</div>
          ) : (
            description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            )
          )}
        </div>
        <div className="flex justify-end gap-2 p-4 bg-gray-50 dark:bg-gray-700/50">
          <Button intent="secondary" label={cancelLabel} onClick={onCancel} />
          <Button intent="primary" label={confirmLabel} onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}
