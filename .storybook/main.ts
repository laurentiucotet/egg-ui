import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
    // design token panel and doc blocks
    "storybook-design-token"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  // extend Vite config used by Storybook as well
  async viteFinal(config) {
    // ensure server.watch exists so we can add ignored globs
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    const ignored = config.server.watch.ignored || [];
    config.server.watch.ignored = Array.isArray(ignored)
      ? [...ignored, '**/public/design-tokens.source.json']
      : [ignored, '**/public/design-tokens.source.json'];
    return config;
  }
};
export default config;