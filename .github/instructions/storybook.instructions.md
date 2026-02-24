---
applyTo: '**'
---
Component-Driven Development (CDD): For every UI component you create (e.g., Button.tsx), you MUST strictly generate a corresponding Button.stories.tsx file in the exact same directory.

Styling Engine: Use Tailwind CSS combined with the tailwind-variants (TV) library EXCLUSIVELY. Do not write plain .css, .scss, or use styled-components. All component design states (e.g., size, color, intent) must be defined using the tv() dictionary pattern.

Storybook Format (CSF 3.0): Always write stories using Component Story Format 3.0. Use the meta object for global component configuration, ensure you include tags: ['autodocs'] for auto-generated documentation, and utilize args to pass state instead of writing custom render functions.

Sidebar Architecture (OOUX/FSD): Use the following naming convention for the title in the meta object:

Agnostic/Core UI components: UI / [ComponentName]

Business/Domain-specific components: Features / [DomainName] / [ComponentName]

Full mocked layouts: Pages / [PageName]

Automated Interaction Testing: If a component is interactive (e.g., a form, button, or modal), its story MUST include a play function. Use @storybook/test (utilizing userEvent and expect) to write a scenario that automatically simulates user behavior and asserts the expected UI changes (like error states or disabled states).