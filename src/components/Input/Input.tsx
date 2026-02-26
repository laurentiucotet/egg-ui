import React, { useId } from 'react'
import type { InputProps } from './Input.types'
import { input } from './Input.styles'
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator'
import * as LucideIcons from 'lucide-react'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, variant, className, label, showLabel, icon, style, ...props }, ref) => {
    const generatedId = useId()
    const inputId = props.id || generatedId
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
            className="block text-sm font-medium text-(--color-text-primary)"
            style={{ 
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-sm)',
            }}
          >
            <div className="flex items-center gap-2">
              {IconComponent && (
                <IconComponent 
                  size={16} 
                  className="text-(--color-text-muted)" 
                />
              )}
              <span>
                {label || 'Label'}
                {props.required && (
                  <span className="text-(--color-error) ml-1">*</span>
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
