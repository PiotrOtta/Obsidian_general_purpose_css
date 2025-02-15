import {
  IconChevronDown,
  IconChevronDownLeft,
  IconChevronDownRight,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronUpLeft,
  IconChevronUpRight,
  IconFocus2,
} from '@tabler/icons-react';
import { TDirections } from '@utils/interfaces';
import { ActionIcon } from '@mantine/core';

const directionIcons = {
  'top-left': <IconChevronUpLeft />,
  top: <IconChevronUp />,
  'top-right': <IconChevronUpRight />,
  left: <IconChevronLeft />,
  center: <IconFocus2 />,
  right: <IconChevronRight />,
  'bottom-left': <IconChevronDownLeft />,
  bottom: <IconChevronDown />,
  'bottom-right': <IconChevronDownRight />,
};

export function CompassDirectionButton({
  direction,
  setDirection,
  active = false,
  disabled = false,
}: {
  direction: TDirections;
  setDirection: (value: TDirections) => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <ActionIcon
      disabled={disabled}
      color="violet"
      variant={active ? 'filled' : 'default'}
      onClick={() => setDirection(direction)}
      size="xl"
    >
      {directionIcons[direction]}
    </ActionIcon>
  );
}
