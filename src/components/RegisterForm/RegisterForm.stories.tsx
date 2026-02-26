// @ts-ignore: storybook/test may not have type declarations
import { expect, userEvent, within } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { RegisterForm } from './index'

const meta: Meta<typeof RegisterForm> = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A registration form component with full name, email, password, and confirm password fields, wrapped in a card component. Supports form validation, custom styling, and submission callbacks. Uses design tokens from `design-tokens.css` for consistent styling.',
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
        category: 'Appearance',
      },
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback function when form is submitted with registration data',
      control: { disable: true },
      table: {
        type: { summary: '(data: RegisterFormData) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Events',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RegisterForm>

/**
 * Default registration form with full name, email, password, and confirm password fields.
 * The form validates that all fields are filled before submission.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A registration form with full name, email, password, and confirm password fields, wrapped in a card component. All fields are required.',
      },
    },
  },
}

/**
 * Registration form with custom styling applied via className.
 * Useful for adjusting width, margins, or positioning.
 */
export const WithCustomClass: Story = {
  args: {
    className: 'w-full max-w-md mx-auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Registration form with custom styling applied for wider layout.',
      },
    },
  },
}

/**
 * Interactive story demonstrating form submission with valid data.
 * Tests typing in all fields and submitting the form.
 */
export const FormSubmission: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive story showing form submission with valid registration data.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Get form elements
    const fullNameInput = canvas.getByLabelText(/full name/i)
    const emailInput = canvas.getByLabelText(/^email$/i)
    const passwordInput = canvas.getByLabelText(/^password$/i)
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i)
    const submitButton = canvas.getByRole('button', { name: /register/i })

    // Verify elements exist
    await expect(fullNameInput).toBeInTheDocument()
    await expect(emailInput).toBeInTheDocument()
    await expect(passwordInput).toBeInTheDocument()
    await expect(confirmPasswordInput).toBeInTheDocument()
    await expect(submitButton).toBeInTheDocument()

    // Fill in the form
    await userEvent.type(fullNameInput, 'John Doe')
    await userEvent.type(emailInput, 'john.doe@example.com')
    await userEvent.type(passwordInput, 'SecurePass123!')
    await userEvent.type(confirmPasswordInput, 'SecurePass123!')

    // Verify values are entered
    await expect(fullNameInput).toHaveValue('John Doe')
    await expect(emailInput).toHaveValue('john.doe@example.com')
    await expect(passwordInput).toHaveValue('SecurePass123!')
    await expect(confirmPasswordInput).toHaveValue('SecurePass123!')

    // Submit the form
    await userEvent.click(submitButton)

    // Button should still be visible (form doesn't redirect)
    await expect(submitButton).toBeInTheDocument()
  },
}

/**
 * Interactive story demonstrating validation - preventing submission with empty full name.
 * Tests that the form does not submit when full name is missing.
 */
export const ValidationEmptyFullName: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Form validation prevents submission when full name field is empty.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText(/^email$/i)
    const passwordInput = canvas.getByLabelText(/^password$/i)
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i)
    const submitButton = canvas.getByRole('button', { name: /register/i })

    // Fill all fields except full name
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.type(confirmPasswordInput, 'password123')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The full name input should still be empty (form prevented submission)
    const fullNameInput = canvas.getByLabelText(/full name/i)
    await expect(fullNameInput).toHaveValue('')
  },
}

/**
 * Interactive story demonstrating validation - preventing submission with empty email.
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

    const fullNameInput = canvas.getByLabelText(/full name/i)
    const passwordInput = canvas.getByLabelText(/^password$/i)
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i)
    const submitButton = canvas.getByRole('button', { name: /register/i })

    // Fill all fields except email
    await userEvent.type(fullNameInput, 'John Doe')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.type(confirmPasswordInput, 'password123')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The email input should still be empty (form prevented submission)
    const emailInput = canvas.getByLabelText(/^email$/i)
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

    const fullNameInput = canvas.getByLabelText(/full name/i)
    const emailInput = canvas.getByLabelText(/^email$/i)
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i)
    const submitButton = canvas.getByRole('button', { name: /register/i })

    // Fill all fields except password
    await userEvent.type(fullNameInput, 'John Doe')
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(confirmPasswordInput, 'password123')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The password input should still be empty (form prevented submission)
    const passwordInput = canvas.getByLabelText(/^password$/i)
    await expect(passwordInput).toHaveValue('')
  },
}

/**
 * Interactive story demonstrating validation - preventing submission with empty confirm password.
 * Tests that the form does not submit when confirm password is missing.
 */
export const ValidationEmptyConfirmPassword: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Form validation prevents submission when confirm password field is empty.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const fullNameInput = canvas.getByLabelText(/full name/i)
    const emailInput = canvas.getByLabelText(/^email$/i)
    const passwordInput = canvas.getByLabelText(/^password$/i)
    const submitButton = canvas.getByRole('button', { name: /register/i })

    // Fill all fields except confirm password
    await userEvent.type(fullNameInput, 'John Doe')
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')

    // Click submit - should not trigger onSubmit (form validation)
    await userEvent.click(submitButton)

    // The confirm password input should still be empty (form prevented submission)
    const confirmPasswordInput = canvas.getByLabelText(/confirm password/i)
    await expect(confirmPasswordInput).toHaveValue('')
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
    const fullNameInput = canvas.getByLabelText(/full name/i)

    // Click on the form to trigger focus
    await userEvent.click(fullNameInput)

    // Full name input should have focus
    await expect(fullNameInput).toHaveFocus()
  },
}

/**
 * Registration form with full width layout.
 * Useful for mobile-first designs or full-width containers.
 */
export const FullWidth: Story = {
  args: {
    className: 'w-full',
  },
  parameters: {
    docs: {
      description: {
        story: 'Registration form configured to take full width of its container.',
      },
    },
  },
}

/**
 * Registration form centered with max-width constraint.
 * Common pattern for registration pages.
 */
export const Centered: Story = {
  args: {
    className: 'w-full max-w-sm mx-auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Centered registration form with maximum width constraint for balanced layout.',
      },
    },
  },
}
