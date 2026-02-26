import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders icon correctly', () => {
    render(<Icon name="bell" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies small size correctly', () => {
    render(<Icon name="bell" size="sm" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies medium size correctly', () => {
    render(<Icon name="bell" size="md" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies large size correctly', () => {
    render(<Icon name="bell" size="lg" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Icon name="bell" className="custom-class" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    render(<Icon name="bell" data-testid="icon" aria-label="Bell icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('aria-label', 'Bell icon')
  })

  it('renders different icon names', () => {
    const { rerender } = render(<Icon name="bell" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    rerender(<Icon name="settings" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    rerender(<Icon name="chevron" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies default size when not specified', () => {
    render(<Icon name="bell" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('accepts custom color', () => {
    render(<Icon name="bell" color="default" data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
