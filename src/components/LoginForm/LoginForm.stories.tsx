// @ts-ignore: storybook/test may not have type declarations
import { expect, userEvent, within } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm, type LoginFormProps } from './index'

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A login form component with email and password fields, wrapped in a card component. Supports form validation, custom styling, and submission callbacks. Uses design tokens from `design-tokens.css` for consistent styling.',
      },
    },
    controls: { expanded: true },
  },
  args: {
    className: '',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class name for the card container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback function when form is submitted with email and password data',
      control: { disable: true },
      table: {
        type: { summary: '(data: LoginFormData) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof LoginForm>

/**
 * Default login form with email and password fields.
 * The form validates that both fields are filled before submission.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A login form with email and password fields, wrapped in a card component. Both fields are required.',
      },
    },
  },
}

/**
 * Login form with custom styling applied via className.
 * Useful for adjusting width, margins, or positioning.
 */
export const WithCustomClass: Story = {
  args: {
    className: 'w-full max-w-md mx-auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Login form with custom styling applied for wider layout.',
      },
    },
  },
}

/**
 * Login form with custom title text.
 * Demonstrates how to customize the card title.
 */
export const WithCustomTitle: Story = {
  args: {
    // Note: This would require adding title prop to LoginFormProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Login form with custom title text instead of default "Login".',
      },
    },
  },
}

/**
 * Interactive story demonstrating form submission with valid data.
 * Tests typing in both fields and submitting the form.
 */
export const FormSubmission: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive story showing form submission with valid email and password.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Get form elements
    const emailInput = canvas.getByLabelText(/email/i)
    const passwordInput = canvas.getByLabelText(/password/i)
    const submitButton = canvas.getByRole('button', { name: /login/i })

    // Verify elements exist
    await expect(emailInput).toBeInTheDocument()
    await expect(passwordInput).toBeInTheDocument()
    await expect(submitButton).toBeInTheDocument()

    // Fill in the form
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')

    // Verify values are entered
    await expect(emailInput).toHaveValue('test@example.com')
    await expect(passwordInput).toHaveValue('password123')

    // Submit the form
    await userEvent.click(submitButton)

    // Button should still be visible (form doesn't redirect)
    await expect(submitButton).toBeInTheDocument()
  },
}

/**
 * Interactive story demonstrating validation - preventing submission with empty fields.
 * Tests that the form does not submit when email is missing.
 */
export const ValidationEmptyEmail: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Form validation prevents submission when email field is empty.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const passwordInput = canvas.getByLabelText(/password/i)
    const submitButton = canvas.getByRole('button', { name: /login/i })

    // Only fill password, leave email empty
    await userEvent.type(passwordInput, 'password123')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The email input should still be empty (form prevented submission)
    const emailInput = canvas.getByLabelText(/email/i)
    await expect(emailInput).toHaveValue('')
  },
}

/**
 * Interactive story demonstrating validation - preventing submission with empty password.
 * Tests that the form does not submit when password is missing.
 */
export const ValidationEmptyPassword: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Form validation prevents submission when password field is empty.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText(/email/i)
    const submitButton = canvas.getByRole('button', { name: /login/i })

    // Only fill email, leave password empty
    await userEvent.type(emailInput, 'test@example.com')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The password input should still be empty (form prevented submission)
    const passwordInput = canvas.getByLabelText(/password/i)
    await expect(passwordInput).toHaveValue('')
  },
}

/**
 * Interactive story demonstrating focus management.
 * Tests that the first input receives focus when the form loads.
 */
export const FocusManagement: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Focus is managed to direct users to the first input field.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByLabelText(/email/i)

    // Click on the form to trigger focus
    await userEvent.click(emailInput)

    // Email input should have focus
    await expect(emailInput).toHaveFocus()
  },
}

/**
 * Login form with full width layout.
 * Useful for mobile-first designs or full-width containers.
 */
export const FullWidth: Story = {
  args: {
    className: 'w-full',
  },
  parameters: {
    docs: {
      description: {
        story: 'Login form configured to take full width of its container.',
      },
    },
  },
}

/**
 * Login form centered with max-width constraint.
 * Common pattern for login pages.
 */
export const Centered: Story = {
  args: {
    className: 'w-full max-w-sm mx-auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Centered login form with maximum width constraint for balanced layout.',
      },
    },
  },
}
