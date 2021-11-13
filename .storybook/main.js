module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-jsx',
    '@storybook/addon-controls',
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
}