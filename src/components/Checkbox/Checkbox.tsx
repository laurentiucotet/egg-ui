import { useRef, useEffect } from 'react'
import { checkbox } from './Checkbox.styles'
import type { CheckboxProps } from './Checkbox.types'

export const Checkbox = ({
  label,
  size,
  className,
  style,
  checked,
  indeterminate,
  disabled,
  ...props
}: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle indeterminate state
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate ?? false
    }
  }, [indeterminate])

  return (
    <label
      className="inline-flex items-center gap-2 cursor-pointer"
      style={{
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className={checkbox({ size, className })}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      {label && (
        <span
          className={`
            text-[var(--color-text-primary)]
            text-sm
            leading-[var(--line-height-normal)]
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            dark:text-[var(--color-text-primary)]
          `}
        >
          {label}
        </span>
      )}
    </label>
  )
}
