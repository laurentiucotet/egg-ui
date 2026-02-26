# AGENTS.md - Storybook Test Project Documentation

## Project Overview
**Project Name:** Storybook Test (egg-ui)
**Project Type:** React Component Library with Storybook
**Domain:** UI Component Library
**Purpose:** A design system and component library built with React, TypeScript, Tailwind CSS, and Storybook for documentation and testing.

## Key Technologies & Frameworks

### Core Technologies
- **React:** ^19.2.0 - UI library
- **TypeScript:** ~5.9.3 - Type safety
- **Vite:** ^5.4.21 - Build tool and dev server
- **Node.js:** Required for development

### Styling & Design
- **Tailwind CSS:** ^4.2.1 - Utility-first CSS framework
- **@tailwindcss/vite:** ^4.2.1 - Vite plugin for Tailwind
- **tailwind-variants:** ^3.2.2 - Component variant management
- **tailwind-merge:** ^3.5.0 - Utility for merging Tailwind classes
- **Design Tokens:** Custom design token system with JSON source

### Documentation & Testing
- **Storybook:** 10.2.12 - Component documentation and development
  - @storybook/react-vite
  - @storybook/addon-docs
  - @storybook/addon-a11y (accessibility testing)
  - @storybook/addon-vitest
  - @storybook/addon-onboarding
- **Vitest:** ^3.2.4 - Unit testing framework
- **@testing-library/react:** ^16.3.2 - React testing utilities
- **@testing-library/jest-dom:** ^6.9.1 - DOM matchers
- **Playwright:** ^1.58.2 - E2E testing
- **MSW:** ^2.12.10 - API mocking

### Icons & Assets
- **lucide-react:** ^0.575.0 - Icon library

## Project Structure

```
/
├── public/                          # Static assets
│   ├── design-tokens.source.json   # Design token definitions
│   └── mockServiceWorker.js        # MSW service worker
├── src/
│   ├── main.tsx                    # Application entry point
│   ├── App.tsx                     # Root component
│   ├── index.css                   # Global styles
│   ├── design-tokens.css           # Generated design token CSS
│   ├── theme.ts                    # Theme configuration
│   ├── assets/                     # Static assets (images, etc.)
│   ├── lib/
│   │   └── cn.ts                   # Utility for class name merging
│   ├── components/                 # Component library
│   │   ├── index.ts               # Component exports
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── CardFooter/
│   │   ├── CardHeader/
│   │   ├── Checkbox/
│   │   ├── ConfirmDialog/
│   │   ├── Dropdown/
│   │   ├── Icon/
│   │   ├── Input/
│   │   ├── ListItems/
│   │   ├── LoginForm/
│   │   └── TextArea/
│   └── stories/                    # Storybook stories
│       └── DesignTokens.stories.mdx
├── storybook-static/               # Built Storybook output
├── package.json
├── tsconfig.json                   # TypeScript config (references)
├── tsconfig.app.json              # App TypeScript config
├── tsconfig.node.json             # Node TypeScript config
├── vite.config.ts                 # Vite configuration
├── vitest.workspace.ts            # Vitest workspace config
├── tailwind.config.ts             # Tailwind configuration
└── eslint.config.js               # ESLint configuration
```

## Component Structure Convention

Each component MUST follow this structure:
```
ComponentName/
├── ComponentName.tsx           # Component implementation
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentName.test.tsx      # Unit tests
├── ComponentName.types.ts      # TypeScript type definitions
├── ComponentName.styles.ts     # Tailwind variants styling
├── ComponentName.mdx           # Documentation
└── index.ts                    # Component exports
```

### File Purposes
- **ComponentName.tsx:** Main component implementation
- **ComponentName.stories.tsx:** Storybook stories with args/controls
- **ComponentName.test.tsx:** Vitest unit tests
- **ComponentName.types.ts:** TypeScript interfaces and types
- **ComponentName.styles.ts:** Tailwind-variants style definitions
- **ComponentName.mdx:** MDX documentation for Storybook
- **index.ts:** Named exports for the component

## Architectural Patterns

### Component Architecture
- **Atomic Design Principles:** Components organized by complexity
  - `ui/`: Small, atomic components (Button, Input, Badge, etc.)
  - `components/`: Larger, composite components (LoginForm, etc.)
