module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["storybook-addon-jsx", "@storybook/addon-actions", "@storybook/addon-essentials", "@storybook/addon-controls"],
};