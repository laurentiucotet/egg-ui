import { tv } from 'tailwind-variants'

export const cardFooter = tv({
  base: [
    'flex flex-col sm:flex-row sm:items-center sm:justify-between',
    'p-6',
    'border-t border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})
