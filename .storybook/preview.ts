import type { Preview, Decorator } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/index.css'
// design tokens file is parsed by the addon via glob; no need to import here

// Initialize MSW with a storybook-scoped service worker path
initialize({ serviceWorker: { url: './mockServiceWorker.js' } })

const applyThemeToDocument = (doc: Document, theme: string) => {
  try {
    const root = doc.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
      root.style.backgroundColor = getComputedStyle(root).getPropertyValue('--color-bg-primary')?.trim() || '#0f172a'
    } else if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', prefersDark)
      root.style.colorScheme = prefersDark ? 'dark' : 'light'
      root.style.backgroundColor = getComputedStyle(root).getPropertyValue('--color-bg-primary')?.trim() || (prefersDark ? '#0f172a' : '#ffffff')
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
      root.style.backgroundColor = getComputedStyle(root).getPropertyValue('--color-bg-primary')?.trim() || '#ffffff'
    }
  } catch (e) {
    // ignore cross-origin or inaccessible parent documents
  }
}

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light'

  // Apply theme to preview document
  applyThemeToDocument(window.document, theme)

  // Also try to apply theme to parent (manager/docs) so Docs page reflects background
  if (window.parent && window.parent !== window) {
    try {
      applyThemeToDocument(window.parent.document, theme)
    } catch (e) {
      // parent may be cross-origin or inaccessible — ignore silently
    }
  }

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
    // only theme (light/dark) remains
  },

  initialGlobals: {
    theme: 'light'
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
    // design token addon configuration
    designToken: {
      defaultTab: 'Colors',
    },
  },
  loaders: [mswLoader],
};

export default preview;