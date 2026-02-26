import type { ButtonVariantProps } from './Button.styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    label: string
  }
