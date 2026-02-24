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

    if (score <= 2) return { level: 'weak', color: 'var(--color-error)', text: 'Weak' }
    if (score <= 3) return { level: 'medium', color: 'var(--color-warning)', text: 'Medium' }
    return { level: 'strong', color: 'var(--color-success)', text: 'Strong' }
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
    <div 
      className={`space-y-3 ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* Strength Bar */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div 
            className="flex-1 rounded-full h-2"
            style={{ 
              backgroundColor: 'var(--color-neutral-200)',
              height: '8px',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: strength.level === 'weak' ? '33%' :
                       strength.level === 'medium' ? '66%' : '100%',
                backgroundColor: strength.color,
                height: '100%',
                borderRadius: 'var(--radius-full)',
                transition: 'var(--transition-base)',
              }}
            ></div>
          </div>
          <span 
            className="text-xs font-medium"
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: strength.level === 'weak' ? 'var(--color-error)' :
                     strength.level === 'medium' ? 'var(--color-warning)' : 'var(--color-success)',
            }}
          >
            {strength.text}
          </span>
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="space-y-1">
        <p 
          className="text-xs font-medium"
          style={{ 
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
          }}
        >
          Password requirements:
        </p>
        <ul className="space-y-1">
          {requirements.map((req, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2 text-xs"
              style={{
                fontSize: 'var(--text-xs)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
              }}
            >
              {req.met ? (
                <Check 
                  size={12} 
                  className="flex-shrink-0" 
                  style={{ color: 'var(--color-success)', width: '12px', height: '12px' }}
                />
              ) : (
                <X 
                  size={12} 
                  className="flex-shrink-0" 
                  style={{ color: 'var(--color-text-muted)', width: '12px', height: '12px' }}
                />
              )}
              <span 
                style={{ 
                  color: req.met ? 'var(--color-success)' : 'var(--color-text-muted)',
                }}
              >
                {req.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
