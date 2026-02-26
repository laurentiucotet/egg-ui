import { button } from './Button.styles'
import type { ButtonProps } from './Button.types'

export const Button = ({ 
  label, 
  intent, 
  size, 
  fullWidth,
  className, 
  style, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={button({ intent, size, fullWidth, className })}
      style={{
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...props}
    >
      {label}
    </button>
  )
}
