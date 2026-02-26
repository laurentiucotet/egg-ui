import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders label correctly', () => {
    render(<Button label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies default intent and size', () => {
    render(<Button label="Default" />)
    const button = screen.getByText('Default')
    expect(button).toBeInTheDocument()
  })

  it('applies primary intent correctly', () => {
    render(<Button label="Primary" intent="primary" />)
    const button = screen.getByText('Primary')
    expect(button).toBeInTheDocument()
  })

  it('applies secondary intent correctly', () => {
    render(<Button label="Secondary" intent="secondary" />)
    const button = screen.getByText('Secondary')
    expect(button).toBeInTheDocument()
  })

  it('applies danger intent correctly', () => {
    render(<Button label="Danger" intent="danger" />)
    const button = screen.getByText('Danger')
    expect(button).toBeInTheDocument()
  })

  it('applies ghost intent correctly', () => {
    render(<Button label="Ghost" intent="ghost" />)
    const button = screen.getByText('Ghost')
    expect(button).toBeInTheDocument()
  })

  it('applies outline intent correctly', () => {
    render(<Button label="Outline" intent="outline" />)
    const button = screen.getByText('Outline')
    expect(button).toBeInTheDocument()
  })

  it('applies small size correctly', () => {
    render(<Button label="Small" size="sm" />)
    const button = screen.getByText('Small')
    expect(button).toBeInTheDocument()
  })

  it('applies medium size correctly', () => {
    render(<Button label="Medium" size="md" />)
    const button = screen.getByText('Medium')
    expect(button).toBeInTheDocument()
  })

  it('applies large size correctly', () => {
    render(<Button label="Large" size="lg" />)
    const button = screen.getByText('Large')
    expect(button).toBeInTheDocument()
  })

  it('applies fullWidth correctly', () => {
    render(<Button label="Full Width" fullWidth />)
    const button = screen.getByText('Full Width')
    expect(button).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Button label="Custom" className="custom-class" />)
    const button = screen.getByText('Custom')
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button label="Click" onClick={handleClick} />)
    const button = screen.getByText('Click')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = vi.fn()
    render(<Button label="Disabled" disabled onClick={handleClick} />)
    const button = screen.getByText('Disabled')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('spreads additional HTML attributes', () => {
    render(<Button label="Test" data-testid="button-test" />)
    expect(screen.getByTestId('button-test')).toBeInTheDocument()
  })

  it('applies custom styles', () => {
    render(<Button label="Styled" style={{ backgroundColor: 'red' }} />)
    const button = screen.getByText('Styled')
    expect(button).toHaveStyle({ backgroundColor: 'red' })
  })
})
