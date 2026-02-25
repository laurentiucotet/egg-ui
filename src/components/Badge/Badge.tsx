import React from 'react'
import { badge } from './Badge.styles'
import type { BadgeProps } from './Badge.types'

export const Badge = (
  {
    children,
    variant = 'neutral',
    size = 'sm',
    className,
    ...props
  }: BadgeProps & React.HTMLAttributes<HTMLSpanElement>,
) => {
  return (
    <span className={badge({ variant, size, className })} {...props}>
      {children}
    </span>
  )
}

export default Badge
