import { useTheme } from '@hooks/useTheme';
import { IconBrightnessUpFilled, IconMoonFilled } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

export default function ToggleThemeBtn() {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      aria-label="Change color theme"
      title="Change color theme"
      radius="sm"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <IconBrightnessUpFilled size={30} /> : <IconMoonFilled size={30} />}
      {/* {isDarkTheme ? <IconBrightnessUpFilled size={30} /> : <IconMoonFilled size={30} />} */}
    </ActionIcon>
  );
}
