import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RegisterForm } from './RegisterForm'

describe('RegisterForm', () => {
  it('renders all input fields', () => {
    render(<RegisterForm />)
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders register button', () => {
    render(<RegisterForm />)
    
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('calls onSubmit with all form data when form is submitted', () => {
    const onSubmit = vi.fn()
    render(<RegisterForm onSubmit={onSubmit} />)
    
    const fullNameInput = screen.getByLabelText(/full name/i)
    const emailInput = screen.getByLabelText(/^email$/i)
    const passwordInput = screen.getByLabelText(/^password$/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })
    
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'SecurePass123!' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'SecurePass123!' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).toHaveBeenCalledWith({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      password: 'SecurePass123!',
      confirmPassword: 'SecurePass123!',
    })
  })

  it('does not submit form when full name is empty', () => {
    const onSubmit = vi.fn()
    render(<RegisterForm onSubmit={onSubmit} />)
    
    const emailInput = screen.getByLabelText(/^email$/i)
    const passwordInput = screen.getByLabelText(/^password$/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not submit form when email is empty', () => {
    const onSubmit = vi.fn()
    render(<RegisterForm onSubmit={onSubmit} />)
    
    const fullNameInput = screen.getByLabelText(/full name/i)
    const passwordInput = screen.getByLabelText(/^password$/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })
    
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not submit form when password is empty', () => {
    const onSubmit = vi.fn()
    render(<RegisterForm onSubmit={onSubmit} />)
    
    const fullNameInput = screen.getByLabelText(/full name/i)
    const emailInput = screen.getByLabelText(/^email$/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })
    
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not submit form when confirm password is empty', () => {
    const onSubmit = vi.fn()
    render(<RegisterForm onSubmit={onSubmit} />)
    
    const fullNameInput = screen.getByLabelText(/full name/i)
    const emailInput = screen.getByLabelText(/^email$/i)
    const passwordInput = screen.getByLabelText(/^password$/i)
    const submitButton = screen.getByRole('button', { name: /register/i })
    
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('updates input values when user types', () => {
    render(<RegisterForm />)
    
    const fullNameInput = screen.getByLabelText(/full name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/^email$/i) as HTMLInputElement
    const passwordInput = screen.getByLabelText(/^password$/i) as HTMLInputElement
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i) as HTMLInputElement
    
    fireEvent.change(fullNameInput, { target: { value: 'Jane Smith' } })
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'mypassword' } })
    
    expect(fullNameInput.value).toBe('Jane Smith')
    expect(emailInput.value).toBe('jane@example.com')
    expect(passwordInput.value).toBe('mypassword')
    expect(confirmPasswordInput.value).toBe('mypassword')
  })
})
