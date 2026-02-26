import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../Card/index'
import { Input } from '../Input/index'
import { Button } from '../Button/index'
import type { LoginFormProps } from './LoginForm.types'

export const LoginForm = ({ className, onSubmit, ...props }: LoginFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ email, password })
  }

  return (
    <Card className={className}>
      <CardHeader
        heading="Login"
        description="Enter your credentials to access your account"
        showIcon={false}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
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
            <Button
              type="submit"
              intent="primary"
              size="md"
              fullWidth
              label="Login"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

LoginForm.displayName = 'LoginForm'
