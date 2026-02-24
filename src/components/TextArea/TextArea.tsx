import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const textarea = tv({
  base: 'block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600',
  variants: {
    inputSize: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    },
    variant: {
      default: 'border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-400',
      error: 'border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:ring-red-400',
      success: 'border-green-500 focus:ring-green-500 dark:border-green-400 dark:focus:ring-green-400',
    },
  },
  defaultVariants: {
    inputSize: 'md',
    variant: 'default',
  },
})

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textarea>

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ inputSize, variant, className, ...props }, ref) => {
    return <textarea ref={ref} className={textarea({ inputSize, variant, className })} {...props} />
  }
)
TextArea.displayName = 'TextArea'
