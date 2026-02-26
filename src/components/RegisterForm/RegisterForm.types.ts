export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  fullName: string
}

export interface RegisterFormProps {
  className?: string
  onSubmit?: (data: RegisterFormData) => void
}
