import { tv, type VariantProps } from 'tailwind-variants'

export const checkbox = tv({
  base: [
    // Base styles
    'w-4 h-4',
    'rounded-[var(--radius-sm)]',
    'border-2 border-[var(--color-border)]',
    'bg-[var(--color-bg-primary)]',
    'transition-all duration-[var(--transition-fast)]',
    'cursor-pointer',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    // Checked state
    'checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)]',
    'checked:hover:bg-[var(--color-primary-hover)] checked:hover:border-[var(--color-primary-hover)]',
    // Indeterminate state
    'indeterminate:bg-[var(--color-primary)] indeterminate:border-[var(--color-primary)]',
    // Dark mode
    'dark:border-[var(--color-neutral-600)]',
    'dark:bg-[var(--color-bg-primary)]',
    'dark:checked:bg-[var(--color-primary-hover)] dark:checked:border-[var(--color-primary-hover)]',
    'dark:checked:hover:bg-[var(--color-primary)] dark:checked:hover:border-[var(--color-primary)]',
    'dark:focus:ring-offset-[var(--color-bg-primary)]',
    'dark:focus:ring-offset-gray-900',
  ],
  variants: {
    size: {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkbox>
