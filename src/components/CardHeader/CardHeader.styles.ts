import { tv } from 'tailwind-variants'

export const cardHeader = tv({
  base: [
    'flex flex-col',
    'p-6',
    'border-b border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})