- **Composition Pattern:** Components built from smaller components
- **Controlled Components:** Form inputs use controlled component pattern

### Styling Architecture
- **Tailwind-Variants:** Used for component variant management
- **Design Tokens:** CSS custom properties for theming
- **Utility-First:** Tailwind CSS utility classes
- **Dark Mode Support:** Built-in dark mode variants

### Type Safety
- **Strict TypeScript:** All components fully typed
- **Variant Props:** Type-safe variant props using `VariantProps<typeof styles>`
- **Component Props:** Extend native HTML element props

## Code Organization Conventions

### File Naming
- **Components:** PascalCase (e.g., `Button.tsx`, `LoginForm.tsx`)
- **Utilities:** camelCase (e.g., `cn.ts`)
- **Types:** PascalCase with descriptive suffixes (e.g., `ButtonProps`, `ButtonVariantProps`)

### Import/Export Patterns
```typescript
// Component exports (index.ts)
export { ComponentName } from './ComponentName'
export type { ComponentNameProps } from './ComponentName.types'

// Main index.ts barrel exports
export { Button } from './Button'
export type { ButtonProps } from './Button'
```

### Component Pattern
```typescript
import { componentStyles } from './Component.styles'
import type { ComponentProps } from './Component.types'

export const Component = ({ 
  prop1, 
  prop2, 
  className, 
  ...props 
}: ComponentProps) => {
  return (
    <element
      className={componentStyles({ variant, className })}
      {...props}
    >
      {children}
    </element>
  )
}
```

### Styling Pattern (tailwind-variants)
```typescript
import { tv, type VariantProps } from 'tailwind-variants'

export const componentStyles = tv({
  base: ['base-classes'],
  variants: {
    variant: {
      primary: ['variant-classes'],
      secondary: ['variant-classes'],
    },
    size: {
      sm: ['size-classes'],
      md: ['size-classes'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ComponentVariantProps = VariantProps<typeof componentStyles>
```

### Type Definition Pattern
```typescript
import type { ComponentVariantProps } from './Component.styles'

export interface ComponentProps 
  extends React.ComponentPropsWithoutRef<'element'>,
    ComponentVariantProps {
  // Additional props
  customProp?: string
}
```

## State Management
- **Local State:** React useState for component-level state
- **No Global State:** Currently no Redux/Zustand/Context (component library)
- **Form State:** Controlled components with local state

## Error Handling
- **TypeScript:** Compile-time error prevention
- **PropTypes:** Not used (TypeScript provides type safety)
- **Error Boundaries:** Not currently implemented

## Testing Conventions

### Unit Testing (Vitest)
- **Framework:** Vitest with jsdom environment
- **Testing Library:** @testing-library/react
- **Location:** `Component.test.tsx` files
- **Pattern:** Test component rendering, interactions, and edge cases

### Storybook Testing
- **Visual Testing:** Storybook stories serve as visual tests
- **Accessibility:** @storybook/addon-a11y for a11y testing
- **Interaction Testing:** @storybook/addon-vitest integration

### E2E Testing
- **Framework:** Playwright
- **Coverage:** @vitest/coverage-v8

## Build and Development Workflow

### Development Commands
```bash
npm run dev          # Start Vite dev server
npm run storybook    # Start Storybook dev server (port 6006)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Build Process
1. TypeScript compilation (`tsc -b`)
2. Vite bundling
3. Storybook static build (`npm run build-storybook`)

### Development Server
- **Vite Dev Server:** Hot module replacement
- **Storybook Dev Server:** Component development and documentation
- **Port:** Storybook runs on port 6006

## Key Dependencies & Their Purposes

### Production Dependencies
- **react, react-dom:** Core React library
- **tailwindcss, @tailwindcss/vite:** Styling framework
- **tailwind-merge:** Merge Tailwind classes without conflicts
- **tailwind-variants:** Type-safe component variants
- **lucide-react:** Icon library

### Development Dependencies
- **@vitejs/plugin-react:** React support for Vite
- **typescript, @types/*:** Type definitions
- **eslint, eslint-plugin-*:** Code linting
- **vitest, @vitest/*:** Testing framework
- **@testing-library/*:** Testing utilities
- **storybook, @storybook/*:** Documentation platform
- **msw, msw-storybook-addon:** API mocking
- **playwright:** E2E testing

## Common Patterns Used Throughout Codebase

### Class Name Merging
```typescript
import { cn } from '@/lib/cn'

