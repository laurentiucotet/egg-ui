import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import * as LucideIcons from 'lucide-react'
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator'

const input = tv({
  base: [
    // Base styles using theme variables
    'block w-full',
    'shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    // Use theme colors
    'bg-[var(--color-bg-primary)]',
    'text-[var(--color-text-primary)]',
    'placeholder:text-[var(--color-text-muted)]',
    'dark:bg-[var(--color-bg-inverse)]',
    'dark:text-[var(--color-text-inverse)]',
    // Use theme border radius
    'rounded-[var(--radius-theme)]',
    // Border
    'border border-[var(--color-border)]',
  ],
  variants: {
    inputSize: {
      sm: [
        'px-2 py-1 text-sm',
        'leading-[var(--line-height-tight)]',
      ].join(' '),
      md: [
        'px-3 py-2 text-base',
        'leading-[var(--line-height-normal)]',
      ].join(' '),
      lg: [
        'px-4 py-3 text-lg',
        'leading-[var(--line-height-relaxed)]',
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
  ({ inputSize, variant, className, label, showLabel, icon, style, ...props }, ref) => {
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
      <div 
        className="space-y-1"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {shouldShowLabel && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--color-text-primary)]"
            style={{ 
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-sm)',
            }}
          >
            <div className="flex items-center gap-2">
              {IconComponent && (
                <IconComponent 
                  size={16} 
                  className="text-[var(--color-text-muted)]" 
                />
              )}
              <span>
                {label || 'Label'}
                {props.required && (
                  <span className="text-[var(--color-error)] ml-1">*</span>
                )}
              </span>
            </div>
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={input({ inputSize, variant, className })}
          style={{
            borderRadius: 'var(--radius-theme)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--line-height-normal)',
            ...style,
          }}
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
