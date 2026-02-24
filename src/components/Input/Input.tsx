import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import * as LucideIcons from 'lucide-react'
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator'

const input = tv({
  base: 'block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600',
  variants: {
    inputSize: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    },
    variant: {
      default: 'border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-400',
      error: 'border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:ring-red-400',
      success: 'border-green-500 focus:ring-green-500 dark:border-green-400 dark:focus:ring-green-400',
    },
  },
  defaultVariants: {
    inputSize: 'md',
    variant: 'default',
  },
})

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    label?: string
    showLabel?: boolean
    icon?: keyof typeof LucideIcons
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, variant, className, label, showLabel, icon, ...props }, ref) => {
    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`
    const shouldShowLabel = showLabel !== false && (label || showLabel === true)
    
    const IconComponent = icon ? (LucideIcons[icon] as React.ComponentType<{ size?: number; className?: string }>) : null

    const [passwordValue, setPasswordValue] = React.useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.type === 'password') {
        setPasswordValue(e.target.value)
      }
      props.onChange?.(e)
    }

    return (
      <div className="space-y-1">
        {shouldShowLabel && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              {IconComponent && <IconComponent size={16} className="text-gray-500" />}
              <span>
                {label || 'Label'}
                {props.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            </div>
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={input({ inputSize, variant, className })}
          {...props}
          onChange={handleInputChange}
        />
        {props.type === 'password' && (
          <PasswordStrengthIndicator password={passwordValue} />
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
