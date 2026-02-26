import React, { useId } from 'react'
import type { DropdownProps, DropdownOption } from './Dropdown.types'
import { dropdown } from './Dropdown.styles'
import * as LucideIcons from 'lucide-react'

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      dropdownSize,
      variant,
      className,
      label,
      showLabel,
      icon,
      required,
      options,
      value,
      onChange,
      placeholder,
      error,
      success,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const dropdownId = props.id || generatedId
    const shouldShowLabel = showLabel !== false && (label || showLabel === true)

    // Determine the variant based on props
    let resolvedVariant = variant
    if (error) {
      resolvedVariant = 'error'
    } else if (success) {
      resolvedVariant = 'success'
    }

    const IconComponent = icon
      ? (LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>)
      : null

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }

    return (
      <div className="space-y-1" style={{ fontFamily: 'var(--font-sans)' }}>
        {shouldShowLabel && (
          <label
            htmlFor={dropdownId}
            className="block text-sm font-medium text-(--color-text-primary)"
            style={{
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-sm)',
            }}
          >
            <div className="flex items-center gap-2">
              {IconComponent && (
                <IconComponent size={16} className="text-(--color-text-muted)" />
              )}
              <span>
                {label || 'Label'}
                {required && (
                  <span className="text-(--color-error) ml-1">*</span>
                )}
              </span>
            </div>
          </label>
        )}
        <select
          ref={ref}
          id={dropdownId}
          className={dropdown({ dropdownSize, variant: resolvedVariant, className })}
          style={{
            borderRadius: 'var(--radius-theme)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--line-height-normal)',
            ...style,
          }}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option: DropdownOption) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p
            className="text-sm text-(--color-error)"
            style={{ fontSize: 'var(--text-sm)' }}
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Dropdown.displayName = 'Dropdown'
