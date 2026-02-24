import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes safely.
 * Uses tailwind-merge to resolve conflicting utility classes.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(classes.filter(Boolean).join(' '))
}
