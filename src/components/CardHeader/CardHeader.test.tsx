import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardHeader } from './CardHeader'

describe('CardHeader', () => {
  it('renders heading correctly', () => {
    render(<CardHeader heading="Test Heading" />)
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders description correctly', () => {
    render(<CardHeader description="Test Description" />)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders both heading and description', () => {
    render(<CardHeader heading="Heading" description="Description" />)
    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders icon when provided', () => {
    render(<CardHeader icon={<span data-testid="icon">Icon</span>} heading="Title" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('hides icon when showIcon is false', () => {
    render(<CardHeader icon={<span data-testid="icon">Icon</span>} showIcon={false} heading="Title" />)
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(<CardHeader badge={<span data-testid="badge">Badge</span>} heading="Title" />)
    expect(screen.getByTestId('badge')).toBeInTheDocument()
  })

  it('hides badge when showBadge is false', () => {
    render(<CardHeader badge={<span data-testid="badge">Badge</span>} showBadge={false} heading="Title" />)
    expect(screen.queryByTestId('badge')).not.toBeInTheDocument()
  })

  it('renders menu when provided', () => {
    render(<CardHeader menu={<button data-testid="menu">Menu</button>} heading="Title" />)
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('hides menu when showMenu is false', () => {
    render(<CardHeader menu={<button data-testid="menu">Menu</button>} showMenu={false} heading="Title" />)
    expect(screen.queryByTestId('menu')).not.toBeInTheDocument()
  })

  it('hides heading when showTitle is false', () => {
    render(<CardHeader heading="Title" showTitle={false} />)
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })

  it('hides description when showDescription is false', () => {
    render(<CardHeader description="Description" showDescription={false} />)
    expect(screen.queryByText('Description')).not.toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<CardHeader heading="Title" className="custom-class" data-testid="header" />)
    expect(screen.getByTestId('header')).toHaveClass('custom-class')
  })

  it('renders all elements together', () => {
    render(
      <CardHeader
        icon={<span data-testid="icon">Icon</span>}
        heading="Heading"
        description="Description"
        badge={<span data-testid="badge">Badge</span>}
        menu={<button data-testid="menu">Menu</button>}
      />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByTestId('badge')).toBeInTheDocument()
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })
})
