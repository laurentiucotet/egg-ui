import { tv, type VariantProps } from 'tailwind-variants'

export const input = tv({
  base: [
    // Base styles using theme variables
    'block w-full',
    'shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    // Use theme colors
    'bg-[var(--color-bg-primary)]',
    'text-(--color-text-primary)',
    'placeholder:text-(--color-text-muted)',
    'dark:bg-[var(--color-bg-inverse)]',
    'dark:text-(--color-text-inverse)',
    // Use theme border radius
    'rounded-[var(--radius-theme)]',
    // Border
    'border border-[var(--color-border)]',
  ],
  variants: {
    inputSize: {
      sm: [
        'px-2 py-1 text-sm',
        'leading-[var(--line-height-tight)]',
      ].join(' '),
      md: [
        'px-3 py-2 text-base',
        'leading-[var(--line-height-normal)]',
      ].join(' '),
      lg: [
        'px-4 py-3 text-lg',
        'leading-[var(--line-height-relaxed)]',
      ].join(' '),
    },
    variant: {
      default: [
        'border-[var(--color-border)]',
        'focus:border-[var(--color-primary)]',
        'focus:ring-[var(--color-primary)]',
        'dark:border-[var(--color-border)]',
        'dark:focus:border-[var(--color-primary-hover)]',
        'dark:focus:ring-[var(--color-primary-hover)]',
      ].join(' '),
      error: [
        'border-[var(--color-error)]',
        'focus:border-[var(--color-error)]',
        'focus:ring-[var(--color-error)]',
        'dark:border-[var(--color-error-light)]',
        'dark:focus:border-[var(--color-error-light)]',
        'dark:focus:ring-[var(--color-error-light)]',
      ].join(' '),
      success: [
        'border-[var(--color-success)]',
        'focus:border-[var(--color-success)]',
        'focus:ring-[var(--color-success)]',
        'dark:border-[var(--color-success-light)]',
        'dark:focus:border-[var(--color-success-light)]',
        'dark:focus:ring-[var(--color-success-light)]',
      ].join(' '),
    },
  },
  defaultVariants: {
    inputSize: 'md',
    variant: 'default',
  },
})

export type InputVariantProps = VariantProps<typeof input>
