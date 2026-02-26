import type { DropdownVariantProps } from './Dropdown.styles'
import * as LucideIcons from 'lucide-react'

export interface DropdownOption {
  /** The value associated with the option */
  value: string
  /** The display text for the option */
  label: string
  /** Whether the option is disabled */
  disabled?: boolean
}

export type DropdownProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> &
  DropdownVariantProps & {
    /** The label text displayed above the dropdown */
    label?: string
    /** Whether to show the label */
    showLabel?: boolean
    /** Lucide icon to display in the label */
    icon?: keyof typeof LucideIcons
    /** Whether the field is required (shows asterisk) */
    required?: boolean
    /** The options available in the dropdown */
    options: DropdownOption[]
    /** The selected value */
    value?: string
    /** Callback when value changes */
    onChange?: (value: string) => void
    /** Placeholder text when no option is selected */
    placeholder?: string
    /** Error message to display */
    error?: string
    /** Success state */
    success?: boolean
  }
