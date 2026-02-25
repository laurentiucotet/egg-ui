import React from 'react'
import { cardHeader } from './CardHeader.styles'
import { cardTitle, cardDescription } from '../Card/Card.styles'
import { Badge } from '../Badge'
import type { CardHeaderProps } from './CardHeader.types'

export const CardHeader = ({
  icon,
  heading,
  description,
  badge,
  menu,
  showIcon = true,
  showTitle = true,
  showDescription = true,
  showBadge = false,
  showMenu = false,
  className,
  children,
  ...props
}: CardHeaderProps & React.HTMLAttributes<HTMLDivElement>) => {
  // If children are provided, render them directly for backward compatibility
  if (children) {
    return (
      <div className={cardHeader({ className })} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div className={cardHeader({ className })} {...props}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {showMenu && menu && <div className="shrink-0">{menu}</div>}
          {showIcon && icon && <div className="shrink-0">{icon}</div>}
          <div className="flex flex-col">
            {showTitle && heading && (
              <div className="flex items-center gap-2">
                <h3 className={cardTitle({}) as string}>{heading}</h3>
                {showBadge && badge && (
                  // if consumer already passed an element (could be our Badge or custom), render as-is;
                  // otherwise wrap value in our Badge component for consistent styling
                  React.isValidElement(badge) ? (
                    badge
                  ) : (
                    <Badge>{badge}</Badge>
                  )
                )}
              </div>
            )}
            {showDescription && description && (
              <p className={cardDescription({}) as string}>{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHeader
