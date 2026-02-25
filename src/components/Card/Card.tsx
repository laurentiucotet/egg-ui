import { tv, type VariantProps } from 'tailwind-variants'

const card = tv({
  base: [
    // Base styles
    'flex flex-col',
    'overflow-hidden',
    'bg-[var(--color-card-bg)]',
    'border border-[var(--color-border)]',
    'transition-all duration-200',
    'dark:bg-[var(--color-neutral-800)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
  variants: {
    shadow: {
      none: '',
      sm: 'shadow-[var(--shadow-sm)]',
      md: 'shadow-[var(--shadow-base)]',
      lg: 'shadow-[var(--shadow-lg)]',
      xl: 'shadow-[var(--shadow-xl)]',
    },
    hoverEffect: {
      none: '',
      lift: 'hover:-translate-y-1 hover:shadow-[var(--shadow-xl)]',
      grow: 'hover:scale-[1.02]',
      pulse: 'hover:shadow-[var(--shadow-2xl)]',
    },
    rounded: {
      base: 'rounded-[var(--radius-lg)]',
      md: 'rounded-[var(--radius-xl)]',
      full: 'rounded-[var(--radius-full)]',
    },
  },
  defaultVariants: {
    shadow: 'sm',
    hoverEffect: 'none',
    rounded: 'base',
  },
})

const cardHeader = tv({
  base: [
    'flex flex-col',
    'p-6',
    'border-b border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})

const cardTitle = tv({
  base: [
    'text-lg font-semibold',
    'text-[var(--color-text-primary)]',
    'mb-1',
    'dark:text-[var(--color-neutral-100)]',
  ],
})

const cardDescription = tv({
  base: [
    'text-sm',
    'text-[var(--color-text-secondary)]',
    'dark:text-[var(--color-neutral-400)]',
  ],
})

const cardContent = tv({
  base: [
    'p-6',
    'flex-1',
  ],
})

const cardFooter = tv({
  base: [
    'flex flex-col sm:flex-row sm:items-center sm:justify-between',
    'p-6',
    'border-t border-[var(--color-border)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
})

export interface CardHeaderProps {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  menu?: React.ReactNode
  showIcon?: boolean
  showTitle?: boolean
  showDescription?: boolean
  showBadge?: boolean
  showMenu?: boolean
  className?: string
}

export interface CardFooterProps {
  left?: React.ReactNode
  right?: React.ReactNode
  showLeft?: boolean
  showRight?: boolean
  className?: string
}

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
            'min-h-[6rem]',
            topRoundClass,
            imageClassName ?? '',
          ].filter(Boolean).join(' ')}
        />
      )}

      {showHeader && header && (
        <CardHeader {...header} />
      )}

      {children}

      {showFooter && footer && (
        <CardFooter {...footer} />
      )}
    </div>
  )
}

// Card.Header slot
export const CardHeader = ({
  icon,
  title,
  description,
  badge,
  menu,
  showIcon = true,
  showTitle = true,
  showDescription = true,
  showBadge = false,
  showMenu = false,
  className,
  ...props
}: CardHeaderProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cardHeader({ className })} {...props}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {showMenu && menu && <div className="shrink-0">{menu}</div>}
          {showIcon && icon && <div className="shrink-0">{icon}</div>}
          <div className="flex flex-col">
            {showTitle && title && (
              <div className="flex items-center gap-2">
                <h3 className={cardTitle({}) as string}>{title}</h3>
                {showBadge && badge && <span>{badge}</span>}
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

// Card.Footer slot (richer)
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

// Card.Content slot
export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cardContent({ className })}
      {...props}
    />
  )
}

