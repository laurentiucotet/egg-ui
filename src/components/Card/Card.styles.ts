import { tv } from 'tailwind-variants'

export const card = tv({
  base: [
    'flex flex-col',
    'overflow-hidden',
    'bg-[var(--color-card-bg)]',
    'border border-[var(--color-border)]',
    'transition-all duration-200',
    'dark:bg-[var(--color-neutral-800)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
  variants: {
    shadow: {
      none: '',
      sm: 'shadow-[var(--shadow-sm)]',
      md: 'shadow-[var(--shadow-base)]',
      lg: 'shadow-[var(--shadow-lg)]',
      xl: 'shadow-[var(--shadow-xl)]',
    },
    hoverEffect: {
      none: '',
      lift: 'hover:-translate-y-1 hover:shadow-[var(--shadow-xl)]',
      grow: 'hover:scale-[1.02]',
      pulse: 'hover:shadow-[var(--shadow-2xl)]',
    },
    rounded: {
      base: 'rounded-[var(--radius-lg)]',
      md: 'rounded-[var(--radius-xl)]',
      full: 'rounded-[var(--radius-full)]',
    },
  },
  defaultVariants: {
    shadow: 'sm',
    hoverEffect: 'none',
    rounded: 'base',
  },
})


export const cardTitle = tv({
  base: [
    'text-lg font-semibold',
    'text-[var(--color-text-primary)]',
    'mb-1',
    'dark:text-[var(--color-neutral-100)]',
  ],
})

export const cardDescription = tv({
  base: [
    'text-sm',
    'text-[var(--color-text-secondary)]',
    'dark:text-[var(--color-neutral-400)]',
  ],
})

export const cardContent = tv({
  base: [
    'p-6',
    'flex-1',
  ],
})


export default card
