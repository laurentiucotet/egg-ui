import React from 'react'
import { Check, X } from 'lucide-react'

interface PasswordRequirement {
  label: string
  met: boolean
}

interface PasswordStrengthIndicatorProps {
  password: string
  className?: string
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  className = ''
}) => {
  const calculatePasswordStrength = (password: string) => {
    let score = 0
    if (password.length >= 8) score++
    if (/[a-z]/.test(password)) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { level: 'weak', color: 'bg-red-500', text: 'Weak' }
    if (score <= 3) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium' }
    return { level: 'strong', color: 'bg-green-500', text: 'Strong' }
  }

  const requirements: PasswordRequirement[] = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'One lowercase letter (a-z)', met: /[a-z]/.test(password) },
    { label: 'One uppercase letter (A-Z)', met: /[A-Z]/.test(password) },
    { label: 'One number (0-9)', met: /[0-9]/.test(password) },
    { label: 'One special character (!@#$%^&*)', met: /[^A-Za-z0-9]/.test(password) },
  ]

  const strength = calculatePasswordStrength(password)

  if (!password) return null

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Strength Bar */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
              style={{
                width: strength.level === 'weak' ? '33%' :
                       strength.level === 'medium' ? '66%' : '100%'
              }}
            ></div>
          </div>
          <span className={`text-xs font-medium ${
            strength.level === 'weak' ? 'text-red-600' :
            strength.level === 'medium' ? 'text-yellow-600' : 'text-green-600'
          }`}>
            {strength.text}
          </span>
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="space-y-1">
        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Password requirements:</p>
        <ul className="space-y-1">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center gap-2 text-xs">
              {req.met ? (
                <Check size={12} className="text-green-500 flex-shrink-0" />
              ) : (
                <X size={12} className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
              )}
              <span className={req.met ? 'text-green-700 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}>
                {req.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
