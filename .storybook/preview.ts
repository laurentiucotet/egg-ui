import type { Preview, Decorator } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/index.css'

// Initialize MSW
initialize()

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light'
  const spacing = context.globals.spacing ?? 'loose'
  const colorTheme = context.globals.colorTheme ?? 'lime'
  const fontFamily = context.globals.fontFamily ?? 'sans'

  const root = document.documentElement

  // Theme mode
  if (theme === 'dark') {
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
    root.style.backgroundColor = '#0f172a'
  } else if (theme === 'light') {
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
    root.style.backgroundColor = '#ffffff'
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.classList.toggle('dark', prefersDark)
    root.style.colorScheme = prefersDark ? 'dark' : 'light'
    root.style.backgroundColor = prefersDark ? '#0f172a' : '#ffffff'
  }

  // Spacing mode
  root.classList.remove('spacing-loose', 'spacing-compact')
  root.classList.add(`spacing-${spacing}`)

  // Color theme
  root.classList.remove('theme-lime', 'theme-fuchsia')
  root.classList.add(`theme-${colorTheme}`)

  // Font family
  root.classList.remove('font-sans', 'font-serif', 'font-mono')
  root.classList.add(`font-${fontFamily}`)

  return Story(context)
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global color theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
          { value: 'system', title: 'System', icon: 'browser' },
        ],
        dynamicTitle: true,
      },
    },
    spacing: {
      description: 'Spacing mode',
      toolbar: {
        title: 'Spacing',
        icon: 'arrowdown',
        items: [
          { value: 'loose', title: 'Loose', icon: 'arrowdown' },
          { value: 'compact', title: 'Compact', icon: 'arrowup' },
        ],
        dynamicTitle: true,
      },
    },
    colorTheme: {
      description: 'Accent color theme',
      toolbar: {
        title: 'Accent',
        icon: 'circlehollow',
        items: [
          { value: 'lime', title: 'Lime', icon: 'circle' },
          { value: 'fuchsia', title: 'Fuchsia', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
    fontFamily: {
      description: 'Font family',
      toolbar: {
        title: 'Font',
        icon: 'filter',
        items: [
          { value: 'sans', title: 'Sans', icon: 'filter' },
          { value: 'serif', title: 'Serif', icon: 'filter' },
          { value: 'mono', title: 'Mono', icon: 'filter' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
    spacing: 'loose',
    colorTheme: 'lime',
    fontFamily: 'sans',
  },

  decorators: [withTheme],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  loaders: [mswLoader],
};

export default preview;