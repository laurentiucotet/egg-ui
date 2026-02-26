import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dropdown } from './Dropdown'
import type { DropdownProps } from './Dropdown.types'

const defaultProps: DropdownProps = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  placeholder: 'Select an option...',
}

describe('Dropdown', () => {
  it('renders correctly', () => {
    render(<Dropdown {...defaultProps} />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Dropdown {...defaultProps} />)
    const placeholder = screen.getByText('Select an option...')
    expect(placeholder).toBeInTheDocument()
  })

  it('renders options correctly', () => {
    render(<Dropdown {...defaultProps} />)
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(4) // 3 options + 1 placeholder
  })

  it('calls onChange when value changes', () => {
    const onChange = vi.fn()
    render(<Dropdown {...defaultProps} onChange={onChange} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'option2' } })
    expect(onChange).toHaveBeenCalledWith('option2')
  })

  it('renders with label when showLabel is true', () => {
    render(<Dropdown {...defaultProps} showLabel label="Test Label" />)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('shows required asterisk when required is true', () => {
    render(<Dropdown {...defaultProps} showLabel label="Test Label" required />)
    const asterisk = screen.getByText('*')
    expect(asterisk).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<Dropdown {...defaultProps} error="This field is required" />)
    const error = screen.getByText('This field is required')
    expect(error).toBeInTheDocument()
  })

  it('renders with disabled state', () => {
    render(<Dropdown {...defaultProps} disabled />)
    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('renders with pre-selected value', () => {
    render(<Dropdown {...defaultProps} value="option2" />)
    const select = screen.getByRole('combobox') as HTMLSelectElement
    expect(select.value).toBe('option2')
  })

  it('renders with success variant', () => {
    render(<Dropdown {...defaultProps} success value="option1" />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('border-[var(--color-success)]')
  })

  it('renders different sizes', () => {
    const { rerender } = render(<Dropdown {...defaultProps} dropdownSize="sm" />)
    let select = screen.getByRole('combobox')
    expect(select).toHaveClass('text-sm')

    rerender(<Dropdown {...defaultProps} dropdownSize="lg" />)
    select = screen.getByRole('combobox')
    expect(select).toHaveClass('text-lg')
  })
})
