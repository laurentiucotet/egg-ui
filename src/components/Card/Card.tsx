import { type VariantProps } from 'tailwind-variants'
import { card, cardTitle, cardDescription, cardContent } from './Card.styles'
import type { CardHeaderProps, CardFooterProps } from './Card.types'
import { CardHeader as Header } from '../CardHeader/index'
import { CardFooter as Footer } from '../CardFooter/index'

export interface CardProps extends VariantProps<typeof card>, React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  showImage?: boolean
  showHeader?: boolean
  showFooter?: boolean
  header?: CardHeaderProps
  footer?: CardFooterProps
  children?: React.ReactNode
}

// Main Card component
export const Card = ({
  imageSrc,
  imageAlt,
  imageClassName,
  className,
  children,
  shadow,
  hoverEffect,
  rounded,
  showImage = true,
  showHeader = true,
  showFooter = true,
  header,
  footer,
  ...rest
}: CardProps) => {
  const topRoundClass = rounded === 'md'
    ? 'rounded-t-[var(--radius-xl)]'
    : rounded === 'full'
      ? 'rounded-t-[var(--radius-full)]'
      : 'rounded-t-[var(--radius-lg)]'

  return (
    <div
      role="article"
      className={card({ className, shadow, hoverEffect, rounded })}
      {...rest}
    >
      {imageSrc && showImage && (
        <img
          src={imageSrc}
          alt={imageAlt ?? ''}
          className={[
            'w-full h-48 object-cover',
            'min-h-24',
            topRoundClass,
            imageClassName ?? '',
          ].filter(Boolean).join(' ')}
        />
      )}

      {showHeader && header && (
        <Header {...header} />
      )}

      {children}

      {showFooter && footer && (
        <Footer {...footer} />
      )}
    </div>
  )
}

// Card.Header slot (re-export for backward compatibility)
export { CardHeader } from '../CardHeader/index'

// Card.Title slot
export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cardTitle({ className })}
      {...props}
    />
  )
}

// Card.Description slot
export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cardDescription({ className })}
      {...props}
    />
  )
}

// Card.Footer slot (re-export for backward compatibility)
export { CardFooter } from '../CardFooter/index'

// Card.Content slot
export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cardContent({ className })}
      {...props}
    />
  )
}

