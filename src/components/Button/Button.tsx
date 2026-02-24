import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  variants: {
    intent: {
      primary: 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
      danger: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-400',
    },
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    label: string
  }

export const Button = ({ label, intent, size, className, ...props }: ButtonProps) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {label}
    </button>
  )
}
