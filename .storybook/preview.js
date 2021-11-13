import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}