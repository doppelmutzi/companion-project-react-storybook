export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'doppelmutzi',
    values: [
      {
        name: 'doppelmutzi',
        value: '#F5F5F5',
      },
      {
        name: 'doppelmutzi dark',
        value: '#6E7582',
      },
    ],
  },
}