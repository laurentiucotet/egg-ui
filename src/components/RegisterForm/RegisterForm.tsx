import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../Card/index'
import { Input } from '../Input/index'
import { Button } from '../Button/index'
import type { RegisterFormProps } from './RegisterForm.types'

export const RegisterForm = ({ className, onSubmit }: RegisterFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ email, password, confirmPassword, fullName })
  }

  return (
    <Card className={className}>
      <CardHeader
        heading="Register"
        description="Create a new account to get started"
        showIcon={false}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="text"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <Button
              type="submit"
              intent="primary"
              size="md"
              fullWidth
              label="Register"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

RegisterForm.displayName = 'RegisterForm'
