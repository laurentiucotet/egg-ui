import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders email and password inputs', () => {
    render(<LoginForm />)
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<LoginForm />)
    
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('calls onSubmit with email and password when form is submitted', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    })
  })

  it('does not submit form when email is empty', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not submit form when password is empty', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)
    
    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    expect(onSubmit).not.toHaveBeenCalled()
  })
})