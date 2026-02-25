import { tv } from 'tailwind-variants'

export const badge = tv({
  base: [
    'inline-flex items-center justify-center',
    'font-medium',
    'rounded-full',
    'transition-colors duration-150',
  ],
  variants: {
    variant: {
      neutral: [
        'bg-[var(--color-neutral-200)]',
        'text-[var(--color-neutral-800)]',
        'dark:bg-[var(--color-neutral-700)]',
        'dark:text-[var(--color-neutral-100)]',
      ].join(' '),
      info: [
        'bg-[var(--color-info-100)]',
        'text-[var(--color-info-800)]',
        'dark:bg-[var(--color-info-dark)]',
        'dark:text-[var(--color-info-100)]',
      ].join(' '),
      success: [
        'bg-[var(--color-success-light)]',
        'text-[var(--color-success-dark)]',
        'dark:bg-[var(--color-success)]',
        'dark:text-[var(--color-neutral-50)]',
      ].join(' '),
      warning: [
        'bg-[var(--color-warning-light)]',
        'text-[var(--color-warning-dark)]',
        'dark:bg-[var(--color-warning)]',
        'dark:text-[var(--color-neutral-900)]',
      ].join(' '),
      danger: [
        'bg-[var(--color-error-light)]',
        'text-[var(--color-error-dark)]',
        'dark:bg-[var(--color-error)]',
        'dark:text-[var(--color-neutral-50)]',
      ].join(' '),
    },
    size: {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-3 py-1.5',
      lg: 'text-base px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'sm',
  },
})
