import React from 'react'
import { cardFooter } from './CardFooter.styles'
import type { CardFooterProps } from './CardFooter.types'

export const CardFooter = ({
  left,
  right,
  showLeft = true,
  showRight = true,
  className,
  ...props
}: CardFooterProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cardFooter({ className })} {...props}>
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4">
          {showLeft && left}
        </div>
        <div className="flex items-center gap-2">
          {showRight && right}
        </div>
      </div>
    </div>
  )
}

export default CardFooter
