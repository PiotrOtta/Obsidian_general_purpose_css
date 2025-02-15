import '@mantine/core/styles.css';
import '@styles/AppStyle.css';
import '@styles/ObsidianStyleReplication.css';
import '../../General_purpose_css.css';

import { MantineProvider } from '@mantine/core';
import { Router } from '@/Router';
import { theme } from '@/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
