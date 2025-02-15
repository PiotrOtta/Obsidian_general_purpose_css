import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    customDark: [
      '#000',
      '#1f1f1f',
      '#242424',
      '#3b3b3b',
      '#3b3b3b',
      '#3b3b3b', // Copy code bg
      '#3b3b3b',
      '#768282',
      '#323232', // paper
      '#FFF',
    ],
    customLight: [
      '#EFEFEF',
      '#EFEFEF',
      '#FFF',
      '#EFEFEF',
      '#EDEDED',
      '#fefefe', // Copy code bg
      '#F2F2F2', // paper
      '#868e96',
      '#F2F2F2',
      '#000',
    ],
    paper: virtualColor({
      name: 'paper',
      dark: 'customDark',
      light: 'customLight',
    }),
    navbar: virtualColor({
      name: 'navbar',
      dark: 'customDark',
      light: 'customLight',
    }),
  },
});
