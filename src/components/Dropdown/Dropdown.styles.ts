import { tv, type VariantProps } from 'tailwind-variants'

export const dropdown = tv({
  base: [
    // Base styles using theme variables
    'block w-full',
    'shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    // Use theme colors
    'bg-[var(--color-bg-primary)]',
    'text-(--color-text-primary)',
    'dark:bg-[var(--color-bg-inverse)]',
    'dark:text-(--color-text-inverse)',
    // Use theme border radius
    'rounded-[var(--radius-theme)]',
    // Border
    'border border-[var(--color-border)]',
    // Custom arrow
    'appearance-none',
    'bg-no-repeat',
    // Arrow icon positioning
    'pr-10',
    // Transition
    'transition-colors duration-200',
  ],
  variants: {
    dropdownSize: {
      sm: [
        'px-2 py-1 text-sm',
        'leading-[var(--line-height-tight)]',
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'none'%20viewBox%3D'0%200%2024%2024'%20stroke%3D'%236b7280'%3E%3Cpath%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%20stroke-width%3D'2'%20d%3D'M19%209l-7%207-7-7'%2F%3E%3C%2Fsvg%3E')]",
        "bg-[length:1.25rem_1.25rem]",
        "bg-[right_0.5rem_center]",
      ].join(' '),
      md: [
        'px-3 py-2 text-base',
        'leading-[var(--line-height-normal)]',
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'none'%20viewBox%3D'0%200%2024%2024'%20stroke%3D'%236b7280'%3E%3Cpath%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%20stroke-width%3D'2'%20d%3D'M19%209l-7%207-7-7'%2F%3E%3C%2Fsvg%3E')]",
        "bg-[length:1.25rem_1.25rem]",
        "bg-[right_0.5rem_center]",
      ].join(' '),
      lg: [
        'px-4 py-3 text-lg',
        'leading-[var(--line-height-relaxed)]',
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'none'%20viewBox%3D'0%200%2024%2024'%20stroke%3D'%236b7280'%3E%3Cpath%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%20stroke-width%3D'2'%20d%3D'M19%209l-7%207-7-7'%2F%3E%3C%2Fsvg%3E')]",
        "bg-[length:1.5rem_1.5rem]",
        "bg-[right_0.75rem_center]",
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
    dropdownSize: 'md',
    variant: 'default',
  },
})

export type DropdownVariantProps = VariantProps<typeof dropdown>
