// Comprehensive theme definition for all UI components
// This file exports theme variables that can be used across all components

export const theme = {
  // Corner radius
  radius: {
    none: '0px',
    sm: '0.25rem',    // 4px
    base: '0.375rem', // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
  },

  // Primary colors
  color: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb', // Main primary
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    // Secondary colors (accent themes)
    secondary: {
      lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16', // Main secondary lime
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
      },
      fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef', // Main secondary fuchsia
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
    },
    // Semantic colors
    success: {
      light: '#22c55e',
      main: '#16a34a',
      dark: '#15803d',
    },
    warning: {
      light: '#facc15',
      main: '#eab308',
      dark: '#ca8a04',
    },
    error: {
      light: '#f87171',
      main: '#ef4444',
      dark: '#dc2626',
    },
    info: {
      light: '#38bdf8',
      main: '#0ea5e9',
      dark: '#0284c7',
    },
    // Neutral colors (grays)
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
  },

  // Text colors
  text: {
    primary: {
      light: '#171717',    // neutral-900
      dark: '#fafafa',     // neutral-50
    },
    secondary: {
      light: '#525252',    // neutral-600
      dark: '#a3a3a3',     // neutral-400
    },
    disabled: {
      light: '#a3a3a3',    // neutral-400
      dark: '#525252',    // neutral-600
    },
    inverse: {
      light: '#fafafa',
      dark: '#171717',
    },
  },

  // Background colors
  background: {
    primary: {
      light: '#ffffff',
      dark: '#171717',
    },
    secondary: {
      light: '#f5f5f5',   // neutral-100
      dark: '#262626',    // neutral-800
    },
    tertiary: {
      light: '#e5e5e5',   // neutral-200
      dark: '#404040',    // neutral-700
    },
  },

  // Border colors
  border: {
    default: {
      light: '#e5e5e5',   // neutral-200
      dark: '#404040',    // neutral-700
    },
    muted: {
      light: '#f5f5f5',   // neutral-100
      dark: '#262626',    // neutral-800
    },
    inverse: {
      light: '#171717',
      dark: '#fafafa',
    },
  },

  // Spacing scale
  spacing: {
    0: '0px',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    // Semantic spacing
    loose: '1.5rem',
    compact: '0.75rem',
    default: '1rem',
  },

  // Typography - Font families
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Typography - Font sizes
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }],          // 48px
  },

  // Typography - Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Typography - Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Typography - Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Shadows
  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // Transitions
  transition: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Z-index
  zIndex: {
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
  },
}

// Default theme values (for easy access)
export const defaultTheme = {
  // Primary (reference CSS token variables)
  primaryColor: 'var(--color-primary-600)',
  primaryHover: 'var(--color-primary-500)',
  primaryActive: 'var(--color-primary-700)',

  // Secondary
  secondaryColor: 'var(--color-secondary-lime-500)',
  secondaryHover: 'var(--color-secondary-lime-400)',

  // Corner radius
  cornerRadius: 'var(--radius-md)',

  // Spacing (references to token names; components can use these as CSS variables)
  spacingDefault: 'var(--spacing-default)',
  spacingLoose: 'var(--spacing-loose)',
  spacingCompact: 'var(--spacing-compact)',

  // Typography
  fontFamily: {
    sans: 'var(--font-sans)',
    serif: 'var(--font-serif)',
    mono: 'var(--font-mono)'
  },

  // Colors (expose a small set of commonly used CSS var references)
  color: {
    primary: 'var(--color-primary-600)',
    primaryHover: 'var(--color-primary-hover)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)'
  },

  // Shadows & transitions
  shadow: {
    base: 'var(--shadow-base)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  },

  transition: {
    base: 'var(--transition-base)'
  },

  // Z-index
  zIndex: {
    modal: 'var(--z-modal)',
    dropdown: 'var(--z-dropdown)'
  }
}

export type Theme = typeof theme
export type DefaultTheme = typeof defaultTheme

// Simple theme mode registry — only `light` and `dark` modes are exposed here.
export const themes = {
  light: {
    id: 'light',
    // no class needed; tokens in `:root` represent the light mode
    className: ''
  },
  dark: {
    id: 'dark',
    // applying this class to document root enables dark tokens defined in CSS
    className: 'dark'
  }
} as const

export type ThemeMode = keyof typeof themes
