export interface LoginFormData {
  email: string
  password: string
}

export interface LoginFormProps {
  className?: string
  onSubmit?: (data: LoginFormData) => void
}