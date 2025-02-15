import { useEffect, useState } from 'react';
import { MantineColorScheme, useMantineColorScheme } from '@mantine/core';

export const useTheme = (): {
  fontC: string;
  currentTheme: MantineColorScheme;
  toggleTheme: () => void;
  isDarkTheme: boolean;
} => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  return {
    fontC: isDark ? 'white' : 'black',
    currentTheme: colorScheme,
    toggleTheme: toggleColorScheme,
    isDarkTheme: isDark,
  };
};
