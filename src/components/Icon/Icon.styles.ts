import { tv, type VariantProps } from 'tailwind-variants'

// simple wrapper for sizing using tailwind classes
export const icon = tv({
  base: 'inline-block',
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    },
    color: {
      default: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type IconVariantProps = VariantProps<typeof icon>