className={cn('base-classes', className)}
```

### Design Token Usage
```typescript
// CSS custom properties
'bg-[var(--color-primary)]'
'text-[var(--color-text-primary)]'
'rounded-[var(--radius-theme)]'
```

### Component Composition
```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Storybook Args Pattern
```typescript
export default {
  title: 'Category/Component',
  component: Component,
  argTypes: {
    prop: {
      control: 'select',
      options: ['option1', 'option2'],
      description: 'Prop description',
      table: {
        category: 'Appearance',
      },
    },
  },
}
```

## File Modification Guidelines

### When Adding a New Component
1. Create component folder with PascalCase name
2. Create all 6 required files (tsx, stories, test, types, styles, mdx)
3. Implement component with proper TypeScript types
4. Add Storybook stories with comprehensive args
5. Write unit tests
6. Document in MDX file
7. Export from component's index.ts
8. Add to main src/components/index.ts

### When Modifying Existing Components
1. Update component implementation
2. Update types if props change
3. Update styles if variants change
4. Update stories to reflect changes
5. Update tests to cover new behavior
6. Update MDX documentation
7. Ensure backward compatibility or document breaking changes

### When Adding Styles
1. Use tailwind-variants for variant management
2. Use design tokens (CSS custom properties)
3. Support dark mode variants
4. Follow existing pattern structure
5. Export variant props type

## Integration Points Between Modules

### Component → Styles
- Components import styles from `.styles.ts`
- Use tailwind-variants for variant management

### Component → Types
- Components import types from `.types.ts`
- Types extend HTML element props

### Component → Stories
- Stories import component and types
- Stories define args and controls

### Component → Tests
- Tests import component
- Use @testing-library/react for testing

### Main Index → Components
- Barrel exports from src/components/index.ts
- Named exports for components and types

## Project-Specific Idioms

### Design Token Pattern
```typescript
// Use CSS custom properties for theming
'bg-[var(--color-primary)]'
'hover:bg-[var(--color-primary-hover)]'
```

### Variant Pattern
```typescript
// Use tailwind-variants for component variants
const styles = tv({
  base: ['base-classes'],
  variants: { /* ... */ },
  defaultVariants: { /* ... */ },
})
```

### Props Spreading Pattern
```typescript
// Spread remaining props to underlying element
const Component = ({ prop1, className, ...props }: Props) => (
  <element className={styles({ className })} {...props} />
)
```

## Current Issues & Missing Files

Based on the component structure rules, the following components are missing required files:

### Badge
- ❌ Badge.test.tsx
- ❌ Badge.mdx

### Button
- ❌ Button.test.tsx

### Card
- ❌ Card.test.tsx
- ❌ Card.mdx

### CardFooter
- ❌ CardFooter.test.tsx
- ❌ CardFooter.mdx

### CardHeader
- ❌ CardHeader.test.tsx
- ❌ CardHeader.mdx

### ConfirmDialog
- ❌ ConfirmDialog.test.tsx
- ❌ ConfirmDialog.types.ts
- ❌ ConfirmDialog.styles.ts
- ❌ ConfirmDialog.mdx

### Icon
- ❌ Icon.test.tsx
- ❌ Icon.mdx

### Input
- ❌ Input.test.tsx

### ListItems (SidebarMenuItem)
- ❌ SidebarMenuItem.test.tsx
- ❌ SidebarMenuItem.types.ts
- ❌ SidebarMenuItem.styles.ts
- ❌ SidebarMenuItem.mdx

### TextArea
- ❌ TextArea.test.tsx
- ❌ TextArea.types.ts
- ❌ TextArea.styles.ts
- ❌ TextArea.mdx

## Next Steps for Compliance

1. Create all missing `.test.tsx` files with Vitest tests
2. Create all missing `.mdx` documentation files
3. Create missing `.types.ts` files
4. Create missing `.styles.ts` files
5. Ensure all components follow the standard structure
6. Update main index.ts if needed for new exports
