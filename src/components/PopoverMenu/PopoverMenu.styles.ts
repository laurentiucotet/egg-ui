import { tv, type VariantProps } from 'tailwind-variants'

export const popoverMenuStyles = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-40',
      'bg-black/20',
      'dark:bg-black/40',
    ],
    content: [
      'absolute z-50',
      'min-w-[200px]',
      'bg-white',
      'border border-[var(--color-border)]',
      'rounded-[var(--radius-md)]',
      'shadow-lg',
      'py-1',
      'dark:bg-[var(--color-neutral-800)]',
      'dark:border-[var(--color-neutral-700)]',
    ],
    item: [
      'flex items-center gap-3',
      'w-full',
      'px-3 py-2',
      'text-sm font-medium',
      'text-[var(--color-text-primary)]',
      'transition-all duration-200',
      'cursor-pointer',
      'hover:bg-[var(--color-bg-tertiary)]',
      'focus:outline-none focus:bg-[var(--color-bg-tertiary)]',
      'dark:text-[var(--color-neutral-100)]',
      'dark:hover:bg-[var(--color-neutral-700)]',
      'dark:focus:bg-[var(--color-neutral-700)]',
    ],
    itemIcon: [
      'flex items-center justify-center',
      'w-5 h-5',
      'shrink-0',
      'text-[var(--color-text-secondary)]',
      'dark:text-[var(--color-neutral-400)]',
    ],
    itemLabel: [
      'flex-1 truncate text-left',
    ],
    itemAction: [
      'flex items-center justify-center',
      'shrink-0',
      'text-[var(--color-text-secondary)]',
      'dark:text-[var(--color-neutral-400)]',
    ],
    separator: [
      'h-px',
      'my-1',
      'bg-[var(--color-border)]',
      'dark:bg-[var(--color-neutral-700)]',
    ],
    label: [
      'px-3 py-1.5',
      'text-xs font-semibold',
      'text-[var(--color-text-secondary)]',
      'uppercase tracking-wider',
      'dark:text-[var(--color-neutral-400)]',
    ],
  },
  variants: {
    position: {
      top: {
        content: 'bottom-full mb-2',
      },
      bottom: {
        content: 'top-full mt-2',
      },
      left: {
        content: 'right-full mr-2',
      },
      right: {
        content: 'left-full ml-2',
      },
    },
    align: {
      start: {},
      center: {},
      end: {},
    },
    active: {
      true: {
        item: [
          'bg-[var(--color-primary)]',
          'text-white',
          'dark:bg-[var(--color-primary-hover)]',
        ],
        itemIcon: 'text-white dark:text-white',
        itemAction: 'text-white dark:text-white',
      },
      false: {},
    },
    disabled: {
      true: {
        item: [
          'opacity-50',
          'cursor-not-allowed',
          'hover:bg-transparent',
          'dark:hover:bg-transparent',
        ],
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      position: 'top',
      align: 'start',
      class: {
        content: 'left-0',
      },
    },
    {
      position: 'top',
      align: 'center',
      class: {
        content: 'left-1/2 -translate-x-1/2',
      },
    },
    {
      position: 'top',
      align: 'end',
      class: {
        content: 'right-0',
      },
    },
    {
      position: 'bottom',
      align: 'start',
      class: {
        content: 'left-0',
      },
    },
    {
      position: 'bottom',
      align: 'center',
      class: {
        content: 'left-1/2 -translate-x-1/2',
      },
    },
    {
      position: 'bottom',
      align: 'end',
      class: {
        content: 'right-0',
      },
    },
    {
      position: 'left',
      align: 'start',
      class: {
        content: 'top-0',
      },
    },
    {
      position: 'left',
      align: 'center',
      class: {
        content: 'top-1/2 -translate-y-1/2',
      },
    },
    {
      position: 'left',
      align: 'end',
      class: {
        content: 'bottom-0',
      },
    },
    {
      position: 'right',
      align: 'start',
      class: {
        content: 'top-0',
      },
    },
    {
      position: 'right',
      align: 'center',
      class: {
        content: 'top-1/2 -translate-y-1/2',
      },
    },
    {
      position: 'right',
      align: 'end',
      class: {
        content: 'bottom-0',
      },
    },
  ],
  defaultVariants: {
    position: 'bottom',
    align: 'start',
    active: false,
    disabled: false,
  },
})

export type PopoverMenuVariantProps = VariantProps<typeof popoverMenuStyles>
