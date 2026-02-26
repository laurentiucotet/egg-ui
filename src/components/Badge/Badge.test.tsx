import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies default variant and size', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge).toBeInTheDocument()
  })

  it('applies neutral variant correctly', () => {
    render(<Badge variant="neutral">Neutral</Badge>)
    const badge = screen.getByText('Neutral')
    expect(badge).toBeInTheDocument()
  })

  it('applies info variant correctly', () => {
    render(<Badge variant="info">Info</Badge>)
    const badge = screen.getByText('Info')
    expect(badge).toBeInTheDocument()
  })

  it('applies success variant correctly', () => {
    render(<Badge variant="success">Success</Badge>)
    const badge = screen.getByText('Success')
    expect(badge).toBeInTheDocument()
  })

  it('applies warning variant correctly', () => {
    render(<Badge variant="warning">Warning</Badge>)
    const badge = screen.getByText('Warning')
    expect(badge).toBeInTheDocument()
  })

  it('applies danger variant correctly', () => {
    render(<Badge variant="danger">Danger</Badge>)
    const badge = screen.getByText('Danger')
    expect(badge).toBeInTheDocument()
  })

  it('applies small size correctly', () => {
    render(<Badge size="sm">Small</Badge>)
    const badge = screen.getByText('Small')
    expect(badge).toBeInTheDocument()
  })

  it('applies medium size correctly', () => {
    render(<Badge size="md">Medium</Badge>)
    const badge = screen.getByText('Medium')
    expect(badge).toBeInTheDocument()
  })

  it('applies large size correctly', () => {
    render(<Badge size="lg">Large</Badge>)
    const badge = screen.getByText('Large')
    expect(badge).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>)
    const badge = screen.getByText('Custom')
    expect(badge).toHaveClass('custom-class')
  })

  it('spreads additional HTML attributes', () => {
    render(<Badge data-testid="badge-test">Test</Badge>)
    expect(screen.getByTestId('badge-test')).toBeInTheDocument()
  })
})
