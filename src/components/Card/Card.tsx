import { tv, type VariantProps } from 'tailwind-variants'

const card = tv({
  base: [
    // Base styles
    'flex flex-col',
    'bg-[var(--color-bg-secondary)]',
    'rounded-[var(--radius-lg)]',
    'border border-[var(--color-border)]',
    'shadow-sm',
    'transition-all duration-200',
    'dark:bg-[var(--color-neutral-800)]',
    'dark:border-[var(--color-neutral-700)]',
  ],
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

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof card>

// Main Card component
export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={card({ className })}
      {...props}
    />
  )
}

// Card.Header slot
export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cardHeader({ className })}
      {...props}
    />
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

// Card.Content slot
export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cardContent({ className })}
      {...props}
    />
  )
}

// Card.Footer slot
export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cardFooter({ className })}
      {...props}
    />
  )
}
