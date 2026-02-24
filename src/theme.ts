// Central theme definition for all UI components
export const theme = {
  primaryColor: '#2563eb', // Tailwind blue-600
  cornerRadius: '0.5rem', // Tailwind rounded-md
  spacing: {
    loose: '1.5rem',
    compact: '0.75rem',
  },
  colorThemes: {
    lime: '#84cc16', // Tailwind lime-500
    fuchsia: '#d946ef', // Tailwind fuchsia-500
  },
  fontFamilies: {
    sans: 'ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono: 'ui-monospace, SFMono-Regular, monospace',
  },
}

export type Theme = typeof theme;
