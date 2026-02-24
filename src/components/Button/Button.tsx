import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    // Base styles using theme variables
    'inline-flex items-center justify-center',
    'font-medium font-semibold',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'focus:ring-[var(--color-primary)] focus:ring-offset-white',
    'disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    // Use theme border radius
    'rounded-[var(--radius-theme)]',
  ],
  variants: {
    intent: {
      primary: [
        'bg-[var(--color-primary)]',
        'text-white',
        'hover:bg-[var(--color-primary-hover)]',
        'active:bg-[var(--color-primary-active)]',
        'dark:bg-[var(--color-primary-hover)]',
        'dark:hover:bg-[var(--color-primary)]',
        'dark:active:bg-[var(--color-primary-active)]',
        'dark:focus:ring-offset-gray-900',
      ].join(' '),
      secondary: [
        'bg-[var(--color-bg-secondary)]',
        'text-[var(--color-text-primary)]',
        'hover:bg-[var(--color-bg-tertiary)]',
        'border border-[var(--color-border)]',
        'dark:bg-[var(--color-neutral-700)]',
        'dark:text-[var(--color-neutral-100)]',
        'dark:hover:bg-[var(--color-neutral-600)]',
        'dark:border-[var(--color-neutral-600)]',
      ].join(' '),
      danger: [
        'bg-[var(--color-error)]',
        'text-white',
        'hover:bg-[var(--color-error-light)]',
        'active:bg-[var(--color-error-dark)]',
        'dark:bg-[var(--color-error-light)]',
        'dark:hover:bg-[var(--color-error)]',
        'dark:active:bg-[var(--color-error-dark)]',
      ].join(' '),
      ghost: [
        'bg-transparent',
        'text-[var(--color-text-primary)]',
        'hover:bg-[var(--color-bg-secondary)]',
        'dark:text-[var(--color-text-primary)]',
        'dark:hover:bg-[var(--color-bg-secondary)]',
      ].join(' '),
      outline: [
        'bg-transparent',
        'border-2 border-[var(--color-primary)]',
        'text-[var(--color-primary)]',
        'hover:bg-[var(--color-primary)] hover:text-white',
        'dark:border-[var(--color-primary-hover)]',
        'dark:text-[var(--color-primary-hover)]',
      ].join(' '),
    },
    size: {
      sm: [
        'text-sm px-3 py-1.5',
        'leading-[var(--line-height-tight)]',
      ].join(' '),
      md: [
        'text-base px-4 py-2',
        'leading-[var(--line-height-normal)]',
      ].join(' '),
      lg: [
        'text-lg px-6 py-3',
        'leading-[var(--line-height-relaxed)]',
      ].join(' '),
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    fullWidth: false,
  },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    label: string
  }

export const Button = ({ 
  label, 
  intent, 
  size, 
  fullWidth,
  className, 
  style, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={button({ intent, size, fullWidth, className })}
      style={{
        // Use theme radius from CSS custom property
        borderRadius: 'var(--radius-theme)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...props}
    >
      {label}
    </button>
  )
}
