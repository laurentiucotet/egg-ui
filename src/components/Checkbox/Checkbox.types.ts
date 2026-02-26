import type { CheckboxVariantProps } from './Checkbox.styles'

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  CheckboxVariantProps & {
    /**
     * The label text displayed next to the checkbox
     */
    label?: string
    /**
     * Whether the checkbox is in an indeterminate state
     */
    indeterminate?: boolean
  }
