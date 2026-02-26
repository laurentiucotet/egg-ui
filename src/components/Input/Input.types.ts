import type { InputVariantProps } from './Input.styles'
import * as LucideIcons from 'lucide-react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputVariantProps & {
    label?: string
    showLabel?: boolean
    icon?: keyof typeof LucideIcons
  }
