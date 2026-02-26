import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders input correctly', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Input label="Username" />)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })


  it('can be disabled', () => {
    render(<Input disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('can be required', () => {
    render(<Input required />)
    const input = screen.getByRole('textbox')
    expect(input).toBeRequired()
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies different input types', () => {
    const { rerender } = render(<Input type="text" data-testid="input" />)
    let input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'text')

    rerender(<Input type="email" data-testid="input" />)
    input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'email')

    rerender(<Input type="password" data-testid="input" />)
    input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'password')
  })


  it('accepts custom className', () => {
    render(<Input className="custom-class" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveClass('custom-class')
  })

  it('renders with icon', () => {
    render(<Input icon="User" data-testid="input" />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('spreads additional HTML attributes', () => {
    render(<Input data-testid="input" aria-label="Test input" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('aria-label', 'Test input')
  })
})
