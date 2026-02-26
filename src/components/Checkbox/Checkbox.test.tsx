import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from './Checkbox'
import type { CheckboxProps } from './Checkbox.types'

const defaultProps: CheckboxProps = {
  label: 'Test checkbox',
}

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox {...defaultProps} />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toBeInTheDocument()
  })

  it('renders without label', () => {
    render(<Checkbox />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />)
    const label = screen.getByText('Accept terms')
    expect(label).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<Checkbox {...defaultProps} />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).not.toBeChecked()
  })

  it('is checked when checked prop is true', () => {
    render(<Checkbox {...defaultProps} checked />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toBeChecked()
  })

  it('calls onChange when clicked', () => {
    const onChange = vi.fn()
    render(<Checkbox {...defaultProps} onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })

  it('toggles checked state on click', () => {
    const onChange = vi.fn()
    render(<Checkbox {...defaultProps} onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })

    // Click to check
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    // Click to uncheck
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders with disabled state', () => {
    render(<Checkbox {...defaultProps} disabled />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toBeDisabled()
  })

  it('renders disabled checked state', () => {
    render(<Checkbox {...defaultProps} disabled checked />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toBeDisabled()
    expect(checkbox).toBeChecked()
  })

  it('renders different sizes', () => {
    const { rerender } = render(<Checkbox {...defaultProps} size="sm" />)
    let checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toHaveClass('w-3.5', 'h-3.5')

    rerender(<Checkbox {...defaultProps} size="md" />)
    checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toHaveClass('w-4', 'h-4')

    rerender(<Checkbox {...defaultProps} size="lg" />)
    checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toHaveClass('w-5', 'h-5')
  })

  it('renders indeterminate state', () => {
    render(<Checkbox {...defaultProps} indeterminate />)
    const checkbox = screen.getByRole('checkbox', { name: /test checkbox/i })
    expect(checkbox).toBePartiallyChecked()
  })
})
